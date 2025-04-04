import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        id: 1,
        username: "Maria Santos, Philippines (Pepper Farmer)",
        rating: 5,
        text: "NBS SIZE PLUS™ has significantly improved the size and quality of our peppers. The application, boosted by NBS MAX SPREADER™, is consistent and effective, ensuring uniform growth. Plus, NBS BUG SHIELD™ has been our go-to solution to improve resilience."
    },
    {
        id: 2,
        username: "Ahmed Al-Mansour, Saudi Arabia (Date Palm Plantation Owner)",
        rating: 5,
        text: "Our date palms have never been healthier, thanks to NBS NEEM FERTILISER™. It revitalizes the soil and provides essential nutrients for robust growth. We also use NBS BIO PROTECT™ to strengthen the palms' natural defences against environmental stressors."
    },
    {
        id: 3,
        username: "Liam O'Connor, Australia (Maize Farm Owner)",
        rating: 5,
        text: "The crop programs are unmatched. Their team developed a tailored strategy that includes NBS PSEUDO TECH™, NBS ROOT MAX, NBS Yield booster, NBS K-35, NBS Bio stimulator, NBS Microshield. This combination has not only enhanced plant immunity but also stimulated robust root development in our farm. Highly recommended their kit."
    },
    {
        id: 4,
        username: "Priya Ramdin, Mauritius (Resort Landscaper)",
        rating: 5,
        text: "VMEcogrow understands the importance of plant health in a luxury resort setting. Their custom program using NBS MICROSHIELD™ and NBS BIO-GUARD™ has kept our ornamental plants vibrant and resilient. We also appreciate their prompt and reliable service."
    },
    {
        id: 5,
        username: "Chen Wei, Thailand (Vineyard Owner)",
        rating: 5,
        text: "NBS MAX SPREADER™ has been a game-changer in our vineyard. We can't afford to waste any product, and it guarantees that our NBS BIO-DEFENDER™ and other treatments reach every part of our vines effectively. It really stretches our budget."
    },
    {
        id: 6,
        username: "Janine Tan, Singapore (Vegetable Grower)",
        rating: 5,
        text: "Using NBS BIO GUARD™ has been a huge help for my vegetable crops. It's effective and easy to use as there is no need to wait before harvest!"
    },
    {
        id: 7,
        username: "James Thompson, UK",
        rating: 5,
        text: "The combination of NBS PSEUDO-TECH™ and NBS MICROSHIELD™ has transformed our golf course maintenance. The turf is healthier, disease-resistant, and requires less frequent chemical treatments. It's a win-win for our budget and the environment! The high tip will be to add Max spreader as well to increase the efficiency and reduce the cost."
    }
];


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + reviews.length) % reviews.length);
    };

    return (
        <div className="relative overflow-hidden py-8 sm:py-12 md:py-16 bg-[#DACEC2]">
            <div className="container  px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1e3a29] mb-6 sm:mb-8 md:mb-12">
                    Customer Testimonials
                </h2>

                <div className="relative h-[150px] mx-auto sm:h-[175px] md:h-[200px] max-w-3xl ">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full"
                        >
                            <div className="text-center px-4">
                                <div className="flex justify-center mb-2 sm:mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#f47834] fill-[#f47834]" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">{reviews[currentIndex].text}</p>
                                <p className="text-[#1e3a29] font-semibold text-sm sm:text-base">{reviews[currentIndex].username}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-2">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentIndex ? "bg-[#f47834]" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 hidden md:flex justify-between pointer-events-none">
                    <button
                        onClick={() => paginate(-1)}
                        className="p-2 rounded-full bg-white shadow-lg pointer-events-auto hover:bg-gray-50 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-[#1e3a29]" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="p-2 rounded-full bg-white shadow-lg pointer-events-auto hover:bg-gray-50 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-[#1e3a29]" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
