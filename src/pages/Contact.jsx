import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CheckCircle2 } from "lucide-react"
import MessageCard from "../components/MessageCard"
import EmailUs from "../components/sections/EmailUs"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Form submitted:", formData)
        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })
    }

    return (
        <main className="w-full">
            {/* Banner Image - Unchanged as requested */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden" id="top">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-center bg-cover md:bg-fixed"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeBanner/contactBanner/wnit8xx4jxfnc7tq7vks")`,
                    }}
                ></div>

                {/* Overlay with page title */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                            Reach out to VM ECOGROW for sustainable agricultural solutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Welcome Section */}
            {/* <section className="bg-[#DACEC2] pt-10 sm:pt-12 md:pt-16">
                <div className="container px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Welcome to VM ECOGROW</h2>
                        <p className="text-lg text-black">
                            We're here to assist you with all your agricultural needs and inquiries. Fill out the form below, and our
                            team will get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section> */}


            {/* Collaborate with Us Section */}
            <div className="bg-[#DACEC2] text-[#293E31] py-10 sm:py-12 md:py-16">
                <div className="container max-w-6xl px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-6 sm:mb-8"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#293E31]">
                             Collaborate with Us
                        </h2>
                        <div className="w-24 h-1 bg-[#FE8340] mx-auto mb-3"></div>

                        <p className="text-sm sm:text-base md:text-lg text-[#293E31] max-w-4xl mx-auto">
                            VM ECOGROW invites forward-thinking partners to join our mission in advancing sustainable agriculture and eco-friendly practices. By aligning with us, you gain access to a robust framework designed to amplify your impact while fostering mutual growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start max-w-5xl mx-auto"
                    >
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center md:text-left text-[#293E31]">
                                📩 Partnership Opportunities
                            </h3>
                            <h6 className="text-base sm:text-lg font-semibold text-center md:text-left text-[#293E31]">
                                We welcome collaborations across diverse models to suit your goals:
                            </h6>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-[#f47834] text-lg sm:text-xl">🔹</div>
                                    <div>
                                        <h4 className="font-medium text-[#293E31]">Distributorship Opportunities</h4>
                                        <p className="text-[#293E31]/70 text-xs sm:text-sm">Expand your reach with our certified
                                            organic product lines, backed by agronomist support and tailored
                                            marketing resources.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#f47834] text-lg sm:text-xl">🔹</div>
                                    <div>
                                        <h4 className="font-medium text-[#293E31]">Franchise Options</h4>
                                        <p className="text-[#293E31]/70 text-xs sm:text-sm">Leverage our proven systems and brand
                                            equity to establish a localized presence, supported by training and operational guidance.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#f47834] text-lg sm:text-xl">🔹</div>
                                    <div>
                                        <h4 className="font-medium text-[#293E31]">Bulk Supply Arrangements</h4>
                                        <p className="text-[#293E31]/70 text-xs sm:text-sm">Secure cost-effective,
                                            large-scale access to premium inputs for agricultural or commercial projects.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#f47834] text-lg sm:text-xl">🔹</div>
                                    <div>
                                        <h4 className="font-medium text-[#293E31]">Global Partnerships</h4>
                                        <p className="text-[#293E31]/70 text-xs sm:text-sm">Tap into cross-border synergies with
                                            our scalable solutions, adaptable to regional needs and sustainability standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-black p-4 sm:p-6 md:p-8 rounded-lg">
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#293E31] text-center">Why Partner With VM ECOGROW?</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#f47834] mt-1" />
                                    <p className="text-[#293E31]/70 text-sm sm:text-base"> <strong className="text-[#293E31]">Exclusive Benefits:</strong> Access cutting-edge innovations,
                                        including AI-driven tools for crop optimisation and real-time field monitoring.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#f47834] mt-1" />
                                    <p className="text-[#293E31]/70 text-sm sm:text-base"> <strong className="text-[#293E31]">Comprehensive Support:</strong> Gain insights from agronomy experts,
                                        product training, and sales enablement materials to drive market penetration.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#f47834] mt-1" />
                                    <p className="text-[#293E31]/70 text-sm sm:text-base"> <strong className="text-[#293E31]">Shared Success:</strong> Benefit from competitive incentives,
                                        including profit- sharing structures and early access to emerging technologies.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#f47834] mt-1" />
                                    <p className="text-[#293E31]/70 text-sm sm:text-base"> <strong className="text-[#293E31]">Sustainability Leadership:</strong> Collaborate with a brand
                                        committed to environmental stewardship, biodiversity, and climate-resilient practices.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <EmailUs />

            {/* Get in Touch Section */}
            <section className="bg-[#DACEC2] py-8 md:py-12">
                <div className="container px-4 md:px-8">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#293E31]">Get in Touch</h2>
                            <div className="w-24 h-1 bg-[#FE8340] mx-auto mb-3"></div>
                            <p className="text-lg text-[#293E31]/80 max-w-2xl mx-auto">
                                We're here to help with all your agricultural needs
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Call Us Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-[#FE8340]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Call Us</h3>
                                <div className="space-y-1 text-[#293E31]/80">
                                    <a href="tel:+447442590367" className="block hover:text-[#FE8340] transition-colors text-sm">+44 7442590367</a>
                                    <a href="tel:+447377420266" className="block hover:text-[#FE8340] transition-colors text-sm">+44 7377420266</a>
                                </div>
                            </motion.div>

                            {/* Email Us Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-[#FE8340]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Email Us</h3>
                                <div className="text-[#293E31]/80">
                                    <a href="mailto:connect@vmecogrow.com" className="block hover:text-[#FE8340] transition-colors text-sm">
                                        connect@vmecogrow.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* Visit Us Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <a href="https://www.google.com/maps/place/VM+ECOGROW+Headquarters/@52.9509805,-1.1822903,17z/data=!3m1!4b1!4m5!3m4!1s0x4879c3dffa0449e9:0xb721bcb687e7b3ba!8m2!3d52.9509805!4d-1.1801016" target="_blank" rel="noopener noreferrer" className="block hover:text-[#FE8340] transition-colors">
                                    <div className="flex justify-center mb-4">
                                        <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                            <MapPin className="w-6 h-6 text-[#FE8340]" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#293E31] mb-3">Visit Us</h3>
                                    <div className="text-[#293E31]/80 text-sm">
                                        <p>VM Group Europe Ltd, Innovation Park, Nottingham, NG7 2TU</p>
                                    </div>
                                </a>
                            </motion.div>

                            {/* Business Hours Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                        <Clock className="w-6 h-6 text-[#FE8340]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Business Hours</h3>
                                <div className="space-y-1 text-[#293E31]/80 text-sm">
                                    <p>Mon - Fri: 9 AM - 6 PM</p>
                                    <p>Sat: 10 AM - 4 PM</p>
                                    <p>Sun: Closed</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Message from Our Team Section */}
            <MessageCard />


            {/* Let's Grow Together Section */}
            <section className="bg-[#DACEC2]">
                <div className="container px-4 md:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className=""
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#293E31]">Let's Grow Together</h2>
                            <div className="w-24 h-1 bg-[#FE8340] mx-auto mb-6"></div>
                            <p className="text-lg text-[#293E31]/90 max-w-3xl mx-auto leading-relaxed">
                                Whether you're a distributor, entrepreneur, or global enterprise, VM ECOGROW
                                offers flexible collaboration models to align with your vision. Join us in reshaping
                                agriculture through innovation, sustainability, and shared prosperity. Reach out
                                today to explore how we can cultivate success—anywhere, anytime.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Connect With Us Section */}
            <section className="bg-[#DACEC2] py-12 md:py-16">
                <div className="container px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#293E31]">Connect With Us</h2>
                            <div className="w-24 h-1 bg-[#FE8340] mx-auto mb-6"></div>
                            <p className="text-lg text-[#293E31]/80 mb-8">
                                Follow us on social media for the latest updates, tips, and agricultural insights:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                        <Facebook className="w-6 h-6 text-[#FE8340] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-[#293E31] font-medium">Facebook</span>
                                </motion.a>

                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                        <Twitter className="w-6 h-6 text-[#FE8340] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-[#293E31] font-medium">Twitter</span>
                                </motion.a>

                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                        <Linkedin className="w-6 h-6 text-[#FE8340] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-[#293E31] font-medium">LinkedIn</span>
                                </motion.a>

                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg hover:shadow-lg transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="bg-[#FE8340]/10 p-3 rounded-full">
                                        <Instagram className="w-6 h-6 text-[#FE8340] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-[#293E31] font-medium">Instagram</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



        </main>
    )
}

