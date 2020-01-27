import React, {Component} from 'react'
import { Grid, Header, Icon, Segment, Button, Modal } from 'semantic-ui-react'
import Slider from 'react-slick'
import './recommendations.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

class Recommendations extends Component {

  constructor (props) {

    super (props);
    this.state = { 
      modalOpen: false
    }

    this.modal = React.createRef()
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount () {
    const { mobile } = this.props
    const reviews = document.querySelectorAll('.recommendation-body')
    // const reviewParent = document.querySelector('.slick-track').clientHeight

    reviews.forEach(review => {

      if (mobile === false) {

        if (review.textContent.length > 390) {
          review.parentNode.childNodes[2].style.display = 'inline-block'
        }
      } else {
        review.parentNode.childNodes[2].style.display = 'inline-block'
      }
    })
  }

  handleOpen = (content, name) => () => {
    this.setState({ modalOpen: true })
    setTimeout(() => {
      const modalContent = document.createElement('p')
      const header = document.createElement('h2')
      header.textContent = name
      modalContent.textContent = content
      const modal = document.createDocumentFragment()
      modal.appendChild(modalContent)
      modal.appendChild(header)
      document.querySelector('.modal.review-modal').appendChild(modal)
    }, 50)
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }


  render () {
    const { mobile } = this.props
    const settings = mobile ? {
      className: "center",
      dots: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      nextArrow: <RightNav />,
      prevArrow: <LeftNav />,
      speed: 500
    } : {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      nextArrow: <RightNav />,
      prevArrow: <LeftNav />,
      speed: 1000
    }

    const testimonials = [
      {
        id: 1,
        image: '',
        name: 'Jeff',
        body: 'Marie is an absolute gem. She is an outstanding resume writer who utilizes her vast knowledge to collaborate with her clients to create a compelling, informative, and engaging resume. She is a fantastic communicator who has an exemplary work ethic. Moreover, her impressive and vast experience will accommodate any position i.e. entry level up to the C-suite. It is my honor and privilege to recommend Marie'
      },
      {
        id: 2,
        image: '',
        name: 'Anon',
        body: 'During a career transition I felt the need to ensure my resume and credentials were showcased to position me as a top candidate in the marketplace. I was overwhelmed with the number of individuals providing this service. I began my search, reviewed many sources and narrowed it down to a few. My main priority was to find an individual that was sensitive to my needs and eager to get started. '
      },
      {
        id: 3,
        image: '',
        name: 'Bill',
        body: "I came across Marie and she right away made herself available 24/7, asked all the right questions, kept me informed on timelines, and demonstrated a passion to provide a product to meet my needs. Marie's knowledge in the industry allowed her to hit on the critical components of my experience that was lacking and incorporate that into the finished product. As a result, the hits on my profile are up exponentially which has opened up many new opportunities for me. She provided a full package of resume, BIO, and LinkedIn rewrite. I was very pleased with the finished product, her timeliness, and would highly recommend her services"
      },
      {
        id: 4,
        image: '',
        name: 'Joe Rey',
        body: 'I am so thankful to have come across Marie. My mind was blown when I read my first draft of my resume. I was matched with an excellent writer, she really captured my experience, my strengths, my core competencies and even things I did not even consider as strengths! The whole process was so positive. She was excellent and was able to go in and create the perfect resume that outlines my skill-set and experience in a way that I would not have come up with myself. The services were great and prompt. I feel like the services were directly for me and not taken from a template like some of the other resume services out there. Thank you, Marie, I would definitely recommend to my colleagues.'
      },
      {
        id: 5,
        image: '',
        name: 'Frank',
        body: 'I am very happy with my experience with Amy. She was very responsive and also quite patient. She always had a willing ear for all the feedback I gave and the changes I wanted. It was really great and I would happily recommend Amy. I will also be back when I need my CV to be updated again.'
      },
      {
        id: 6,
        image: '',
        name: 'Rikky',
        body: "I would highly recommend Beth with all your needs in creating an eye-catching resume or profile. She has a way of thinking outside the box to create the professional image that will get any HR director attention. She has a way with using your work experience and training to create a desirable outcome. So, if you’re looking for someone to help you to start helping with the employment job searches. She can produce results with her way of writing and creating your next Resume."
      },
      {
        id: 7,
        image: '',
        name: 'Matthew',
        body: "While looking for new career opportunities I found it necessary to seek out a professional writer to help me refresh and improve my resume. After talking with a few different writers and reviewing their samples, I decided to go with Marie. She sent me a detailed breakdown of the cost and services she provided. She reviewed my work and gave excellent feedback on areas needing improvement. I sent her a few job openings I was interested in applying for hoping that she could gear the resume towards the specific jobs. About a week later she presented the first draft of her work. Needless to say, I was extremely impressed with the rewrite of my resume. After a couple of little tweaks, she delivered me a final draft. I would highly recommend Marie to any of my colleagues or friends. Thank you for your help and best of luck! "
      }
    ]

    return (
      <Grid stackable className={'section recommendations-container'} style={{minHeight: '50vh'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1299" height="1042.18" viewBox="0 0 1299 1042.18"><title>wavy flat</title><path d="M.5,189.5s344,151,821,0l477-151v1041H.5Z" transform="translate(0 -37.82)" fill="#fff" stroke="none" strokeMiterlimit="10"/></svg>
        <Grid.Column width={16}>
          <div className={'padded-container'}>
              <Header as='h2' className={'section-header'} textAlign='center'>Our Recommendations</Header>
              <br/>
              <Slider {...settings}>
                {
                  testimonials.map((review) => (
                    <Segment key={review.id} basic>
                      <Header as='h3'>
                        <Header.Subheader>{review.name}</Header.Subheader>
                      </Header>
                      <p className={'recommendation-body'} style={{ WebkitBoxOrient: 'vertical' }}>
                        {review.body}
                      </p>
                      <Button className={'primary-sub'} style={{ display: 'none' }} size='small' onClick={this.handleOpen(review.body, review.name)}>Read More</Button>
                    </Segment>
                  ))
                }
              </Slider>
              <div className={'blocker left'}></div>
              <div className={'blocker right'}></div>
          </div>

          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            size='large'
            closeIcon
            ref={this.modal}
            className={'review-modal'}
            >
            </Modal>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Recommendations