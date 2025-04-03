import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "../ui/Button"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Import banner images
import banner1 from '../../assets/Carousel-Image1.jpg'
import banner2 from '../../assets/Carousel-Image2.jpg'
import banner3 from '../../assets/Carousel-Image3.jpg'
import banner4 from '../../assets/Carousel-Image4.jpg'

const slides = [
  {
    image: banner1,
    title: "Premium Organic Inputs for Thriving Growth",
    subtitle: "Sustainable Solution for Agriculture and Horticulture",
    cta: "EXPLORE OUR PRODUCTS",
    ctaLink: "/products"
  },
  {
    image: banner2,
    title: "Elevate your Amenity spaces with excellence",
    subtitle: "Transform golf courses, turfs, landscapes, and ornaments with our Amenities inputs",
    cta: "Explore our Amenity Range",
    ctaLink: "/products/sportsAndTurf"
  },
  {
    image: banner3,
    title: "Tailored Solutions for Every Soil, Turf and Crop Challenge",
    subtitle: "Exceptional Programs for Agriculture, Horticulture and Amenity spaces",
    cta: "Get started today",
    ctaLink: "/services"
  },
  {
    image: banner4,
    title: "Global Reach, Local Expertise: Seamless Exports Anywhere",
    subtitle: "Looking for a Franchise, Distributorship, or Collaboration? We Deliver Bulk Supplies and Build Partnerships Worldwide with Ease",
    cta: "Partner with Us Today",
    ctaLink: "/contact-us"
  }
]

export function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
      {/* Slides */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => {
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div
                className={`absolute inset-0 bg-black/30 transition-opacity duration-1000`}
              ></div>

              {/* Content */}
              <div className={`absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}>
                <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl leading-tight tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-6 max-w-xl font-medium tracking-wide">
                  {slide.subtitle}
                </p>
                <div>
                  <Link 
                    to={slides[currentSlide].ctaLink}
                    onClick={(e) => {
                      console.log('Navigating to:', slides[currentSlide].ctaLink);
                      console.log('Current slide:', currentSlide);
                    }}
                  >
                    <Button className="bg-white cursor-pointer text-[#293E31] hover:bg-gray-100 mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-auto sm:w-auto px-4 sm:px-6 text-sm sm:text-base md:text-lg py-2 sm:py-2.5 md:py-3">
                      {slides[currentSlide].cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex items-center space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <ChevronRight
          className="bg-[#FE8340] text-white rounded-full p-1 cursor-pointer hover:bg-[#e06724] transition-colors"
          size={16}
          strokeWidth={2}
          fill="none"
          aria-hidden="true"
          onClick={nextSlide}
        />
      </div>
    </section>
  )
} 