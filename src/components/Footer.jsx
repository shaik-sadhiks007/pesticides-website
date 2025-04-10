import { Link } from "react-router-dom"
import { FacebookIcon } from "./icons/FacebookIcon"
import { InstagramIcon } from "./icons/InstagramIcon"
import { TwitterIcon } from "./icons/TwitterIcon"
import { GmailIcon } from "./icons/GmailIcon"
import { Mail, MapPin, Phone } from "lucide-react"
import hunger from "../assets/footerIcons/hunger.gif"
import partnership from "../assets/footerIcons/partnership.gif"

export default function Footer() {
  return (
    <footer className="bg-[#293E31] text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Company Info */}
          <div className="col-span-12 md:col-span-3 space-y-3 text-center md:text-left relative pb-8 sm:pb-0">
            <h2 className="font-semibold text-2xl text-[#FE8340]">VM ECOGROW</h2>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-200 leading-relaxed text-left mb-2">
                is a trading name of VM Group Europe Ltd,
                registered in England and Wales with
                Company no. 15714820
              </p>
              <div className="flex items-center md:items-center gap-2 md:gap-4 mt-4">
                <img
                  src="https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/qhcewnqw2g8bdpncygcv"
                  alt="Trusted Brand Badge"
                  className="w-[60px] h-[50px] md:w-[80px] md:h-[60px] lg:w-[80px] lg:h-[70px]"
                />
                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[40px] lg:w-[70px] lg:h-[70px] bg-transparent">
                  <img
                    src={hunger}
                    alt="Hunger Free"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[40px] lg:w-[70px] lg:h-[70px] bg-transparent">
                  <img
                    src={partnership}
                    alt="Partnership"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="col-span-12 md:col-span-3 space-y-3 flex flex-col items-center sm:items-start md:items-center lg:items-center">
            <h2 className="font-semibold text-2xl text-[#FE8340]">Operating Hours</h2>
            <div className="text-gray-200 leading-relaxed text-center sm:text-start md:text-center">
              <p>Mon - Fri: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Find Us - Map Section */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 space-y-3 flex flex-col items-center">
            <h2 className="font-semibold text-2xl text-[#FE8340]">Find Us</h2>
            <div className="w-full h-[180px] sm:h-[200px] md:h-[160px] lg:h-[200px] rounded-lg overflow-hidden">
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
          </div>

          {/* Contact Info Section */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 space-y-3 flex flex-col items-center sm:items-start">
            <h2 className="font-semibold text-2xl text-[#FE8340] text-center sm:text-left">Contact Us</h2>
            <div className="space-y-2 text-gray-200 w-full max-w-[280px] sm:max-w-full md:max-w-[220px] lg:max-w-[280px]">
              <div className="leading-relaxed flex items-start gap-2">
                <span className="text-[#FE8340] mt-1 flex-shrink-0"><MapPin size={18} className="text-[#FE8340]" /></span>
                <span className="text-left text-xs sm:text-xs md:text-xs lg:text-sm">
                  VM Group Europe Ltd, Ingenuity Centre,
                  University Of Nottingham Innovation Park,
                  Triumph Road, Nottingham, England, NG7 2TU
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Phone size={18} className="text-[#FE8340] flex-shrink-0" />
                <a href="tel:+447442590367" className="hover:text-[#FE8340] transition-colors text-xs sm:text-xs md:text-xs lg:text-sm">
                  +44 7442590367
                </a>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Phone size={18} className="text-[#FE8340] flex-shrink-0" />
                <a href="tel:+447377420266" className="hover:text-[#FE8340] transition-colors text-xs sm:text-xs md:text-xs lg:text-sm">
                  +44 7405336635
                </a>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Mail size={18} className="text-[#FE8340] flex-shrink-0" />
                <a href="mailto:connect@vmecogrow.com" className="hover:text-[#FE8340] transition-colors text-xs sm:text-xs md:text-xs lg:text-sm">
                  connect@vmecogrow.com
                </a>
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
              <Link 
                to="/privacy-policy" 
                className="text-gray-200 hover:text-[#FE8340] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-and-conditions" 
                className="text-gray-200 hover:text-[#FE8340] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Terms and Conditions
              </Link>
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
