import { CheckCircle2, Leaf, TrendingUp, Globe, TestTube, ChevronRight, PackageCheck, Truck, Shield } from "lucide-react"
import Aboutus from "../assets/about.avif"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { useState, useEffect } from "react"
import FarmIcon from "../components/FarmIcon"
import { AlternatingSection } from "../components/sections/AlternatingSection"
import { Hero } from "../components/sections/Hero"
import { Features } from "../components/sections/Features"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Customisation Services",
    description: "At VM ECOGROW, we offer unparalleled customisation services to meet your unique agricultural needs. Our expert team is ready to:",
    bulletPoints: [
      "Modify existing formulations to suit your specific requirements",
      "Develop new, innovative formulations tailored to your crop and soil conditions",
      "Provide white labelling services for your brand",
      "Create bespoke solutions for challenging agricultural scenarios"
    ],
    footer: "Whether you need to make a slight change to an existing product or create a completely new formulation, VM ECOGROW has the expertise and facilities to bring your vision to life.",
    image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeBanner/Services%20Banner/services/dd58essyjwc1qudb0tvy",
    mobileImageFirst: true,
    // icon: Globe
  },
  {
    title: "Technical Support",
    description: "Our commitment to your success extends far beyond product delivery. VM ECOGROW's technical support services include:",
    bulletPoints: [
      "Exceptional crop programs designed for your specific farm and goals",
      "Expert guidance on product selection, dosage, and application methods",
      "Troubleshooting assistance for any farm or crop-related issues",
      "Regular updates on the latest agricultural practices and technologies"
    ],
    footer: "From soil health to crop management, our team is here to support you every step of the way. Let us help you maximise your yields and minimise your challenges.",
    image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeBanner/Services%20Banner/services/c7asdekjajbwa7j8neoc",
    mobileImageFirst: false,
    // icon: Shield
  },
  {
    title: "Logistic Services",
    description: "VM ECOGROW ensures your products reach you efficiently, no matter where you are. Our logistics services offer:",
    bulletPoints: [
      "Flexible transportation options: air, sea, and land",
      "LCL, FCL, and bulk cargo shipments",
      "Import/export customs management",
      "Real-time cargo tracking",
      "Inventory management solutions"
    ],
    footer: "We're not just a supplier; we're your global logistics partner, ensuring smooth operations from our facility to your farm.",
    image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeBanner/Services%20Banner/services/olnhfy1hrhs1jhhcxmem",
    mobileImageFirst: true,
    // icon: Truck
  }
]

export default function Services() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Providing advanced bio-organic solutions that boost crop yields, enrich soil health, and support sustainable agriculture and turf management."
        buttonText="Learn More"
        buttonLink="#"
        backgroundImage={"https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeBanner/Services%20Banner/zuf7paqlmyrlegaplxt2"}
      />

      {/* Services Sections */}
      {services.map((service, index) => (
        <AlternatingSection
          key={index}
          title={service.title}
          description={service.description}
          bulletPoints={service.bulletPoints}
          footer={service.footer}
          image={service.image}
          mobileImageFirst={service.mobileImageFirst}
          icon={service.icon}
        // bgColor={"#FCF9F4"}
        />
      ))}

      {/* Features Section */}
      <Features />

      {/* Call to Action */}
      <section className="bg-[#DACEC2] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#293E31] mb-6">
            Ready to Grow with VM ECOGROW?
          </h2>
          <p className="text-[#293E31]/80 text-lg mb-8  mx-auto">
            Contact us today to explore how our customized solutions, expert support, and
            reliable services can transform your agricultural operations. Let's cultivate
            success together!
          </p>
          <Link to="/contact-us">
            <Button className="bg-[#FE8340] hover:bg-[#e06724] text-white px-8 py-3 cursor-pointer">
              Contact Us <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}


