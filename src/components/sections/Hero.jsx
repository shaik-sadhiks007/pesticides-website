import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { ChevronRight } from "lucide-react"

export function Hero({ 
  title, 
  subtitle, 
  buttonText = "Learn More",
  buttonLink = "#",
  backgroundImage,
  className = "",
  containerClassName = ""
}) {
  return (
    <div className={`relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden ${className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Overlay with Motion Text */}
      <div className="absolute inset-0 bg-black/40">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`relative h-full flex items-center text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 ${containerClassName}`}
        >
          <div className="container ">
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mb-6 sm:mb-8"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                className="bg-[#f47834] hover:bg-[#e06724] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                onClick={() => window.location.href = buttonLink}
              >
                {buttonText} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 