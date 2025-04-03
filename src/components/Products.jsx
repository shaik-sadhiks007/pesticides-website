import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { productCategories } from "../data/productsData";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Products() {
    const navigate = useNavigate();
    const location = useLocation();
    const { category, subcategory } = useParams();

    // Set default category to agriculture if no params
    const defaultCategory = "agricultureAndHorticulture";

    const [activeCategory, setActiveCategory] = useState(category || defaultCategory);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory || "all");

    // Update state when URL params change
    useEffect(() => {
        if (category) {
            setActiveCategory(category);
        } else {
            setActiveCategory(defaultCategory);
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
        setActiveCategory(categoryKey);
        setSelectedSubcategory("all");
        if (categoryKey === defaultCategory) {
            navigate("/products");
        } else {
            navigate(`/products/${categoryKey}`);
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

    return (
        <div className="container px-4 py-8 bg-[#DACEC2]">

            <Tabs
                value={activeCategory}
                className="w-full"
                onValueChange={handleCategoryChange}
            >
                {/* TabsList and Search in same row */}
                <div className="flex items-center justify-center gap-8 mb-8">
                    <TabsList className="inline-flex bg-[#f9fcf4] p-1 rounded-lg">
                        {Object.entries(productCategories).map(([key, category]) => (
                            <TabsTrigger
                                key={key}
                                value={key}
                                className="text-[#293E31] cursor-pointer text-base data-[state=active]:bg-[#FE8340] data-[state=active]:text-white px-4 py-2 rounded-lg transition-all"
                            >
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Search Section */}
                    <div className="w-96">
                        <Input
                            id="search"
                            type="text"
                            placeholder="Search by product name or category..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border-[#293E31] focus:border-[#FE8340]"
                        />
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center ">
                        <button
                            onClick={() => handleSubcategoryChange("all")}
                            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${selectedSubcategory === "all"
                                ? "bg-[#FE8340] text-white text-sm"
                                : "bg-white text-[#293E31] text-sm hover:bg-[#f9fcf4]"
                                }`}
                        >
                            All
                        </button>
                        {getSubcategories().map(({ key, name }) => (
                            <button
                                key={key}
                                onClick={() => handleSubcategoryChange(key)}
                                className={`px-2 py-2 rounded-lg transition-all cursor-pointer ${selectedSubcategory === key
                                    ? "bg-[#FE8340] text-white text-sm"
                                    : "bg-white text-[#293E31] text-sm hover:bg-[#f9fcf4]"
                                    }`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>

                {Object.entries(productCategories).map(([categoryKey, category]) => (
                    <TabsContent key={categoryKey} value={categoryKey}>
                        <div className="mt-8">
                            {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => {
                                const filteredProducts = filterProducts(subcategory.products, subcategoryKey);
                                if (filteredProducts.length === 0) return null;

                                return (
                                    <div key={subcategoryKey} className="mb-12">
                                        <h2 className="text-2xl font-bold text-[#293E31] mb-6">{subcategory.name}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                                                <h1 className="font-bold text-2xl mb-2">Suitable For :</h1>
                                                                <h6 className="text-lg line-clamp-3 overflow-hidden">{product.suitableFor}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-4">
                                                        <p className="text-xs font-medium text-[#FE8340] mb-1 block">{product.type}</p>
                                                        <h3 className="text-lg font-semibold text-[#293E31] mb-2">{product.name}</h3>
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
    );
} 