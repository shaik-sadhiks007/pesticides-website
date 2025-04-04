import { Image } from "lucide-react"
import { Button } from "../components/ui/Button"
import ContactBanner from "../assets/contactUsImage.jpg"
import EmailUs from "../components/sections/EmailUs"

export function Contact() {
    return (
        <div>
            {/* Banner Image */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden" id="top">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-center bg-cover md:bg-fixed"
                    style={{
                        backgroundImage: `url(${ContactBanner})`,
                    }}
                ></div>
            </div>

            {/* Two Column Section */}
            <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#FCF9F4] p-6 sm:p-8 md:p-12">
                    <h2 className="text-[#293E31] text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                        VM Group Europe Ltd - Organic Agricultural Inputs
                    </h2>
                    <p className="text-[#293E31] text-sm sm:text-base leading-relaxed">
                        VM Group Europe Ltd envisions a future where sustainable, efficient agriculture is accessible to every
                        farmer. As a leading manufacturer of certified organic Fertilisers, pesticides, soil boosters, and
                        regulators, we provide research-backed, chemical-free solutions that enhance soil health and crop vitality.
                        Our cost-effective products cater to manufacturers, distributors, retailers, nurseries, golf courses,
                        councils, and landscape areas, ensuring high yields with sustainability at the core.
                    </p>
                </div>
                <div className="bg-[#293E31] p-6 sm:p-8 md:p-12 text-white">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Our Range of Products</h2>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Explore our wide range of organic agricultural inputs, including Organic Fertilisers, Insecticides,
                        Fungicides, Microbials, Humates, Soil Boosters, and regulators. Our products are meticulously developed to
                        enhance soil health, promote plant growth, and support sustainable agricultural practices. We are committed
                        to offering high-quality, environmentally friendly solutions to meet the diverse needs of our customers.
                    </p>
                </div>
            </section>

            {/* Contact Form */}
            <EmailUs />
        </div>
    )
} 