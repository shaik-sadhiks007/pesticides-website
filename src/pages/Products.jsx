import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ShoppingCart, User, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"  
import NutriLifeBAM1L from "../assets/productImages/Nutri-LifeBAM1L.png"
import ProductsBanner from "../assets/productImages/productBanner.jpg"
import { useData } from "../context/DataContext"
import { useProductNavigation } from "../components/sections/ProductRange"

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { products } = useData()
  const handleProductClick = useProductNavigation()

  useEffect(() => {
    setIsLoaded(true)
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${ProductsBanner})`,
          }}
        >
        </div>
        {/* Overlay with Motion Text */}
        <div className="absolute inset-0 bg-black/40">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex items-center text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
          >
            <div className="container ">
              <motion.h1
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              >
                Our Product Range
              </motion.h1>
              <motion.p
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base sm:text-lg md:text-xl max-w-3xl mb-6 sm:mb-8"
              >
                Discover our comprehensive range of agricultural and horticultural solutions designed for optimal plant growth and sustainable farming.
              </motion.p>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Categories Section */}
      {products.map((category, categoryIndex) => (
        <section key={category.id} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-[#DACEC2]' : 'bg-[#FCF9F4]'}`}>
          <div className="container  px-8">
            <h2 className="text-[#293E31] text-3xl font-semibold mb-12 text-center">{category.category}</h2>
            
            {/* Subcategories */}
            {category.subcategories.map((subcategory, subcategoryIndex) => (
              <div key={subcategory.id} className="mb-16">
                <h3 className="text-2xl font-semibold text-[#293E31] mb-8">{subcategory.name}</h3>
                
                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {subcategory.products.map((product, productIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                      transition={{ delay: 0.2 + productIndex * 0.1, duration: 0.5 }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
                        <img
                          src={product.image || NutriLifeBAM1L}
                          alt={product.name}
                          className="object-contain max-h-full w-[200px] h-[400px]"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-[#1e3a29] mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">
                          from <span className="text-2xl font-bold text-[#1e3a29]">£{product.price.toFixed(2)}</span>
                        </p>
                        <div className="flex-grow">
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                        </div>
                        <Button className="w-full bg-[#f47834] hover:bg-[#e06724] text-white mt-auto">
                          View Details <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Products
