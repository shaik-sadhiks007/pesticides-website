import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight, Search, Phone, Mail } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { productCategories } from "../data/productsData"
import { useProducts } from "../context/ProductContext"
import { useSearch } from "../context/SearchContext"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdownPositions, setDropdownPositions] = useState({})
  const dropdownRefs = useRef({})
  const searchRef = useRef(null)
  const { handleCategorySelect, handleSubcategorySelect } = useProducts()
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    showSearchResults,
    setShowSearchResults,
    performSearch,
    clearSearch
  } = useSearch()

  // Close dropdowns when location changes
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }, [location])

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setShowSearchResults])

  // Auto-search as user types
  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (searchQuery.trim()) {
        performSearch(searchQuery);
      } else {
        setShowSearchResults(false);
      }
    }, 300); // Add a debounce of 300ms

    return () => clearTimeout(searchTimeout);
  }, [searchQuery, performSearch, setShowSearchResults]);

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
    if (path === "/media") {
      return location.pathname.startsWith("/media") ? "text-[#FE8340] font-semibold" : "text-white hover:text-[#FE8340] transition-colors"
    }
    return location.pathname === path ? "text-[#FE8340] font-semibold" : "text-white hover:text-[#FE8340] transition-colors"
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset'
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
    // Force close all dropdowns by removing hover classes
    const dropdowns = document.querySelectorAll('.group-hover\\:opacity-100, .group-hover\\:visible')
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('opacity-100', 'visible')
      dropdown.classList.add('opacity-0', 'invisible')
    })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      performSearch(searchQuery)
    }
  }

  const handleSearchResultClick = (path) => {
    // Close the search results dropdown
    setShowSearchResults(false)
    
    // Clear the search query
    clearSearch()
    
    // Navigate to the selected path
    navigate(path)
    
    // Force a scroll to top when navigating
    window.scrollTo(0, 0)
  }

  return (
    <header className="w-full">
      {/* Desktop Navigation (lg and above) */}
      <div className="hidden lg:flex bg-[#293E31] w-full">
        {/* Logo Section with Orange Background */}
        <div className="bg-[#FE8340] flex-shrink-0 w-[300px] xl:w-[375px] flex items-center">
          <Link to="/" className="flex items-center gap-2 xl:gap-4 px-4 xl:px-6 py-4 w-full group" onClick={handleLinkClick}>
            <img
              src="https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/logo/eckhtn4r99sznxbyfru7"
              alt="VM ECOGROW Logo"
              className="w-14 h-14 xl:w-16 xl:h-16 object-contain transition-transform group-hover:scale-105"
            />
            <div className="min-w-0">
              <h1 className="text-[#293E31] font-bold text-xl xl:text-3xl truncate">
                VM ECOGROW
              </h1>
              <p className="text-[#293E31] text-sm xl:text-sm truncate">
                Smart Inputs, Sustainable Outputs
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation and Search Section */}
        <div className="flex-1 flex flex-col min-w-0 ">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-4 xl:space-x-6 px-4 xl:px-6 py-4">
            <Link to="/" className={`${isActive("/")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>Home</Link>
            <div className="relative group">
              <Link
                to="/products"
                className={`${location.pathname.startsWith("/products") ? "text-[#FE8340]" : "text-white hover:text-[#FE8340]"} text-sm xl:text-sm flex items-center gap-1 whitespace-nowrap`}
                onClick={handleLinkClick}
              >
                Products
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-[550px] lg:w-[600px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 lg:p-6">
                  <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8">
                    {Object.entries(productCategories).map(([categoryKey, category]) => (
                      <div key={categoryKey} className="relative">
                        <Link
                          to={`/products/${categoryKey}`}
                          className="text-[#293E31] font-bold text-lg uppercase lg:text-xl mb-4 lg:mb-6 hover:text-[#FE8340] transition-colors block"
                          onClick={handleLinkClick}
                        >
                          {category.name}
                        </Link>

                        <div className="space-y-3 lg:space-y-4">
                          {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => (
                            <div key={subcategoryKey} className="relative group/subcategory hover:z-[70]">
                              <Link
                                to={`/products/${categoryKey}/${subcategoryKey}`}
                                className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover/subcategory:text-[#293E31]"
                                onClick={handleLinkClick}
                              >
                                <span>{subcategory.name}</span>
                                <ChevronRight size={16} className="opacity-0 group-hover/subcategory:opacity-100 transition-opacity" />
                              </Link>

                              {/* Products Popup */}
                              <div
                                ref={el => dropdownRefs.current[`subcategory-${categoryKey}-${subcategoryKey}`] = el}
                                className={cn(
                                  "absolute bg-white rounded-lg shadow-xl opacity-0 invisible group-hover/subcategory:opacity-100 group-hover/subcategory:visible transition-all duration-200 z-[60]",
                                  dropdownPositions[`subcategory-${categoryKey}-${subcategoryKey}`] === 'right'
                                    ? 'left-[calc(100%-8px)] top-0'
                                    : 'right-[calc(100%-8px)] top-0'
                                )}
                                style={{ width: '250px' }}
                              >
                                {/* Bridge element */}
                                <div className={cn(
                                  "absolute",
                                  dropdownPositions[`subcategory-${categoryKey}-${subcategoryKey}`] === 'right'
                                    ? '-left-6 top-0 w-6 h-full bg-transparent'
                                    : '-right-6 top-0 w-6 h-full bg-transparent'
                                )} />

                                <div className="relative bg-white rounded-lg">
                                  <div className="p-4">
                                    <h4 className="text-[#293E31] font-semibold mb-3">{subcategory.name}</h4>
                                    <div className="space-y-2">
                                      {subcategory.products.map((product) => (
                                        <Link
                                          key={product.id}
                                          to={`/products/${categoryKey}/${subcategoryKey}/${product.id}`}
                                          className="text-[#293E31] uppercase hover:text-[#FE8340] block transition-colors text-sm"
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
            <Link to="/about" className={`${isActive("/about")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>About</Link>
            <Link to="/crop-programs" className={`${isActive("/crop-programs")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>Crop Programs</Link>
            <Link to="/services" className={`${isActive("/services")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>Services</Link>
            <Link to="/media" className={`${isActive("/media")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>Media</Link>
            <Link to="/contact-us" className={`${isActive("/contact-us")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="px-4 xl:px-6 py-3 flex justify-center">
            {/* <div className="px-4 xl:px-6 py-3 border-t border-[#3a4f3f]"> */}

            <div className="relative w-full max-w-xl mx-auto" ref={searchRef}>
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Search products or services"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10 bg-[#3a4f3f] border-[#3a4f3f] text-white placeholder:text-gray-300 focus-visible:ring-[#FE8340] rounded-full"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="absolute right-0 top-0 h-full text-white hover:text-[#FE8340] hover:bg-transparent"
                  >
                    <Search size={18} />
                  </Button>
                </div>
              </form>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSearchResultClick(result.path);
                      }}
                      className="block p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 transition-colors"
                    >
                      <div className="font-medium text-[#293E31]">{result.title}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="hidden lg:flex flex-col text-white px-4 xl:px-6 py-4 justify-center min-w-[220px]">
          {/* <div className="hidden lg:flex flex-col text-white px-4 xl:px-6 py-4 justify-center border-l border-[#3a4f3f] min-w-[220px]"> */}

          <div className="flex flex-col gap-2">
            <a href="tel:+447442590367" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2 whitespace-nowrap">
              <Phone size={16} className="text-[#FE8340] flex-shrink-0" />
              +44 7442590367
            </a>
            <a href="tel:+447377420266" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2 whitespace-nowrap">
              <Phone size={16} className="text-[#FE8340] flex-shrink-0" />
              +44 7377420266
            </a>
          </div>
          <a href="mailto:connect@vmecogrow.com" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2 whitespace-nowrap mt-2">
            <Mail size={16} className="text-[#FE8340] flex-shrink-0" />
            connect@vmecogrow.com
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="lg:hidden bg-[#FE8340] w-full p-4 flex justify-between items-center shadow-md">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/logo/eckhtn4r99sznxbyfru7"
            alt="VM ECOGROW Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <div>
            <h1 className="text-[#293E31] font-bold text-lg md:text-xl">
              VM ECOGROW
            </h1>
            <p className="text-[#293E31] text-xs md:text-sm">
              Smart Inputs, Sustainable Outputs
            </p>
          </div>
        </Link>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-[#293E31] p-2 rounded-full hover:bg-[#ff9f6a] transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile/Tablet Off-canvas Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      >
        {/* Off-canvas Content */}
        <div
          className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-[#293E31] transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl overflow-hidden`}
          onClick={e => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-[#3a4f3f]">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/logo/iq9mm2k96zmximny8dbr"
                alt="VM ECOGROW Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <div>
                <h2 className="text-white font-bold text-lg md:text-xl">VM ECOGROW</h2>
                <p className="text-white text-xs md:text-sm">Smart Inputs, Sustainable Outputs</p>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FE8340] transition-colors p-2 rounded-full hover:bg-[#3a4f3f]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b border-[#3a4f3f]">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search products or services"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 bg-[#3a4f3f] border-[#3a4f3f] text-white placeholder:text-gray-300 focus-visible:ring-[#FE8340] rounded-full"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full text-white hover:text-[#FE8340] hover:bg-transparent"
                >
                  <Search size={18} />
                </Button>
              </div>
            </form>

            {/* Search Results */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="mt-2 bg-white rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    to={result.path}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // First close the menu
                      setIsMenuOpen(false);
                      document.body.style.overflow = 'unset';
                      // Then navigate after a short delay to ensure the menu is closed
                      setTimeout(() => {
                        handleSearchResultClick(result.path);
                      }, 100);
                    }}
                    className="block p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
                  >
                    <div className="font-medium text-[#293E31]">{result.title}</div>
                    <div className="text-sm text-gray-600">{result.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
            <Link
              to="/"
              className={`${isActive("/")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <div className="border-b border-[#3a4f3f] last:border-b-0">
              <details className="group">
                <summary className={`${isActive("/products")} text-lg py-2 flex justify-between items-center cursor-pointer`}>
                  <span>Products</span>
                  <ChevronDown
                    size={20}
                    className="transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="pl-4 space-y-3 pt-2 pb-2">
                  {Object.entries(productCategories).map(([categoryKey, category]) => (
                    <div key={categoryKey} className="mb-3">
                      <Link
                        to={`/products/${categoryKey}`}
                        className="text-[#FE8340] font-semibold block hover:text-white"
                        onClick={handleLinkClick}
                      >
                        {category.name}
                      </Link>
                      <div className="pl-4 space-y-2 mt-2">
                        {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => (
                          <div key={subcategoryKey}>
                            <details className="group/sub">
                              <summary className="text-white hover:text-[#FE8340] cursor-pointer flex justify-between items-center">
                                <span>{subcategory.name}</span>
                                <ChevronDown size={16} className="transition-transform duration-300 group-open/sub:rotate-180" />
                              </summary>
                              <div className="pl-4 space-y-2 pt-1">
                                {subcategory.products.map((product) => (
                                  <Link
                                    key={product.id}
                                    to={`/products/${categoryKey}/${subcategoryKey}/${product.id}`}
                                    className="text-gray-300 hover:text-[#FE8340] text-sm block"
                                    onClick={handleLinkClick}
                                  >
                                    {product.name}
                                  </Link>
                                ))}
                              </div>
                            </details>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>
            <Link
              to="/about"
              className={`${isActive("/about")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/crop-programs"
              className={`${isActive("/crop-programs")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0`}
              onClick={handleLinkClick}
            >
              Crop Programs
            </Link>
            <Link
              to="/services"
              className={`${isActive("/services")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              to="/media"
              className={`${isActive("/media")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0`}
              onClick={handleLinkClick}
            >
              Media
            </Link>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Information */}
          <div className="p-4 border-t border-[#3a4f3f] mt-auto bg-[#293E31]">
            <div className="flex flex-col text-white ">
              <div className="flex flex-col md:flex-row md:gap-4 space-y-3">
                <a href="tel:+447442590367" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2">
                  <Phone size={16} className="text-[#FE8340] flex-shrink-0" />
                  +44 7442590367
                </a>
                <a href="tel:+447377420266" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2">
                  <Phone size={16} className="text-[#FE8340] flex-shrink-0" />
                  +44 7377420266
                </a>
              </div>
              <a href="mailto:connect@vmecogrow.com" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2 mt-3 md:mt-0">
                <Mail size={16} className="text-[#FE8340] flex-shrink-0" />
                connect@vmecogrow.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
