import { CheckCircle2, Leaf, TrendingUp, Globe, TestTube, ChevronRight } from "lucide-react"
import Aboutus from "../assets/about.avif"
import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { useState, useEffect } from "react"
import FarmIcon from "../components/FarmIcon"
import { AlternatingSection } from "../components/sections/AlternatingSection"
import { Hero } from "../components/sections/Hero"

export function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero
        title="About VM ECOGROW"
        subtitle="Innovating Agriculture, Empowering Farmers"
        buttonText="Learn More"
        buttonLink="#"
        backgroundImage={Aboutus}
      />

      {/* Introduction Section */}
      <AlternatingSection
        title="Innovating Agriculture, Empowering Farmers"
        description="At VM ECOGROW, we are redefining agriculture by combining innovation, sustainability, and scale. As the UK & Europe division of NBS, a globally recognized family-owned leader in bio-nutrient inputs with over a decade of expertise, we operate across 10+ countries to deliver cutting-edge solutions that transform farming. With a robust manufacturing unit of 65000 Sq. ft. and a dedicated R&D team of 50+ experts, we create high-performance, residue-free products designed for all climates, soil types, and cropping systems. Our solutions are trusted by thousands of farmers, distributors, and agribusinesses worldwide. From regenerating soil health to boosting crop resilience, we are committed to empowering growers with sustainable practices that ensure long-term productivity while protecting the planet."
        image={FarmIcon}
      />

      {/* Mission Section */}
      <AlternatingSection
        title="Our Mission: Growing Sustainably Together"
        description="Our mission is simple yet powerful: to empower farmers and agribusinesses with eco-friendly solutions that enhance productivity while preserving the planet. We champion regenerative agriculture by restoring soil vitality, improving nutrient efficiency, and ensuring healthier crops for generations to come."
        image={FarmIcon}
        reverseOnMobile={true}
      />

      {/* Why Choose Us Section */}
      <section className="bg-[#DACEC2] py-12 md:py-16">
        <div className="container  px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#293E31] mb-8 text-center">Why Choose VM ECOGROW?</h2>
          <h4 className="text-center text-[#293E31] text-lg mb-8">The right partner doesn’t just supply products—they solve problems and drive
            success. Here’s why VM ECOGROW stands out</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((item, index) => (
              <div key={index} className="bg-[#FCF9F4] p-6 rounded-lg">
                <CheckCircle2 className="w-8 h-8 text-[#FE8340] mb-4" />
                <h3 className="text-xl font-semibold text-[#293E31] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="bg-[#DACEC2] py-12 md:py-16">
        <div className="container  px-4 md:px-8">
          <div className="max-w-4xl  text-center">
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