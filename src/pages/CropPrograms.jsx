import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Leaf, Droplet, Sun, ChevronRight, CheckCircle2, Download } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import ProductsBanner from "../assets/productImages/productBanner.jpg"
import { useParams, useNavigate } from "react-router-dom"

// Import PDF files
import maize from "../assets/pdfs/maize-program.pdf"
import hydroFast from "../assets/pdfs/hydro-fast.pdf"
import coffee from "../assets/pdfs/coffee-program.pdf"
import antiFrost from "../assets/pdfs/anti-frost.pdf"
import downyMildew from "../assets/pdfs/downy-mildew.pdf"
import nitrateConversion from "../assets/pdfs/nitrate-conversion.pdf"
import rice from "../assets/pdfs/rice-program.pdf"
import pepper from "../assets/pdfs/pepper-program.pdf"
import { Link } from "react-router-dom"

const cropPrograms = [
    {
        id: 1,
        name: "Maize Crop Program",
        pdfFile: maize,
        description: "Comprehensive 7-stage plant & soil nutrition program for optimal maize yield",
        duration: "Full Growth Cycle",
        products: [
            "NBS YIELD BOOSTER",
            "NBS Microshield",
            "NBS BIO STIMULATOR",
            "NBS BUG SHIELD",
            "NBS K-35",
            "NBS Pseudotech"
        ],
        stages: [
            {
                name: "Seed Treatment (Boosting Germination & Early Growth)",
                duration: "Before Sowing",
                instructions: "Prepare a solution by mixing 25 ml of NBS YIELD BOOSTER and 20 gm of NBS Microshield in 10 L of water. Dip the seeds in this solution for 20 minutes, ensuring uniform absorption of beneficial nutrients and microbial protection. After treatment, dry the seeds in the shade before sowing to avoid direct sunlight damage and ensure easy handling.",
                products: ["NBS YIELD BOOSTER", "NBS Microshield"]
            },
            {
                name: "Soil Preparation (Strengthening Soil Health & Root Development)",
                duration: "Before Sowing",
                instructions: "Before sowing, apply 50 kg of NBS BIO STIMULATOR mixed with any organic compost. This step enhances soil fertility, microbial activity, and organic matter content, creating an ideal environment for seed germination and root establishment. Proper soil preparation helps in better nutrient retention and aeration.",
                products: ["NBS BIO STIMULATOR"]
            },
            {
                name: "Early Growth Phase",
                duration: "15-20 Days After Sowing",
                instructions: "At this critical stage, young maize plants require additional nutrients to support root expansion and vegetative growth. Spray NBS YIELD BOOSTER at 1.5 ml/L of water across the field. This foliar application supplies essential bio-nutrients, stimulates chlorophyll production, and improves plant metabolism, ensuring uniform and vigorous early growth.",
                products: ["NBS YIELD BOOSTER"]
            },
            {
                name: "Vegetative Growth & Nutrient Boost",
                duration: "45th Day Post-Sowing",
                instructions: "As the maize plants reach their vegetative peak, they require additional soil nutrition to sustain rapid growth and biomass development. Broadcast 100 kg of NBS BIO STIMULATOR across the field. It can be applied alone or mixed with other fertilizers for better efficiency. This application enhances soil microbial activity, improves nutrient availability, and strengthens the root system for better water and nutrient absorption.",
                products: ["NBS BIO STIMULATOR"]
            },
            {
                name: "Plant Vitality & Resilience Enhancement",
                duration: "Every 15 Days",
                instructions: "To maintain optimal plant health and ensure uninterrupted growth, apply a foliar spray of NBS BUG SHIELD at 1.25 ml/L of water. This application supports overall plant vigour, strengthens natural defences, and promotes a stress-free growth cycle. For consistent results, it is recommended to repeat the application every 15 days as a proactive measure.",
                products: ["NBS BUG SHIELD"]
            },
            {
                name: "Flowering & Grain Setting (Ensuring Maximum Yield Potential)",
                duration: "During Flowering",
                instructions: "For better flower initiation, stronger grain setting, and improved pollination, foliar nutrition is essential. Apply NBS YIELD BOOSTER at 2 ml/L along with NBS K-35 at 2 ml/L of water. This spray provides essential potassium and growth stimulators, which enhance reproductive development, leading to well-filled, high-yielding maize cobs. Depending on flowering stages, this application can be repeated for consistent results.",
                products: ["NBS YIELD BOOSTER", "NBS K-35"]
            },
            {
                name: "Plant Strength & Environmental Stress Management",
                duration: "As Needed",
                instructions: "To support plant resilience and ensure optimal growth, apply NBS Pseudotech at 200 gm per acre along with NBS BUG SHIELD at 2 ml/L of water. This combination enhances natural defense mechanisms, promotes overall plant health, and maintains crop quality under varying environmental conditions. The application can be repeated as needed, particularly during periods of high moisture or extended wet conditions.",
                products: ["NBS Pseudotech", "NBS BUG SHIELD"]
            }
        ],
        features: [
            "Comprehensive 7-stage nutrition program",
            "Enhanced seed germination and early growth",
            "Improved soil health and root development",
            "Optimized vegetative growth and biomass",
            "Strengthened plant vitality and stress resistance",
            "Better flowering and grain setting",
            "Environmental stress management",
            "Flexible application timing based on crop stage"
        ]
    },
    {
        id: 2,
        name: "NBS HYDRO FAST",
        pdfFile: hydroFast,
        description: "Nutrient Solution for Hydroponics - Precise and balanced nutrition for every growth stage",
        duration: "Continuous Application",
        products: [
            "Stock Solution A",
            "Stock Solution B",
            "Chelated Micro-nutrients"
        ],
        stages: [
            {
                name: "Solution Preparation",
                duration: "Before Application",
                instructions: "Take 980 ml of RO water in a clean container and mix 10 ml of stock solution 'A'. Mix thoroughly, then add 10 ml of stock solution 'B' to make 1L working solution.",
                products: ["Stock Solution A", "Stock Solution B"]
            },
            {
                name: "Solution Monitoring",
                duration: "24/7",
                instructions: "Maintain EC at 1.2-1.5 mS/cm and pH at 5.8 for optimal results.",
                products: []
            },
            {
                name: "Stock Solution A Components",
                duration: "Initial Mix",
                instructions: "Contains Potassium Nitrate + Calcium Nitrate + Chelated Iron",
                products: ["Stock Solution A"]
            },
            {
                name: "Stock Solution B Components",
                duration: "Initial Mix",
                instructions: "Contains Potassium Nitrate + Mono Potassium Phosphate + Magnesium Sulphate + Chelated Manganese + Zinc Oxide + Boron + Chelated Copper + Ammonium Molybdate",
                products: ["Stock Solution B"]
            }
        ],
        features: [
            "Enhances uptake of macronutrients (N, P, K, & S)",
            "Facilitates flowering and fruiting",
            "Boosts plant resistance to diseases and insects",
            "Prevents nutrient deficiencies",
            "Stable in pH variations",
            "Suitable for various agriculture, horticulture, and ornamental crops"
        ]
    },
    {
        id: 3,
        name: "Litter Digestion Program - Coffee",
        pdfFile: coffee,
        description: "Effective Conversion of Leaf Litter & Crop Residues into Humus & Plant Nutrients",
        duration: "As Needed",
        products: [
            "DIY 6% Liquid Humate",
            "Molasses/Jaggery",
            "Urea",
            "NBS Microshield",
            "NBS Pseudotech",
            "Borax/Boric Acid",
            "Ammonium Molybdate",
            "Kelp"
        ],
        stages: [
            {
                name: "Ensure Proper Soil Conditions",
                duration: "Before Application",
                instructions: "Maintain good soil moisture to facilitate microbial activity and decomposition. Ensure plant residues are in direct contact with the soil to promote effective breakdown and nutrient absorption.",
                products: []
            },
            {
                name: "Prepare the Nutrient-Enriched Mixture",
                duration: "Initial Mix",
                instructions: "Mix per acre: DIY 6% Liquid Humate (20L - enhances microbial activity), Molasses/Jaggery (4kg - provides energy for soil microbes), Urea (5kg - speeds up decomposition), NBS Microshield (400g - promotes beneficial microbial activity), NBS Pseudotech (400g - aids in organic matter decomposition).",
                products: ["DIY 6% Liquid Humate", "Molasses/Jaggery", "Urea", "NBS Microshield", "NBS Pseudotech"]
            },
            {
                name: "Apply as a Soil Drench",
                duration: "Implementation",
                instructions: "Mix the prepared solution in a minimum of 400L of water per acre to ensure even distribution. This application supports rapid microbial colonization, improving organic matter decomposition into humus.",
                products: []
            },
            {
                name: "Enhance the Mixture for Better Results",
                duration: "Optional Enhancement",
                instructions: "Add per acre: Borax/Boric Acid (500g - enhances nutrient uptake), Ammonium Molybdate (125g - aids nitrogen fixation), Kelp (200g - provides natural growth stimulants). The prepared mixture can be applied both to the soil and as a foliar spray.",
                products: ["Borax/Boric Acid", "Ammonium Molybdate", "Kelp"]
            }
        ],
        features: [
            "Efficiently converts excessive leaf litter and crop residues into humus",
            "Enriches soil health and fertility",
            "Accelerates natural breakdown of organic matter",
            "Improves soil structure and microbial diversity",
            "Enhances nutrient availability and uptake",
            "Supports higher crop productivity",
            "Flexible application methods (soil drench or foliar spray)",
            "Promotes beneficial microbial activity"
        ]
    },
    {
        id: 4,
        name: "NBS Anti-frost Protocol",
        pdfFile: antiFrost,
        description: "Our anti-frost agricultural solution is designed to enhance the resilience of crops against cold weather conditions and minimize the risk of frost damage. It is offered in two distinct formulations to cater to different needs and budgets: the Premium Program and the Economical Program. Both programs involve a mix of specialized products applied as foliar treatments to improve plant health and cold weather tolerance.",
        duration: "Seasonal Application",
        products: [
            "NBS Pseudo-Tech",
            "NBS Fulvic acid powder",
            "NBS Shuttle Seven",
            "Magnesium EDTA chelate",
            "MKP",
            "NBS K-35",
            "NBS Micronutrient",
            "Magnesium sulphate"
        ],
        stages: [
            {
                name: "Premium Program Mix",
                duration: "Before Cold Weather",
                instructions: "Mix in sequence: NBS Pseudo-Tech (2 g/L up to 1 kg/ha), NBS Fulvic acid powder (125 g/ha), NBS Shuttle Seven (1.0 L/ha), Magnesium EDTA chelate (3 L/ha), MKP (3 kg/ha).",
                products: ["NBS Pseudo-Tech", "NBS Fulvic acid powder", "NBS Shuttle Seven", "Magnesium EDTA chelate", "MKP"]
            },
            {
                name: "Economical Program Mix",
                duration: "Before Cold Weather",
                instructions: "Mix in sequence: NBS K-35 (2.5 L/ha), NBS Fulvic acid powder (125 g/ha), NBS Micronutrient (500 g/ha). If less nitrogen is required, add NBS Pseudo-Tech (2 g/L up to 1 kg/ha) and Magnesium sulphate (3 kg/ha).",
                products: ["NBS K-35", "NBS Fulvic acid powder", "NBS Micronutrient", "NBS Pseudo-Tech", "Magnesium sulphate"]
            },
            {
                name: "Application Timing",
                duration: "Proactive Schedule",
                instructions: "Begin foliar applications at least 3 weeks prior to expected cold weather events. Repeat treatments every 7 to 10 days for maximum effectiveness. This proactive approach helps to ensure that plants are adequately prepared to withstand cold stress and reduce the likelihood of frost damage.",
                products: []
            }
        ],
        features: [
            "Enhanced Cold Weather Resistance: Both programs are designed to significantly increase plant resilience to cold and frost, reducing the risk of damage during unexpected cold weather events.",
            "Improved Plant Health: Ingredients like fulvic acid and specific chelates improve overall plant health, nutrient uptake, and stress tolerance.",
            "Increased Brix Levels: Treatments raise the Brix levels in plants, an indicator of sugar content and general health, which correlates with better frost resistance.",
            "Optimized Nutrient Absorption: Our specialized formulations, including NBS Pseudo-Tech, ensure that plants utilize the applied nutrients efficiently, leading to better growth and resilience.",
            "Flexibility for Different Needs: With two tailored programs, users can choose the best fit for their agricultural practices and budget constraints."
        ],
        premiumFeatures: [
            "NBS Fulvic Acid Powder to improve nutrient uptake and stress tolerance",
            "NBS Shuttle Seven, a cutting-edge additive for improved plant vigor",
            "NBS Pseudo-Tech to optimize nutrient absorption rates",
            "Magnesium EDTA Chelate for efficient magnesium delivery",
            "MKP (Monopotassium Phosphate) for essential phosphorus and potassium"
        ],
        economicalFeatures: [
            "NBS K-35, a potassium-rich formulation for plant strength",
            "NBS Fulvic Acid Powder for enhanced nutrient assimilation",
            "NBS Micronutrient blend tailored for situations requiring less nitrogen",
            "NBS Pseudo-Tech to ensure efficient use of mixed nutrients",
            "Magnesium Sulphate to correct magnesium deficiencies affordably"
        ],
    },
    {
        id: 5,
        name: "Downy Mildew Program - Onions, Dwarf Beans, Potatoes and Peas",
        pdfFile: downyMildew,
        description: "Full program starting from soil preparation through to harvest. There are no MRL issues with any of the NBS products and the program may be used through extended harvest periods for beans and peas.",
        duration: "Full Growth Cycle",
        products: [
            "NBS Resilica™",
            "NBS Pseudo-Tech™",
            "NBS Micro-Shield™",
            "NBS Root Max™",
            "NBS Sapphire™ Granules",
            "NBS Bio-Protect™",
            "NBS CMB™",
            "NBS Max Spreader™",
            "NBS K-35™"
        ],
        stages: [
            {
                name: "Pre-plant Soil Preparation",
                duration: "Before Planting",
                instructions: "Apply NBS Resilica™ at 500 kg/ha (200 kg/acre) and incorporate to 10 cm alone or with compost and soil conditioners.",
                products: ["NBS Resilica™"]
            },
            {
                name: "Pre-Plant Seed Treatment",
                duration: "Before Planting",
                instructions: "Make a thin slurry from NBS Pseudo-Tech™ (2g), NBS Micro-Shield™ (2g), and NBS Root Max™ (10mL). Add a few drops of water to make a thin cream-like slurry. Put 1 kilogram of seed in a bucket and add the slurry. Mix thoroughly by hand to cover the surface with the slurry. Spread on a plastic sheet and allow to dry in a cool, shaded place away from direct sunlight. Can be planted when dry or stored for 30 days before planting. For cut potato seed, water down the slurry further to treat the whole seed piece, ensuring all cut surfaces are coated. Allow to dry before planting.",
                products: ["NBS Pseudo-Tech™", "NBS Micro-Shield™", "NBS Root Max™"]
            },
            {
                name: "Planting",
                duration: "During Planting",
                instructions: "Use 80% normal rate of Planting fertiliser. Blend fertiliser with 5% w/w NBS Sapphire™ Granules. Plant crop as per normal procedure.",
                products: ["NBS Sapphire™ Granules"]
            },
            {
                name: "Early Crop Establishment to Flowering Period or Bulbing",
                duration: "Every 10 Days",
                instructions: "Foliar spray to run-off with: NBS Pseudo-Tech™ (300g/100L), NBS Bio-Protect™ (200g/100L), NBS CMB™ (350mL/100L), NBS Max Spreader™ (25mL/100L). For onions, ensure the foliar spray enters the leaf throat. Maintain the coverage in early stages and spray at least twice within 4 weeks before flowering. Complete leaf coverage (top and bottom) is advised. NOTE: Most crop protection products may be added to this tank-mix without affecting the microbial components (copper-based fungicides should be applied separately and at least 4 days before this program).",
                products: ["NBS Pseudo-Tech™", "NBS Bio-Protect™", "NBS CMB™", "NBS Max Spreader™"]
            },
            {
                name: "Post-Flowering to Maturity/Harvest",
                duration: "Every 10 Days",
                instructions: "If disease pressure is present, foliar spray to run-off with: NBS Pseudo-Tech™ (300g/100L), NBS Bio-Protect™ (200g/100L), NBS K-35™ (300mL/100L), NBS Max Spreader™ (25mL/100L). Spray at least twice during crop setting, filling and maturation period. Side-dress with NBS ReSiliCa™ at 250 kg/ha (100 kg/acre) especially potatoes after flowering and during tuber bulking.",
                products: ["NBS Pseudo-Tech™", "NBS Bio-Protect™", "NBS K-35™", "NBS Max Spreader™", "NBS ReSiliCa™"]
            }
        ],
        features: [
            "No MRL issues with any NBS products",
            "Suitable for extended harvest periods for beans and peas",
            "Can be started at appropriate growth stage for already planted crops",
            "Compatible with most crop protection products",
            "Complete leaf coverage for optimal protection",
            "Flexible application timing based on crop stage"
        ]
    },
    {
        id: 6,
        name: "Nitrate Conversion Program – All Crops",
        pdfFile: nitrateConversion,
        description: "Excessive accumulation of nitrate nitrogen in plant tissues can lead to increased susceptibility to environmental stress, pest infestations, and disease attacks. Converting this excess nitrate into complex amino acids and proteins enhances plant resilience, improves crop quality, and supports balanced growth. This foliar spray aids in efficient nitrogen utilization, ensuring healthier plant development and optimal yield.",
        duration: "Post Fruit Set",
        products: [
            "Magnesium Sulphate",
            "Ammonium Molybdate",
            "Sodium Molybdate",
            "Fulvic Acid Powder",
            "NBS Maxspreader"
        ],
        stages: [
            {
                name: "Prepare the Foliar Spray",
                duration: "Before Application",
                instructions: "Mix per acre: Magnesium Sulphate (2 kg - enhances enzyme activation and protein synthesis), Ammonium Molybdate (125 g) or Sodium Molybdate (150 g if unavailable - supports nitrogen metabolism), Fulvic Acid Powder (60 g - improves nutrient absorption), NBS Maxspreader (20 ml per 100 L of water - ensures better coverage).",
                products: ["Magnesium Sulphate", "Ammonium Molybdate", "Sodium Molybdate", "Fulvic Acid Powder", "NBS Maxspreader"]
            },
            {
                name: "Method of Application",
                duration: "After Fruit Set",
                instructions: "Apply this foliar spray after fruit set, as this is a critical stage when excessive vegetative growth can affect fruit quality and overall yield. Ensure even spraying across the foliage for maximum absorption and effectiveness.",
                products: []
            }
        ],
        features: [
            "Converts excess nitrate nitrogen into complex amino acids and proteins",
            "Reduces susceptibility to environmental stress, pests, and diseases",
            "Enhances enzyme activation and protein synthesis",
            "Supports nitrogen metabolism and amino acid formation",
            "Improves nutrient absorption and plant metabolism",
            "Ensures better coverage and penetration of nutrients",
            "Regulates plant nitrogen levels for improved crop health",
            "Reduces stress vulnerability and enhances yield potential"
        ],
        objective: "To convert excess nitrate nitrogen in plant tissues into complex amino acids and proteins, reducing the risk of pest and disease susceptibility while promoting healthier crop growth."
    },
    {
        id: 7,
        name: "NBS Nutrition Farming Program for Rice",
        pdfFile: rice,
        description: "Comprehensive nutrition and plant care program for optimal rice cultivation, including both nutrition stages and plant care protocols.",
        duration: "Full Growth Cycle",
        products: [
            "NBS Bio Stimulator",
            "NBS Yield Booster",
            "NBS Bugshield",
            "NBS Bio Protect",
            "Local COMPOST"
        ],
        stages: [
            {
                name: "Initial Nutrition",
                duration: "15 Days After Plantation",
                instructions: "Broadcast NBS Bio Stimulator (100 Kg) mixed with Local COMPOST (100 KG) per acre.",
                products: ["NBS Bio Stimulator", "Local COMPOST"]
            },
            {
                name: "Growth Enhancement",
                duration: "30 Days After Plantation",
                instructions: "Apply NBS Yield Booster (2L) as foliar spray at 4 ML per litre of water.",
                products: ["NBS Yield Booster"]
            },
            {
                name: "Pre-Flowering Nutrition",
                duration: "Before Flowering",
                instructions: "Broadcast NBS Bio Stimulator (100 Kg) per acre.",
                products: ["NBS Bio Stimulator"]
            },
            {
                name: "Grain Development",
                duration: "After Graining",
                instructions: "Apply NBS Yield Booster (2L) as foliar spray at 4 ML per litre of water for good grain size and length.",
                products: ["NBS Yield Booster"]
            }
        ],
        plantCare: [
            {
                name: "Environmental Stress Protection",
                duration: "As Needed",
                instructions: "Apply NBS Bugshield (400 ml) as foliar spray at 2 ML per litre of water. Plan two applications.",
                products: ["NBS Bugshield"]
            },
            {
                name: "Pathogen Protection",
                duration: "As Needed",
                instructions: "Apply NBS Bio Protect (400 G) as foliar spray at 2 gm per litre of water. Plan two applications.",
                products: ["NBS Bio Protect"]
            }
        ],
        features: [
            "Comprehensive nutrition program from plantation to harvest",
            "Balanced nutrient application through broadcasting and foliar sprays",
            "Integrated plant care for stress and disease management",
            "Optimized for grain size and length development",
            "Flexible application timing based on crop stage",
            "Cost-effective material usage per acre"
        ],
        materialEstimate: {
            title: "Estimated Material Requirements per Acre",
            items: [
                "NBS Stimulator - 200 Kgs",
                "NBS Yield Booster - 4 L",
                "NBS Bugshield - 800 ml",
                "NBS Bio Protect - 800 G"
            ]
        }
    },
    {
        id: 8,
        name: "Phytophthora Control Program - Pepper",
        pdfFile: pepper,
        description: "Pepper vines are often planted close to the trunks of shade trees, creating specific soil conditions that influence root health. The traditional method of applying NPK fertilizers in a small root zone can negatively impact soil organic carbon levels, disrupt beneficial microbial activity, and alter soil electrical conductivity. These factors contribute to poor soil structure, water runoff, and weak root systems, making the plants more vulnerable to Phytophthora infections.",
        duration: "Growing Season",
        products: [
            "DIY 6% Liquid Humate",
            "NBS Microshield",
            "NBS Pseudotech",
            "NBS Root Max"
        ],
        stages: [
            {
                name: "Prepare the Soil Drench Mixture",
                duration: "Before Application",
                instructions: "Mix in 200L of water: DIY 6% Liquid Humate (160 ml - enhances soil organic matter and nutrient retention), NBS Microshield (40 g - boosts beneficial microbial populations), NBS Pseudotech (40 g - helps maintain soil microbial balance), NBS Root Max (100 ml - promotes healthy root development).",
                products: ["DIY 6% Liquid Humate", "NBS Microshield", "NBS Pseudotech", "NBS Root Max"]
            },
            {
                name: "Application Method",
                duration: "During Growing Season",
                instructions: "Apply 5 litres of the prepared soil drench per vine, ensuring even distribution around the base. Cover a 600 mm radius from the base of the pepper vine to optimize nutrient absorption and microbial activity. Follow-up treatments may be required during high-risk periods to maintain soil health and strengthen plant resistance.",
                products: []
            }
        ],
        features: [
            "Enhances soil structure and organic carbon levels",
            "Improves nutrient retention and microbial activity",
            "Boosts beneficial microbial populations",
            "Maintains soil microbial balance",
            "Suppresses harmful pathogens",
            "Promotes healthy root development",
            "Improves nutrient and water uptake",
            "Strengthens plant resistance against Phytophthora"
        ],
        objective: "To enhance soil structure, organic carbon levels, and root system health, creating an environment that prevents Phytophthora infections in pepper vines and promotes stronger, more resilient plants."
    }
]

const CropPrograms = () => {
    const { programId } = useParams()
    const navigate = useNavigate()
    const [selectedProgram, setSelectedProgram] = useState(cropPrograms[0])

    useEffect(() => {
        if (programId) {
            const program = cropPrograms.find(p => 
                p.name.toLowerCase().replace(/\s+/g, '-').includes(programId.toLowerCase())
            )
            if (program) {
                setSelectedProgram(program)
                // Scroll to the program section
                const element = document.getElementById(`program-${program.id}`)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            } else {
                // If program not found, navigate to main crop programs page
                navigate('/crop-programs')
            }
        }
    }, [programId, navigate])

    const handleDownload = (pdfFile) => {
        if (pdfFile) {
            const link = document.createElement('a')
            link.href = pdfFile
            link.download = `${selectedProgram.name.toLowerCase().replace(/\s+/g, '-')}-program.pdf`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    return (
        <>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeBanner/crop%20Program%20Banner/cik8dj5h2k7hbfjdfag4")`,
                    }}
                >
                </div>
                {/* Overlay with Motion Text */}
                <div className="absolute inset-0 bg-black/40">
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full flex items-center text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
                    >
                        <div className="container max-w-6xl">
                            <motion.h1
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                            >
                                Crop Programs
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8"
                            >
                                Scientifically designed nutrition programs to maximize your crop yield and quality while maintaining
                                sustainable practices.
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <Button className="bg-[#f47834] hover:bg-[#e06724] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                                    Explore Programs <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>
            </div>
            <div className="min-h-screen bg-[#DACEC2]">
                <div className="container mx-auto max-w-6xl px-4 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                icon: Calendar,
                                title: "Prescribe Program",
                                description: "Comprehensive growth cycle management",
                            },
                            {
                                icon: Leaf,
                                title: "Bio-Organic",
                                description: "Natural and sustainable solutions",
                            },
                            {
                                icon: Droplet,
                                title: "Water Efficient",
                                description: "Optimized for water conservation",
                            },
                            {
                                icon: Sun,
                                title: "Climate Adapted",
                                description: "Suitable for various conditions",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-[#DACEC2] border border-black">
                                    <CardHeader>
                                        <feature.icon className="w-10 h-10 text-black mb-2" />
                                        <CardTitle className="text-black">{feature.title}</CardTitle>
                                        <CardDescription className="text-black/70">{feature.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 ">
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-semibold mb-6 text-black">Available Programs</h2>
                            <div className="space-y-2 max-h-[60vh] lg:max-h-none overflow-y-auto pr-2">
                                {cropPrograms.map((program) => (
                                    <Card
                                        key={program.id}
                                        id={`program-${program.id}`}
                                        className={`cursor-pointer transition-all bg-[#DACEC2] ${
                                            selectedProgram?.id === program.id
                                                ? "border-[#f47834] shadow-lg"
                                                : "border border-black"
                                        }`}
                                        onClick={() => setSelectedProgram(program)}
                                    >
                                        <CardHeader className="py-3">
                                            <CardTitle className="text-base sm:text-lg text-black">{program.name}</CardTitle>
                                            <CardDescription className="text-sm text-[#293E31]/80">{program.duration}</CardDescription>
                                        </CardHeader>   
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            {selectedProgram && (
                                <Card className="bg-[#DACEC2] border border-black">
                                    <CardHeader>
                                        <CardTitle className="text-xl sm:text-2xl text-black">{selectedProgram.name}</CardTitle>
                                        <CardDescription className="text-sm sm:text-base text-black/70">{selectedProgram.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {selectedProgram.objective && (
                                            <div className="mb-4 sm:mb-6">
                                                <h3 className="font-semibold mb-2 sm:mb-3 text-black">Program Objective</h3>
                                                <p className="text-black/70 bg-[#DACEC2]/20 p-3 sm:p-4 rounded-lg text-sm sm:text-base">{selectedProgram.objective}</p>
                                            </div>
                                        )}

                                        <div className="mb-4 sm:mb-6">
                                            <h3 className="font-semibold mb-2 sm:mb-3 text-black">Recommended Products</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProgram.products.map((product) => (
                                                    <span key={product} className="bg-[#293E31] text-[#DACEC2] px-3 py-1.5 rounded-full text-xs sm:text-sm">
                                                        {product}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedProgram.features && (
                                            <div className="mb-4 sm:mb-6">
                                                <h3 className="font-semibold mb-2 sm:mb-3 text-black">Key Features</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                                    {selectedProgram.features.map((feature, index) => (
                                                        <div key={index} className="flex items-start gap-2">
                                                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#293E31] mt-0.5 flex-shrink-0" />
                                                            <span className="text-[#293E31] text-sm sm:text-base">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <Accordion type="single" collapsible className="space-y-2">
                                            {selectedProgram.stages.map((stage, index) => (
                                                <AccordionItem key={index} value={`stage-${index}`} className="border border-[#293E31] rounded-lg bg-[#DACEC2]/50">
                                                    <AccordionTrigger className="px-4 py-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[#f47834]">{index + 1}.</span>
                                                            <span className="text-sm sm:text-base text-black">{stage.name}</span>
                                                            <span className="text-xs text-[#293E31]/70 ml-2">({stage.duration})</span>
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-4 pb-4">
                                                        <div className="space-y-3">
                                                            <p className="text-[#293E31] text-sm sm:text-base">{stage.instructions}</p>
                                                            {stage.products.length > 0 && (
                                                                <div className="flex flex-wrap gap-2">
                                                                    {stage.products.map((product) => (
                                                                        <span key={product} className="bg-[#293E31]/10 text-[#293E31] px-2 py-1 rounded-full text-xs sm:text-sm">
                                                                            {product}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}

                                            {selectedProgram.plantCare && (
                                                <>
                                                    <div className="mt-4 sm:mt-6 mb-2 sm:mb-4">
                                                        <h3 className="font-semibold text-base sm:text-lg text-black">Plant Care Protocol</h3>
                                                    </div>
                                                    {selectedProgram.plantCare.map((care, index) => (
                                                        <AccordionItem key={`care-${index}`} value={`care-${index}`} className="border border-[#293E31] rounded-lg bg-[#DACEC2]/50">
                                                            <AccordionTrigger className="px-4 py-2">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-[#f47834]">{index + 1}.</span>
                                                                    <span className="text-sm sm:text-base text-black">{care.name}</span>
                                                                    <span className="text-xs text-[#293E31]/70 ml-2">({care.duration})</span>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent className="px-4 pb-4">
                                                                <div className="space-y-3">
                                                                    <p className="text-[#293E31] text-sm sm:text-base">{care.instructions}</p>
                                                                    {care.products.length > 0 && (
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {care.products.map((product) => (
                                                                                <span key={product} className="bg-[#293E31]/10 text-[#293E31] px-2 py-1 rounded-full text-xs sm:text-sm">
                                                                                    {product}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </>
                                            )}
                                        </Accordion>

                                        {selectedProgram.materialEstimate && (
                                            <div className="mt-4 sm:mt-6">
                                                <h3 className="font-semibold mb-2 sm:mb-3 text-black">{selectedProgram.materialEstimate.title}</h3>
                                                <div className="bg-[#DACEC2]/20 p-3 sm:p-4 rounded-lg">
                                                    <ul className="space-y-2">
                                                        {selectedProgram.materialEstimate.items.map((item, index) => (
                                                            <li key={index} className="flex items-center gap-2">
                                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                                                                <span className="text-black/70 text-sm sm:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-6 sm:mt-8">
                                            <Button
                                                onClick={() => handleDownload(selectedProgram.pdfFile)}
                                                className="bg-[#f47834] hover:bg-[#e06724] text-white w-full sm:w-auto text-sm sm:text-base flex items-center gap-2 cursor-pointer"
                                            >
                                                <Download className="w-4 h-4" />
                                                Download Program Guide
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Solution Section */}
            <div className="bg-[#DACEC2] text-black py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
                            🌱 Need a Tailored Solution for Your Crops? 🌱
                        </h2>
                        <p className="text-lg sm:text-xl mb-2 text-black">
                            Didn't find a crop program that fits your needs?
                        </p>
                        <p className="text-base sm:text-lg text-black/70 max-w-2xl ">
                            💡 We specialize in customized solutions! Whether it's a unique crop, soil deficiency, or a specific growth stage challenge—our experts are here to help.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-8 items-center"
                    >
                        <div className="space-y-6">
                            <h3 className="text-xl sm:text-2xl font-semibold">
                                📩 Get a Personalized Crop Program Today!
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-[#f47834] text-xl">🔹</div>
                                    <div>
                                        <h4 className="font-medium text-black">Tailored Nutrient Plans</h4>
                                        <p className="text-black/70 text-sm">Custom nutrition programs based on your crop's specific needs</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#f47834] text-xl">🔹</div>
                                    <div>
                                        <h4 className="font-medium text-black">Soil & Deficiency Diagnosis</h4>
                                        <p className="text-black/70 text-sm">Expert analysis of your soil conditions and nutrient requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#f47834] text-xl">🔹</div>
                                    <div>
                                        <h4 className="font-medium text-black">Stage-Specific Growth Solutions</h4>
                                        <p className="text-black/70 text-sm">Targeted interventions for each growth stage</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <p className="text-lg mb-4 text-black">📞 Let's Talk! Click below & our team will assist you.</p>
                                <Link 
                                    to="/contact-us" 
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <Button
                                        className="bg-[#f47834] hover:bg-[#e06724] text-white px-8 py-3 text-base sm:text-lg w-full sm:w-auto flex items-center justify-center gap-2"
                                    >
                                        Request a Custom Plan
                                        <ChevronRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white border border-black p-6 sm:p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-6 text-black">Why Choose a Custom Program?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#f47834] mt-1" />
                                    <p className="text-black/70">Optimized for your specific crop variety and growing conditions</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#f47834] mt-1" />
                                    <p className="text-black/70">Addresses unique challenges in your farming operation</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#f47834] mt-1" />
                                    <p className="text-black/70">Continuous support and adjustments throughout the growing season</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#f47834] mt-1" />
                                    <p className="text-black/70">Cost-effective solutions tailored to your budget</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default CropPrograms
