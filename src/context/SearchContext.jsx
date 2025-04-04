import { createContext, useContext, useState, useEffect } from 'react';
import { productCategories } from '../data/productsData';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = [];
    const searchTerm = query.toLowerCase();

    // Search through products
    Object.entries(productCategories).forEach(([categoryKey, category]) => {
      // Check if category name matches
      if (category.name.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'category',
          title: category.name,
          path: `/products/${categoryKey}`,
          description: `Category: ${category.name}`
        });
      }

      // Search through subcategories
      Object.entries(category.subcategories).forEach(([subcategoryKey, subcategory]) => {
        if (subcategory.name.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'subcategory',
            title: subcategory.name,
            path: `/products/${categoryKey}/${subcategoryKey}`,
            description: `Subcategory: ${subcategory.name} (${category.name})`
          });
        }

        // Search through products
        subcategory.products.forEach(product => {
          if (product.name.toLowerCase().includes(searchTerm)) {
            results.push({
              type: 'product',
              title: product.name,
              path: `/products/${categoryKey}/${subcategoryKey}/${product.id}`,
              description: `Product: ${product.name} (${category.name} > ${subcategory.name})`
            });
          }
        });
      });
    });

    // Search through pages
    const pages = [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Crop Programs', path: '/crop-programs' },
      { name: 'Services', path: '/services' },
      { name: 'Media', path: '/media' },
      { name: 'Contact Us', path: '/contact-us' }
    ];

    pages.forEach(page => {
      if (page.name.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'page',
          title: page.name,
          path: page.path,
          description: `Page: ${page.name}`
        });
      }
    });

    setSearchResults(results);
    setShowSearchResults(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        showSearchResults,
        setShowSearchResults,
        performSearch,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
} 