import React from 'react'
import Banner from '../components/BannerPage'
import WhyWandorn from '../components/Why'
import Cookies from 'js-cookie';
function LandingPage() {
  const myCookieValue = Cookies.get('token')
  return (
    <div>
      <Banner/>
      <WhyWandorn/>
    </div>
  )
}

export default LandingPage
