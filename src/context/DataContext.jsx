import { createContext, useContext, useState } from "react"
import NutriLifeBAM1L from "../assets/productImages/Nutri-LifeBAM1L.png"

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [products] = useState([
        {
            id: 1,
            category: "Agriculture and Horticulture",
            subcategories: [
                {
                    id: "speciality-liquid",
                    name: "Speciality Fertilisers - Liquid",
                    products: [
                        {
                            id: "nbs-root-max",
                            name: "NBS ROOT MAX™",
                            price: 29.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "NBS ROOT MAX™ is a combination of Organic Matter, Organic Carbon and Organic NPK formulated to promote vigorous root growth and luxurious shoot development. Promotes rapid establishment of transplanted crops like vegetables, strawberries, tree crops, brassicas (Cauliflower, cabbage, broccoli etc).",
                            category: "Organic Fertiliser Foliar spray",
                            benefits: [
                                "Broad Spectrum Nutrition and Plant tonic or rescue remedy during stress conditions such as frost, heat, and transplant shock",
                                "Promoting strong shoot development and overall plant vitality",
                                "Stimulates and Improves root growth and branching"
                            ],
                            ingredients: "Organic Matter, Organic Carbon, Organic NPK",
                            usage: `Crop Application & Fertigation:

Vegetable & Seedlings:
- Soak roots in 1:200 dilution (1L per 200L)
- 3L/ha immediately after planting

Tree Tubestock:
- Soak roots in 1:200 dilution (1L per 200L)
- 3L/ha immediately after planting

Strawberry Runners:
- Soak roots in 1:200 dilution (include NBS MicroShield at 500g per 100L water)
- 3L/ha immediately after planting`,
                            growingStage: "Planting",
                            applicationRate: "3L/ha immediately after planting",
                            instructions: "This product requires storing where applied with emulsion spray equipment. Prior to application, mix with water to make a slurry. Stand for 5 hours before use. When applying, ensure that the spray solution is as close to the target sites as possible.",
                            storage: "Read safety directions before use. Store in cool, dry place away from sunlight and below 30°C (preferably under refrigeration). Use as soon as possible after opening.",
                            safetyInfo: "When handling, opening and applying products protective clothing should be worn, including face mask and gloves. Avoid skin and eye contact and breathing dust/aerosols."
                        },
                        {
                            id: "nbs-yield-booster",
                            name: "NBS YIELD BOOSTER™",
                            price: 34.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "NBS YIELD BOOSTER™ is a formulation of organic matter, organic carbon, organic Potassium, and plant extract auxins that enhance nutrient absorption, flowering, fruiting and yield while improving plant resilience and quality. It is suitable for grain crops, vegetables, fruit crops, lawns, turf, floriculture, and ornamental plants.",
                            category: "Organic Foliar Fertiliser Spray",
                            benefits: [
                                "It enhances macro and micro-nutrient availability and promotes flowering, fruiting, and branches",
                                "Improves photosynthesis and nitrogen absorption and boosts plant stamina (SAR)",
                                "Converts maximum flowers into fruit sets",
                                "Increases fruit size, quality, and shelf life while extending the harvesting period for higher yields",
                                "Yield Booster enriches the effectiveness of foliar Fertilisers and other bio-nutrients by promoting stomatal opening for better absorption and penetration"
                            ],
                            ingredients: "Organic matter, organic carbon, organic Potassium, plant extract auxins",
                            usage: "Apply as a foliar spray at 2 ml to 4 ml per litre of water, depending on the crop's growth stage.",
                            growingStage: "Nursery to harvesting",
                            applicationRate: "2-4 ml per litre of water"
                        },
                        {
                            id: "nbs-k-35",
                            name: "NBS K-35™",
                            price: 39.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "A high-analysis, pH-buffered liquid potassium complexed with organic acids, designed to overcome pH-related uptake issues and provide a super-available form of potassium essential for plant growth and development.",
                            benefits: [
                                "Clear foliar spray formulation that does not leave stains",
                                "Amplify fruit and flower size, color, and overall quality",
                                "Improves taste, shelf life, and market value of produce"
                            ],
                            ingredients: "High-analysis liquid potassium complexed with organic acids",
                            usage: "Vegetables & Turf: 1L/100L water, up to 5L/ha\nOrchards & Vineyards: 1L/100L water, up to 7L/ha\nBroadacre Crops: 2L/ha in 120L water",
                            growingStage: "Vegetative Growth, Pre-Flowering, Flowering, Fruit Set & Fill"
                        },
                        {
                            id: "nbs-cmb",
                            name: "NBS CMB™",
                            price: 32.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "A synergistic blend of organic calcium, magnesium, and boron, enriched with natural complexing agents and plant growth promotants. It optimizes photosynthesis, accelerates cell division, and optimise plant Brix levels.",
                            benefits: [
                                "Stimulates cell division, promoting vigorous plant growth",
                                "Enhances cell membrane integrity and flower bud formation",
                                "Boosts chlorophyll concentration and photosynthesis",
                                "Functions as a microbial stimulant",
                                "Safe for all plants at recommended rates"
                            ],
                            ingredients: "Organic calcium, magnesium, boron, natural complexing agents, plant growth promotants",
                            usage: "Apply as foliar spray or soil application",
                            growingStage: "All growth stages"
                        },
                        {
                            id: "nbs-silicare",
                            name: "NBS SILICARE™",
                            price: 36.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "A silica-based fertiliser in its 99.99% bio-available form, comprising Ortho Silicic Acid, Silicon as SiO2, and Potassium as K2O. Silica is a recognised immune elicitor, reducing the need for chemical intervention.",
                            benefits: [
                                "Strengthens cell walls, offering protection from environmental stress",
                                "Improves photosynthesis, boosting plant growth and yield",
                                "Develop drought resistance, helping plants endure stress",
                                "Increases post-harvest shelf life and transit life of produce"
                            ],
                            ingredients: "Ortho Silicic Acid, Silicon as SiO2, Potassium as K2O",
                            usage: "Foliar Spray: 100ml per 100L of water",
                            growingStage: "Apply 25 days after planting, before flowering, and before fruiting"
                        },
                        {
                            id: "nbs-size-plus",
                            name: "NBS SIZE PLUS™",
                            price: 31.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Formulated with organic potassium (K), organic matter, organic nitrogen (N), and bio-stimulants derived from plant extracts to increase the size and weight of fruits and vegetables.",
                            benefits: [
                                "Stimulates cell division and elongation",
                                "Encourages proper nutrient distribution",
                                "Strengthens fruit structure",
                                "Intensify plant's ability to hold water and store sugars",
                                "Ensures even distribution of nutrients"
                            ],
                            ingredients: "Organic potassium, organic matter, organic nitrogen, bio-stimulants",
                            usage: "Foliar Spray: 2 ml per litre of water\nSoil Application: 500 ml per acre",
                            growingStage: "Apply after fruit setting and continue until harvest"
                        },
                        {
                            id: "nbs-max-spreader",
                            name: "NBS MAX SPREADER™",
                            price: 28.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "An innovative organic wetting agent and spreader formulated from natural materials, including organic carbon and non-ionic silicon compounds derived from rice husk.",
                            benefits: [
                                "Elevate Spreadability and Penetration",
                                "Increased Product Efficiency",
                                "Cost-Effective",
                                "Versatile Compatibility",
                                "Environmentally Friendly"
                            ],
                            ingredients: "Organic carbon, non-ionic silicon compounds from rice husk",
                            usage: "Foliar Spray: 0.1 ml per litre of water\nSoil Application: 0.25 ml per litre of water",
                            growingStage: "All growth stages"
                        }
                    ]
                },
                {
                    id: "speciality-solids",
                    name: "Speciality Fertilisers - Solids",
                    products: [
                        {
                            id: "nbs-micro-nutrient",
                            name: "NBS MICRO NUTRIENT",
                            price: 42.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Essential micronutrients for optimal plant growth."
                        },
                        {
                            id: "nbs-silicon-Fertiliser",
                            name: "NBS SILICON Fertiliser",
                            price: 38.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Granular silicon Fertiliser for improved plant structure."
                        },
                        {
                            id: "nbs-neem-Fertiliser",
                            name: "NBS NEEM Fertiliser",
                            price: 45.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Organic neem-based Fertiliser with natural pest control properties."
                        },
                        {
                            id: "nbs-resilica",
                            name: "NBS RESILICA",
                            price: 41.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Enhanced silica formula for plant resilience."
                        },
                        {
                            id: "nbs-green-compost",
                            name: "NBS GREEN COMPOST",
                            price: 35.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Premium organic compost for soil enrichment."
                        }
                    ]
                },
                {
                    id: "humates",
                    name: "Humates",
                    products: [
                        {
                            id: "nbs-sapphire-granules",
                            name: "NBS SAPPHIRE GRANULES",
                            price: 48.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Granular humic acid for soil conditioning."
                        },
                        {
                            id: "nbs-bio-stimulator",
                            name: "NBS BIO STIMULATOR",
                            price: 44.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Advanced bio-stimulant for enhanced plant growth."
                        },
                        {
                            id: "nbs-sapphire-liquid",
                            name: "NBS SAPPHIRE LIQUID",
                            price: 46.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Liquid humic acid for foliar application."
                        }
                    ]
                },
                {
                    id: "microbes-bio-stimulants",
                    name: "Microbes and Bio-Stimulants",
                    products: [
                        {
                            id: "nbs-bug-shield",
                            name: "NBS BUG-SHIELD",
                            price: 52.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Natural pest control solution."
                        },
                        {
                            id: "nbs-bioguard",
                            name: "NBS BIOGUARD",
                            price: 49.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Biological plant protection system."
                        },
                        {
                            id: "nbs-bio-protect",
                            name: "NBS BIO PROTECT",
                            price: 51.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Advanced biological crop protection."
                        },
                        {
                            id: "nbs-pseudo-tech",
                            name: "NBS PSEUDO-TECH",
                            price: 54.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Pseudomonas-based biological control."
                        },
                        {
                            id: "nbs-micro-shield",
                            name: "NBS MICRO-SHIELD",
                            price: 47.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Microbial shield for plant protection."
                        },
                        {
                            id: "nbs-bio-defender",
                            name: "NBS BIO-DEFENDER",
                            price: 53.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Biological defense system for crops."
                        },
                        {
                            id: "nbs-speed-compost",
                            name: "NBS SPEED COMPOST",
                            price: 43.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Accelerated composting solution."
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            category: "Sports, Turf, and Landscapes",
            subcategories: [
                {
                    id: "turf-Fertilisers",
                    name: "Turf Fertilisers",
                    products: [
                        {
                            id: "turf-premium",
                            name: "Turf Premium Blend",
                            price: 59.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Premium turf Fertiliser for professional sports fields."
                        },
                        {
                            id: "turf-maintenance",
                            name: "Turf Maintenance Plus",
                            price: 54.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Maintenance Fertiliser for consistent turf quality."
                        }
                    ]
                },
                {
                    id: "landscape-products",
                    name: "Landscape Products",
                    products: [
                        {
                            id: "landscape-premium",
                            name: "Landscape Premium Mix",
                            price: 64.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Premium landscape Fertiliser for professional gardens."
                        },
                        {
                            id: "landscape-maintenance",
                            name: "Landscape Maintenance",
                            price: 59.99,
                            image: "/productImages/Nutri-LifeBAM1L.png",
                            description: "Maintenance solution for beautiful landscapes."
                        }
                    ]
                }
            ]
        }
    ])

    const getProductById = (id) => {
        for (const category of products) {
            for (const subcategory of category.subcategories) {
                const product = subcategory.products.find(p => p.id === id)
                if (product) {
                    return {
                        ...product,
                        price: product.price || 0,
                        benefits: product.benefits || [],
                        ingredients: product.ingredients || "No ingredients information available",
                        usage: product.usage || "No usage instructions available",
                        growingStage: product.growingStage || "All growth stages",
                        applicationRate: product.applicationRate || "Not specified"
                    }
                }
            }
        }
        return null
    }

    const getRelatedProducts = (currentProductId) => {
        const currentProduct = getProductById(currentProductId)
        if (!currentProduct) return []

        const relatedProducts = []
        for (const category of products) {
            for (const subcategory of category.subcategories) {
                const products = subcategory.products
                    .filter(p => p.id !== currentProductId)
                    .map(p => ({
                        ...p,
                        price: p.price || 0,
                        benefits: p.benefits || [],
                        ingredients: p.ingredients || "No ingredients information available",
                        usage: p.usage || "No usage instructions available",
                        growingStage: p.growingStage || "All growth stages",
                        applicationRate: p.applicationRate || "Not specified"
                    }))
                relatedProducts.push(...products)
            }
        }
        return relatedProducts.slice(0, 4)
    }

    return (
        <DataContext.Provider value={{ products, getProductById, getRelatedProducts }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error("useData must be used within a DataProvider")
    }
    return context
}

export default DataContext 