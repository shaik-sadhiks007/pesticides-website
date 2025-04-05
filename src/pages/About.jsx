import { CheckCircle2, Leaf, TrendingUp, Globe, TestTube, ChevronRight } from "lucide-react"
import Aboutus from "../assets/about.avif"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { useState, useEffect } from "react"
import FarmIcon from "../components/FarmIcon"
import { AlternatingSection } from "../components/sections/AlternatingSection"
import { Hero } from "../components/sections/Hero"
import { Link } from "react-router-dom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

export function About() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleAccordionHover = (value) => {
    setActiveAccordion(value)
  }

  const whyChooseUsItems = [
              {
                title: "Manufacturing Excellence",
                description: "As manufacturers, not middlemen, we ensure direct factory pricing, strict quality control, and tailor-made solutions for your specific needs."
              },
              {
                title: "Global Presence with Local Commitment",
                description: "Operating across continents—from Europe to Asia and Africa—we combine global expertise with localized support to address unique agricultural challenges."
              },
              {
                title: "Certified Sustainability",
                description: "Our bio-inputs are Control Union Organic Certified, meeting the highest global standards while being 100% residue-free and environmentally safe."
              },
              {
                title: "Proven Results",
                description: "Farmers using our solutions report yield improvements of up to 30%, reduced chemical dependency, and healthier soils for long-term sustainability."
              },
              {
                title: "R&D-Driven Innovation",
                description: "Our team of experts continuously develops advanced bio-nutrient inputs that adapt to climate challenges and optimize nutrient efficiency."
              }
  ]

  const teamMembers = [
    {
      name: "Vedant",
      title: "Director",
      image: "https://res.cloudinary.com/dxq7qzxqj/image/upload/v1740000000/team/vedant.jpg"
    },
    {
      name: "Aditya",
      title: "Director",
      image: "https://res.cloudinary.com/dxq7qzxqj/image/upload/v1740000000/team/aditya.jpg"
    },
    {
      name: "Dr Chris",
      title: "Consultant",
      image: "https://res.cloudinary.com/dxq7qzxqj/image/upload/v1740000000/team/dr-chris.jpg"
    }
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero
        title="About VM ECOGROW"
        subtitle="Innovating Agriculture, Empowering Farmers"
        buttonText="Learn More"
        buttonLink="#"
        backgroundImage={"https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeBanner/AboutBanner/y6fsbdxjy2lifokutjz1"}
      />

      {/* Innovating Agriculture Section */}
      <section className="bg-[#FCF9F4] py-6 sm:py-10 md:pt-16 md:pb-8 px-4 sm:px-8 md:px-16 flex flex-col items-center text-center w-full">
        <div className="w-full">
          <h2 className="text-[#293E31] text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Innovating Agriculture, Empowering Farmers
          </h2>
          <p className="text-[#293E31] text-base sm:text-lg mb-4 sm:mb-6">
            At VM ECOGROW, we are redefining agriculture by combining innovation, sustainability, and scale. As the UK & Europe division of NBS, our family-owned, globally recognised manufacturing leader of bio-nutrient inputs with over a decade of expertise, we operate across 10+ countries to deliver cutting-edge solutions that transform farming. With a robust manufacturing unit of 65000 Sq. ft. and a dedicated R&D team of 50+ experts, we create high-performance, residue-free products designed for all climates, soil types, and cropping systems.
          </p>
          <p className="text-[#293E31] text-base sm:text-lg mb-4 sm:mb-6">
            Our solutions are trusted by thousands of farmers, distributors, and agribusinesses worldwide. From regenerating soil health to boosting crop resilience, we are committed to empowering growers with sustainable practices that ensure long-term productivity while protecting the planet.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-[#FCF9F4] pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16 flex flex-col items-center text-center w-full">
        <div className="w-full">
          <h2 className="text-[#293E31] text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Our Mission: Growing Sustainably Together
          </h2>
          <p className="text-[#293E31] text-base sm:text-lg mb-4 sm:mb-6">
            Our mission is simple yet powerful: to empower farmers and agribusinesses with eco-friendly solutions that enhance productivity while preserving the planet. We champion regenerative agriculture by restoring soil vitality, improving nutrient efficiency, and ensuring healthier crops for generations to come.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#DACEC2] py-6 md:py-8">
        <div className="container px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#293E31] mb-8 text-center">Why Choose VM ECOGROW?</h2>
          <h4 className="text-center text-[#293E31] text-lg mb-8">The right partner doesn't just supply products—they solve problems and drive
            success. Here's why VM ECOGROW stands out</h4>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-4xl mx-auto"
            value={activeAccordion}
            onValueChange={setActiveAccordion}
          >
            {whyChooseUsItems.map((item, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                onMouseEnter={() => handleAccordionHover(`item-${index}`)}
                onMouseLeave={() => handleAccordionHover(null)}
                className="border-b border-[#293E31]/20 bg-[#FCF9F4] mb-4 cursor-pointer rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-[#293E31] text-xl font-semibold hover:no-underline flex items-center">
                  <div className="mr-3 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#FE8340] transform-none" />
                  </div>
                  <span className="font-bold">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 text-base text-center">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-[#DACEC2] pb-8 md:pb-16">
        <div className="container px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#293E31] mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#FE8340] mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#293E31] mb-1">{member.name}</h3>
                <p className="text-[#293E31]/80">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="bg-[#DACEC2] pb-6 md:pb-16">
        <div className="container px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#293E31] mb-8">A Legacy of Trust & Innovation</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                With over 10 years of experience in sustainable agriculture, VM ECOGROW has built a reputation as a trusted partner for farmers worldwide. Our extensive distribution network includes partnerships with hundreds of distributors across multiple continents, ensuring timely delivery and localized support wherever you need it.
              </p>
              <p className="text-lg leading-relaxed">
                We understand the struggles farmers face—rising costs, soil degradation, unpredictable weather—and the hesitation to try new solutions. That's why we focus on earning trust through action: by solving real problems, delivering measurable results through trials, and proving that innovation can be both practical and profitable.
              </p>
              <p className="text-lg leading-relaxed">
                At VM ECOGROW, we're not just your supplier—we're your partner in building a sustainable future for your fields, your family, and generations to come.
              </p>
              <div className="pt-6">
                <p className="text-xl font-semibold text-[#FE8340]">
                  Let's grow together—because farming isn't just about today; it's about cultivating hope for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
} 