import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { productCategories } from "../data/productsData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { useState, useEffect } from "react";
import { Shuffle } from "lucide-react";
import { Input } from "../components/ui/input";
import { FileText, Download, BarChart2, BookOpen, FileCheck } from "lucide-react";

export default function ProductDetail() {
    const { category, subcategory, productId } = useParams();
    const navigate = useNavigate();

    const product = productCategories[category]?.subcategories[subcategory]?.products.find(
        (p) => p.id === productId
    );

    if (!product) {
        return (
            <div className="container  px-4 py-8">
                <h1 className="text-2xl font-bold text-[#293E31]">Product not found</h1>
            </div>
        );
    }

    // Function to get random suggested products from the same category
    const getRandomSuggestedProducts = () => {
        if (!product) return [];

        // Get all products from all subcategories in current category
        const allProducts = Object.entries(productCategories[category].subcategories).reduce((acc, [subKey, subcategory]) => {
            const productsWithSubcategory = subcategory.products
                .filter(p => p.id !== product.id) // Exclude current product
                .map(p => ({
                    ...p,
                    subcategoryKey: subKey,
                    subcategoryName: subcategory.name
                }));
            return [...acc, ...productsWithSubcategory];
        }, []);

        // Shuffle and get 4 random products
        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    };

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission
        const enquiryData = {
            ...formData,
            productId: product.id,
            productName: product.name,
            category: category,
            subcategory: subcategory,
            timestamp: new Date().toISOString()
        };
        console.log('Enquiry Data:', enquiryData);
        // Reset form
        setFormData({ fullName: '', email: '', phone: '' });
        // You can add your API call here to send the data
    };

    // Function to check if the product has research data or case studies
    const hasResearchData = () => {
        if (!product) return false;

        // Check if product is one of the specific products with research data
        const productsWithResearch = [
            "max_spreader",
            "sapphire-granules",
            "micro-shield",
            "bio-stimulator",
            "bug-shield",
            "yield-booster",
            "bio-protect"
        ];

        return productsWithResearch.includes(product.id);
    };

    // Function to get research data for specific products
    const getResearchData = () => {
        if (!product) return null;

        const researchData = {
            "max_spreader": {
                type: "efficacy-data",
                title: "Efficacy Data",
                description: "Trial data showing the effectiveness of Max Spreader in various applications.",
                icon: <BarChart2 className="w-5 h-5" />,
                pdfUrl: "/src/assets/pdfs/TDS-NBS-MAX-SPREADER.pdf"
            },
            "sapphire-granules": {
                type: "article",
                title: "Article on Sapphire Granules (Humates)",
                description: "Detailed article explaining the benefits and applications of Sapphire Granules.",
                icon: <BookOpen className="w-5 h-5" />,
                pdfUrl: "/src/assets/pdfs/article-sapphire-granules.pdf"
            },
            "micro-shield": {
                type: "research-trial",
                title: "Research Trial on Grapes",
                description: "Results from research trials showing the effectiveness of Micro-Shield on grape crops.",
                icon: <FileText className="w-5 h-5" />,
                pdfUrl: "/src/assets/pdfs/research-trial-grapes.pdf"
            },
            "bio-stimulator": {
                type: "case-study",
                title: "Paddy Case Study",
                description: "Case study showing the effectiveness of Bio-Stimulator in paddy cultivation.",
                icon: <FileCheck className="w-5 h-5" />,
                pdfUrl: "/src/assets/pdfs/paddy-case-study.pdf"
            },
            "bug-shield": {
                type: "case-study",
                title: "Paddy Case Study",
                description: "Case study showing the effectiveness of Bug Shield in paddy cultivation.",
                icon: <FileCheck className="w-5 h-5" />,
                pdfUrl: "/src/assets/pdfs/paddy-case-study.pdf"
            },
            "yield-booster": {
                type: "case-study",
                title: "Paddy Case Study",
                description: "Case study showing the effectiveness of Yield Booster in paddy cultivation.",
                icon: <FileCheck className="w-5 h-5" />,
                pdfUrl: "/src/assets/pdfs/paddy-case-study.pdf"
            },
            "bio-protect": {
                type: "case-study",
                title: "Paddy Case Study",
                description: "Case study showing the effectiveness of Bio-Protect in paddy cultivation.",
                icon: <FileCheck className="w-5 h-5" />,
                pdfUrl: "/src/assets/pdfs/paddy-case-study.pdf"
            }
        };

        return researchData[product.id] || null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-8 bg-[#DACEC2] px-4"
        >
            <div className="container ">
                {/* Product Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
                    {/* Left Column - Image */}
                    <div className="md:col-span-5 lg:col-span-6">
                        <div className="sticky top-8">
                            <div className="bg-white rounded-lg shadow-md">
                                <img
                                    src={product.imgSrc}
                                    alt={product.name}
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="md:col-span-7 lg:col-span-6">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-[#293E31] mb-4">{product.name}</h1>
                                {/* <p className="text-lg text-gray-600 mb-6">{product.type}</p> */}
                                <p className="text-gray-700 mb-8">{product.description}</p>
                            </div>

                            <Tabs defaultValue="details" className="w-full">
                                <TabsList className="inline-flex bg-[#f9fcf4] p-1 rounded-lg">
                                    <TabsTrigger
                                        value="details"
                                        className="text-[#293E31] data-[state=active]:bg-[#293E31] data-[state=active]:text-white px-4 py-2 rounded-lg transition-all"
                                    >
                                        Details
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="benefits"
                                        className="text-[#293E31] data-[state=active]:bg-[#293E31] data-[state=active]:text-white px-4 py-2 rounded-lg transition-all"
                                    >
                                        Benefits
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="application"
                                        className="text-[#293E31] data-[state=active]:bg-[#293E31] data-[state=active]:text-white px-4 py-2 rounded-lg transition-all"
                                    >
                                        Application
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="details" className="mt-6">
                                    <div className="space-y-6">
                                        {product.type && (
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Type</h3>
                                                <p className="text-gray-700">{product.type}</p>
                                            </div>
                                        )}

                                        <p className="text-gray-700">New generation agriculture : Certified Organic Input (CU896640) </p>

                                        {product.suitableFor && (
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Suitable For</h3>
                                                <p className="text-gray-700">{product.suitableFor}</p>
                                            </div>
                                        )}

                                        {product.growingStage && (
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Growing Stage</h3>
                                                <p className="text-gray-700">{product.growingStage}</p>
                                            </div>
                                        )}

                                        {product.recommendation && (
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Recommendation</h3>
                                                <p className="text-gray-700">{product.recommendation}</p>
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent value="benefits" className="mt-6">
                                    <div className="space-y-6">
                                        {product.keyPerformance && product.keyPerformance.length > 0 && (
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#293E31] mb-3">Key Performance</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    {product.keyPerformance.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent value="application" className="mt-6">
                                    <div className="space-y-6">
                                        {product.applicationRates && (
                                            <>
                                                {Object.entries(product.applicationRates).map(([key, value]) => {
                                                    // Skip the table property as it's used for format control
                                                    if (key === 'table' || key === 'data' || key === 'note') return null;

                                                    // Check if the value is an object
                                                    if (value && typeof value === 'object' && !Array.isArray(value)) {
                                                        return (
                                                            <div key={key} className="mt-6 bg-[#dacec2] p-4 rounded-lg">
                                                                <h3 className="text-xl font-semibold text-[#293E31] mb-3 capitalize">
                                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                                </h3>
                                                                <div className="space-y-4">
                                                                    {Object.entries(value).map(([subKey, subValue], index) => (
                                                                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                                                            <div className="mb-2">
                                                                                <span className="font-semibold text-[#293E31] capitalize">
                                                                                    {subKey.replace(/([A-Z])/g, ' $1').trim()}:
                                                                                </span>
                                                                                <span className="text-gray-700 ml-2">{subValue}</span>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })}

                                                {/* Render table or points format */}
                                                {product.applicationRates.data && (
                                                    <div className="mt-6">
                                                        <h3 className="text-xl font-semibold text-[#293E31] mb-4">Application Rates</h3>
                                                        <div className="space-y-4">
                                                            {product.applicationRates.table ? (
                                                                // Render table format
                                                                <div className="overflow-x-auto">
                                                                    <table className="min-w-full border border-black bg-[#dacec2]">
                                                                        <thead>
                                                                            <tr className="bg-[#f9fcf4]">
                                                                                {Object.keys(product.applicationRates.data[0]).map((header) => (
                                                                                    <th key={header} className="px-4 py-2 bg-[#dacec2] text-left text-[#293E31] font-semibold capitalize border border-black">
                                                                                        {header}
                                                                                    </th>
                                                                                ))}
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {product.applicationRates.data.map((rate, rowIndex) => (
                                                                                <tr key={rowIndex} className="border-t border-black">
                                                                                    {Object.values(rate).map((value, colIndex) => (
                                                                                        <td key={colIndex} className="px-4 py-2 text-gray-700 border border-black">
                                                                                            {value}
                                                                                        </td>
                                                                                    ))}
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            ) : (
                                                                // Render points format
                                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                                    {product.applicationRates.data.map((point, index) => (
                                                                        <li key={index}>{point}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Render note if available */}
                                                {product.applicationRates.note && (
                                                    <div className="mt-6">
                                                        <h3 className="text-xl font-semibold text-[#293E31] mb-3">Note</h3>
                                                        <p className="text-gray-700">{product.applicationRates.note}</p>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>


                {/* Suggested Products Section */}
                <div className="container px-4 mt-16 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Shuffle className="w-6 h-6 text-[#293E31]" />
                        <h2 className="text-2xl font-bold text-[#293E31]">You May Also Like</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {getRandomSuggestedProducts().map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                                onClick={() => navigate(`/products/${category}/${product.subcategoryKey}/${product.id}`)}
                            >
                                <div className="relative h-[200px]">
                                    <img
                                        src={product.imgSrc}
                                        alt={product.name}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-95 bg-[#FE8340] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex items-center justify-center p-4">
                                        <div className="text-[#293E31] text-center opacity-0 group-hover:opacity-100 w-full">
                                            <h1 className="font-bold text-xl mb-2">Suitable For :</h1>
                                            <h6 className="text-base line-clamp-3 overflow-hidden">{product.suitableFor}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <span className="text-xs font-medium text-[#FE8340] mb-1 block">
                                        {product.subcategoryName}
                                    </span>
                                    <h3 className="text-base font-semibold text-[#293E31] mb-2">{product.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Product Enquiry Form - Full Width */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#dacec2] p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Side - Form Content */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm text-[#FE8340] mb-1">Request a Callback</h3>
                                    <h2 className="text-2xl font-bold text-[#293E31] mb-3">Product Enquiry</h2>
                                    <p className="text-gray-600 mb-8">
                                        We offer a wide range of highly effective, tried and tested plant nutrition products, and insightful advice you can trust from an established, independent business.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="fullName"
                                            placeholder="Your Full Name*"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-b-2 border-t-0 border-x-0 border-[#293E31] focus:border-[#FE8340] bg-transparent py-3 rounded-none focus:ring-0 placeholder:text-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address*"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-b-2 border-t-0 border-x-0 border-[#293E31] focus:border-[#FE8340] bg-transparent py-3 rounded-none focus:ring-0 focus:outline-none focus:shadow-none placeholder:text-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            placeholder="Telephone Number*"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-b-2 border-t-0 border-x-0 border-[#293E31] focus:border-[#FE8340] bg-transparent py-3 rounded-none focus:ring-0 placeholder:text-gray-500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#4CAF50] text-white py-3 px-8 rounded font-medium hover:bg-[#43a047] transition-colors duration-300 text-base"
                                    >
                                        Enquire Now
                                    </button>
                                </form>
                            </div>

                            {/* Right Side - Product Image */}
                            <div className="relative h-full bg-[#1b4332] rounded-lg overflow-hidden">
                                <div className="relative h-full flex items-center justify-center">
                                    <img
                                        src={product.imgSrc}
                                        alt={product.name}
                                        className="w-full h-auto "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="max-w-5xl mx-auto mt-8">
                    <Accordion type="single" defaultValue="disclaimer" collapsible>
                        <AccordionItem value="disclaimer" className="border-b-black">
                            <AccordionTrigger className="text-[#293E31] cursor-pointer text-2xl font-semibold">
                                Disclaimer
                            </AccordionTrigger>
                            <AccordionContent className="text-[#293E31] text-base leading-relaxed">
                                Any recommendations provided by VM Group Europe Ltd or its Distributors are advice only. As no control can be exercised over storage,
                                handling, mixing, application or use, or weather, plant or soil conditions before,
                                during or after application (all of which may affect the performance of our program),
                                no responsibility for, or liability for any failure in performance, losses, damages,
                                or injuries (consequential or otherwise), arising from such storage, mixing, application,
                                or use will be accepted under any circumstances whatsoever. VM EcoGrow recommend you contact
                                an Agronomist prior to product application. The Buyer assumes all responsibility for
                                the use of any VM EcoGrow products.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                {/* Research Results Section - Only show for specific products */}
                {hasResearchData() && (
                    <div className="max-w-5xl mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="research" className="border-b-black">
                                <AccordionTrigger className="text-[#293E31] cursor-pointer text-2xl font-semibold">
                                    Results & Research
                                </AccordionTrigger>
                                <AccordionContent>
                                    {(() => {
                                        const data = getResearchData();
                                        if (!data) return null;

                                        return (
                                            <div className="bg-[#f9fcf4] rounded-lg p-6 border border-[#e0e7d5] mt-4">
                                                <div className="flex flex-col md:flex-row items-start gap-6">
                                                    <div className="flex-1">
                                                        <div className="flex items-start gap-4">
                                                            <div className="bg-[#293E31] text-white p-3 rounded-full">
                                                                {data.icon}
                                                            </div>
                                                            <div>
                                                                <span className="text-sm font-medium text-[#FE8340] uppercase tracking-wider">{data.type.replace(/-/g, ' ')}</span>
                                                                <h3 className="text-xl font-semibold text-[#293E31] mt-1">{data.title}</h3>
                                                                <p className="text-gray-600 mt-3">{data.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full md:w-auto">
                                                        <a
                                                            href={data.pdfUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-2 bg-[#FE8340] text-white py-3 px-6 rounded-lg hover:bg-[#e06724] transition-colors duration-300 w-full"
                                                        >
                                                            <Download className="w-5 h-5" />
                                                            Download PDF
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* Related Products - Only for Paddy Case Study */}
                                                {data.type === "case-study" && product.id !== "bio-stimulator" && (
                                                    <div className="mt-8 pt-6 border-t border-[#e0e7d5]">
                                                        <h4 className="text-lg font-semibold text-[#293E31] mb-4">Also Featured in This Case Study:</h4>
                                                        <div className="flex flex-wrap gap-3">
                                                            {["bio-stimulator", "bug-shield", "yield-booster", "bio-protect"].filter(id => id !== product.id).map(id => (
                                                                <a
                                                                    key={id}
                                                                    href={`/products/${category}/${subcategory}/${id}`}
                                                                    className="inline-flex items-center gap-2 bg-[#293E31] bg-opacity-10 text-[#293E31] py-2 px-4 rounded-full hover:bg-opacity-20 transition-colors duration-300"
                                                                >
                                                                    {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                )}

            </div>
        </motion.div>
    );
} 