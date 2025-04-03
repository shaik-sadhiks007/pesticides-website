import { Logo } from "./Logo";

export default function ContactInfo() {
  return (
    <>
      <div className="flex justify-center items-center relative"
        style={{ background: "linear-gradient(to bottom, #DACEC2 50%, #293E31 50%)" }}
      >
        <div className="w-full md:w-5/6 bg-[#FCF9F4] p-4 md:p-6 text-[#414141]">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col space-y-8 py-4">
            {/* Address Section */}
            <div className="text-center">
              <h1 className="font-semibold text-xl mb-2">VM ECOGROW</h1>
              <h1 className="text-sm">is a trading name of VM Group Europe Ltd, registered in England and Wales with Company no. 15714820</h1>
            </div>

            {/* Horizontal Divider */}
            <div className="border-b border-gray-400 w-4/5 "></div>

            {/* Operating Hours */}
            <div className="text-center">
              <h1 className="font-semibold text-xl mb-2">Operating Hours</h1>
              <h1 className="text-sm">Mon - Fri: 9am - 7pm</h1>
              <h1 className="text-sm">Saturday: 9am - 4pm</h1>
              <h1 className="text-sm">Sunday: Closed</h1>
            </div>

            {/* Horizontal Divider */}
            <div className="border-b border-gray-400 w-4/5 "></div>

            {/* Address Section */}
            <div className="text-center">
              <h1 className="font-semibold text-xl mb-2">University Of Nottingham</h1>
              <h1 className="text-sm">Innovation Park, Triumph Road, Nottingham, NG7 2TU</h1>
              <h1 className="font-semibold mt-2 text-sm">Tel: <span>+44 7377420266</span></h1>
              <h1 className="font-semibold text-sm">Tel: <span>+44 7442590367</span></h1>
              <h1 className="font-semibold hover:text-[#FE8340] transition-colors">Email : <a href="mailto:connect@vmecogrow.com" >connect@vmecogrow.com</a></h1>

            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-12 items-center h-full">
            {/* Address Section (Span 2 cols) */}
            <div className="col-span-3 flex flex-col justify-center h-full">
              <h1 className="font-semibold text-2xl">VM ECOGROW</h1>
              <h1>is a trading name of VM Group Europe Ltd, registered in England and Wales with Company no. 15714820</h1>
            </div>

            {/* Vertical Divider */}
            <div className="col-span-1 flex  items-center h-full">
              <div className="border-l border-gray-400 h-4/5"></div>
            </div>

            {/* Operating Hours (Span 2 cols) */}
            <div className="col-span-3 flex flex-col justify-center h-full">
              <h1 className="font-semibold text-2xl">Operating Hours</h1>
              <h1>Mon - Fri: 9am - 7pm</h1>
              <h1>Saturday: 9am - 4pm</h1>
              <h1>Sunday: Closed</h1>
            </div>

            {/* Vertical Divider */}
            <div className="col-span-1 flex justify-center items-center h-full">
              <div className="border-l border-gray-400 h-4/5"></div>
            </div>

            {/* Delivery Hours (Span 2 cols) */}
            <div className="col-span-4 flex flex-col justify-center h-full">
              <h1 className="font-semibold text-2xl">University Of Nottingham</h1>
              <h1>Innovation Park, Triumph Road, Nottingham, NG7 2TU</h1>
              <h1 className="font-semibold mt-2">Tel: <span>+44 7377420266</span></h1>
              <h1 className="font-semibold">Tel: <span>+44 7442590367</span></h1>
              <h1 className="font-semibold hover:text-[#FE8340] transition-colors">Email : <a href="mailto:connect@vmecogrow.com" >connect@vmecogrow.com</a></h1>
            </div>
          </div>
        </div>
        <Logo className="absolute hidden md:block -bottom-30 left-40 rotate-340" width="150" height="150" />
        <Logo className="absolute md:hidden -bottom-10 left-4 rotate-340" width="80" height="80" />
      </div>
    </>
  );
}
