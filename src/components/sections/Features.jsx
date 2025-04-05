import { motion } from "framer-motion";
import { CheckCircle2, Package, Truck, Award } from "lucide-react";

export const defaultFeatures = [
  {
    title: "One of a Kind",
    description: "What sets VM ECOGROW apart:",
    details: [
      "Innovative R&D: Constantly developing cutting-edge agricultural solutions",
      "Global reach with local expertise: Understanding diverse agricultural needs worldwide",
      "Sustainability focus: Eco-friendly products and practices",
      "Customer-centric approach: Your success is our priority"
    ]
  },
  {
    title: "Our Packaging System",
    description: "VM ECOGROW offers versatile packaging options to suit your needs:",
    details: [
      "Size range: From 100 ml/g to 1000 L/kg",
      "Eco-friendly sustainable materials available",
      "Custom branding and labelling",
      "Bulk packaging for large-scale operations",
      "Specialised packaging for sensitive formulations",
      "Our flexible packaging solutions ensure product integrity and ease of use, from small farms to industrial-scale operations."
    ]
  },
  {
    title: "Our Quality",
    description: "At VM ECOGROW, quality is non-negotiable:",
    details: [
      "Rigorous testing at every production stage",
      "State-of-the-art quality control laboratories",
      "Adherence to international quality standards",
      "Consistent product performance batch after batch",
      "Regular audits and certifications",
      "Our commitment to quality ensures that every product leaving our facility meets the highest efficacy and safety standards."
    ]
  },
  {
    title: "Terms of Delivery",
    description: "We make doing business with VM ECOGROW simple and transparent:",
    details: [
      "Flexible payment terms",
      "On-time delivery guarantee",
      "Clear communication throughout the order process",
      "Damage protection and insurance options",
      "After-sales support and follow-up",
      "Experience hassle-free transactions and reliable deliveries with VM ECOGROW."
    ]
  }
];

const icons = {
  "One of a Kind": CheckCircle2,
  "Our Packaging System": Package,
  "Terms of Delivery": Truck,
  "Our Quality": Award
}

export function Features() {
  return (
    <section className="bg-[#DACEC2] py-16 px-4 sm:px-8 md:px-16">
      <div className="container ">
        <h2 className="text-[#293E31] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {defaultFeatures.map((feature, index) => {
            const Icon = icons[feature.title];
            return (
              <div key={index} className="bg-[#FCF9F4] p-6 sm:p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-[#293E31]" />
                  <h3 className="text-[#293E31] text-xl sm:text-2xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#293E31] text-lg mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#293E31]">
                      <CheckCircle2 className="w-5 h-5 text-[#293E31] mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 