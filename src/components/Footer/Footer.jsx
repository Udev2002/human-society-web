import React from 'react'
import fbLogo from '../../assets/fb.png'
import instaLogo from '../../assets/insta.png'
import linkedinLogo from '../../assets/linkedin-app-white-icon.png'
import ytLogo from '../../assets/yt.png'



const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="flex space-x-8">
        <a href="#" className="text-white text-xl sm:text-2xl"><img src={fbLogo} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
        <a href="#" className="text-white text-xl sm:text-2xl"><img src={instaLogo} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
        <a href="#" className="text-white text-xl sm:text-2xl"><img src={linkedinLogo} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
        <a href="#" className="text-white text-xl sm:text-2xl"><img src={ytLogo} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 lg:space-x-8">
        <a href="#" className="text-white text-sm sm:text-base">ABOUT US</a>
        <a href="#" className="text-white text-sm sm:text-base">OUR PROJECTS</a>
        <a href="#" className="text-white text-sm sm:text-base">NEWS</a>
        <a href="#" className="text-white text-sm sm:text-base">DONATE US</a>
      </div>
      <hr className="w-full border-t-2 border-white my-4 sm:my-6 lg:my-8" />

      <div className="text-center">
        <p className="text-sm sm:text-base">© 2024 Humane Society University of Kelaniya</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer