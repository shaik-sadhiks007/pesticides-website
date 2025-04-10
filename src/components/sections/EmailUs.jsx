import React, { useState } from 'react';
import { productCategories } from '../../data/productsData';
import { ChevronDown } from 'lucide-react';

export default function EmailUs() {
  // Get the first category and subcategory keys
  const firstCategoryKey = Object.keys(productCategories)[0];
  const firstSubcategoryKey = Object.keys(productCategories[firstCategoryKey]?.subcategories || {})[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedProducts: [],
    message: ''
  });

  // Initialize with first category and subcategory open
  const [openCategories, setOpenCategories] = useState({
    [firstCategoryKey]: true
  });

  const [openSubcategories, setOpenSubcategories] = useState({
    [`${firstCategoryKey}-${firstSubcategoryKey}`]: true
  });

  const toggleCategory = (categoryKey) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const toggleSubcategory = (categoryKey, subcategoryKey) => {
    const key = `${categoryKey}-${subcategoryKey}`;
    setOpenSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [categoryKey, subcategoryKey, productId] = value.split('|');
      const productInfo = {
        categoryKey,
        subcategoryKey,
        productId,
        categoryName: productCategories[categoryKey].name,
        subcategoryName: productCategories[categoryKey].subcategories[subcategoryKey].name,
        productName: productCategories[categoryKey].subcategories[subcategoryKey].products.find(p => p.id === productId).name
      };

      setFormData(prev => ({
        ...prev,
        selectedProducts: checked
          ? [...prev.selectedProducts, productInfo]
          : prev.selectedProducts.filter(p =>
            !(p.categoryKey === categoryKey &&
              p.subcategoryKey === subcategoryKey &&
              p.productId === productId)
          )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const isProductSelected = (categoryKey, subcategoryKey, productId) => {
    return formData.selectedProducts.some(p =>
      p.categoryKey === categoryKey &&
      p.subcategoryKey === subcategoryKey &&
      p.productId === productId
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#DACEC2]">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#293E31] mb-2 text-center">Send us an Email</h2>
        <div className="w-24 h-1 bg-[#FE8340] mx-auto mb-3"></div>


        <form action="https://formsubmit.co/vm.vmgroupeu@gmail.com" method="POST" className="max-w-7xl mx-auto space-y-6">
          {/* Customize your redirect */}
          <input type="hidden" name="_next" value={window.location.href}  />
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="hidden" name="_template" value="table" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">NAME *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-[#DACEC2] border border-[#293E31] focus:ring-[#293E31] focus:ring-1 outline-none rounded-md"
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">EMAIL *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-[#DACEC2] border border-[#293E31] focus:ring-[#293E31] focus:ring-1 outline-none rounded-md"
              />
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">PHONE</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-3 bg-[#DACEC2] border border-[#293E31] focus:ring-[#293E31] focus:ring-1 outline-none rounded-md"
              />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">COMPANY *</label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-[#DACEC2] border border-[#293E31] focus:ring-[#293E31] focus:ring-1 outline-none rounded-md"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-4">Products</label>
            <input 
              type="hidden" 
              name="selected_products" 
              value={formData.selectedProducts.map(p => 
                `${p.categoryName} > ${p.subcategoryName} > ${p.productName}`
              ).join(', ')} 
            />
            <div className="space-y-0 border border-black w-full">
              {Object.entries(productCategories).map(([categoryKey, category]) => (
                <div key={categoryKey} className="border-b border-black last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggleCategory(categoryKey)}
                    className="w-full px-4 py-3 bg-[#DACEC2] hover:bg-[#c5bab0] flex items-center justify-between text-left border-0"
                  >
                    <h3 className="text-lg font-semibold text-[#293E31]">{category.name}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#293E31] transition-transform duration-200 ${openCategories[categoryKey] ? 'transform rotate-180' : ''
                        }`}
                    />
                  </button>

                  {openCategories[categoryKey] && (
                    <div className="border-t border-black">
                      {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => (
                        <div key={subcategoryKey} className="border-b border-black last:border-b-0">
                          <button
                            type="button"
                            onClick={() => toggleSubcategory(categoryKey, subcategoryKey)}
                            className="w-full px-6 py-2 bg-[#DACEC2] hover:bg-[#c5bab0] flex items-center justify-between text-left border-0"
                          >
                            <h4 className="text-md font-medium text-[#FE8340]">{subcategory.name}</h4>
                            <ChevronDown
                              className={`w-4 h-4 text-[#FE8340] transition-transform duration-200 ${openSubcategories[`${categoryKey}-${subcategoryKey}`] ? 'transform rotate-180' : ''
                                }`}
                            />
                          </button>

                          {openSubcategories[`${categoryKey}-${subcategoryKey}`] && (
                            <div className="px-8 py-3 bg-[#DACEC2] border-t border-black">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {subcategory.products.map((product) => (
                                  <div key={product.id} className="flex items-start">
                                    <input
                                      type="checkbox"
                                      id={`${categoryKey}|${subcategoryKey}|${product.id}`}
                                      name="products"
                                      value={`${categoryKey}|${subcategoryKey}|${product.id}`}
                                      checked={isProductSelected(categoryKey, subcategoryKey, product.id)}
                                      onChange={handleChange}
                                      className="mt-1 h-4 w-4 text-[#FE8340] border-black focus:ring-[#FE8340]"
                                    />
                                    <label
                                      htmlFor={`${categoryKey}|${subcategoryKey}|${product.id}`}
                                      className="ml-2 block text-sm text-gray-700"
                                    >
                                      {product.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-[#DACEC2] border border-[#293E31] focus:ring-[#293E31] focus:ring-1 outline-none rounded-md"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#FE8340] text-white font-medium cursor-pointer hover:bg-[#e06724] focus:outline-none focus:ring-2 focus:ring-[#FE8340] transition-colors duration-300 rounded-md"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 