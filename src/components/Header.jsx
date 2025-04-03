import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, ChevronUp } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { productCategories } from "../data/productsData"
import { useProducts } from "../context/ProductContext"

export function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdownPositions, setDropdownPositions] = useState({})
  const dropdownRefs = useRef({})
  const { handleCategorySelect, handleSubcategorySelect } = useProducts()

  // Close dropdowns when location changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    const calculatePositions = () => {
      const positions = {}
      Object.keys(dropdownRefs.current).forEach(key => {
        const element = dropdownRefs.current[key]
        if (element && key.startsWith('subcategory-')) {
          // Extract category number from the key (first or second category)
          const categoryNum = key.split('-')[1] === '0' ? 'first' : 'second'
          
          // Force right for first category, left for second category
          positions[key] = categoryNum === 'first' ? 'right' : 'left'
        }
      })
      setDropdownPositions(positions)
    }

    // Initial calculation
    calculatePositions()
    
    // Add resize listener
    window.addEventListener('resize', calculatePositions)

    // Cleanup
    return () => {
      window.removeEventListener('resize', calculatePositions)
    }
  }, [])

  const isActive = (path) => {
    return location.pathname === path ? "text-[#FE8340] font-semibold" : "text-white hover:text-[#FE8340]"
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset'
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    // Force close all dropdowns by removing hover classes
    const dropdowns = document.querySelectorAll('.group-hover\\:opacity-100, .group-hover\\:visible')
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('opacity-100', 'visible')
      dropdown.classList.add('opacity-0', 'invisible')
    })
  }

  return (
    <header className="flex flex-col md:flex-row bg-[#293E31] h-hidden md:h-40">
      {/* Logo Section */}
      <div className="bg-[#FE8340] w-full md:w-50 lg:w-120 p-4 md:p-3 flex justify-between items-center">
        <div className="w-full md:w-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/logo/eckhtn4r99sznxbyfru7"
                alt="VM ECOGROW Logo"
                className="w-16 h-16 md:w-12 md:h-12 lg:w-25 lg:h-25 object-contain"
              />
              <div>
                <h1 className="text-[#293E31] font-bold text-4xl md:text-lg lg:text-4xl">
                  VM ECOGROW
                </h1>
                <p className="text-[#293E31] block text-sm lg:text-xl">
                  Smart Inputs, Sustainable Outputs
                </p>
                  <p className="text-[#293E31] block text-sm lg:text-base">
                    Tel: +44 7442590367 
                  </p>
                  <p className="text-[#293E31] block text-sm lg:text-base">
                    Email: connect@vmecogrow.com
                  </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-[#293E31]"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* <p className="text-[#293E31] text-2xl mt-1 hidden md:block">
            Smart Inputs, Sustainable Outputs
          </p> */}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="flex-1 hidden md:flex justify-between items-center px-6">
        <nav className="flex space-x-6">
          <Link to="/" className={`${isActive("/")} text-sm lg:text-base`} onClick={handleLinkClick}>Home</Link>
          <div className="relative group">
            <Link 
              to="/products" 
              className={`${isActive("/products")} text-sm lg:text-base flex items-center gap-1`}
              onClick={handleLinkClick}
            >
              Products
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-6">
                <div className="grid grid-cols-2 gap-x-8">
                  {Object.entries(productCategories).map(([categoryKey, category]) => (
                    <div key={categoryKey} className="relative">
                      <Link 
                        to={`/products/${categoryKey}`}
                        className="text-[#293E31] font-bold text-xl mb-6 hover:text-[#FE8340] transition-colors block"
                        onClick={handleLinkClick}
                      >
                        {category.name}
                      </Link>
                      
                      <div className="space-y-4">
                        {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => (
                          <div key={subcategoryKey} className="relative group/subcategory hover:z-[70]">
                            <Link 
                              to={`/products/${categoryKey}/${subcategoryKey}`}
                              className="text-[#FE8340] font-semibold block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover/subcategory:text-[#293E31]"
                              onClick={handleLinkClick}
                            >
                              {subcategory.name}
                              <ChevronRight size={16} className="opacity-0 group-hover/subcategory:opacity-100 transition-opacity" />
                            </Link>

                            {/* Products Popup */}
                            <div 
                              ref={el => dropdownRefs.current[`subcategory-${categoryKey}-${subcategoryKey}`] = el}
                              className={`absolute bg-white rounded-lg shadow-lg opacity-0 invisible group-hover/subcategory:opacity-100 group-hover/subcategory:visible transition-all duration-200 z-[60] ${
                                dropdownPositions[`subcategory-${categoryKey}-${subcategoryKey}`] === 'right'
                                  ? 'left-[calc(100%-8px)] top-0'
                                  : 'right-[calc(100%-8px)] top-0'
                              }`}
                              style={{ width: '250px' }}
                            >
                              {/* Bridge element */}
                              <div className={`absolute ${
                                dropdownPositions[`subcategory-${categoryKey}-${subcategoryKey}`] === 'right'
                                  ? '-left-6 top-0 w-6 h-full bg-transparent'
                                  : '-right-6 top-0 w-6 h-full bg-transparent'
                              }`} />

                              <div className="relative bg-white rounded-lg">
                                <div className="p-4">
                                  <h4 className="text-[#293E31] font-semibold mb-3">{subcategory.name}</h4>
                                  <div className="space-y-2">
                                    {subcategory.products.map((product) => (
                                      <Link
                                        key={product.id}
                                        to={`/products/${categoryKey}/${subcategoryKey}/${product.id}`}
                                        className="text-[#293E31] hover:text-[#FE8340] block transition-colors text-sm"
                                        onClick={handleLinkClick}
                                      >
                                        {product.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link to="/about" className={`${isActive("/about")} text-sm lg:text-base`} onClick={handleLinkClick}>About Us</Link>
          <Link to="/crop-programs" className={`${isActive("/crop-programs")} text-sm lg:text-base`} onClick={handleLinkClick}>Crop Programs</Link>
          <Link to="/services" className={`${isActive("/services")} text-sm lg:text-base`} onClick={handleLinkClick}>Services</Link>
          <Link to="/media" className={`${isActive("/media")} text-sm lg:text-base`} onClick={handleLinkClick}>Media</Link>
          <Link to="/contact-us" className={`${isActive("/contact-us")} text-sm lg:text-base`} onClick={handleLinkClick}>Contact Us</Link>
          {/* <Link to="/email-us" className={`${isActive("/email-us")} text-sm lg:text-base`} onClick={handleLinkClick}>Email Us</Link> */}
        </nav>
      </div>

      {/* Mobile Off-canvas Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      >
        {/* Off-canvas Content */}
        <div
          className={`fixed inset-y-0 right-0 w-full bg-[#293E31] transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-4 text-white hover:text-[#FE8340] transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center justify-center h-full">
            <Link
              to="/"
              className={`${isActive("/")} text-2xl mb-8 transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/products"
                className={`${isActive("/products")} text-2xl mb-8 transform transition-all duration-300 delay-75 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} flex items-center gap-2`}
                onClick={handleLinkClick}
              >
                Products
                <ChevronDown size={20} className="transition-transform group-hover:rotate-180" />
              </Link>
              {/* Mobile Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  {Object.entries(productCategories).map(([categoryKey, category]) => (
                    <div key={categoryKey} className="mb-4">
                      <h3 className="text-[#293E31] font-semibold mb-2">{category.name}</h3>
                      <div className="space-y-2">
                        {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => (
                          <div key={subcategoryKey} className="ml-4">
                            <Link
                              to={`/products/${categoryKey}/${subcategoryKey}`}
                              className="text-gray-700 hover:text-[#FE8340] block py-1"
                              onClick={handleLinkClick}
                            >
                              {subcategory.name}
                            </Link>
                            <div className="ml-4 space-y-1">
                              {subcategory.products.map((product) => (
                                <Link
                                  key={product.id}
                                  to={`/products/${categoryKey}/${subcategoryKey}/${product.id}`}
                                  className="text-sm text-gray-600 hover:text-[#FE8340] block py-0.5"
                                  onClick={handleLinkClick}
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className={`${isActive("/about")} text-2xl mb-8 transform transition-all duration-300 delay-100 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <Link
              to="/crop-programs"
              className={`${isActive("/crop-programs")} text-2xl mb-8 transform transition-all duration-300 delay-150 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              onClick={handleLinkClick}
            >
              Crop Programs
            </Link>
            <Link
              to="/services"
              className={`${isActive("/services")} text-2xl mb-8 transform transition-all duration-300 delay-150 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              to="/media"
              className={`${isActive("/media")} text-2xl mb-8 transform transition-all duration-300 delay-150 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              onClick={handleLinkClick}
            >
              Media
            </Link>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-2xl transform transition-all duration-300 delay-200 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
            {/* <Link
              to="/email-us"
              className={`${isActive("/email-us")} text-2xl transform transition-all duration-300 delay-250 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              onClick={handleLinkClick}
            >
              Email Us
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  )
} 