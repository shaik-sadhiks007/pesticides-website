import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ShoppingCart, User, ChevronLeft, Plus, Minus, Heart, Share2, Check, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { motion } from "framer-motion"
import NutriLifeBAM1L from "../assets/productImages/Nutri-LifeBAM1L.png"
import { useData } from "../context/DataContext"
import { useProductNavigation } from "../components/sections/ProductRange"

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getProductById, getRelatedProducts } = useData()
  const [quantity, setQuantity] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [addedToWishlist, setAddedToWishlist] = useState(false)
  const handleProductClick = useProductNavigation()
  const [expandedSection, setExpandedSection] = useState(null)

  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleAddToWishlist = () => {
    setAddedToWishlist(!addedToWishlist)
  }

  return (
    <div className="flex flex-col min-h-screen">


      {/* Product Detail */}
      <section className="py-12 bg-[#DACEC2] min-h-screen">
        <div className="container  px-8">
          {/* Product Main Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Product Image - Fixed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.5 }}
              className="md:sticky md:top-8 h-fit bg-[#DACEC2] rounded-lg p-8 flex items-center justify-center"
            >
              <img
                src={product.image || NutriLifeBAM1L}
                alt={product.name}
                className="object-contain max-h-[400px] w-[400px] h-[400px]"
              />
            </motion.div>

            {/* Product Info - Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="pb-8">
                <h1 className="text-3xl font-bold text-[#293E31] mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold text-[#293E31] mb-6">£{(product.price || 0).toFixed(2)}</p>

                <p className="text-[#293E31] mb-8">{product.description}</p>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <label htmlFor="quantity" className="mr-4 font-medium text-[#293E31]">
                      Quantity:
                    </label>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-100">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    onClick={handleAddToCart}
                    className="bg-[#f47834] hover:bg-[#e06724] text-white px-8 py-6 text-lg flex-1"
                  >
                    {addedToCart ? (
                      <>
                        <Check className="mr-2 h-5 w-5" /> Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleAddToWishlist}
                    variant="outline"
                    className={`border-2 px-4 py-6 text-lg ${addedToWishlist ? "border-[#f47834] text-[#f47834]" : "border-gray-300 text-gray-700"}`}
                  >
                    <Heart className={`h-5 w-5 ${addedToWishlist ? "fill-[#f47834] text-[#f47834]" : ""}`} />
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 px-4 py-6 text-lg text-gray-700">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Tabs Section - Centered */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="details" className="text-base">
                      Details
                    </TabsTrigger>
                    <TabsTrigger value="benefits" className="text-base">
                      Benefits
                    </TabsTrigger>
                    <TabsTrigger value="growthStage" className="text-base">
                      Growth Stage
                    </TabsTrigger>
                    <TabsTrigger value="application" className="text-base">
                      Application
                    </TabsTrigger>
                  </TabsList>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <TabsContent value="details" className="text-[#293E31]">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 text-[#293E31]">Description</h3>
                          <p className="text-[#293E31]">{product.description}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-[#293E31]">Composition</h3>
                          <p className="text-[#293E31]">{product.ingredients}</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="benefits" className="text-[#293E31]">
                      <div className="space-y-4">
                        <h3 className="font-semibold mb-2 text-[#293E31]">Key Performance Benefits</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {product.benefits?.map((benefit, index) => (
                            <li key={index} className="text-[#293E31]">{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="growthStage" className="text-[#293E31]">
                      <div className="space-y-4">
                        <h3 className="font-semibold mb-2 text-[#293E31]">Growth Stages</h3>
                        <p className="text-[#293E31]">{product.growingStage}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="application" className="text-[#293E31]">
                      <div className="space-y-4">
                        <h3 className="font-semibold mb-2 text-[#293E31]">Application & Dosage</h3>
                        <p className="whitespace-pre-line text-[#293E31]">{product.usage}</p>
                        {product.applicationRate && (
                          <div className="mt-4">
                            <h4 className="font-medium mb-1 text-[#293E31]">Application Rate:</h4>
                            <p className="text-[#293E31]">{product.applicationRate}</p>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>

            </motion.div>
          </div>



          {/* Instructions Sections - Centered */}
          <div className="max-w-3xl ">
            <div className="space-y-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'instructions' ? null : 'instructions')}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-[#293E31]">Instructions</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedSection === 'instructions' ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === 'instructions' && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-[#293E31]">{product.instructions}</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'storage' ? null : 'storage')}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-[#293E31]">Storage & Handling</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedSection === 'storage' ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === 'storage' && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-[#293E31]">{product.storage}</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'productInfo' ? null : 'productInfo')}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-[#293E31]">Product Information Sheet</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedSection === 'productInfo' ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === 'productInfo' && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <a href="#" className="text-blue-600 hover:underline">Download PDF</a>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'safetyData' ? null : 'safetyData')}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-[#293E31]">Safety Data Sheet (SDS)</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedSection === 'safetyData' ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === 'safetyData' && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <a href="#" className="text-blue-600 hover:underline">Download PDF</a>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'important' ? null : 'important')}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-[#293E31]">Important Information</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedSection === 'important' ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === 'important' && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-[#293E31]">{product.safetyInfo}</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'shipping' ? null : 'shipping')}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-[#293E31]">Shipping Information</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedSection === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === 'shipping' && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-[#293E31]">Online orders are only available within Australia. For international orders, please contact us.</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'disclaimer' ? null : 'disclaimer')}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg text-[#293E31]">Disclaimer</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedSection === 'disclaimer' ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === 'disclaimer' && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-[#293E31]">Any recommendations provided by NBS are generic and should be used as a guide only. As conditions of use, storage, mixing, application, and weather are beyond our control, no responsibility for, or liability for any failure in performance, losses, damages, or injuries will be accepted, arising from the storage, mixing, application, or use of any NTS products.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-[#DACEC2]">
        <div className="container  px-8">
          <h2 className="text-2xl font-semibold text-[#1e3a29] mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                onClick={() => handleProductClick(relatedProduct.id)}
                className="bg-[#FCF9F4] p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="bg-gray-100 h-48 flex items-center justify-center mb-4 rounded-md overflow-hidden">
                  <img
                    src={relatedProduct.image || NutriLifeBAM1L}
                    alt={relatedProduct.name}
                    className="w-[150px] h-[150px] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-[#293E31] hover:text-[#FE8340] transition-colors duration-300">
                  {relatedProduct.name}
                </h3>
                <p className="text-gray-600">£{relatedProduct.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
export default ProductDetails

