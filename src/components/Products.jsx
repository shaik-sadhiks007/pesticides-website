import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { productCategories } from "../data/productsData";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Breadcrumb } from "./ui/breadcrumb";
import { FileDown, Search } from "lucide-react";
import { Button } from "./ui/Button";
import agricultureCatalog from "../assets/pdfs/brochure/agricultureCatalog.pdf";
import golfCatalog from "../assets/pdfs/brochure/golfCatalog.pdf";

const categoryImages = [
    {
        id: "agricultureAndHorticulture",
        name: "Agriculture & Horticulture",
        image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/ProductsPage%20images/rzpfbeocpuxgkp0jmt1n",
        description: "Comprehensive range of agricultural and horticultural solutions for optimal plant growth and sustainable farming.",
        catalog: agricultureCatalog,
        catalogName: "agriculture-catalog.pdf",
        path: "agricultureAndHorticulture"
    },
    {
        id: "golfAndSportsTurf",
        name: "Golf, Sports Turf & Landscape",
        image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/ProductsPage%20images/gtyxsgkuoeulny6p2b07",
        description: "Professional solutions for golf courses, sports fields, and landscape maintenance.",
        catalog: golfCatalog,
        catalogName: "golf-catalog.pdf",
        path: "sportsAndTurf"
    }
];

export default function Products() {
    const navigate = useNavigate();
    const location = useLocation();
    const { category, subcategory } = useParams();

    // Set default category to agriculture if no params
    const defaultCategory = "agricultureAndHorticulture";

    const [activeCategory, setActiveCategory] = useState(category || defaultCategory);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory || "all");
    const [showCategories, setShowCategories] = useState(!category);

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        category && { label: productCategories[category]?.name || category },
    ].filter(Boolean);

    // Update state when URL params change
    useEffect(() => {
        if (category) {
            setActiveCategory(category);
            setShowCategories(false);
        } else {
            setActiveCategory(defaultCategory);
            setShowCategories(true);
        }

        if (subcategory) {
            setSelectedSubcategory(subcategory);
        } else {
            setSelectedSubcategory("all");
        }
    }, [category, subcategory]);

    const handleProductClick = (category, subcategory, productId) => {
        navigate(`/products/${category}/${subcategory}/${productId}`);
    };

    // Get all subcategories for the current category
    const getSubcategories = () => {
        const currentCategory = productCategories[activeCategory];
        if (!currentCategory) return [];

        return Object.entries(currentCategory.subcategories).map(([key, subcategory]) => ({
            key,
            name: subcategory.name
        }));
    };

    // Filter products based on search query and selected subcategory
    const filterProducts = (products, subcategoryKey) => {
        let filteredProducts = products;

        // First filter by subcategory
        if (selectedSubcategory !== "all" && subcategoryKey !== selectedSubcategory) {
            return [];
        }

        // Then filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredProducts = products.filter(product => {
                const matchesName = product.name.toLowerCase().includes(query);
                const matchesSubcategory = productCategories[activeCategory]?.subcategories[subcategoryKey]?.name.toLowerCase().includes(query);
                return matchesName || matchesSubcategory;
            });
        }

        return filteredProducts;
    };

    const handleCategoryChange = (categoryKey) => {
        const category = categoryImages.find(cat => cat.id === categoryKey);
        setActiveCategory(categoryKey);
        setSelectedSubcategory("all");
        if (category) {
            navigate(`/products/${category.path}`);
        } else {
            navigate("/products");
        }
    };

    const handleSubcategoryChange = (subcategoryKey) => {
        setSelectedSubcategory(subcategoryKey);
        if (subcategoryKey === "all") {
            navigate(`/products/${activeCategory}`);
        } else {
            navigate(`/products/${activeCategory}/${subcategoryKey}`);
        }
    };

    const handleDownload = (pdfPath, fileName, e) => {
        e.stopPropagation(); // Prevent navigation when clicking download button
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // You can add additional search functionality here if needed
    };

    if (showCategories) {
        return (
            <div className="w-full min-h-screen bg-[#DACEC2]">
                <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-6">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center w-full mb-12"
                    >
                        <h1 className="text-[#293E31] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3">
                            Choose Your Category
                        </h1>
                        <p className="text-[#293E31]/80 text-sm md:text-base text-center max-w-2xl mx-auto mb-8 md:mb-12">
                            Explore our comprehensive range of products designed for both agricultural and sports turf applications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
                        {categoryImages.map((cat, index) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden cursor-pointer" onClick={() => handleCategoryChange(cat.id)}>
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gradient overlay with animation */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 lg:opacity-0 lg:group-hover:opacity-80 transition-opacity duration-500" />
                                    
                                    {/* Content for desktop */}
                                    <div className="hidden lg:flex absolute inset-0 flex-col justify-end p-8">
                                        <h2 className="text-white uppercase text-3xl font-bold mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            {cat.name}
                                        </h2>
                                        <p className="text-white/90 text-base mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            {cat.description}
                                        </p>
                                        <div className="flex gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCategoryChange(cat.id);
                                                }}
                                                className="bg-[#FE8340] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e06724] transition-colors duration-200 flex items-center justify-center"
                                            >
                                                Explore Products
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDownload(cat.catalog, cat.catalogName, e);
                                                }}
                                                className="bg-white text-[#293E31] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                                            >
                                                <FileDown className="w-5 h-5 mr-2" />
                                                Download Catalogue
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content for mobile and tablet */}
                                    <div className="lg:hidden absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                        <h2 className="text-white uppercase text-xl md:text-2xl font-bold mb-2">
                                            {cat.name}
                                        </h2>
                                        <p className="text-white/90 text-sm md:text-base mb-4">
                                            {cat.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Buttons outside image for mobile and tablet */}
                                <div className="lg:hidden p-4 md:p-6 flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCategoryChange(cat.id);
                                        }}
                                        className="bg-[#FE8340] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-medium hover:bg-[#e06724] transition-colors duration-200 flex items-center justify-center"
                                    >
                                        Explore Products
                                    </button>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDownload(cat.catalog, cat.catalogName, e);
                                        }}
                                        className="bg-white border-2 border-[#293E31] text-[#293E31] px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                                    >
                                        <FileDown className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                        {cat.id === "agricultureAndHorticulture" ? "Agriculture Catalogue" : "Amenity Catalogue"}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#DACEC2]">
            <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                <Tabs
                    value={activeCategory}
                    className="w-full"
                    onValueChange={handleCategoryChange}
                >
                    {/* Search and Filter Section Combined */}
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 mb-8 w-full max-w-7xl mx-auto">
                        {/* Search Section - 4 columns on desktop, full width on mobile/tablet */}
                        <form onSubmit={handleSearchSubmit} className="w-full lg:col-span-4">
                            <div className="relative w-full">
                                <Input
                                    type="text"
                                    placeholder="Search products or services"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pr-10 bg-white border-[#e5e7eb] text-[#293E31] text-sm placeholder:text-[#293E31]/60 focus-visible:ring-0 focus-visible:border-[#e5e7eb] rounded-full"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    variant="ghost"
                                    className="absolute right-0 top-0 h-full text-[#FE8340] hover:text-[#e06724] hover:bg-transparent"
                                >
                                    <Search size={16} />
                                </Button>
                            </div>
                        </form>

                        {/* Filter Buttons - 8 columns on desktop, full width on mobile/tablet */}
                        <div className="w-full lg:col-span-8 flex flex-wrap lg:justify-end gap-2">
                            <button
                                onClick={() => handleSubcategoryChange("all")}
                                className={`px-4 py-1.5 text-sm rounded-full transition-all cursor-pointer ${
                                    selectedSubcategory === "all"
                                        ? "bg-[#FE8340] text-white"
                                        : "bg-white text-[#293E31] hover:bg-gray-50"
                                }`}
                            >
                                All
                            </button>
                            {getSubcategories().map(({ key, name }) => (
                                <button
                                    key={key}
                                    onClick={() => handleSubcategoryChange(key)}
                                    className={`px-4 py-1.5 text-sm rounded-full transition-all cursor-pointer ${
                                        selectedSubcategory === key
                                            ? "bg-[#FE8340] text-white"
                                            : "bg-white text-[#293E31] hover:bg-gray-50"
                                    }`}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Update the products grid */}
                    {Object.entries(productCategories).map(([categoryKey, category]) => (
                        <TabsContent key={categoryKey} value={categoryKey}>
                            <div className="mt-8 w-full max-w-7xl mx-auto">
                                {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => {
                                    const filteredProducts = filterProducts(subcategory.products, subcategoryKey);
                                    if (filteredProducts.length === 0) return null;

                                    return (
                                        <div key={subcategoryKey} className="mb-12">
                                            <h2 className="text-2xl font-bold text-[#293E31] mb-6">{subcategory.name}</h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                                                {filteredProducts.map((product) => (
                                                    <motion.div
                                                        key={product.id}
                                                        className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                                        onClick={() => handleProductClick(categoryKey, subcategoryKey, product.id)}
                                                    >
                                                        <div className="relative h-[250px]">
                                                            <img
                                                                src={product.imgSrc}
                                                                alt={product.name}
                                                                className="object-cover w-full h-full"
                                                            />
                                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-95 bg-[#FE8340] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex items-center justify-center p-4">
                                                                <div className="text-[#293E31] text-center opacity-0 group-hover:opacity-100 w-full">
                                                                    <h1 className="font-bold text-xl mb-2">Suitable For :</h1>
                                                                    <h6 className="text-base line-clamp-5 overflow-hidden">{product.suitableFor}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-4">
                                                            <p className="text-xs font-medium text-[#FE8340] mb-1 block">{product.type}</p>
                                                            <h3 className="text-lg uppercase font-semibold text-[#293E31] mb-2">{product.name}</h3>
                                                            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
} 