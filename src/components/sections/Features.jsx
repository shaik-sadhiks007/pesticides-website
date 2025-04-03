import { CheckCircle2, Package, Truck, Award } from "lucide-react"

const features = [
  {
    title: "One of a Kind",
    description: "How we control size, ash, iodine, quantity",
    details: [
      "We have professional crushing machine to control the size.",
      "For ash, we have screening machine and can process with washed way.",
      "For iodine, we have temperature control cabinet to change the degree to get the right iodine. Besides, our tester worker will test the iodine for every batch of production.",
      "For quantity, every bag will be weighted and noted."
    ]
  },
  {
    title: "Our Packaging System",
    description: "Customizable packaging solutions",
    details: [
      "Generally, We use HDPE BAGS with Liner inserts of 25kg/bag, 50kg/bag or JUMBO BAGS.",
      "We can completely Customise the packaging and print the bags according to your requirements."
    ]
  },
  {
    title: "Terms of Delivery",
    description: "Flexible delivery options",
    details: [
      "We accept FOB, CFR, CIF, EXW, etc. You can choose the most convenient way for you.",
      "We are always ready with humongous stock of 1,000 M.T. and to take bulk orders 24x7.",
      "We can supply and transport said quantity to any country at any point of time."
    ]
  },
  {
    title: "Our Quality",
    description: "Commitment to excellence",
    details: [
      "We are fully committed to a total quality approach, starting from the first phone call going all the way through to making sure that the delivered product meets and exceeds the specified requirements.",
      "Our strict quality assurance procedures ensure you get a quality product."
    ]
  }
]

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = icons[feature.title]
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
            )
          })}
        </div>
      </div>
    </section>
  )
} 