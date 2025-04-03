import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { productCategories } from '../data/productsData'

const ProductContext = createContext()

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}

export function ProductProvider({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  // Update filters when URL changes
  useEffect(() => {
    const pathParts = location.pathname.split('/')
    if (pathParts[1] === 'products') {
      if (pathParts[2]) setSelectedCategory(pathParts[2])
      if (pathParts[3]) setSelectedSubcategory(pathParts[3])
    }
  }, [location.pathname])

  // Update filtered products when filters change
  useEffect(() => {
    let products = []
    
    if (selectedCategory && selectedSubcategory) {
      // Get products from specific subcategory
      products = productCategories[selectedCategory]?.subcategories[selectedSubcategory]?.products || []
    } else if (selectedCategory) {
      // Get all products from category
      const category = productCategories[selectedCategory]
      if (category) {
        Object.values(category.subcategories).forEach(sub => {
          products.push(...sub.products)
        })
      }
    } else {
      // Get all products
      Object.values(productCategories).forEach(category => {
        Object.values(category.subcategories).forEach(sub => {
          products.push(...sub.products)
        })
      })
    }

    // Apply search filter if exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      products = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query)
      )
    }

    setFilteredProducts(products)
  }, [selectedCategory, selectedSubcategory, searchQuery])

  const handleCategorySelect = (categoryKey) => {
    if (selectedCategory === categoryKey) {
      setSelectedCategory('')
      setSelectedSubcategory('')
      navigate('/products')
    } else {
      setSelectedCategory(categoryKey)
      setSelectedSubcategory('')
      navigate(`/products/${categoryKey}`)
    }
  }

  const handleSubcategorySelect = (categoryKey, subcategoryKey) => {
    setSelectedCategory(categoryKey)
    if (selectedSubcategory === subcategoryKey) {
      setSelectedSubcategory('')
      navigate(`/products/${categoryKey}`)
    } else {
      setSelectedSubcategory(subcategoryKey)
      navigate(`/products/${categoryKey}/${subcategoryKey}`)
    }
  }

  const value = {
    selectedCategory,
    selectedSubcategory,
    searchQuery,
    filteredProducts,
    handleCategorySelect,
    handleSubcategorySelect,
    setSearchQuery
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
} 