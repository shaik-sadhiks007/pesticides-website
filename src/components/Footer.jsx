import { Link } from "react-router-dom"
import { FacebookIcon } from "./icons/FacebookIcon"
import { InstagramIcon } from "./icons/InstagramIcon"
import { TwitterIcon } from "./icons/TwitterIcon"
import { GmailIcon } from "./icons/GmailIcon"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#293E31] text-white relative z-10 px-4">
      {/* Main Content */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-3 text-center md:text-left">
            <h2 className="font-semibold text-2xl text-[#FE8340]">VM ECOGROW</h2>
            <p className="text-gray-200 leading-relaxed">
              is a trading name of VM Group Europe Ltd,<br />
              registered in England and Wales with<br />
              Company no. 15714820
            </p>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-3 ">
              <h2 className="font-semibold text-2xl text-[#FE8340]">Operating Hours</h2>
              <div className="text-gray-200 leading-relaxed text-center">
                <p>Mon - Fri: 9am - 7pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-center md:text-end">
            {/* <h2 className="font-semibold text-2xl text-[#FE8340]">University Of Nottingham</h2> */}
            <h2 className="font-semibold text-2xl text-[#FE8340]">VM Group Europe Ltd</h2>

            <div className="text-gray-200 space-y-2">
              <p className="leading-relaxed">
                Innovation Park, Triumph Road,<br />
                Nottingham, NG7 2TU
              </p>
              <div className="flex justify-center md:justify-end items-center gap-2">
                <Phone size={18} className="text-[#FE8340]" />
                <a href="tel:+447442590367" className="hover:text-[#FE8340] transition-colors">
                  +44 7442590367
                </a>
              </div>
              <div className="flex justify-center md:justify-end items-center gap-2">
                <Phone size={18} className="text-[#FE8340]" />
                <a href="tel:+447377420266" className="hover:text-[#FE8340] transition-colors">
                  +44 7377420266
                </a>
              </div>
              <div className="flex justify-center md:justify-end items-center gap-2">
                <Mail size={18} className="text-[#FE8340]" />
                <a href="mailto:connect@vmecogrow.com" className="hover:text-[#FE8340] transition-colors">
                  connect@vmecogrow.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#3a4f3f]">
        <div className="container-fluid px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6">
            {/* Links - Takes full width on tablet, 6 columns on desktop */}
            <div className="lg:col-span-6 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
              <Link to="/policy" className="text-gray-200 hover:text-[#FE8340] transition-colors">
                Policy
              </Link>
              <Link to="/termsandconditions" className="text-gray-200 hover:text-[#FE8340] transition-colors">
                Terms and Conditions
              </Link>
              <Link to="/disclaimer" className="text-gray-200 hover:text-[#FE8340] transition-colors">
                Disclaimer
              </Link>
              <Link to="/sustainability" className="text-gray-200 hover:text-[#FE8340] transition-colors">
                Sustainability
              </Link>
            </div>

            {/* Get Updates - Takes full width on tablet, 4 columns on desktop */}
            <div className="lg:col-span-4 flex flex-col lg:flex-row items-center justify-center gap-4">
              <span className="text-[#FE8340] font-semibold whitespace-nowrap">Get Updates:</span>
              <div className="flex items-center gap-4 relative z-50">
                <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="mailto:connect@vmecogrow.com" className="text-[#FE8340] hover:opacity-80 transition-opacity">
                  <GmailIcon className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Empty space for Tawk.io - Takes full width on tablet, 2 columns on desktop */}
            <div className="lg:col-span-2"></div>
          </div>
        </div>
      </div>
    </footer>
  )
} 