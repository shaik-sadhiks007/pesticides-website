import { Link } from "react-router-dom"
import FarmIcon from "../FarmIcon"
import { Button } from "../ui/Button"

export function Commitment() {
    return (
        <section className="bg-[#FCF9F4] py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 min-h-[50vh] sm:min-h-[60vh] md:min-h-[50vh] lg:min-h-[75vh]">
            <div className="container  flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 md:pr-8">
                    <h2 className="text-[#293E31] text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                        Commitment to Sustainable Agriculture
                    </h2>
                    <p className="text-[#293E31] text-base sm:text-lg mb-4 sm:mb-6">
                        At VM Group Europe Ltd, we are committed to sustainable agricultural practices. Our products are designed
                        to support eco-friendly farming methods, ensuring the health of the soil, crops, and the environment. We
                        believe in the importance of sustainable agriculture for generations to come.
                    </p>
                    <Link to='/about'>
                        <Button className="bg-[#FE8340] hover:bg-[#e06724] text-white w-full sm:w-auto px-6 py-2.5 sm:py-3">
                            Learn More
                        </Button>
                    </Link>

                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <FarmIcon width="100%" height="300" className="max-w-[300px] md:max-w-[411px]" />
                </div>
            </div>
        </section>
    )
} 