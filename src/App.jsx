import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-primary  w-full h-fit'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            hero
          </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Card Section 
            Billig Sefction 

          </div>
        </div>
      </div>
    </div>
  )
}

export default App