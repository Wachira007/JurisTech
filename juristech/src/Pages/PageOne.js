import React from 'react'
import Landing from '../Components/Landing/Landing'
import Lawyers from '../Components/LYT/Lawyers'
import Practice from '../Components/Practice_area/Practice'
import Contact from '../Components/ContactUs/Contact'

const PageOne = () => {
  return (
    <div>
      <Landing />
      <Lawyers />
      <Practice />
      <Contact />
    </div>
  )
}

export default PageOne

