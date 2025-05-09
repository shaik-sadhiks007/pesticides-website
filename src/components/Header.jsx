import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight, Search, Phone, Mail } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { productCategories } from "../data/productsData"
import { useProducts } from "../context/ProductContext"
import { useSearch } from "../context/SearchContext"
import { Input } from "./ui/input"
import { Button } from "./ui/Button"
import { cn } from "../lib/utils"

// Add Safari-specific styles
const safariStyles = `
  @supports (-webkit-hyphens:none) {
    details > summary::-webkit-details-marker,
    details > summary::marker {
      display: none !important;
    }
    
    details > summary {
      list-style: none !important;
    }
    
    .mobile-nav-link,
    details > summary,
    .nav-text-align {
      text-align: left !important;
      -webkit-text-align: left !important;
    }
  }
`

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

  useEffect(() => {
    // Add Safari styles to document head
    const styleElement = document.createElement('style')
    styleElement.textContent = safariStyles
    document.head.appendChild(styleElement)

    // Cleanup
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  const isActive = (path) => {
    if (path === "/media") {
      return location.pathname.startsWith("/media") ? "text-[#FE8340] font-semibold" : "text-white hover:text-[#FE8340] transition-colors"
    }
    if (path === "/crop-programs") {
      return location.pathname.startsWith("/crop-programs") ? "text-[#FE8340] font-semibold" : "text-white hover:text-[#FE8340] transition-colors"
    }
    return location.pathname === path ? "text-[#FE8340] font-semibold" : "text-white hover:text-[#FE8340] transition-colors"
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    // Force close all dropdowns by removing hover classes
    const dropdowns = document.querySelectorAll('.group-hover\\:opacity-100, .group-hover\\:visible')
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('opacity-100', 'visible')
      dropdown.classList.add('opacity-0', 'invisible')
    })

    // Scroll to content section if on media page
    if (location.pathname.startsWith('/media')) {
      setTimeout(() => {
        const contentSection = document.getElementById('content-section');
        if (contentSection) {
          contentSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Perform search and store results
      performSearch(searchQuery);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const handleSearchResultClick = (index) => {
    const result = searchResults[index];
    if (result) {
      navigate(result.path);
      setShowSearchResults(false);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

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
            <Link to="/about" className={`${isActive("/about")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>About</Link>

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
            <div className="relative group">
              <Link
                to="/crop-programs/maize"
                className={`${location.pathname.startsWith("/crop-programs") ? "text-[#FE8340]" : "text-white hover:text-[#FE8340]"} text-sm xl:text-sm flex items-center gap-1 whitespace-nowrap`}
                onClick={handleLinkClick}
              >
                Crop Programs
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              {/* Crop Programs Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-[550px] lg:w-[600px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 lg:p-6">
                  <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8">
                    <div className="space-y-3 lg:space-y-4">
                      <Link
                        to="/crop-programs/maize"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Maize Crop Program</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/hydro-fast"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>NBS HYDRO FAST</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/coffee"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Litter Digestion Program - Coffee</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/anti-frost"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>NBS Anti-frost Protocol</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/nitrate-conversion"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Nitrate Conversion Program</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      <Link
                        to="/crop-programs/downy-mildew"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Downy Mildew Control Program</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/rice"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Rice Crop Program</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/pepper"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Phytophthora Control Program - Pepper</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/citrus"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Citrus Crop Program</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <Link
                        to="/crop-programs/chilli"
                        className="text-[#FE8340] uppercase font-semibold text-sm xl:text-base block hover:text-[#293E31] transition-colors flex items-center justify-between relative group-hover:text-[#293E31]"
                        onClick={handleLinkClick}
                      >
                        <span>Chilli & Vegetable Program</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/services" className={`${isActive("/services")} text-sm xl:text-sm whitespace-nowrap`} onClick={handleLinkClick}>Services</Link>
            <div className="relative group">
              <Link
                to="/media"
                className={`${location.pathname.startsWith("/media") ? "text-[#FE8340]" : "text-white hover:text-[#FE8340]"} text-sm xl:text-sm flex items-center gap-1 whitespace-nowrap`}
                onClick={handleLinkClick}
              >
                Media
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <div className="relative group/blogs">
                    <Link to="/media/blogs" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={handleLinkClick}>
                      <span>Blogs</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <div className="absolute left-full top-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/blogs:opacity-100 group-hover/blogs:visible transition-all duration-200">
                      <div className="py-1">
                        <Link
                          to="/media/blogs/agriculture"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleLinkClick}
                        >
                          Agriculture
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/case-studies">
                    <Link to="/media/case-study" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={handleLinkClick}>
                      <span>Results</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <div className="absolute left-full top-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/case-studies:opacity-100 group-hover/case-studies:visible transition-all duration-200">
                      <div className="py-1">
                        <Link
                          to="/media/case-study/paddy-case-study"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleLinkClick}
                        >
                          Paddy Case Study
                        </Link>
                        <Link
                          to="/media/case-study/microshield-grapes-trial"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleLinkClick}
                        >
                          Microshield Grapes Trial
                        </Link>
                        <Link
                          to="/media/case-study/sapphire-granules"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleLinkClick}
                        >
                          Sapphire Granules Study
                        </Link>
                        <Link
                          to="/media/case-study/max-spreader-efficacy"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleLinkClick}
                        >
                          Max Spreader Efficacy
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/media/gallery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
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
                        handleSearchResultClick(index);
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
              +44 7405336635
            </a>
          </div>
          <a href="mailto:connect@vmecogrow.com" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2 whitespace-nowrap mt-2">
            <Mail size={16} className="text-[#FE8340] flex-shrink-0" />
            connect@vmecogrow.com
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="lg:hidden bg-[#FE8340] w-full p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-md">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/logo/eckhtn4r99sznxbyfru7"
              alt="VM ECOGROW Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
            />
            <div>
              <h1 className="text-[#293E31] font-bold text-2xl sm:text-lg md:text-3xl">
                VM ECOGROW
              </h1>
              <p className="text-[#293E31] text-xs sm:text-sm">
                Smart Inputs, Sustainable Outputs
              </p>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-[#293E31] p-2 rounded-full hover:bg-[#ff9f6a] transition-colors sm:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Search Bar - Visible on larger mobile screens */}
        <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-1 sm:max-w-md">
          <div className="relative w-full" ref={searchRef}>
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search products or services"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 bg-[#3a4f3f] border-[#3a4f3f] text-white placeholder:text-gray-300 focus-visible:ring-[#FE8340] rounded-full text-sm sm:text-base"
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
                      handleSearchResultClick(index);
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

        {/* Menu Button - Visible on larger mobile screens */}
        <button
          onClick={toggleMenu}
          className="hidden sm:block text-[#293E31] p-2 rounded-full hover:bg-[#ff9f6a] transition-colors ml-4"
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

              <Link to="/" className="flex items-center gap-2 sm:gap-3">
                <img
                  src="https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/logo/iq9mm2k96zmximny8dbr"
                  alt="VM ECOGROW Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
                <div>
                  <h1 className="text-white font-bold text-2xl sm:text-lg md:text-3xl">
                    VM ECOGROW
                  </h1>
                  <p className="text-white text-xs sm:text-sm">
                    Smart Inputs, Sustainable Outputs
                  </p>
                </div>
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FE8340] transition-colors p-2 rounded-full hover:bg-[#3a4f3f]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
            <Link
              to="/"
              className={`${isActive("/")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0 text-left`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive("/about")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0 text-left`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <div className="border-b border-[#3a4f3f] last:border-b-0">
              <details className="group [&>summary::-webkit-details-marker]:hidden [&>summary]:list-none">
                <summary className={`${isActive("/products")} text-lg py-2 flex justify-between items-center cursor-pointer text-left`}>
                  <Link to="/products" className="text-left">Products</Link>
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
                        className="text-[#FE8340] font-semibold block hover:text-white text-left"
                        onClick={handleLinkClick}
                      >
                        {category.name}
                      </Link>
                      <div className="pl-4 space-y-2 mt-2">
                        {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => (
                          <div key={subcategoryKey}>
                            <details className="group/sub">
                              <summary className="text-white hover:text-[#FE8340] cursor-pointer flex justify-between items-center text-left">
                                <span>{subcategory.name}</span>
                                <ChevronDown size={16} className="transition-transform duration-300 group-open/sub:rotate-180" />
                              </summary>
                              <div className="pl-4 space-y-2 pt-1">
                                {subcategory.products.map((product) => (
                                  <Link
                                    key={product.id}
                                    to={`/products/${categoryKey}/${subcategoryKey}/${product.id}`}
                                    className="text-gray-300 hover:text-[#FE8340] text-sm block text-left"
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
            <div className="border-b border-[#3a4f3f] last:border-b-0">
              <details className="group [&>summary::-webkit-details-marker]:hidden [&>summary]:list-none">
                <summary className={`${isActive("/crop-programs")} text-lg py-2 flex justify-between items-center cursor-pointer text-left`}>
                  <Link to="/crop-programs/maize" className="text-left">Crop Programs</Link>
                  <ChevronDown
                    size={20}
                    className="transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="pl-4 space-y-3 pt-2 pb-2">
                  <div className="space-y-2">
                    <Link
                      to="/crop-programs/maize"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Maize Crop Program
                    </Link>
                    <Link
                      to="/crop-programs/hydro-fast"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      NBS HYDRO FAST
                    </Link>
                    <Link
                      to="/crop-programs/coffee"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Litter Digestion Program - Coffee
                    </Link>
                    <Link
                      to="/crop-programs/anti-frost"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      NBS Anti-frost Protocol
                    </Link>
                    <Link
                      to="/crop-programs/nitrate-conversion"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Nitrate Conversion Program
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/crop-programs/downy-mildew"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Downy Mildew Control Program
                    </Link>
                    <Link
                      to="/crop-programs/rice"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Rice Crop Program
                    </Link>
                    <Link
                      to="/crop-programs/pepper"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Phytophthora Control Program - Pepper
                    </Link>
                    <Link
                      to="/crop-programs/citrus"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Citrus Crop Program
                    </Link>
                    <Link
                      to="/crop-programs/chilli"
                      className="text-[#FE8340] font-semibold block hover:text-white text-left"
                      onClick={handleLinkClick}
                    >
                      Chilli & Vegetable Program
                    </Link>
                  </div>
                </div>
              </details>
            </div>

            <Link
              to="/services"
              className={`${isActive("/services")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0 text-left`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <div className="border-b border-[#3a4f3f] last:border-b-0">
              <details className="group [&>summary::-webkit-details-marker]:hidden [&>summary]:list-none">
                <summary className={`${isActive("/media")} text-lg py-2 flex justify-between items-center cursor-pointer text-left`}>
                  <Link to="/media" className="text-left">Media</Link>
                  <ChevronDown
                    size={20}
                    className="transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="pl-4 space-y-3 pt-2 pb-2">
                  <div className="mb-3">
                    <details className="group/blogs">
                      <summary className="text-[#FE8340] font-semibold block hover:text-white cursor-pointer flex justify-between items-center text-left">
                        <Link to="/media/blogs" className="text-left" onClick={handleLinkClick}>
                          <span>Blogs</span>
                        </Link>
                        <ChevronDown size={16} className="transition-transform duration-300 group-open/blogs:rotate-180" />
                      </summary>
                      <div className="pl-4 space-y-2 mt-2">
                        <Link
                          to="/media/blogs/agriculture"
                          className="text-gray-300 hover:text-[#FE8340] text-sm block text-left"
                          onClick={handleLinkClick}
                        >
                          Agriculture
                        </Link>
                      </div>
                    </details>
                  </div>
                  <div className="mb-3">
                    <details className="group/case-studies">
                      <summary className="text-[#FE8340] font-semibold block hover:text-white cursor-pointer flex justify-between items-center text-left">
                        <Link to="/media/case-study" className="text-left" onClick={handleLinkClick}>
                          <span>Results</span>
                        </Link>
                        <ChevronDown size={16} className="transition-transform duration-300 group-open/case-studies:rotate-180" />
                      </summary>
                      <div className="pl-4 space-y-2 mt-2">
                        <Link
                          to="/media/case-study/paddy-case-study"
                          className="text-gray-300 hover:text-[#FE8340] text-sm block text-left"
                          onClick={handleLinkClick}
                        >
                          Paddy Case Study
                        </Link>
                        <Link
                          to="/media/case-study/microshield-grapes-trial"
                          className="text-gray-300 hover:text-[#FE8340] text-sm block text-left"
                          onClick={handleLinkClick}
                        >
                          Microshield Grapes Trial
                        </Link>
                        <Link
                          to="/media/case-study/sapphire-granules"
                          className="text-gray-300 hover:text-[#FE8340] text-sm block text-left"
                          onClick={handleLinkClick}
                        >
                          Sapphire Granules Study
                        </Link>
                        <Link
                          to="/media/case-study/max-spreader-efficacy"
                          className="text-gray-300 hover:text-[#FE8340] text-sm block text-left"
                          onClick={handleLinkClick}
                        >
                          Max Spreader Efficacy
                        </Link>
                      </div>
                    </details>
                  </div>
                  <Link
                    to="/media/gallery"
                    className="text-[#FE8340] font-semibold block hover:text-white text-left"
                    onClick={handleLinkClick}
                  >
                    Gallery
                  </Link>
                </div>
              </details>
            </div>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-lg py-2 border-b border-[#3a4f3f] last:border-b-0 text-left`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Information */}
          <div className="p-4 border-t border-[#3a4f3f] mt-auto bg-[#293E31]">
            <div className="flex flex-col text-white ">
              <div className="flex flex-col md:flex-row md:gap-4 space-y-3 md:mb-2">
                <a href="tel:+447442590367" className="hover:text-[#FE8340] md:mb-0 transition-colors text-sm flex items-center gap-2">
                  <Phone size={16} className="text-[#FE8340] flex-shrink-0" />
                  +44 7442590367
                </a>
                <a href="tel:+447377420266" className="hover:text-[#FE8340] transition-colors text-sm flex items-center gap-2">
                  <Phone size={16} className="text-[#FE8340] flex-shrink-0" />
                  +44 7405336635
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
