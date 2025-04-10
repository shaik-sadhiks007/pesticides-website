export const productCategories = {
    agricultureAndHorticulture: {
        name: "Agriculture and Horticulture",
        description: "Professional-grade products for agricultural and horticultural applications",
        subcategories: {
            liquidFertilisers: {
                name: "LIQUID FERTILISERS",
                products: [
                    {
                        id: "root-max-turf",
                        name: "NBS ROOT MAX™",
                        type: "Organic Fertiliser Foliar spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/hhz69fqxzm9uoqatgaqm",
                        description: "NBS ROOT MAX™ is a combination of Organic Matter, Organic Carbon, and Organic NPK formulated to promote vigorous root growth and luxurious shoot development. Promotes rapid establishment of transplanted crops like vegetables, strawberries, tree crops, lawns, turfs, and brassicas (Cauliflower, cabbage, broccoli, etc).",
                        suitableFor: "Vegetables, strawberries, tree crops, lawns, turfs, and brassicas",
                        keyPerformance: [
                            "Broad Spectrum Nutrition and Plant tonic or rescue remedy during stress conditions such as frost, heat, and transplant shock.",
                            "Promoting strong shoot development and overall plant vitality.",
                            "Stimulates and Improves root growth and branching."
                        ],
                        growingStage: "Planting",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Vegetable & Seedlings",
                                    Application: "Soak roots in 1:200 dilution (1L per 200L)",
                                    Fertigation: "3L/ha immediately after planting",
                                    Frequency: "N/A"
                                },
                                {
                                    Crop: "Tree Tube stock",
                                    Application: "Soak roots in 1:200 dilution (1L per 200L)",
                                    Fertigation: "3L/ha immediately after planting",
                                    Frequency: "N/A"
                                },
                                {
                                    Crop: "Strawberry Runners",
                                    Application: "Soak roots in 1:200 dilution (include NBS MicroShield at 500g per 100L water)",
                                    Fertigation: "3L/ha immediately after planting",
                                    Frequency: "N/A"
                                }
                            ]
                        }
                    },
                    {
                        id: "yield-booster",
                        name: "NBS YIELD BOOSTER™",
                        type: "Organic Fertiliser Foliar Spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/h2g5ozc2us3smkue1zwq",
                        description: "NBS YIELD BOOSTER™ is a formulation of organic matter, organic carbon, organic potassium, and plant extract auxins that enhance nutrient absorption, flowering, fruiting, and yield while improving plant resilience and quality.",
                        suitableFor: "Grain crops, vegetables, fruit crops, lawns, turf, floriculture, and ornamental plants",
                        keyPerformance: [
                            "Enhances macro and micro-nutrient availability and promotes flowering, fruiting, and branches.",
                            "Improves photosynthesis and nitrogen absorption and boosts plant stamina (SAR).",
                            "Converts maximum flowers into fruit sets.",
                            "Increases fruit size, quality, and shelf life while extending the harvesting period for higher yields.",
                            "Enriches the effectiveness of foliar Fertilisers and other bio-nutrients by promoting stomatal opening for better absorption and penetration."
                        ],
                        growingStage: "Nursery to harvesting",
                        applicationRates: {
                            table: false,
                            data: [
                                "Apply as a foliar spray at 2 ml to 4 ml per litre of water, depending on the crop’s growth stage."
                            ]
                        }
                    },
                    {
                        id: "k-35",
                        name: "NBS K-35™",
                        type: "Organic Fertiliser Foliar Spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/kmx8blxw1tytrysukesw",
                        description: "NBS K-35™ is a high-analysis, pH-buffered liquid potassium complexed with organic acids, designed to overcome pH-related uptake issues and provide a super-available form of potassium essential for plant growth and development.",
                        suitableFor: "Grain crops, vegetables, fruit crops, orchards, vineyards, lawns, turf, floriculture, and ornamental plants",
                        keyPerformance: [
                            "Clear foliar spray formulation that does not leave stains.",
                            "Amplifies fruit and flower size, color, and overall quality.",
                            "Improves taste, shelf life, and market value of produce."
                        ],
                        growingStage: [
                            "Vegetative Growth",
                            "Pre-Flowering",
                            "Flowering",
                            "Fruit Set & Fill"
                        ],
                        applicationRates: {
                            table: false,
                            data: [
                                "Vegetables & Turf: 1L/100L water, up to 5L/ha.",
                                "Orchards & Vineyards: 1L/100L water, up to 7L/ha.",
                                "Broadacre Crops: 2L/ha in 120L water, applied before crop canopy closure."
                            ]
                        }
                    },
                    {
                        id: "cmb",
                        name: "NBS CMB™",
                        type: "Advanced Fertiliser for Photosynthesis & Cell Division – Foliar & Soil Application",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/ckmg8qtaioqxwlfz6pg9",
                        description: "NBS CMB™ is a synergistic blend of organic calcium, magnesium, and boron, enriched with natural complexing agents and plant growth promotants. It optimizes photosynthesis, accelerates cell division, and optimizes plant Brix levels, contributing to healthier growth and improved crop yield.",
                        suitableFor: "Vegetables, turfs, grain crops, flowers, shrubs, trees, orchards, vineyards, fruit and vegetable crops, broadacre field crops, nurseries, and young plants",
                        keyPerformance: [
                            "Stimulates cell division, promoting vigorous plant growth.",
                            "Enhances cell membrane integrity, flower bud formation, pollen ripening, and successful fruit set.",
                            "Boosts chlorophyll concentration, maximizing photosynthesis and phosphorus efficiency.",
                            "Functions as a microbial stimulant when used with bio-nutrients.",
                            "Safe for all plants at recommended rates and compatible with most soluble inputs."
                        ],
                        recommendation: [
                            "Jar test before application if not sure and treat a small section of plants first to check safety of mixtures."
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Vegetable, flowers, shrubs, and trees",
                                    Dosage: "Foliar: 1 L/100 L of water (max. 2 L/acre)",
                                    Comments: "Vary rate with plant vigor. Start 3-4 weeks before flowering. Apply 2 sprays, 10-14 days apart."
                                },
                                {
                                    Crop: "Orchards & Vineyards",
                                    Dosage: "Foliar: 1 L/100 L of water (max. 2.8 L/acre)",
                                    Comments: "Vary rate with plant vigor. Start 3-4 weeks before flowering. Apply 2 sprays, 10-14 days apart."
                                },
                                {
                                    Crop: "All fruit and vegetable crops",
                                    Dosage: "Soil: 2-4 L/acre, Soil drench: 2 mL/litre",
                                    Comments: "Don't apply with soluble Fertilisers containing phosphates or sulphates."
                                },
                                {
                                    Crop: "Broadacre Field Crops",
                                    Dosage: "Foliar: 0.8 L/acre",
                                    Comments: "Use a minimum of 50 L water per acre, apply before canopy closure."
                                },
                                {
                                    Crop: "Nurseries and young plants",
                                    Dosage: "Foliar: 0.5 mL/L of water",
                                    Comments: "Apply every 10-14 days, avoid the hottest time of the day."
                                }
                            ],
                            note: "Can be tank mixed with NBS K-35™ at 1.25 L/acre to enhance plant resilience and increase vigor."
                        },
                    },
                    {
                        id: "silicare",
                        name: "NBS SILICARE™",
                        type: "Revolutionary Rapid-Uptake Silica Fertiliser",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/fkvdjixre7egkmunb6tb",
                        description: "NBS SILICARE™ is a silica-based fertiliser in its 99.99% bio-available form, comprising Ortho Silicic Acid, Silicon as SiO2, and Potassium as K2O. Silica is a recognised immune elicitor, reducing the need for chemical intervention.",
                        suitableFor: "Grain crops, vegetables, fruit crops, orchards, vineyards, turf, floriculture, and ornamental plants",
                        keyPerformance: [
                            "Strengthens cell walls, offering protection from environmental stress.",
                            "Improves photosynthesis, boosting plant growth and yield.",
                            "Develops drought resistance, helping plants endure stress.",
                            "Increases post-harvest shelf life and transit life of produce, maintaining quality."
                        ],
                        growingStage: "Apply 25 days after planting, before flowering, and before fruiting.",
                        applicationRates: {
                            table: false,
                            data: [
                                "Foliar Spray: 100ml per 100L of water."
                            ]
                        }
                    },
                    {
                        id: "size-plus",
                        name: "NBS SIZE PLUS™",
                        type: "Organic Fertiliser Foliar Spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/w2ocaigu5s5gts2ebtjg",
                        description: "NBS SIZE PLUS™ is formulated with organic potassium (K), organic matter, organic nitrogen (N), and bio-stimulants derived from plant extracts to increase the size and weight of fruits and vegetables. Its 100% water-soluble formula is easily absorbed through leaves, fruits, and roots, promoting cell division, elongation, and overall growth for higher yields.",
                        suitableFor: "All fruits, vegetables, and tuber crops such as potatoes, carrots, and sugar beets",
                        keyPerformance: [
                            "Stimulates cell division and elongation, leading to increased fruit and vegetable size.",
                            "Encourages proper nutrient distribution, resulting in heavier fruits and longer vegetables.",
                            "Strengthens fruit structure, extending freshness and post-harvest shelf life.",
                            "Intensifies the plant's ability to hold water and store sugars, improving fruit sweetness and texture.",
                            "Ensures even distribution of nutrients, leading to consistent fruit size and shape."
                        ],
                        growingStage: "After fruit setting until harvest",
                        applicationRates: {
                            table: false,
                            data: [
                                "Foliar Spray : 2 ml per litre of water",
                                "Soil Application : 500 ml per acre"
                            ]
                        }
                    },
                    {
                        id: "max_spreader",
                        name: "NBS MAX SPREADER™",
                        type: "Organic Wetting Agent & Spreader",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/vsfb9nikpe5asu9demwy",
                        description: "NBS MAX SPREADERTM is an innovative organic wetting agent and spreader formulated from natural materials, including organic carbon and non-ionic silicon compounds derived from rice husk. Designed to enhance the distribution and adhesion of agricultural sprays, it ensures optimal coverage and efficacy of foliar and soil-applied products. Improving the wetting properties of spray solutions facilitates better nutrient uptake and crop protection.",
                        suitableFor: "All crops, including vegetables, fruits, grains, lawns, turf, floriculture, hydroponic, and ornamental plants.",
                        keyPerformance: [
                            "Elevate Spreadability and Penetration: Improves wetting and spreading properties of spray solutions, ensuring thorough coverage of plant surfaces.",
                            "Increased Product Efficiency: Enhances the effectiveness of applied products, potentially reducing the required application rates.",
                            "Cost-Effective: High efficiency allows for reduced usage rates, leading to overall cost savings.",
                            "Versatile Compatibility: Suitable for use with a wide range of agricultural inputs, including Fertilisers and micronutrients.",
                            "Environmentally Friendly: Biodegradable and safe for the environment, derived from natural sources."
                        ],
                        applicationRates: {
                            table: false,

                            usageGuidelines: {
                                Mixing: "Add NBS MAX SPREADER™ to the spray tank after adding other products and ensure thorough mixing.",
                                Timing: "Apply during appropriate growth stages as recommended for the specific crop or plant.",
                                Safety: "While NBS MAX SPREADERTM is derived from natural materials, it is advisable to follow standard safety practices during handling and application."
                            },
                            dosages: {
                                FoliarSpray: "Use 0.1 ml per litre of water in conjunction with foliar applications.",
                                SoilApplication: "Apply 0.25 ml per litre of water through fertigation systems or drip irrigation."
                            }
                        },

                    }
                ]
            },
            solidFertilisers: {
                name: "SOLIDS FERTILISERS",
                products: [
                    {
                        id: "micro-nutrient",
                        name: "NBS MICRO NUTRIENT™",
                        type: "Organic Micro-Nutrient Fertiliser",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Solids/mnrqqglqzs8quyrgs59l",
                        description: "NBS MICRO NUTRIENT™ is an organic amino chelate fertiliser formulated for foliar spray and soil application. It combines natural organic matter and plant extracts with a complete amino acid-chelated micro-nutrient blend for maximum bioavailability, tolerability, and absorption. This formulation includes Fe, Mg, Zn, Cu, Mn, B, Mo, and Organic Nitrogen, providing essential nutrients to bolster plant health and productivity.",
                        suitableFor: "Grain crops, vegetables, fruit crops, lawns, turf, floriculture, and ornamental plants. It can be applied as a foliar spray or soil treatment via drip irrigation, fertigation, or drenching.",
                        keyPerformance: [
                            "Stimulates enzyme activity essential for grain, seed, and fruit formation.",
                            "Improves water movement within plants for better hydration and nutrient transport.",
                            "Boosts chlorophyll production for efficient photosynthesis.",
                            "Strengthens cell walls, improving plant structure and resilience.",
                            "Promotes strong root metabolism and flexible stems.",
                            "Supports carbohydrate and nitrogen metabolism, overcoming stress and accelerating plant maturity.",
                            "Prevents stunted growth by regulating auxin levels and protein synthesis."
                        ],
                        growingStage: "Nursery to Harvesting",
                        applicationRates: {
                            table: false,
                            data: [
                                "Foliar Spray : 1.5g per litre of water, applied from nursery to harvest",
                                "Soil Application : 2.5g per litre of water through drip irrigation, fertigation, or manual drenching"
                            ]
                        }
                    },
                    {
                        id: "silicon-Fertiliser",
                        name: "NBS SILICON Fertiliser™",
                        type: "Organic Granular Fertiliser",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Solids/qzsxsrohhymur4khp8ni",
                        description: "NBS SILICON Fertiliser™ is designed for soil application and formulated with Organic Matter, SiO2, CaO, MgO, Zn, and Cu. This blend optimizes nutrient uptake, strengthens plant persistence, and improves overall plant health. Silicon plays a key role in improving plant structure, promoting resistance, supporting better nutrient absorption, and ensuring optimal growth and higher yields.",
                        suitableFor: "Grain crops, vegetables, fruit crops, lawns, turf, floriculture, and ornamental plants",
                        keyPerformance: [
                            "Fortifies plant strength by improving cell wall integrity and vascular transport.",
                            "Increases Systemic Acquired Resistance (SAR).",
                            "Improves photosynthesis, leading to stronger growth and higher yields.",
                            "Strengthens mechanical structures, improving plant stability and stress tolerance.",
                            "Extends the harvesting period by improving plant resilience enriches fruit quality with a shiny appearance and improves post-harvest shelf life."
                        ],
                        growingStage: "Apply during soil preparation and side-dress at key stages of plant development",
                        applicationRates: {
                            table: false,
                            data: [
                                "For all crops : 25 kg to 50 kg per acre based on soil requirements",
                                "For vegetables and tree crops : 50g to 100g per plant/tree"
                            ]
                        }
                    },
                    {
                        id: "neem-Fertiliser",
                        name: "NBS NEEM Fertiliser™",
                        type: "Organic Fertiliser for Soil Application",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Solids/mgv3heiqwbtbiqzkn2bd",
                        description: "NBS NEEM Fertiliser™ is a premium organic fertiliser formulated with organic matter, nitrogen, carbon, phosphorus, potassium, and azadirachtin. It revitalises soil health and supports plant growth, offering an eco-friendly solution to improve soil structure and bolster plant resilience against environmental stresses.",
                        suitableFor: "All crops, including vegetables, fruits, grains, turf, and ornamental plants. Ideal for use as a soil amendment and in integrated fertilisation systems.",
                        keyPerformance: [
                            "Dual Functionality: Acts as both an organic fertiliser and a natural enhancer of plant endurance, supporting overall plant health.",
                            "Soil Health Enhancement: Improves soil fertility and supports microbial activity, leading to more productive crops.",
                            "Sustainable Farming: Formulated to align with eco-friendly agricultural practices, promoting environmental sustainability.",
                            "Plant Growth Support: Provides essential nutrients that aid in the development of strong root systems, enhancing stress resistance and supporting overall plant health.",
                            "Supports crop recovery from nematode-related stress, promoting root health and promoting overall plant durability."
                        ],
                        growingStage: "Apply before planting, during vegetative growth, and throughout the growing season",
                        applicationRates: {
                            table: false,
                            data: [
                                "Soil Application : 125-300 kg per acre, depending on crop and soil conditions"
                            ]
                        }
                    },

                    {
                        id: "resilica-soil-conditioner",
                        name: "NBS ReSilica™",
                        type: "Organic Fertiliser & Soil Conditioner",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Solids/d0dnerduqriyh7666ffu",
                        description: "A unique blend of organic carbon, calcium, silicon, sulphur, and plant bio-stimulants, complemented by background NPK to enhance soil structure, strengthen plant resilience, and improve nutrient availability.",
                        suitableFor: "Golf courses, sports turf, lawns, ornamental landscapes, fairways, and trees",
                        keyPerformance: [
                            "Enhances soil health while providing essential minerals for plant growth.",
                            "Strengthens cell strength, membrane function, and physical defenses for stems and leaves against environmental challenges.",
                            "Enhances plant resilience, strengthens immunity, and improves structural integrity for overall health.",
                            "Aids protein production and the formulation of key amino acids for plant immunity.",
                            "Prevents phosphorus lock-up in acidic soils, ensuring better nutrient absorption.",
                            "Improves xylem water movement, aiding nutrient transport.",
                            "Assists in sodium management, promoting soil balance.",
                            "Enriches soil microbiology by providing an organic carbon food source.",
                            "Enhances leaf positioning for optimal sunlight exposure and photosynthesis."
                        ],
                        growingStage: "Best applied during soil preparation and as a top-dressing to sustain plant health.",
                        breakdown: "Rapidly breaks down upon moisture contact, releasing nutrients efficiently.",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "General Soil Application, Fairways and trees",
                                    Application: "15 - 30 Kg per 1000 m. Sq.",
                                    Comments: "For best results, apply during soil preparation and as a top-dressing. Be sure to water immediately after application to maximise it’s benefits."
                                },
                                {
                                    Crop: "Landscape and Fairway trees",
                                    Application: "100 - 150 g/tree",
                                    Comments: "Spread even around the tree."
                                }
                            ],
                            note: "Can be applied alone or blended with other granular and compost-based Fertilisers for enhanced efficiency."
                        }
                    },
                    {
                        id: "green-compost",
                        name: "NBS Green Compost™",
                        type: "Sustainable Compost, Fertiliser & Soil Conditioner",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Solids/iif8hgvdf2wjq9jhktur",
                        description: "Produced from recycled green waste under controlled conditions, NBS Green Compost™ is a nutrient-rich, humified compost that enhances soil fertility and supports beneficial soil microbiology. It is carefully screened to remove larger particles, retaining the essential minerals and biology that promote plant health.",
                        suitableFor: "Various agricultural and landscaping applications, including eco-mulching and soil conditioning.",
                        keyPerformance: [
                            "Improves soil structure, fertility, and microbial activity, leading to healthier plant growth.",
                            "When applied as mulch, it helps retain soil moisture, reduces the need for frequent watering, and acts as a physical barrier that reduces weed growth by limiting light exposure to the soil surface.",
                            "Encourages the establishment of beneficial soil fungi, contributing to a balanced soil ecosystem."
                        ],
                        growingStage: "Can be incorporated into the soil before planting or used as a surface mulch for ongoing soil health improvement.",
                        dosageAndApplication: {
                            soilConditioner: {
                                dosage: "400-500 g/m² (4-5 T/ha)",
                                method: "Incorporate up to 10 cm deep for optimal nutrient release and microbial inoculation."
                            },
                            ecoMulch: {
                                dosage: "5-10 cm blanket application",
                                method: "The surface layer helps retain moisture, suppress weeds, and promote beneficial fungi."
                            }
                        },
                        applicationRates: {
                            table: false,
                            soilConditioner: {
                                dosage: "400-500 g/m² (4-5 T/ha)",
                                method: "Incorporate up to 10 cm deep for optimal nutrient release and microbial inoculation."
                            },
                            ecoMulch: {
                                dosage: "5-10 cm blanket application",
                                method: "The surface layer helps retain moisture, suppress weeds, and promote beneficial fungi."
                            }
                        }
                    }
                ]
            },
            humates: {
                name: "HUMATES",
                products: [
                    {
                        id: "sapphire-granules",
                        name: "NBS SAPPHIRE GRANULES™",
                        type: "Organic Fertiliser for Soil Application",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Humates/y54m5ak4j7jsgqlawqja",
                        description: "NBS SAPPHIRE GRANULES™ is a water-soluble Potassium Humate fertiliser derived from premium-quality leonardite. It optimises soil health, stabilises nutrients, and promotes root development. These granules can be blended with granular fertilisers or dissolved in liquid formulations, making them ideal for urea and soluble phosphate sources.",
                        suitableFor: "All broadacre crops, fruit crops, vegetables, and pastures. Compatible with granular fertilisers, dissolved urea, and other fertiliser blends.",
                        keyPerformance: [
                            "Stabilises nitrogen, reduces nutrient lock-up, and cultivates phosphate availability.",
                            "Encourages stronger root development for better nutrient uptake.",
                            "Rich in humic acid, supporting beneficial microbes and improving soil structure.",
                            "Helps neutralise high sodium and heavy metals, creating a healthier growing environment."
                        ],
                        growingStage: "Pre-Planting, At Planting, Vegetative Growth, Pre-Flower, Flowering, Fruit Set & Fill",
                        applicationRates: {
                            table: false,
                            dosages: {
                                BroadacreCrops: "Mix 5 - 15 kg/ha (2-6 kg/acre) with fertiliser.",
                                GeneralUse: "5% of the total blend (e.g., 5 kg per 100 kg of urea, DAP/MAP).",
                                MaximumRates: "20 kg/ha for banded applications and 50 kg/ha for broadcast applications."
                            }
                        }
                    },
                    {
                        id: "bio-stimulator",
                        name: "NBS BIO STIMULATOR™",
                        type: "Organic Granular Fertiliser for Soil Application",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Humates/ll020sm9oywnpjlcrssh",
                        description: "NBS BIO STIMULATOR™ is formulated with organic matter, organic calcium, and organic carbon. It disperses in the soil upon contact with moisture, releasing nutrients gradually while chelating soil nutrients to bolster plant absorption.",
                        suitableFor: "Grain crops, vegetables, fruit crops, lawns, turf, floriculture, and ornamental plants.",
                        keyPerformance: [
                            "Improves soil structure and cultivates microbial activity.",
                            "Strengthens plant immunity against diseases.",
                            "Chelates soil nutrients for better plant absorption, enhancing soil fertility and ensuring sustained nutrient availability."
                        ],
                        growingStage: "Can be applied at soil preparation and side-dressed at different growth stages.",
                        applicationRates: {
                            table: false,
                            dosages: {
                                dosage: "25 - 50 kg per acre, depending on soil requirements."
                            }
                        }
                    },
                    {
                        id: "sapphire-liquid",
                        name: "NBS SAPPHIRE LIQUID™",
                        type: "Concentrated Liquid Carbon for Fertiliser Stability, Soil Activation & Growth Enhancement",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Humates/o16rtaetd8orogvlijev",
                        description: "NBS SAPPHIRE LIQUID™ is a powerful liquid carbon formulation designed to stabilise fertilisers, enhance nutrient absorption, activate soil microbiology, and condition the soil. It prevents nitrogen loss, reduces leaching, buffers sodium, and improves plant root development for sustained health and vigor.",
                        suitableFor: "Golf courses, sports turf, landscapes, broadacre crops, fruit crops, pasture, vegetable, and grain crops.",
                        keyPerformance: [
                            "Helps stabilise liquid formulations of urea and other sources of nitrogen.",
                            "Holds soluble nutrients in the root zone, minimising leaching losses.",
                            "Buffers sodium and complex heavy metals in soil and irrigation water, reducing crop stress and soil contamination.",
                            "Stimulates beneficial soil fungi, improving soil microbial activity.",
                            "Enhances soil structure and increases water-holding capacity.",
                            "Promotes root branching, expanding root volume for better nutrient uptake.",
                            "Improves nutrient absorption, leading to stronger, healthier plants.",
                            "Simple & convenient to measure, mix, and apply."
                        ],
                        growingStage: "Recommended for continuous application to maintain soil stability, improve nutrient efficiency, and enhance plant resilience.",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Fairways and Trees",
                                    Application: "20 L/ha per application",
                                    Comments: "Apply monthly for best results. Avoid mixing with strong acidic fertiliser or solutions as efficacy may be reduced."
                                },
                                {
                                    Crop: "Foliar Sprays",
                                    Application: "2 L/100 litres per application (up to 5 L/ha)",
                                    Comments: "Some spray residues may remain on leaves. This is not harmful, and the next irrigation will wash residues into the soil where the product is absorbed."
                                }
                            ]
                        }
                    }
                ]
            },
            microbesAndBioStimulants: {
                name: "MICROBES AND BIO-STIMULANTS",
                products: [
                    {
                        id: "bug-shield",
                        name: "NBS BUG SHIELD™",
                        type: "Organic Botanical Biostimulant",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/ow3grvm2wqiacbmszxhp",
                        description: "NBS BUG SHIELD™ is an organic botanical formulation composed of organic matter, organic carbon, natural NPK (Nitrogen, Phosphorus, Potassium), carrier oils, and spice oils. This unique blend not only serves as an effective plant nutrient but also simulates plants vigour against various environmental stressors, promoting overall plant health and vitality.",
                        suitableFor: "Grain crops, Vegetables, Fruit crops, Lawns and turf, Floriculture, and Ornamental plants",
                        keyPerformance: [
                            "Broad-Spectrum Support: Strengthens plant health across a wide range of crops",
                            "Systemic Acquired Resistance (SAR): Boosts the plant's internal defence mechanisms, improving resilience against environmental challenges",
                            "Soil Health: When applied during soil preparation, it contributes to a healthier soil environment, promoting robust plant growth",
                            "All-Stage Compatibility: Suitable for application from nursery stages through to harvest, ensuring continuous support throughout the plant's lifecycle",
                            "Residue-Free Harvest: Ensures that produce remains free from unwanted residues, aligning with organic farming principles"
                        ],
                        growingStage: "All growth stages, from nursery through to harvest. This allows for flexible application timing based on specific crop needs and environmental conditions.",
                        applicationRates: {
                            table: false,
                            dosages: {
                                FoliarApplication: "Dilute 2 mL of NBS BUG SHIELD™ per litre of water. Apply this solution as a foliar spray, ensuring thorough coverage of the foliage. Adjust application frequency based on crop development stages and specific environmental conditions.",
                                SoilApplication: "For soil treatments, mix 2 litres of NBS BUG SHIELD™ with 200 litres of water. Apply this mixture through drip irrigation systems, fertigation setups, or manual drenching methods. This approach supports root health and boost overall plant vigour."
                            }
                        }
                    },
                    {
                        id: "bio-guard",
                        name: "NBS BIO-GUARD™",
                        type: "Organic Bio-stimulant",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/tflairb1hgwjyhgsbwme",
                        description: "NBS BIO-GUARD™ is an innovative, organic botanical formulation that combines Azadirachtin with a natural silicone-based spreader. This unique blend offers exceptional wetting and penetration properties, enhancing plant health and resilience.",
                        suitableFor: "Grain crops, floriculture, vegetable, fruit crops, lawns, golf courses, sports turf, and ornamental landscapes. NBS BIO-GUARDTM supports robust plant development and soil vitality.",
                        keyPerformance: [
                            "Comprehensive Plant Support: Assists in maintaining plant health during various environmental challenges",
                            "Advance Natural Defences: Promotes the plant's inherent ability to withstand external stressors",
                            "Soil Preparation Advantage: When applied during soil preparation, it contributes to a healthier growing environment",
                            "Unrestricted Use: No waiting period is required after application, allowing for immediate access to treated areas"
                        ],
                        applicationRates: {
                            dosages: {
                                FoliarSprays: "Dilute 2.5 mL of NBS BIO-GUARDTM per litre of water. Ensure thorough coverage of all leaf surfaces, spraying until runoff occurs. Do not exceed 2 L/ha",
                                SoilApplication: "Apply at a rate of 2.5-3.0 L/ha (1.0-1.25 L/acre). This method supports systemic benefits through root uptake. Follow-up treatments may be required for optimal results. Use higher rates on heavier soils or where soil conditions necessitate. Ensure thorough mixing with water prior to application, and avoid using very cold water."
                            },
                            note: "Due to its unique, non-toxic mode of action, immediate effects may not be visible. However, regular applications can support plant health and resilience over time."
                        }
                    },
                    {
                        id: "bio-protect",
                        name: "NBS BIO PROTECT™",
                        type: "Organic Mineral Solution for Plant Health & Vitality",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/dis31j1nrajfrrsthqsc",
                        description: "NBS BIO PROTECT™ is an organically certified formulation crafted from organic matter, mineral potassium, and mineral phosphorus. This innovative blend integrates advanced organic extracts with natural minerals to support plant health and bolster natural defenses. Beyond its protective qualities, it serves as a Fertiliser, supplying essential phosphorus and potassium to promote overall plant vigor. Notably, it leaves zero residues and naturally decomposes into beneficial plant nutrients.",
                        suitableFor: "Grain crops, vegetables, fruit crops, lawns, turf, floriculture, and ornamental plants. It can be applied independently or in combination with other compatible products for both foliar spraying and soil applications.",
                        keyPerformance: [
                            "Dual Functionality: Acts as both a health supporter and Fertiliser, enriching plants with vital phosphorus and potassium",
                            "Natural Defenses: Strengthening plant's inherent resilience and developing immunity to environmental challenges and stressors",
                            "Promotes Robust Growth: Stimulates root development and fortifies stems",
                            "Improves Yield and Quality: Encourages uniform growth, timely maturity, enriching flowering, and seed production",
                            "Supports Vital Plant Functions: Activates enzymes, aids in nitrogen fixation in legumes, facilitates food formation, and boosts drought resistance",
                            "Eco-Friendly: Decomposes into essential plant nutrients without leaving harmful residues"
                        ],
                        growingStage: "Nursery Stage, Vegetative Growth, Pre-flowering, Flowering, Seed Production, Maturity and Harvesting",
                        applicationRates: {
                            dosages: {
                                FoliarSprays: "Dissolve 2 grams per litre of water and apply it during various crop development stages.",
                                SoilApplication: "Use 500 grams per acre through methods such as drip irrigation, fertigation, or manual drenching.",
                                ApplicationTiming: "Suitable for use from nursery to harvest to support continuous plant health."
                            }
                        }
                    },
                    {
                        id: "pseudo-tech",
                        name: "NBS PSEUDO TECH™",
                        type: "Microbial and Plant Immunity Enhancer",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/x5cnezjr7ilczffbztbx",
                        description: "NBS PSEUDO TECH™ is a microbial-based solution containing Pseudomonas fluorescens, a naturally occurring bacterium known to promote plant health. It works by stimulating plant immunity and supporting beneficial microbial activity in the soil, contributing to overall plant vigour. This environmentally friendly product is safe for use around children, pets, and beneficial organisms.",
                        suitableFor: "All crops and can be applied as a soil drench or foliar spray.",
                        keyPerformance: [
                            "Supports Plant Immunity: Enriches natural resistance mechanisms for healthier crops",
                            "Environmentally Friendly: Safe for humans, animals, and beneficial microbes, with no withholding period",
                            "Promotes Soil & Root Health: Encourages beneficial microbial activity, improving soil conditions",
                            "Boost Crop Resilience: Assists plants in withstanding stress and maintaining productivity throughout the growth cycle"
                        ],
                        growingStage: "Soil Preparation, Planting, Vegetative Growth, Pre-Flowering, Flowering & Fruit Set",
                        applicationRates: {
                            dosages: {
                                SoilDrenching: "Dissolve 5 grams per litre of water (sufficient for 10 m2). Apply during soil preparation or at planting and repeat every 2-4 weeks or as needed.",
                                FoliarSprays: "Spray: Mix 3 grams per litre of water. Spray until runoff occurs. Repeat every two weeks as a preventive measure or more frequently if necessary.",
                                OptionalEnhancement: "Combine with an organic fertiliser like NBS ROOT-MAXTM to further promote plant health."
                            },
                            note: "For Optimal Results, Mix the product in water and let it stand for 1 hour before application. Maintain good agitation during spraying."
                        }
                    },
                    {
                        id: "bio-defender",
                        name: "NBS BIO-DEFENDER™",
                        type: "Naturally occurring Microbial",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/tvvkjrxp9mshh1cbuxev",
                        description: "NBS BIO-DEFENDER™ is a talc-based formulation enriched with naturally occurring beneficial microbes, including Beauveria bassiana, Metarhizium anisopliae, and Lecanicillium lecanii. These beneficial microbes contribute to soil health by enhancing its natural balance and fertility. The product is environmentally friendly, safe for children and pets, and does not require a withholding period on food crops.",
                        suitableFor: "Vegetables, ornamentals, lawns, turfs, nursery trees, and soft fruit. It can be applied as both a soil drench and a foliar spray, making it adaptable to diverse agricultural practices.",
                        keyPerformance: [
                            "Powerful Probiotic: Introduces beneficial microbes into the soil, promoting a balanced microbial ecosystem",
                            "Flexible Application Timing: Suitable for use at all developmental stages and right up to harvest, ensuring continuous support for plant health",
                            "Natural Composition: Based on naturally occurring microbes, aligning with sustainable and organic farming practices"
                        ],
                        growingStage: "All growth stages, from pre-planting through to harvest. This allows for flexible application timing based on specific crop needs and environmental conditions.",
                        applicationRates: {
                            dosages: {
                                SoilDrenchingRate: "Dissolve 5 grams of NBS BIO-DEFENDERTM per litre of water, sufficient to treat approximately 10 square meters. Apply this solution to the soil during preparation or at planting. Repeat every 2-4 weeks, especially in warm conditions.",
                                FoliarSpraysRate: "Mix 3 grams of NBS BIO-DEFENDERTM per litre of water. Spray the foliage and stems to the point of runoff. For preventive measures, apply fortnightly; for active concerns, consider more frequent applications to maintain plant health."
                            }
                        }
                    },
                    {
                        id: "microshield",
                        name: "NBS MICROSHIELD™",
                        type: "Beneficial Microbial Bio-Inoculant for Soil & Plant Health",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/rnfvilmcn9rkv8x6rt7f",
                        description: "NBS MICROSHIELD™ is a talc-based formulation containing beneficial microorganisms, including Trichoderma harzianum, Trichoderma lignorum, and Trichoderma koningii. These naturally occurring microbes are known to promote root growth, enhance nutrient uptake, and improve overall plant health. This product is environmentally friendly and safe for use around children, pets, and beneficial organisms.",
                        suitableFor: "Grain crops, vegetables, fruit crops, lawns, turf, floriculture, ornamental plants, seeds, transplants, bulbs, cuttings, and grafts. It can be applied as a seed treatment, soil drench, or foliar spray.",
                        keyPerformance: [
                            "Enhances Root-Zone Microbial Balance: Promotes a healthy microbial environment in the root zone, supporting plant growth",
                            "Supports Soil Health and Plant Vitality: Enhances the soil microbiome, contributing to optimal plant development",
                            "Encourages Strong Root Development: Leads to improved nutrient uptake and robust plant growth",
                            "Supports Humus Formation: Improves soil structure and fertility",
                            "Environmentally Friendly: Safe for the environment, with no withholding period"
                        ],
                        growingStage: "Pre-Planting, Planting, Vegetative Growth, Pre-Flowering, Flowering & Fruit Set",
                        applicationRates: {
                            dosages: {
                                SoilDrenching: "Dissolve 5 grams per litre of water (sufficient for 10 m2). Apply 2 weeks before planting, then repeat every 2 weeks and monthly as needed.",
                                FoliarSprays: "Mix 3 grams per litre of water. Apply until runoff occurs, repeating every two weeks or as required.",
                                NurseryUse: "Prepare a solution of 10 grams per litre of water. Dip seeds, seedlings, or cuttings before planting to encourage healthy establishment.",
                                ForOptimalResults: "Soak the product in water for 1 hour before application. Maintain agitation during spraying to ensure even distribution.",
                                OptionalEnhancement: "Combine with NBS ROOT-MAXTM to further promote plant health benefits."
                            },
                        }
                    },
                    {
                        id: "speed-compost",
                        name: "NBS SPEED COMPOST™",
                        type: "Organic Compost Accelerator for Rapid Decomposition & Soil Enrichment",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/vuvjll48ry7zedvhtz3q",
                        description: "NBS SPEED COMPOST™ is an organic manure formulation enriched with cellulolytic composting microbes, including Azotobacter Chroococcum, Bacillus Polymyxa, Pseudomonas fluorescens, Trichoderma, and Chaetomium, which efficiently break down organic matter.",
                        suitableFor: "Farms, gardens, agricultural fields, orchards, vegetable farms, and composting sites",
                        keyPerformance: [
                            "Speeds up the decomposition of organic waste, converting it into nutrient-rich compost",
                            "Increases soil fertility by enriching it with essential nutrients",
                            "Promotes microbial activity, enhancing soil structure and moisture retention",
                            "Enables efficient recycling of hard-to-decompose organic matter into stable compost",
                            "Non-toxic and residue-free, safe for long-term soil health and sustainable farming"
                        ],
                        growingStage: "Soil Preparation, Organic Waste Decomposition",
                        applicationRates: {
                            dosages: {
                                "Dosage": "4 kg per acre (10 kg/ha)"
                            },
                            method: "Mix 4 kg NBS SPEED COMPOST™ with 50 kg Urea. Spread the mixture uniformly over 1 acre. Irrigate to activate microbial decomposition."
                        }
                    }
                ]
            }
        }
    },
    sportsAndTurf: {
        name: "Sports, Turf, and Landscapes",
        description: "Specialized solutions for professional turf management and landscape maintenance",
        subcategories: {
            liquidFertilisers: {
                name: "LIQUID FERTILISERS",
                products: [
                    {
                        id: "root-max-turf",
                        name: "NBS ROOT MAX™",
                        type: "Organic Fertiliser Foliar spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/hfmgrjc6duliixuvfvzd",
                        description: "NBS ROOT MAX™ is a premium amenity turf and soil enhancer tonic, formulated with Organic Matter, Organic Carbon, and Organic NPK to improve soil structure, nutrient availability, and overall landscape health.",
                        suitableFor: "Lawns, sports turf, golf courses, and ornamental landscapes.",
                        keyPerformance: [
                            "Strengthens amenity grass, shrubs, and trees against wear, drought, and stress and promotes greenery.",
                            "Feeds beneficial microbes, improving soil fertility and structure.",
                            "Supports the establishment and efficiency of microbial bio-fertilisers and bio-pesticides.",
                            "Helps soil retain moisture and deliver nutrients efficiently for healthier landscapes.",
                            "Safe to use on all plants and compatible with most soluble bio-nutrients."
                        ],
                        recommendation: [
                            "Jar test before application if not sure and treat a small section of plants first to check safety of mixtures."
                        ],
                        growingStage: "Planting and establishment",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Turf - Newly Planted",
                                    Foliar: "2-3 mL per L of water. Wet foliage to run-off",
                                    Fertigation: "Fertigate at 300 mL/1000 m² (3 L/ha) Drench or soil spray, dilution 1:200",
                                    FrequencyTurf: "At planting, repeat in 10 days"
                                },
                                {
                                    Crop: "Turf - Established, Tonic",
                                    Foliar: "2-3 mL per L of water. Wet foliage to run-off",
                                    Fertigation: "Fertigate at 300 mL/1000 m² (3 L/ha) Drench or soil spray, dilution 1:200",
                                    FrequencyTurf: "Repeat every 10-14 days"
                                },
                                {
                                    Crop: "Transplant Ornamentals",
                                    Foliar: "2-3 mL per L of water. Wet foliage to run-off",
                                    Fertigation: "Soak pots or drench soil, dilution 1:200",
                                    FrequencyTurf: "At planting, repeat in 10 days"
                                },
                                {
                                    Crop: "Nursery Landscape Stock",
                                    Foliar: "2-3 mL per L of water. Wet foliage to run-off",
                                    Fertigation: "Water young stock with 1:400 dilution, increasing to 1:200 while hardening off",
                                    FrequencyTurf: "As required"
                                },
                                {
                                    Crop: "Stress Rescue Remedy",
                                    Foliar: "2-3 mL per L of water. Wet foliage to run-off",
                                    Fertigation: "Fertigate or Drench, dilution 1:200",
                                    FrequencyTurf: "As required to reduce stress"
                                }
                            ]
                        }
                    },
                    {
                        id: "yield-booster",
                        name: "NBS YIELD BOOSTER™",
                        type: "Organic Fertiliser Foliar Spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/gxf0l4balwmfeummdhq0",
                        description: "NBS YIELD BOOSTER™ is an organic foliar fertiliser containing organic matter, plant-derived organic carbon sources, organic N-P-K, and plant extract auxins that enhance nutrient absorption, improve plant resilience and boost overall turf quality.",
                        suitableFor: "Lawns, turf, ornamental plants, and landscapes.",
                        keyPerformance: [
                            "Enhances macro and micro-nutrient availability for sustained turf and plant health.",
                            "Improves photosynthesis by increasing chlorophyll production, optimising energy conversion and nitrogen absorption for greener, healthier landscapes.",
                            "Boosts plant stamina, enhances natural immunity through SAR and improves the overall health of turf and plants."
                        ],
                        growingStage: " Throughout the growing season Compatible in tank-mixes with foliar fertilizers and other bio nutrients under normal spraying conditions. Jar test before application if not sure and treat a small section of plants first to check safety of mixtures.",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "All turf and ornamentals",
                                    Dosage: "2-4 ml per litre of water vigour",
                                    Comment: "Vary dosage with plant"
                                },
                                {
                                    Crop: "Nurseries and young",
                                    Dosage: "2ml per litre of water",
                                    Comment: "Avoid hottest time of day"
                                }
                            ]
                        }
                    },
                    {
                        id: "k-35",
                        name: "NBS K-35™",
                        type: "Organic Fertiliser Foliar Spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/ztaekvqclxafdifebpva",
                        description: "NBS K-35™ is a high-analysis, pH-buffered liquid potassium complexed with organic acids, designed to overcome pH-related uptake issues and provide a super-available form of potassium to the turf.",
                        suitableFor: "Lawns, turf, ornamental plants, and landscapes.",
                        keyPerformance: [
                            "35% liquid K (non-nitrate or sulphate form)",
                            "pH buffered potassium fertiliser for improved uptake.",
                            "Promotes richer colour, larger leaf size, and stronger foliage.",
                            "Strengthens plant immunity and improves cell moisture balances.",
                            "Balances nitrogen inputs for controlled, stronger growth and resilience."
                        ],
                        growingStage: [
                            "Assists with increasing leaf size and photosynthetic efficiency."
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Turf Farms & Turf Nursery",
                                    Dosage: "0.5-1.0 L/100 L of water (Max. 5 L/ha)",
                                    Comments: "Foliar rate. Avoid applying within one week of copper fungicide sprays. Use a minimum of 400 L/ha of water."
                                },
                                {
                                    Crop: "Fairways, Tees & Greens",
                                    Dosage: "0.5-1.0 L/100 L of water (Max. 5 L/ha)",
                                    Comments: "Foliar rate. Avoid applying within one week of copper fungicide sprays. Use a minimum of 400 L/ha of water."
                                }

                            ],
                            StressReduction: {
                                note: "Apply at least 2 weeks prior to a mechanical renovation or any environmental stress event to speed recovery and help reduce turf damage."
                            },
                            Application: {
                                note: "NBS K-35™ is safe to use on all turf and landscapes and is compatible with most soluble fertilisers and pesticides. Jar test before application if not sure and treat a small section of plants first to check safety of mixtures. Where higher water rates are required for good foliar coverage, do not exceed maximum product rate per hectare. Sensitive foliage or plants should be test sprayed prior to full scale application."
                            },
                            note: "Do not spray if copper hydroxide residue may be present."
                        }
                    },
                    {
                        id: "cmb",
                        name: "NBS CMB™",
                        type: "Advanced Fertiliser for Photosynthesis & Cell Division – Foliar & Soil Application",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/xzrasobew8wjnqxoyast",
                        description: "NBS CMB™ is a synergistic blend of organic calcium, magnesium, and boron, enriched with natural complexing agents and plant growth promotants, designed to enhance turf strength, promote uniform growth, and improve overall resilience",
                        suitableFor: "Turf, ornamental plants, shrubs, and trees.",
                        keyPerformance: [
                            "Enhances Turf Density & Strength – Maximizer cell division for better leaf structure, stronger roots, and improved turf durability.",
                            "Boosts Photosynthesis & Brix Levels – Increases chlorophyll density and synergizes phosphorus uptake, improving energy production and turf colour.",
                            "Supports Flowering & Regrowth – Aids in bud development, pollen ripening, and post-stress recovery for ornamental landscapes.",
                            "Strengthens Cell Membranes & Moisture Retention – Helps turf withstand environmental stress, foot traffic, and nutrient fluctuations.",
                            "Compatible with Bio-Fertilizers & Bio-Pesticides – Functions as a microbial stimulant to improve soil microbial activity and nutrient uptake"
                        ],
                        recommendation: [
                            "NBS CMB™ is safe to use on all plants at recommended rates and compatible with most soluble fertilisers and pesticides. Jar test before application if not sure and treat a small section of plants first to check the safety of mixtures."
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Vegetable, flowers, shrubs, and trees",
                                    Dosage: "Foliar: 1 L/100 L of water (max. 2 L/acre)",
                                    Comments: "Vary rate with plant vigor. Start 3-4 weeks before flowering. Apply 2 sprays, 10-14 days apart."
                                },
                                {
                                    Crop: "Orchards & Vineyards",
                                    Dosage: "Foliar: 1 L/100 L of water (max. 2.8 L/acre)",
                                    Comments: "Vary rate with plant vigor. Start 3-4 weeks before flowering. Apply 2 sprays, 10-14 days apart."
                                },
                                {
                                    Crop: "All fruit and vegetable crops",
                                    Dosage: "Soil: 2-4 L/acre, Soil drench: 2 ml/litre",
                                    Comments: "Don't apply with soluble Fertilisers containing phosphates or sulphates."
                                },
                                {
                                    Crop: "Broadacre Field Crops",
                                    Dosage: "Foliar: 0.8 L/acre",
                                    Comments: "Use a minimum of 50 L water per acre, apply before canopy closure."
                                },
                                {
                                    Crop: "Nurseries and young plants",
                                    Dosage: "Foliar: 0.5 mL/L of water",
                                    Comments: "Apply every 10-14 days, avoid the hottest time of the day."
                                }
                            ],
                            note: "Can be tank mixed with NBS K-35™ at 1.25 L/acre to enhance plant resilience and increase vigor."
                        },
                    },
                    {
                        id: "silicare",
                        name: "NBS SILICARE™",
                        type: "Revolutionary Rapid-Uptake Silica Fertiliser",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/kzazyb3wolzw9jgsgjb4",
                        description: "NBS SILICARE™ is a silica-based fertiliser in its 99.99% bio-available form, comprising Ortho Silicic Acid, Silicon as SiO2, and Potassium as K2O. Silica is a recognised immune elicitor, reducing the need for chemical intervention.",
                        suitableFor: "Grain crops, vegetables, fruit crops, orchards, vineyards, turf, floriculture, and ornamental plants",
                        keyPerformance: [
                            "Strengthens cell walls, offering protection from environmental stress.",
                            "Improves photosynthesis, boosting plant growth and yield.",
                            "Develops drought resistance, helping plants endure stress.",
                            "Increases post-harvest shelf life and transit life of produce, maintaining quality."
                        ],
                        growingStage: "Apply 25 days after planting, before flowering, and before fruiting.",
                        applicationRates: {
                            table: false,
                            data: [
                                "Foliar Spray: 100ml per 100L of water."
                            ]
                        }
                    },
                    {
                        id: "size-plus",
                        name: "NBS SIZE PLUS™",
                        type: "Organic Fertiliser Foliar Spray",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/tr0gzjoyoclq4ri76pld",
                        description: "NBS SIZE PLUS™ is formulated with organic potassium (K), organic matter, organic nitrogen (N), and bio-stimulants derived from plant extracts to increase the size and weight of fruits and vegetables. Its 100% water-soluble formula is easily absorbed through leaves, fruits, and roots, promoting cell division, elongation, and overall growth for higher yields.",
                        suitableFor: "All fruits, vegetables, and tuber crops such as potatoes, carrots, and sugar beets",
                        keyPerformance: [
                            "Stimulates cell division and elongation, leading to increased fruit and vegetable size.",
                            "Encourages proper nutrient distribution, resulting in heavier fruits and longer vegetables.",
                            "Strengthens fruit structure, extending freshness and post-harvest shelf life.",
                            "Intensifies the plant's ability to hold water and store sugars, improving fruit sweetness and texture.",
                            "Ensures even distribution of nutrients, leading to consistent fruit size and shape."
                        ],
                        growingStage: "After fruit setting until harvest",
                        applicationRates: {
                            table: false,
                            data: [
                                "Foliar Spray : 2 ml per litre of water",
                                "Soil Application : 500 ml per acre"
                            ]
                        }
                    },
                    {
                        id: "max_spreader",
                        name: "NBS MAX SPREADER™",
                        type: "Organic Wetting Agent & Spreader",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/wr4afc16m8zd6cne2seq",
                        description: "NBS MAX SPREADER™ is an economical, versatile, and highly effective spreader formulated from natural materials, including organic carbon and non-ionic silicon compounds derived from rice husk. It is designed to enhance the distribution of liquid fertilisers and other soil treatments, ensuring even coverage and improved nutrient availability.",
                        suitableFor: "Lawns, golf courses, sports turf, and ornamental landscapes.",
                        keyPerformance: [
                            "Superior Spreading & Coverage – Ensures even distribution of foliar sprays for improved absorption.",
                            "Enhanced Penetration & Uptake – Allows nutrients and treatments to reach deeper into plant cells and root zones.",
                            "Improved Turf Health & Strength – Provides silicon, promoting stronger cell walls and better stress resistance.",
                            "Cost-Effective Performance – Increases treatment efficiency by 30% while reducing overall input costs up to 25-30%. Hence, making it one of the most economical spreaders in the world.",
                            "Versatile & Compatible – Works with all foliar fertilizers, bio-stimulants, bio-nutrients, and soil applications."
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "For General Liquid Fertiliser Applications",
                                    Dosage: "10 mL per 100 litres of water",
                                    Comments: "Add last to the tank when at least 80% full."
                                },
                                {
                                    Crop: "For Applications Requiring Enhanced Soil Penetration",
                                    Dosage: "25-30 mL per 100 litres of water",
                                    Comments: "Use enough water to cover the area thoroughly. Direct the soil spray to improve water penetration."
                                },
                                {
                                    Crop: "As a Soil Wetter",
                                    Dosage: "100 mL per 100 litres of water",
                                    Comments: "Direct the soil spray to improve water penetration."
                                }
                            ],

                        },

                    }
                ]
            },
            solidFertilisers: {
                name: "SOLIDS FERTILISERS",
                products: [
                    {
                        id: "micro-nutrient",
                        name: "NBS MICRO NUTRIENT™",
                        type: "Organic Micro-Nutrient Fertiliser",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/liwbcmpj4mxys1qjqopm",
                        description: "NBS MICRO NUTRIENT™ is an organic amino chelate fertiliser formulated for foliar spray and soil application. It combines natural organic matter and plant extracts with a complete amino acid-chelated micro-nutrient blend for maximum bioavailability, tolerability, and absorption. This formulation includes Fe, Mg, Zn, Cu, Mn, B, Mo, and Organic Nitrogen, providing essential nutrients to bolster plant health and productivity.",
                        suitableFor: "Lawns, turf, ornamental plants, sports pitches and landscapes.",
                        keyPerformance: [
                            "Enhances Turf Strength & Structure – Strengthens cell walls for improved durability and stress resistance.",
                            "Boosts Photosynthesis & Colour – Increases chlorophyll density for a richer, greener appearance.",
                            "Improves Nutrient Uptake & Metabolism – Supports root activity and overall plant health.",
                            "Aids in Stress Tolerance & Recovery – Helps turf withstand environmental stress and maintain growth.",
                            "Encourages Strong Root Development – Enhances soil-to-root nutrient transfer for deeper, healthier roots",
                            "Improves water movement within plants."
                        ],
                        growingStage: "Throughout the growing season",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Foliar Spray",
                                    Dosage: "1.5g per litre of water",
                                    Comments: "When required alone or in combination with other foliar or soil applied liquid fertilizers."
                                },
                                {
                                    Crop: "Soil Application",
                                    Dosage: "2.5 g/Litre of water (do not exceed 250 g/1000 m² or 2.5 kg/ha)",
                                    Comments: "When required alone or in combination with other foliar or soil applied liquid fertilizers."
                                }
                            ]
                        }
                    },
                    {
                        id: "silicon-Fertiliser",
                        name: "NBS SILICON Fertiliser™",
                        type: "Organic Granular Fertiliser",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/lmkdqneegap6nv2fn9wy",
                        description: "NBS SILICON FERTILIZER™ is a soil-applied formula enriched with Organic Matter, SiO₂, CaO, MgO, Zn, and Cu. It contains silicon in an amorphous form, ensuring safe handling and application, unlike crystalline silicon, which may cause respiratory discomfort or adverse reactions. Soon after application, NBS SILICON FERTILISER™ will disperse into fine particles in contact with moisture, releasing Silicon into the soil. The silicon component attaches to the soil colloids and prevents phosphorus from being locked- up soon after application. The organic matter content of NBS Silicon Fertiliser™ will help complex soil nutrients to extend their availability.  Silicon has an important role in the uptake and vascular transport of mineral nutrients and can greatly improve the mechanical strength and plant resistance to fungal diseases and  wear and tear with intensive use.",
                        suitableFor: "Golf courses, Lawns, sports turf, ornamental plants, and landscapes.",
                        keyPerformance: [
                            "High-analysis, granular silicon fertiliser in a safe amorphous form.",
                            "Strengthens the plant cuticle barrier, enhancing resistance to environmental stressors.",
                            "Prevents phosphorus lock-up in acidic soils.",
                            "Improves water movement within the xylem.",
                            "Forms a root barrier to reduce sodium uptake.",
                            "Enhances Systemic Acquired Resistance (SAR).",
                            "Boosts photosynthetic efficiency by optimising leaf orientation toward sunlight."
                        ],
                        growingStage: "Apply during soil preparation and side-dress at key stages of plant development",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "General Soil Application",
                                    Dosage: "6.25 - 12.50 kg per 1000 m²",
                                    Comments: "Ideally applied at soil preparation time and top-dressed any time after. Water in immediately after application to gain maximum benefit."
                                },
                                {
                                    Crop: "Fairway & Landscape Trees",
                                    Dosage: "50-100 g",
                                    Comments: "Per Plant, water in after application."
                                },

                            ],
                            note: "NBS SILICON FERTILIZER™ is a granular solid that can be seamlessly blended with other solid fertilisers and compost-based fertilisers for efficient application. It rapidly breaks down into fine particles upon contact with moisture, ensuring quick availability to plants."
                        }
                    },
                    {
                        id: "neem-Fertiliser",
                        name: "NBS NEEM Fertiliser™",
                        type: "Organic Fertiliser for Turf and Ornamental Applications",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/kuuyyb21loladbrn8z6z",
                        description: "NBS NEEM Fertiliser™ is a premium organic fertiliser formulated with organic matter, nitrogen, carbon, phosphorus, potassium, and azadirachtin. It revitalises soil health and supports plant growth, offering an eco-friendly solution to improve soil structure and bolster plant resilience against environmental stresses.",
                        suitableFor: "golf courses (greens, tees, and fairways), sports turf, professional lawns, and ornamental landscapes. It's particularly effective in high-traffic areas, stress-prone environments, and wherever premium turf quality is required",
                        keyPerformance: [
                            "Dual Functionality: Acts as both an organic fertiliser and a natural turf strengthener",
                            "Soil Health Enhancement: Improves soil fertility and supports beneficial microbial activity",
                            "Sustainable Turf Management: Aligns with eco-friendly practices in amenity horticulture",
                            "Enhanced Turf Quality: Promotes denser, greener turf with improved wear tolerance",
                            "Root System Development: Supports strong root growth, enhancing stress resistance",
                            "Enhances Turf Resilience: Supports overall turf health, potentially improving its ability to withstand various environmental stresses and recover from general root-zone challenges"
                        ],
                        applicationRates: {
                            table: true,
                            data: [

                                {
                                    Crop: "Soil applied to turf, gardens, and landscape plants",
                                    Dosage: "30-75 kg per 1000 m²",
                                    Comments: "Apply alone or mix with top-dressing soil and sand. Water after application."
                                }
                            ]
                        }
                    },

                    {
                        id: "resilica-soil-conditioner",
                        name: "NBS ReSilica™",
                        type: "Advanced Organic Turf & Landscape Fertilizer",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/xmc3viz038gnttpagvp0",
                        description: "NBS ReSilica™ is a premium organic fertilizer and soil conditioner specifically formulated for high-performance turf and ornamental landscapes. Its unique composition includes 12% calcium, 8-10% silicon (SiO2), 35-40% organic carbon, and 12% sulphur, along with plant biostimulants and a balanced NPK ratio. This innovative blend strengthens plants' physical and biochemical defences, enhances nutrient uptake, and improves overall soil health.",
                        suitableFor: "Golf courses, sports turf, lawns, ornamental landscapes, fairways, and trees. It's particularly effective in high-traffic areas, stress-prone environments, and wherever premium turf quality is required. NBS ReSilica™ is also excellent for maintaining the health and vigor of ornamental trees and shrubs in landscaped areas.",
                        keyPerformance: [
                            "Improved Turf Density and Colour: Enhances overall appearance and health",
                            "Enhanced Wear Tolerance: Ideal for high-traffic areas on golf courses and sports fields",
                            "Increased Resistance: Reduces the need for fungicides and other chemical treatments",
                            "Better Drought Tolerance: Helps turf survive periods of low rainfall",
                            "Improved Nutrient Efficiency: Optimizes uptake and utilization of essential elements",
                            "Stronger Root Development: Promotes deeper, healthier root systems",
                            "Enhanced Photosynthetic Efficiency: Boosts plant growth and vigor",
                            "Supports Beneficial Soil Microorganisms: Encourages a healthy soil ecosystem",
                            "Protects phosphorus from lock-up in acidic soils, improves water movement in the xylem and assists in sodium management."
                        ],
                        growingStage: "Best applied during soil preparation and as a top-dressing to sustain plant health.",
                        breakdown: "Rapidly breaks down upon moisture contact, releasing nutrients efficiently.",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "General Soil Application, Fairways and trees",
                                    Application: "15 - 30 Kg per 1000 m. Sq.",
                                    Comments: "Ideally applied at soil preparation time and as a top-dressing. Water in immediately after application for maximum benefit."
                                },
                                {
                                    Crop: "Landscape and Fairway trees",
                                    Application: "100 - 150 g/tree",
                                    Comments: "Spread even around the tree."
                                }
                            ],
                            note: "NBS ReSilica™ is a granular product that can be broadcast on golf courses, sports turf, lawns and ornamental landscapes. Used alone or mixed with other granular fertilizers and compost-based fertilizers for efficient application, NBS ReSilica™ will rapidly break into fine particles in contact with moisture"
                        }
                    },
                    {
                        id: "green-compost",
                        name: "NBS Green Compost™",
                        type: "Sustainable Compost, Fertiliser & Soil Conditioner",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/a46tx63qzhy26absgxbw",
                        description: "Produced from recycled green waste under controlled conditions, NBS Green Compost™ is a nutrient-rich, humified compost that enhances soil fertility and supports beneficial soil microbiology. It is carefully screened to remove larger particles, retaining the essential minerals and biology that promote plant health. Suitable for various agricultural and landscaping applications, including eco-mulching and soil conditioning.",
                        suitableFor: "Turf, lawns, ornamental plants, and landscapes",
                        keyPerformance: [
                            "Improves soil structure, fertility, and microbial activity",
                            "Enhances moisture retention when used as mulch",
                            "Reduces weed growth by limiting light exposure to the soil surface",
                            "Encourages beneficial soil fungi establishment",
                            "Contributes to a balanced soil ecosystem"
                        ],
                        growingStage: "Can be incorporated into the soil before planting or used as a surface mulch for ongoing soil health improvement.",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Soil Conditioner/Fertilizer",
                                    Dosage: "400-500 g/m² (4-5 T/ha)",
                                    Comments: "Incorporate up to 10 cm deep for optimal nutrient release and microbial inoculation."
                                },
                                {
                                    Crop: "As an Eco-Mulch",
                                    Dosage: "5-10 cm blanket application",
                                    Comments: "The surface layer helps retain moisture, suppress weeds, and promote beneficial fungi."
                                },

                            ],
                            note: "Addition of an organic microbial bio-stimulant, like NBS ROOT-MAX™, will enhance benefits and stimulate plant health."
                        }
                    }
                ]
            },
            humates: {
                name: "HUMATES",
                products: [
                    {
                        id: "sapphire-granules",
                        name: "NBS SAPPHIRE GRANULES™",
                        type: "Organic Fertiliser for Soil Application",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/tphsez4k2txlcpcvfdcs",
                        description: "NBS SAPPHIRE GRANULES™ are a high-quality water-soluble potassium humate product derived from leonardite, designed to improve soil structure and nutrient availability in turf and landscape settings.",
                        suitableFor: "Lawns, golf courses, sports turf, and ornamental landscapes.",
                        keyPerformance: [
                            "Extends availability of soluble minerals",
                            "Reduces fertiliser application rates by 20 - 25 %",
                            "Decreases phosphate lock - up in soil",
                            "Stabilises urea and ammonium nitrogen",
                            "Chelates and complex minerals",
                            "Buffer’s high sodium and heavy metals",
                            "Improves soil structure and fertility",
                            "Enhances nutrient uptake efficiency",
                            "Promotes beneficial soil microbial activity"
                        ],
                        growingStage: "Pre-Planting, At Planting, Vegetative Growth, Pre-Flower, Flowering, Fruit Set & Fill",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Physical Blends with Fertilizers",
                                    Dosage: "5% of the total blend (e.g., 5 kg per 100 kg of urea, DAP/MAP).",
                                    Comments: "Total fertilizer blend application rates may be reduced by 15-20%."
                                },
                                {
                                    Crop: "Blends with Top-Dressing Soil, Sand, and Compost",
                                    Dosage: "Spread 2-4 kg per 1000m²",
                                    Comments: "Thoroughly mix with top-dressing sand or screened compost and apply as soon as possible."
                                }
                            ],
                            application: {
                                PhysicalBlendsWithFertilizers: "Mix with dry, granular fertilizers to extend the availability of soluble minerals.",
                                BlendsWithTopDressingSoilSandAndCompost: "Thoroughly mix with top-dressing sand or screened compost and apply."
                            }
                        }
                    },
                    {
                        id: "bio-stimulator",
                        name: "NBS BIO STIMULATOR™",
                        type: "Organic Granular Fertiliser for Soil Application",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/ov6inrw5rp0g6whq0a1b",
                        description: "NBS BIO STIMULATOR™ is formulated with organic matter, organic calcium and organic carbon. It disperses in the soil upon contact with moisture, releasing nutrients gradually while chelating soil nutrients to bolster plant absorption. It also supports beneficial soil microbes and restoring natural cycles. A slow-release formula, it remains active for over two months, making it ideal for application under mulching paper.",
                        suitableFor: " Golf courses, trees and fairways, sports turf, lawns, and landscape plantings.",
                        keyPerformance: [
                            "Enhances soil structure and promotes beneficial microbial activity",
                            "Supports overall health, resilience and immunises against diseases",
                            "Improves nutrient availability and uptake through chelation, contributing to better soil fertility"
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "General Soil Application",
                                    Dosage: "15-30 kg per 1000m²",
                                    Comments: "Ideally applied at soil preparation time and top-dressed at any time after application for maximum benefit."
                                },
                                {
                                    Crop: "Landscape and Fairway Trees",
                                    Dosage: "50-100 g",
                                    Comments: "Per plant, water in after application"
                                }
                            ],
                            application: {
                                GeneralSoilApplication: "Apply at soil preparation time and top-dress at any time after application for maximum benefit.",
                                LandscapeAndFairwayTrees: "Apply per plant and water after application."
                            }
                        }
                    },
                    {
                        id: "sapphire-liquid",
                        name: "NBS SAPPHIRE LIQUID™",
                        type: "Concentrated Liquid Carbon for Fertiliser Stability, Soil Activation & Growth Enhancement",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/jy7cdxspvrxvowlaizmg",
                        description: "NBS SAPPHIRE LIQUID™ is a powerful liquid carbon formulation designed to stabilise fertilisers, enhance nutrient absorption, activate soil microbiology, and condition the soil. It prevents nitrogen loss, reduces leaching, buffers sodium, and improves plant root development for sustained health and vigor.",
                        suitableFor: "Golf courses, sports turf, landscapes, broadacre crops, fruit crops, pasture, vegetable, and grain crops.",
                        keyPerformance: [
                            "Helps stabilise liquid formulations of urea and other sources of nitrogen.",
                            "Holds soluble nutrients in the root zone, minimising leaching losses.",
                            "Buffers sodium and complex heavy metals in soil and irrigation water, reducing crop stress and soil contamination.",
                            "Stimulates beneficial soil fungi, improving soil microbial activity.",
                            "Enhances soil structure and increases water-holding capacity.",
                            "Promotes root branching, expanding root volume for better nutrient uptake.",
                            "Improves nutrient absorption, leading to stronger, healthier plants.",
                            "Simple & convenient to measure, mix, and apply."
                        ],
                        growingStage: "Recommended for continuous application to maintain soil stability, improve nutrient efficiency, and enhance plant resilience.",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Fairways and Trees",
                                    Application: "20 L/ha per application",
                                    Comments: "Apply monthly for best results. Avoid mixing with strong acidic fertiliser or solutions as efficacy may be reduced."
                                },
                                {
                                    Crop: "Foliar Sprays",
                                    Application: "2 L/100 litres",
                                    Comments: "Some spray residues may remain on leaves. This is not harmful, and the next irrigation or rainfall will wash residues into the soil where the product remains active."
                                }
                            ],
                            application: {
                                note: "Agitate the spray tank during application. Do not pre-mix or store in diluted form. Seal lid/cap immediately after use."
                            }
                        }
                    }
                ]
            },
            microbesAndBioStimulants: {
                name: "MICROBES AND BIO-STIMULANTS",
                products: [
                    {
                        id: "bug-shield",
                        name: "NBS BUG SHIELD™",
                        type: "Organic Botanical Biostimulant",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/r7dg3m1z1mlflx27sbyt",
                        description: "NBS BUG SHIELD™ is an organic botanical formulation composed of organic matter, organic carbon, natural NPK (Nitrogen, Phosphorus, Potassium), carrier oils, and spice oils. This unique blend not only serves as an effective plant nutrient but also simulates plants' vigour against various environmental stressors, promoting overall plant health and vitality.",
                        suitableFor: "Golf courses, lawns, sports turf, and ornamental landscapes.",
                        keyPerformance: [
                            "Enhances overall plant health and resilience in golf courses, sports turf, and ornamental landscapes",
                            "Promotes denser, greener turf with improved wear tolerance",
                            "Strengthens plants' internal defence mechanisms, improving their ability to withstand environmental stresses common in high-traffic areas",
                            "Contributes to healthier soil environments when used during turf renovation or landscape bed preparation",
                            "Aligns with sustainable landscape management practices"
                        ],
                        growingStage: "Can be applied in combination with other fertilizers and organic products as a foliar spray or soil application.",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Foliar Spray",
                                    Dosage: "2 mL per Litre water",
                                    Comments: "Cover all sides of the leaf."
                                },
                                {
                                    Crop: "Soil Application Spray/Drench",
                                    Dosage: "2 Litres per 200 L water",
                                    Comments: "N/A"
                                }
                            ]
                        }
                    },
                    {
                        id: "bio-guard",
                        name: "NBS BIO-GUARD™",
                        type: "Organic Bio-stimulant",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/yprvsrszfyvbicxjptg5",
                        description: "NBS BIO-GUARD™ is an innovative organic botanical formulation designed to enhance turf and ornamental plant health in high-performance environments. Its unique blend of natural ingredients, including Azadirachtin and a silicone-based spreader, offers superior wetting and penetration properties to support plant resilience and soil vitality.",
                        suitableFor: "Golf course greens, tees, and fairways, Sports turf and stadium pitches, High-traffic lawns and ornamental landscapes, Professional landscape installations.",
                        keyPerformance: [
                            "Comprehensive Turf Support: Assists in maintaining optimal turf health during periods of environmental stress, supporting tournament-ready playing conditions.",
                            "Enhanced Natural Resilience: Promotes the turf’s inherent ability to withstand common challenges faced in high-traffic areas and intensively managed landscapes.",
                            "Soil Preparation Advantage: When incorporated during turf renovation or landscape bed preparation, it contributes to a healthier growing environment, supporting strong root development.",
                            "Immediate Playability: No waiting period is required after application, allowing for uninterrupted use of golf courses, sports fields, and landscape areas.",
                            "Eco-Friendly Solution: Aligns with sustainable management practices, appealing to environmentally conscious facilities and members."
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Foliar Spray",
                                    Dosage: "2.5-3.0 L/ha (1.0-1.25 L/acre)",
                                    Comments: "Cover all sides of the leaf and spray to run-off. May require follow-up treatment. Do not exceed 2L/ha"
                                },
                                {
                                    Crop: "Soil Application",
                                    Dosage: "2.5-3.0 L/ha (1.0-1.25 L/acre)",
                                    Comments: "Systemic through root system. May require follow-up treatment. Use higher rate on heavier soils and where insect infestations are well-established."
                                }
                            ],
                            Application: {
                                1: "Seamlessly integrates into existing turf and landscape management programs",
                                2: "Compatible with both foliar and soil application methods",
                                3: "Ideal for use during routine maintenance and renovation projects"
                            },
                            note: "Ensure thorough mixing with water prior to application. Avoid very cold water or test first"
                        }
                    },
                    {
                        id: "bio-protect",
                        name: "NBS BIO PROTECT™",
                        type: "Organic Mineral Solution for Golf Courses, Lawns & Turf Health",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/bpc6phct7yz6e9y7nbxt",
                        description: "NBS BIO PROTECT™ is an organically certified formulation designed to enhance turf and landscape vitality. Combining organic matter with mineral potassium and phosphorus, it supports plant health, strengthens natural defences, and promotes robust growth.",
                        suitableFor: "Lawns, golf courses, sports turf, and ornamental landscapes.",
                        keyPerformance: [
                            "Dual Functionality: Acts as both a plant health supporter and a fertilizer, enriching turf with essential potassium and phosphorus.",
                            "Natural Defences: Enhances the plant's ability to withstand environmental challenges and stressors.",
                            "Root & Shoot Development: Encourages deep root growth and denser, more vigorous turf coverage.",
                            "Improved Turf Quality: Enhances colour, thickness, and recovery after wear or damage.",
                            "Eco-Friendly: Leaves no harmful residues and supports sustainable turf management practices.",
                            "Flexible Application: Compatible with other organic products for integrated maintenance programs."
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Golf Greens, Fine Turf, and Landscape",
                                    Dosage: "2 gm per litre of water (or 125 g/1000m²)",
                                    Comments: "Apply every 14-21 days"
                                },
                                {
                                    Crop: "Fairways",
                                    Dosage: "125-250 gm per 1000 m² (1.25-2.5 kg/ha)",
                                    Comments: "Apply as required."
                                },
                                {
                                    Crop: "Individual Tree Protection",
                                    Dosage: "2 gm per litre of water",
                                    Comments: "Drench around the root system. May require repeat treatments."
                                }
                            ],
                            application: {
                                1: " When applied alone or with fertilizers, there is no withholding or re-entry period restriction for NBS BIO PROTECT™. Allow at least 4 hours for the product to dry on the leaf before resuming any irrigation. Avoid mowing for 24 hours after application.",
                                2: "Jar test before application if unsure, and treat a small section of plants first to check the safety of mixtures."
                            },
                            note: "Add NBS Pseudo-Tech™ for best results."
                        }
                    },
                    {
                        id: "pseudo-tech",
                        name: "NBS PSEUDO TECH™",
                        type: "Microbial Plant Health Enhancer for Premium Turf and Landscapes",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/p0ekd8fyycn7ionls8p5",
                        description: "PSEUDO TECH™ is an advanced microbial solution featuring beneficial Pseudomonas fluorescens, specifically formulated for high-performance turf and ornamental landscapes. This innovative product supports plant health by enhancing natural defence mechanisms and promoting beneficial soil microbial activity, resulting in more resilient and vibrant turf and ornamentals.",
                        suitableFor: "Golf courses (greens, tees, and fairways), sports turf and athletic fields, High-end lawns and ornamental gardens, Commercial Landscaping",
                        keyPerformance: [
                            "Enhanced Turf immunity: Supports the turfs and plants’ natural ability to withstand environmental stresses, maintaining playability and aesthetic appeal.",
                            "Soil Health Optimization: Promotes beneficial microbial activity in the root zone, improving nutrient cycling and soil structure.",
                            "Eco-Friendly Solution: Safe for use around people, pets, and beneficial organisms, aligning with sustainable management practices.",
                            "Versatile Application: This can be applied as a soil drench or foliar spray, integrating seamlessly into existing maintenance programs.",
                            "Season-Long Performance: Assists in maintaining turf and ornamental quality throughout the growing season, even under challenging conditions."
                        ],
                        growingStage: "Soil Preparation, Planting, Vegetative Growth, Pre-Flowering, Flowering & Fruit Set",
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Foliar Spraying",
                                    Dosage: "3 gm per litre of water",
                                    Comments: "Spray to run-off"
                                },
                                {
                                    Crop: "Soil Drenching",
                                    Dosage: "5 gm per litre of water",
                                    Comments: "Spread over 10 m²"
                                }
                            ],
                            Application: {
                                1: "Apply to the soil during soil preparation. Repeat every 2-4 weeks or when conditions favour imbalance in the soil. As a support for overall plant health, spray foliage and stems to runoff.",
                                2: "For best results, mix a measured amount of NBS PSEUDO-TECHTM in water and allow to soak for up to 1 hour before application. Make spray dilution and maintain good agitation during application"
                            },
                            note: "Add NBS Bio-Protect™ and NBS Root Max™ at label rates for improved results"
                        }
                    },
                    {
                        id: "bio-defender",
                        name: "NBS BIO-DEFENDER™",
                        type: "Naturally occurring Microbial",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/q2mcy0frfn0xfd6tfn0j",
                        description: "BIO-DEFENDER™ is a talc-based formulation enriched with naturally occurring beneficial microbes, including Beauveria bassiana, Metarhizium anisopliae, and Lecanicillium lecanii. It is designed to enhance the soil microbiome and promote overall plant health in turf and landscape settings.",
                        suitableFor: "Golf courses, lawns, sports turf, and ornamental landscapes.",
                        keyPerformance: [
                            "Cultivate Championship Soil: Enrich your greens, fairways, and tees with beneficial microbes, fostering a thriving soil ecosystem that's the envy of every golf course.",
                            "Unlock Premium Nutrient Efficiency: Optimize nutrient cycling and availability, fuelling explosive growth and lush, tournament-ready turf.",
                            "Fortify Against Nature's Challenges: Empower your turf to withstand environmental pressures through superior soil health, ensuring your course stays in top form year-round.",
                            "Harmonize Your Soil's Potential: Support the delicate balance of natural processes in your soil, creating the perfect foundation for world-class playing conditions."
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Foliar Spraying",
                                    Dosage: "3 grams per litre of water",
                                    Comments: "Cover both sides of the leaf."
                                },
                                {
                                    Crop: "Soil Drenching",
                                    Dosage: "5 grams per litre of water",
                                    Comments: "Apply over 10 m²."
                                }

                            ],
                            note: "Addition of an organic microbial bio-stimulant, like NBS ROOT-MAX™, will enhance the benefits and stimulate plant health.",
                            Application: {
                                1: "Apply NBS BIO DEFENDER™ to soil during soil preparation or at planting. Repeat every 2-4 weeks or when in warm conditions.",
                                2: "Spray foliage and stems to runoff. Repeat fortnightly as a protectant, depending on the situation and need.",
                                3: "For best results, mix a measured amount of NBS BIO-DEFENDER™ in water and allow to soak for up to 1 hour before application. Make spray dilution and maintain good agitation during application."
                            }
                        }
                    },
                    {
                        id: "microshield",
                        name: "NBS MICROSHIELD™",
                        type: "Beneficial Microbial Bio-Inoculant for Soil & Plant Health",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/x8ajnmav9k2ukd2fv2bj",
                        description: "NBS MICROSHIELD™ is a talc-based formulation containing beneficial microorganisms, including Trichoderma harzianum, Trichoderma lignorum, and Trichoderma koningii. These naturally occurring microbes are known to promote root growth, enhance nutrient uptake, and improve overall plant health. This product is environmentally friendly and safe for use around children, pets, and beneficial organisms.",
                        suitableFor: "Lawns, golf courses, sports turf, and ornamental landscapes.",
                        keyPerformance: [
                            "Microbial Soil Balancer: Introduces beneficial fungi to establish a healthier soil ecosystem.",
                            "Turf Resilience Booster: Enhances natural defences against stress, wear, and disease.",
                            "Deep Root Stimulation: Encourages vigorous root expansion for better water and nutrient uptake.",
                            "Soil Enrichment Catalyst: Improves soil aeration, structure, and organic matter retention and supports humus formation.",
                            "Eco-Conscious Formula: Safe for people, pets, and the environment—zero harmful residues.",
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Foliar Spraying",
                                    Dosage: "3 grams per litre of water",
                                    Comments: "Cover both sides of the leaf."
                                }
                            ],
                            application: {
                                GeneralUse: "Apply to the soil during soil preparation. Repeat every 2-4 weeks or when conditions favour imbalance in the soil. As a support for overall plant health, spray foliage and stems to runoff.",
                                ReplantingGreensTeesAndFairways: "Soil drench 2 weeks before planting. Repeat in 2 weeks, then monthly. Spray foliage and stems to run off. Repeat every 2-4 weeks. Dip seeds, seedlings, or cuttings in this solution just before planting."
                            },
                            note: "Add NBS Bio-Protect™ Bio-Fungicide and NBS Root Max™ at label rates for improved results"
                        }
                    },
                    {
                        id: "speed-compost",
                        name: "NBS SPEED COMPOST™",
                        type: "Organic Compost Accelerator for Rapid Decomposition & Soil Enrichment",
                        imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/golf/ajzw7pvqsazzhtggfjgx",
                        description: "NBS SPEED COMPOST™ is a powerful organic manure formulation enriched with cellulolytic composting microbes, including Azotobacter chroococcum, Bacillus polymyxa, Pseudomonas fluorescens, Trichoderma, and Chaetomium. These beneficial microorganisms actively break down organic matter, accelerating the composting process while improving soil fertility. By producing essential enzymes such as cellulases, proteases, and amylases, they efficiently convert raw compost, straw, and organic residues into nutrient-rich humus. This process enhances soil health, boosts microbial diversity, and maximizes nutrient availability, creating an ideal foundation for vigorous plant growth.",
                        suitableFor: "Golf courses, sports fields, ornamental landscapes, and turf renovation projects. Ideal for composting organic waste from turf maintenance, grass clippings, and landscape trimmings to improve soil quality and sustainability.",
                        keyPerformance: [
                            "Rapid Composting: Accelerates the decomposition of organic waste, producing nutrient-rich compost in as little as 3 weeks.",
                            "Soil Fertility Enhancement: Enriches soil with essential nutrients, promoting healthier and more resilient turf.",
                            "Boosts microbial activity: Stimulates beneficial soil microbes for improved soil structure and moisture retention.",
                            "Efficient Organic Waste Recycling: Enables efficient recycling of organic waste into stable, reusable compost.",
                            "Eco-Friendly Solution: Non-toxic and residue-free, supporting sustainable turf management practices"
                        ],
                        applicationRates: {
                            table: true,
                            data: [
                                {
                                    Crop: "Compost Starter",
                                    Dosage: "500 g/m³ of organic waste or manure",
                                    Comments: "Add to FYM or crop residue while making compost piles no more than 3 m wide and 2 m high. Keep moist and covered for quicker conversion to compost."
                                },
                                {
                                    Crop: "Soil Application",
                                    Dosage: "4 kg + 50 kg Urea/acre",
                                    Comments: "Crop residues on the soil surface can be lightly incorporated for best results. Spread evenly over 1 acre and irrigate to incorporate."
                                }
                            ],
                            application: {
                                CompostStarter: "Add to organic waste or manure while making compost piles. Keep moist and covered for quicker conversion to compost.",
                                SoilApplication: "Spread evenly and irrigate to incorporate. Crop residues on the soil surface can be lightly incorporated for best results."
                            },
                            note: "NBS SPEED COMPOST™ compost accelerator can be used when building Farmyard Manure(FYM) static compost piles, mix with raw materials before adding to the pile. Keep moist and covered to prevent excess nitrogen losses and accelerate breakdown."
                        }
                    }
                ]
            }
        }
    }
}; 