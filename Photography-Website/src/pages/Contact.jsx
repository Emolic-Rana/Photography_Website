import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | The LightBox Production</title>
        <meta
          name="description"
          content="Get in touch to book your wedding, portrait, or event shoot. We reply within a day or two."
        />
      </Helmet>
      <section className="px-6 md:px-12 pt-32 pb-20 grid md:grid-cols-2 gap-16">
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  )
}

export default Contact