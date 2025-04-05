import { Link } from "react-router-dom"
import { FacebookIcon } from "./icons/FacebookIcon"
import { InstagramIcon } from "./icons/InstagramIcon"
import { TwitterIcon } from "./icons/TwitterIcon"
import { GmailIcon } from "./icons/GmailIcon"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#293E31] text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Company Info */}
          <div className="col-span-12 md:col-span-3 space-y-3 text-center md:text-left">
            <h2 className="font-semibold text-2xl text-[#FE8340]">VM ECOGROW</h2>
            <p className="text-gray-200 leading-relaxed">
              is a trading name of VM Group Europe Ltd,<br />
              registered in England and Wales with<br />
              Company no. 15714820
            </p>
          </div>

          {/* Operating Hours */}
          <div className="col-span-12 md:col-span-3 space-y-3  flex flex-col items-center">
            <h2 className="font-semibold text-2xl text-[#FE8340]">Operating Hours</h2>
            <div className="text-gray-200 leading-relaxed text-start">
              <p>Mon - Fri: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact + Map */}
          <div className="col-span-12 md:col-span-6 space-y-4 text-center md:text-left">
            <h2 className="font-semibold text-2xl text-[#FE8340] text-center ">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Embedded Map */}
              <div className="w-full h-[150px] sm:h-[250px] md:h-[150px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.8578646298374!2d-1.1822903!3d52.95098050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3dffa0449e9%3A0xb721bcb687e7b3ba!2sVM%20GROUP%20EUROPE%20LIMITED!5e0!3m2!1sen!2sin!4v1743844260918!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VM GROUP EUROPE LIMITED Location"
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-gray-200">
                <div className="leading-relaxed flex items-center gap-2">
                  {/* <span className="">
                    <MapPin size={18} className="text-[#FE8340]" />
                  </span> */}
                  <span className="flex items-center gap-2">
                    <span className="text-[#FE8340]"><MapPin size={18} className="text-[#FE8340]" /></span>
                    <span className="">Innovation Park, Triumph Road,
                      Nottingham, NG7 2TU
                    </span>
                  </span>
                </div>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  <Phone size={18} className="text-[#FE8340]" />
                  <a href="tel:+447442590367" className="hover:text-[#FE8340] transition-colors">
                    +44 7442590367
                  </a>
                </div>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  <Phone size={18} className="text-[#FE8340]" />
                  <a href="tel:+447377420266" className="hover:text-[#FE8340] transition-colors">
                    +44 7377420266
                  </a>
                </div>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  <Mail size={18} className="text-[#FE8340]" />
                  <a href="mailto:connect@vmecogrow.com" className="hover:text-[#FE8340] transition-colors">
                    connect@vmecogrow.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#3a4f3f]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 max-w-6xl mx-auto">
            {/* Links */}
            <div className="lg:col-span-6 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
              <Link to="/policy" className="text-gray-200 hover:text-[#FE8340] transition-colors">Policy</Link>
              <Link to="/termsandconditions" className="text-gray-200 hover:text-[#FE8340] transition-colors">Terms and Conditions</Link>
              <Link to="/disclaimer" className="text-gray-200 hover:text-[#FE8340] transition-colors">Disclaimer</Link>
              <Link to="/sustainability" className="text-gray-200 hover:text-[#FE8340] transition-colors">Sustainability</Link>
            </div>

            {/* Socials */}
            <div className="lg:col-span-4 flex flex-col lg:flex-row items-center justify-center gap-4">
              <span className="text-[#FE8340] font-semibold whitespace-nowrap">Get Updates:</span>
              <div className="flex items-center gap-4 relative z-50">
                <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity"><FacebookIcon className="w-6 h-6" /></a>
                <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity"><TwitterIcon className="w-6 h-6" /></a>
                <a href="#" className="text-[#FE8340] hover:opacity-80 transition-opacity"><InstagramIcon className="w-6 h-6" /></a>
                <a href="mailto:connect@vmecogrow.com" className="text-[#FE8340] hover:opacity-80 transition-opacity"><GmailIcon className="w-6 h-6" /></a>
              </div>
            </div>

            {/* Copyright */}
            <div className="lg:col-span-2 text-center lg:text-right">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} VM ECOGROW</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
