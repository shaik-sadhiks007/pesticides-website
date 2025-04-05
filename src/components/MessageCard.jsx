export default function MessageCard() {
    return (
        <section className="bg-[#DACEC2] py-12 md:py-16">
            <div className="container px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#293E31] mb-4 text-center">Message from Our Team</h2>
                    <div className="w-36 h-1 bg-[#FE8340] mx-auto mb-6"></div>

                    <div className="relative">
                        {/* Card with folded corner effect */}
                        <div className="bg-[#F9F6F1] rounded-3xl p-8 md:p-10 shadow-md relative overflow-hidden">
                            {/* Folded corner effect */}
                            <div className="absolute top-0 left-0 w-16 h-16 bg-[#E5DCD1]">
                                <div className="absolute top-0 left-0 w-16 h-16 bg-[#F9F6F1] rounded-br-3xl"></div>
                            </div>


                            <div className="pt-4 pl-4">
                                <p className="text-[#5A7260] mb-8 text-lg">
                                    At VM ECOGROW, we are committed to providing innovative and sustainable agricultural solutions. Our
                                    team of experts is always ready to assist you with personalised advice and support. Whether you're
                                    looking for product information, technical assistance, or want to explore business opportunities,
                                    we're here to help.
                                </p>

                                <p className="text-[#5A7260] mb-10 text-lg">
                                    We value your feedback and inquiries, as they help us continually improve our services and products.
                                    Thank you for choosing VM ECOGROW India as your agricultural partner. We look forward to hearing from
                                    you and contributing to your farming success.
                                </p>

                                <div className="text-right text-[#5A7260] font-semibold italic text-lg pr-4">— The VM ECOGROW Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

