import React, {Component} from 'react'
import { Grid, Header, Container, Card, Button, Icon, Modal } from 'semantic-ui-react'
import './samples.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Fade from 'react-reveal/Fade';
import doc from '../../../../docs/test.pdf'


function LeftButton (props) {
  const {style, onClick, name} = props
  return (
      <div
          className="slick-button left-button"
          style={{...style}}
          onClick={onClick}
      >
          <Button color='blue'>{name}</Button>
      </div>
  );
}

function RightButton (props) {
  const {style, onClick, name} = props
  return (
      <div
          className="slick-button right-button"
          style={{...style}}
          onClick={onClick}
      >
          <Button color='blue'>{name}</Button>
      </div>
  );
}

function LeftNav (props) {
  const {style, onClick} = props
  return (
      <div
          className="slick-arrow left-arrow"
          style={{...style}}
          onClick={onClick}
      >
          <Icon name='chevron left' size='large'/>
      </div>
  );
}

function RightNav (props) {
const {style, onClick} = props
return (
    <div
        className="slick-arrow right-arrow"
        style={{...style}}
        onClick={onClick}
    >
        <Icon name='chevron right' size='large'/>
    </div>
);
}
class Samples extends Component {

  constructor (props) {
    super (props)

    this.state = {
      modalOpen: false,
      samples: [
        {
          id: 1,
          image: 'iio',
          name: 'Sample 1',
          url: doc
        },
        {
          id: 2,
          image: 'kkjj',
          name: 'Sample 2',
          url: doc
        },
        {
          id: 3,
          image: 'jjknk',
          name: 'Sample 3',
          url: doc
        },
        {
          id: 4,
          image: 'mmkk',
          name: 'Sample 4',
          url: doc
        },
        {
          id: 5,
          image: 'jj',
          name: 'Sample 5',
          url: doc
        },
        {
          id: 6,
          image: 'jj',
          name: 'Sample 6',
          url: doc
        }
      ]
    }

    this.modal = React.createRef()
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen = (url) => () => {
    this.setState({ modalOpen: true })
    if (!this.state.mobile) {
      setTimeout(() => {
        const iframe = document.createElement('embed')
        iframe.style.width = '100%'
        iframe.style.height = '100%'
        iframe.setAttribute('src', url);
        document.querySelector('.sample-modal').appendChild(iframe)
      }, 100)
    } else {
      const doc = document.createElement('a')
      doc.href = url
      doc.setAttribute('target', '_blank')
    }
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  render () {
    const { mobile } = this.props
    
    // const settings = mobile ? 
    // {
    //   dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 2,
    //   rows: 2,
    //   nextArrow: <RightButton name={<Icon name='chevron right' />} />,
    //   prevArrow: <LeftButton name={<Icon name='chevron left' />}  />,
    //   slidesPerRow: 1
    // } : {
    //   dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 3,
    //   rows: 2,
    //   nextArrow: <RightButton name={'Next'}/>,
    //   prevArrow: <LeftButton  name={'Previous'}/>,
    //   slidesPerRow: 1
    // }

    // const { mobile } = this.props
    const settings = {
      className: "center",
      dots: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      nextArrow: <RightNav />,
      prevArrow: <LeftNav />,
      speed: 500
    }

    const { samples } = this.state

    return (
      <Grid stackable className={'samples-container'} style={{minHeight: '100vh'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1544.32" height="895.82" viewBox="0 0 1544.32 895.82"><title>rocks</title><path d="M736.5,155.5c-61,93-136,132-190,117s-121-121-104-149S796.52,64,736.5,155.5Z" transform="translate(-165.28 -94.68)" fill="#fcf"/><path d="M1674.5,186.5c-22,82-102,197-160,199s-314-35-308-78,36-176,75-170S1696.5,104.5,1674.5,186.5Z" transform="translate(-165.28 -94.68)" fill="#fc9"/><path d="M348.5,953.5c-116.8-111.93,266-220,308-192s71,229,25,229S372.5,976.5,348.5,953.5Z" transform="translate(-165.28 -94.68)" fill="#633"/><path d="M1549.5,888.5c-87-63-58-186,0-212s65-35,138-24S1636.5,951.5,1549.5,888.5Z" transform="translate(-165.28 -94.68)" fill="#336"/><path d="M222.5,414.5c104,58,104,162,104,162s-149,100-160-28S222.5,414.5,222.5,414.5Z" transform="translate(-165.28 -94.68)" fill="#666"/></svg>
        <Grid.Column width={16}>
          <div className={'padded-container'}>
            <Fade bottom cascade>
              <Header as='h2' className={'section-header'} textAlign='center'>Most Popular Samples</Header>
              <Grid stackable style={{ marginTop: '50px'}}>
                <Grid.Row>
                  <Grid.Column style={{ position: 'relative' }}>
                    {/* <Slider {...settings}> */}
                    <Card.Group itemsPerRow={3} textAlign={'center'} stackable>
                      {
                        samples.map(sample => (
                          <Card raised key={sample.id} centered className={'sample-card'}>
                            <div className={'thumbnail'}></div>
                            <Card.Content>
                              <Card.Header as='h3' textAlign='left'>{sample.name}</Card.Header>
                              {/* <Card.Description style={ mobile ? { display: 'none'} : { display: 'block'}}>
                                {sample.body} 
                              </Card.Description> */}
                              <br/>
                              {
                                mobile ?

                                <a href={sample.url} target="_blank" rel="noopener noreferrer" disabled={mobile ? false : true}>
                                  <Button fluid color='blue' className={'primary-sub'}>Preview</Button>
                                </a>

                                :

                                <Button fluid color='blue' className={'primary-sub'} onClick={this.handleOpen(sample.url)}>Preview</Button>
                              }
                              
                            </Card.Content>
                          </Card>
                        ))
                      }
                    {/* </Slider> */}
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Fade>
          </div>
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='large'
            closeIcon
            className={'sample-modal'}
            >
             
          </Modal>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Samples