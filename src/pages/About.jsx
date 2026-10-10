import AboutContent from '../components/about/AboutContent'
import AboutCTA from '../components/about/AboutCTA'
import PhilosophySection from '../components/about/PhilosophySection'
import { Helmet } from 'react-helmet-async'
import ProcessSteps from '../components/about/ProcessSteps'

function About() {
  return (
    <>
      <Helmet>
        <title>About | The LightBox Production</title>
        <meta
          name="description"
          content="Documentary-first photography and videography studio. Learn about our approach, process, and the people behind the lens."
        />
      </Helmet>
      <AboutContent />
      <PhilosophySection />
      <ProcessSteps/>
      <AboutCTA />
    </>
  )
}

export default About