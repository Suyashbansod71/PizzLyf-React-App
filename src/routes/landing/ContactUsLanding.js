import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../assets/images/contact-us/image-one-parallax.webp'


const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white" >
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 400, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={PizzaOne} alt="" className="parallax company-details-image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 600, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={PizzaOne} alt="" className="parallax company-details-image-two" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 800, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={PizzaOne} alt="" className="parallax company-details-image-three" />      </motion.div>
      <section className='company-details'>
        <div>
          <h2>+91 00 023 348 95 </h2>
          <p>Contact us if you have any questions</p>
        </div>
        <div>
          <h2>Phoenix Mall</h2>
          <p>Viman Nagar, Pune</p>
        </div>
        <div>
          <h2>Open All Days</h2>
          <p>8:00am - 9:00pm</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;