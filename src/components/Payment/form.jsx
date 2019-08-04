import React, {Component} from 'react'
import { Form, Button, Checkbox, TextArea, Progress, Modal, Message } from 'semantic-ui-react'
import FileUploader from 'react-firebase-file-uploader';
// import Firebase from 'firebase'
import Aux from '../../hoc/Aux'
import axios from 'axios'
import firebase from '../../firebase'
import Loader from '../Loader/loader'

class CheckoutForm extends Component {

  constructor (props) {
    super (props)
    this.state= {
      file: "",
      isUploading: false,
      progress: 0,
      files: [],
      fileUploading: [],
      email: '',
      discountedamount: this.props.discountedamount,
      amount: this.props.amount, 
      currency: 'NGN', 
      first_name: '', 
      last_name: '', 
      consultant: '', 
      description: '', 
      address: '',
      code: '',
      modalOpen: false,
      loading: false,
      emailValid: false,
      formValid: false
    }

    this.handleProgress = this.handleProgress.bind(this)
    this.handleUploadError = this.handleUploadError.bind(this)
    this.handleUploadStart = this.handleUploadStart.bind(this)
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.changePrice = this.changePrice.bind(this)
  }

  changePrice = () => {
    if (!this.state.discountedamount) {
      const { db, setNewAmount } = this.props
      const { email, amount, code } = this.state
      db.collection("coupon").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          let percent;
          let items = doc.data();
          Object.keys(items).forEach(emailTest => {
            if ((emailTest.toString() === email) && (items[emailTest][0] === code)) {

              percent = items[emailTest][1]
              var finalValue = (100 - percent) * 0.01 * Number(amount)
              finalValue = finalValue.toFixed(2);
              setNewAmount(finalValue)
              this.setState({
                amount: finalValue,
                percent: percent
              })
            }
          })
        });
      });
    }
  }
  
  handleUploadStart = (file) => this.setState(prevState => ({ fileUploading: prevState.fileUploading.concat(file), isUploading: true, progress: 0 }));

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  }

  handleUploadSuccess = filename => {
    this.setState(prevState => ({ file: filename, progress: 100, isUploading: false, complete: true, files: prevState.files.concat(filename) }));
    firebase
      .storage()
      .ref("cvs")
  }

  getReference = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 15; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  startLoading = () => {
    this.setState({
      loading: true
    })
  }

  endLoading = () => {
    this.setState({
      loading: false
    })
  }

  handleOpen = (reference) => this.setState({ reference, modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  payNow = () => {

    const {
      email, amount, currency, first_name, last_name, consultant, description, address, formValid
    } = this.state

    const { unload, finalStep } = this.props

    if (formValid === false) {
      document.getElementById("email").focus()
    }

    if (formValid === true) {
      const reference = this.getReference()
      this.startLoading()
      this.handleOpen(reference)
      finalStep()

      return axios.post('/paystack-initialize',
      {
          "email": email,
          "amount": amount,
          "currency": currency,
          "reference": reference,
          "callback_url": "/verify",
          "metadata": {
            "custom_fields": [
              {
                "first_name": first_name,
                "last_name": last_name,
                "consultant": consultant,
                "description": description,
                "address": address
              }
            ]
          }
        }).then(response => {
        console.log(response)
        this.endLoading()
        const iframe = document.querySelector('.modal iframe')
        iframe.setAttribute('src', response.data.data.data.authorization_url);
        unload()
      }).catch(error => {
        console.log(error);
      })
    }
    
  }

  // handleChange = (param) => (event) =>  {
  //   var {
  //     email, first_name, last_name, consultant, description, address, code
  //   } = this.state

  //   switch (param) {
  //     case 'first_name': 
  //       first_name = event.target.value
  //       this.setState({ first_name })
  //       break;

  //     case 'last_name': 
  //       last_name = event.target.value
  //       this.setState({ last_name })
  //       break;

  //     case 'consultant': 
  //       consultant = event.target.value
  //       this.setState({ consultant })
  //       break;

  //     case 'address': 
  //       address = event.target.value
  //       this.setState({ address })
  //       break;

  //     case 'email': 
  //       email = event.target.value
  //       this.setState({ email },
  //         () => { this.validateField('email', email) 
  //       })
  //       break;

  //     case 'description': 
  //       description = event.target.value
  //       this.setState({ description })
  //       break;

  //     case 'code': 
  //       code = event.target.value
  //       this.setState({ code })
  //       break;

  //     default:
  //       var nothing = null
  //   }

  // }

  handleChange = (e, { name, value }) => {
    console.log(name, value)
    if ( name === "email") {
      
      this.setState(
        { [name]: value }, 
          () => { this.validateField(name, value)
      })
    } else {
      this.setState({ [name]: value })
    }
  }


  validateField = (fieldName, value) => {
    let emailValid = this.state.emailValid;
  
    switch(fieldName) {
      case 'email':
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailValid = re.test(String(value).toLowerCase());
        // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      default:
        break;
    }
    this.setState({
      emailValid: emailValid
    }, this.validateForm);
  }
  
  validateForm = () => {

    this.setState({
      formValid: this.state.emailValid
    });
  }

  render () {
    const { progress, complete, files, fileUploading, loading,
      email, first_name, last_name, consultant, description, address, code
    } = this.state

    console.log(this.state)

    return (
      <Aux>
        <Form>
          <Form.Group style={{ marginBottom: '0' }}>
            <Form.Input width={8} label={"First name"} value={first_name} name="first_name" placeholder='Enter your first name' onChange={this.handleChange} />
            <Form.Input width={8} label={"Last name"} value={last_name} name="last_name" placeholder='Enter your last name' onChange={this.handleChange} />
          </Form.Group>
          <Form.Input id={'email'} required label={"Email address"} value={email} name="email" placeholder='Enter your email address' onChange={this.handleChange} />
          <Message
            error
            visible={(this.state.email.length > 0) && !this.state.emailValid}
            size="small"
          >
            <p>Email address is invalid</p>
          </Message>
          <Form.Field>
            <label>House Address</label>
            <TextArea placeholder='Enter your Home Address' value={address} name="address" rows={2} onChange={this.handleChange}></TextArea>
          </Form.Field>
          <Form.Input label={"Name of Consultant"} placeholder={"Enter the consultant's name"} name="consultant" value={consultant} onChange={this.handleChange} />
          <Form.Field>
            <label>Brief Description of service</label>
            <TextArea placeholder='Enter a brief description of your request' value={description} rows={2} name="description" onChange={this.handleChange}></TextArea>
          </Form.Field>
          {
            !this.state.percent ?

            <Form.Field>
              <label>Enter Coupon (If available)</label>
              <div style={{ display: 'flex'}}>
                <input placeholder='Enter your code' name="code" value={code} onChange={this.handleChange}/>
                <Button style={{ marginLeft: '1em' }} onClick={this.changePrice}>Validate</Button>
              </div>
            </Form.Field>

            :

            <div className={'coupon-true'}>
              Your {this.state.percent}% discount was accepted
            </div>
          }
          <Form.Group className={'upload-field'}>
            <Form.Field required>
              <label>
                Upload your CV. Ensure your CV is named appropriately
              </label>

              <FileUploader
                multiple
                accept=".pdf,.doc,.docx"
                storageRef={firebase.storage().ref('cvs')}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              {

                this.state.isUploading && 

                fileUploading.map(file => (
                  <div key={file.size} className={'uploading'}>
                    <label>Uploading {file.name}</label>
                    <Progress percent={progress} indicating />
                  </div>
                ))
                
              }

              {
                complete &&

                files.map(file => (
                  <div className={'uploaded'} key={file}>
                    Uploaded {file}
                  </div>
                ))
              }

            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
          </Form.Group>
          <Button fluid type='submit' className={'primary-main'} onClick={this.payNow}>Pay Now</Button>
        </Form>

        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='large'
          closeIcon
          style={{ height: '100%', width: '100%' }}
        >
          {
            loading && 

            <Loader loading={loading} message={"Please wait"} />
          }
          {
            !loading &&

            <Aux>
              <div className={'hide-on-mobile background-div'}></div>
              <iframe title='Payment checkout' src={null}></iframe>
            </Aux>
          }
        </Modal>
      </Aux>
    )
  }
}

export default CheckoutForm
