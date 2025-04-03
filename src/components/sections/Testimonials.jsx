import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        id: 1,
        username: "@Angie T.",
        rating: 5,
        text: "As advertised... delivery was fast...very convenient.. definitely can buy again from this online seller.",
    },
    {
        id: 2,
        username: "@Goh J.",
        rating: 5,
        text: "Fast delivery. My 2nd purchase. Delivery guy just left the parcel on the bench outside my unit instead of putting it inside my main gate. Thanks seller for the free gift.",
    },
    {
        id: 3,
        username: "@florakid",
        rating: 5,
        text: "Shipping was fast and took only three days. Item is as described by the seller. Seller included an anti-fungi and bacteria probiotics as a free gift.",
    },
    {
        id: 4,
        username: "@mokster23",
        rating: 5,
        text: "Good stuff! High concentrate. Need to dilute with water and I applied to my plants. Looking good so far! Waiting to see if it will control my mealy bug issue.",
    },
    {
        id: 5,
        username: "@Mayank",
        rating: 5,
        text: "Item as described with 93% purity and just 2 ml for a litre of solution. Would like to recommend for all gardeners and plant lovers to get rid of infestations.",
    },
    {
        id: 6,
        username: "@leelynnkoi",
        rating: 5,
        text: "Quality: good. Suitability: good. Performance: good. Have not tried, but NBS is a trusted name. Plus free gift hooray.",
    },
    {
        id: 7,
        username: "@Chan",
        rating: 5,
        text: "Very effective! Mixed with water and into a spray bottle. Drove out all these pesky black ants and killed them in seconds! These ants that keep depositing the white furry sap-sucking insects that are killing my pandan plant! Now, waiting to see if it's effective against these white insects too.",
    },
    {
        id: 8,
        username: "@Tony C",
        rating: 5,
        text: "Great response and great product. It eased me off getting another agent to break off the neem oil. As we know, oil and water don't mix. This product already has the mixture agent added for easy use. Just 3-4 ml of neem to 1 litre of water. So don't waste your time buying neem oil that requires another agent to use. End up, you pay more. Recommend anyone who prefers convenience. Will buy again after I finish this bottle. Thank you seller for your wonderful product.",
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
                    Customer Reviews
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
