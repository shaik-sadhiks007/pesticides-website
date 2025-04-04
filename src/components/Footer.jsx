import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import ContactInfo from "./ContactInfo"
import { FacebookIcon } from "./icons/FacebookIcon"
import { InstagramIcon } from "./icons/InstagramIcon"
import { TwitterIcon } from "./icons/TwitterIcon"
import { GmailIcon } from "./icons/GmailIcon"

export function Footer() {
  return (
    <div>
      <ContactInfo />
      <footer className="bg-[#293E31] text-white py-8 md:py-12 px-4 md:px-24">
        <div className="container ">
          <div className="pt-4 md:pt-30 pb-4">
            <h1 className="mb-6 text-xl md:text-2xl font-bold text-center">
              Get The Latest News & Updates
            </h1>

            {/* Links Section */}
            <div className="flex flex-row justify-center gap-4 md:gap-8 mb-8 text-center md:text-left">
              <Link to="/policy" className="text-gray-300 hover:text-white transition-colors">
                Policy
              </Link>
              <Link to="/termsandconditions" className="text-gray-300 hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link to="/disclaimer" className="text-gray-300 hover:text-white transition-colors">
                Disclaimer
              </Link>
              <Link to="/sustainability" className="text-gray-300 hover:text-white transition-colors">
                Sustainability
              </Link>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-row items-center justify-center gap-8 md:gap-10">
              <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                <FacebookIcon className="w-6  h-6 md:w-6 md:h-6" />
              </a>
              <div className="w-[1px] h-10 bg-[#FE8340]"></div>

              <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                <TwitterIcon className="w-6  h-6 md:w-6 md:h-6" />
              </a>
              <div className="w-[1px] h-10 bg-[#FE8340]"></div>

              <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                <InstagramIcon className="w-6 h-6 md:w-6 md:h-6" />
              </a>
              <div className="w-[1px] h-10 bg-[#FE8340]"></div>

              <a href="mailto:connect@vmecogrow.com" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                <GmailIcon className="w-6 h-6 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 