import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import Cardsection from './components/Cardsection'
import Testimonial from './components/Testimonial'
import Client from './components/Client'

function App() {
  return (
    <div className='bg-primary  w-full h-fit'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
      </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <Cardsection />
            <Testimonial />
            <Client />
          </div>
        </div>
    </div>
  )
}

export default App