import { CheckCircle2, Leaf, TrendingUp, Globe, TestTube, ChevronRight } from "lucide-react"
import Aboutus from "../assets/about.avif"
import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { useState, useEffect } from "react"
import FarmIcon from "../components/FarmIcon"
import { AlternatingSection } from "../components/sections/AlternatingSection"
import { Hero } from "../components/sections/Hero"
import { Features } from "../components/sections/Features"


const services = [
  {
    "title": "Customization Services",
    "description": "We craft tailor-made bio-organic solutions to meet your exact needs. As a leading manufacturer, we offer exclusive formulations. Our products are designed for maximum efficiency and performance.",
    "image": FarmIcon,
    "reverseOnMobile": false
  },
  {
    "title": "Technical Support",
    "description": "Get expert guidance on product selection, application, and dosage. Our team ensures you achieve the best results with our bio-nutrient solutions. We are here to support you at every step.",
    "image": FarmIcon,
    "reverseOnMobile": true
  },
  {
    "title": "Bulk Supply Solutions",
    "description": "We provide seamless procurement for dealerships, wholesalers, and distributors. Explore our whitelabeling options for exclusive product branding. Scale your business with our high-quality bio-organic products.",
    "image": FarmIcon,
    "reverseOnMobile": false
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
        backgroundImage={Aboutus}
      />

      {/* Services Sections */}
      {services.map((service, index) => (
        <AlternatingSection
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          reverseOnMobile={service.reverseOnMobile}
          // bgColor="bg-[#DACEC2]"
        />
      ))}
      
      {/* Features Section */}
      <Features />
    </main>
  )
}


