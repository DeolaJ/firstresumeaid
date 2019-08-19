import React, {Component} from 'react'
import './Body.scss'
import LoadableVisibility from "react-loadable-visibility/react-loadable";
import Loading from "../../../images/loader-doubl.svg";
import { Grid } from 'semantic-ui-react'
import Home from './Home/home'
import About from './About/about'
import Faq from './FAQs/faq'
import Packages from './Packages/packages'
import Recommendations from './Recommendations/recommendations'
import Samples from './Samples/samples'
// import Contact from './Contact/contact'

const HomeLoadable = LoadableVisibility({
  loader: () => import("./Home/home"),
  loading: "Loading"
});

const AboutLoadable = LoadableVisibility({
  loader: () => import("./About/about"),
  loading: "Loading"
});

const PackagesLoadable = LoadableVisibility({
  loader: () => import("./Packages/packages"),
  loading: "Loading"
});

const SamplesLoadable = LoadableVisibility({
  loader: () => import("./Samples/samples"),
  loading: "Loading"
});

const FaqLoadable = LoadableVisibility({
  loader: () => import("./FAQs/faq"),
  loading: "Loading"
});

const ReviewsLoadable = LoadableVisibility({
  loader: () => import("./Recommendations/recommendations"),
  loading: "Loading"
});

class Body extends Component {

  render () {
    const { refs, handleSidebar, mobile } = this.props

    return (
      <main className={'mainbody'} onClick={handleSidebar} style={{width: '100%'}}>
        { refs !== {} &&
          <Grid stackable>
            <Grid.Column width={16}>
              <section ref={refs[1]}>
                <Home mobile={mobile} refs={refs} />
              </section>
              <section ref={refs[2]}>
                <About mobile={mobile}/>
              </section>
              <section ref={refs[3]}>
                <Packages mobile={mobile}/>
              </section>
              <section ref={refs[4]}>
                <Samples mobile={mobile}/>
              </section>
              <section ref={refs[5]}>
                <Faq mobile={mobile}/>
              </section>
              <section ref={refs[6]}>
                <Recommendations mobile={mobile}/>
              </section>
              {/* <section ref={refs[7]}>
                <Contact/>
              </section> */}
            </Grid.Column>
          </Grid>
        }
      </main>
    )
  }
}

export default Body