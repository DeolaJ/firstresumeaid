import React, {Component} from 'react'
import { Grid, Container, Header, Segment, Feed, Icon } from 'semantic-ui-react'
import './about.scss'
import Fade from 'react-reveal/Fade';
import Aux from '../../../../hoc/Aux'
import contract from '../../../../images/icons/003-contract.svg'
import insurance from '../../../../images/icons/004-insurance.svg'
import team from '../../../../images/icons/014-team.svg'

class About extends Component {
  state = {
    testimonials: [
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
    ],
    testimonial: null
  }

  componentDidMount () {
    const { testimonials } = this.state

    let number = Math.random() * 7
    number = Math.floor(number)
    this.setState({
      testimonial: testimonials[number]
    }) 
  }

  render () {
    const { mobile } = this.props
    const { testimonial } = this.state

    return (
      <Grid stackable className={'about-container'} style={{minHeight: '100vh'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="508.4" height="1007.9" viewBox="0 0 508.4 1007.9"><title>arrow right</title><path d="M884.66,35.74A148.58,148.58,0,0,1,990.84,78.55l357.74,352.14a149,149,0,0,1,1.66,210.74L998.1,999.16a148.56,148.56,0,0,1-109.48,44.44" transform="translate(-884.66 -35.73)" fill="#ffc"/></svg>
        <Grid.Column width={1} style={ mobile ? {display: 'none'} : {display: 'block'}}></Grid.Column>
        <Grid.Column width={14} className={'hide-on-mobile'}>
          <Container className={'about-content'}>
            <Fade bottom cascade>
              <Segment raised padded>
                <Grid columns={mobile ? 1: 2}>
                  <Grid.Row stretched>
                    <Grid.Column width={6}>
                      <Segment basic className={'about-content__header'}>
                        <Header as='h2' textAlign='center'>
                          Who are we?
                        </Header>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width={10} className={'about-content_body'}>
                      <Segment>
                        <img src={team} alt="team icon" width="60px" />
                        <p>We are a team of Certified Professional Resume Writers. We have been dedicated to providing job seekers with quality career resources and resume-writing at an affordable price </p>
                      </Segment>
                      <Segment>
                        <img src={insurance} alt="insurance icon" width="60px" />
                        <p>Now, professionals like you have a place to take their career stories and create their brands, starting with a great resume</p>
                      </Segment>
                      <Segment>
                        <img src={contract} alt="contract icon" width="60px" />
                        <p>Generally, our areas of specialty include writing for individuals at all levels in sales, marketing, finance, science, technology, human resources, recruitment/talent acquisition, and operations across a broad range of industries</p>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Fade>
          </Container>
        </Grid.Column>

        <Grid.Column width={16} className={'mobile-only'}>
          <Container className={'about-content'}>
            <Fade bottom cascade>
              <Segment basic className={'about-content__header'}>
                <Header as='h2' textAlign='center'>
                  Who are we?
                </Header>
              </Segment>
              <div className={'about-content_body mobile'}>
                <Segment textAlign='center' basic>
                  <img src={team} alt="team icon" width="60px" />
                  <p>We are a team of Certified Professional Resume Writers. We have been dedicated to providing job seekers with quality career resources and resume-writing at an affordable price </p>
                </Segment>
                <Segment textAlign='center' basic>
                  <img src={insurance} alt="insurance icon" width="60px" />
                  <p>Now, professionals like you have a place to take their career stories and create their brands, starting with a great resume</p>
                </Segment>
                <Segment textAlign='center' basic>
                  <img src={contract} alt="contract icon" width="60px" />
                  <p>Generally, our areas of specialty include writing for individuals at all levels in sales, marketing, finance, science, technology, human resources, recruitment/talent acquisition, and operations across a broad range of industries</p>
                </Segment>
              </div>
            </Fade>
          </Container>
        </Grid.Column>

        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={16}>
          <Fade left>
            <Container className={'random-review'}>
              <Feed size='large' >
                <Feed.Event>
                  <Feed.Label>
                    <Icon name='star outline' size='large' />
                  </Feed.Label>
                  <Feed.Content>
                    {
                      testimonial && 

                      <Aux>
                        <Header as='h3'>
                          {testimonial.name}
                        </Header>
                        <p>{testimonial.body}</p> 
                      </Aux>
                    }
                    
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Container>
          </Fade>
        </Grid.Column>
      </Grid>
    )
  }
}

export default About