import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/Button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const agricultureProducts = [
  {
    id: "root-max-turf",
    name: "NBS ROOT MAX™",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "liquidFertilisers",
    type: "Organic Fertiliser Foliar spray",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/hhz69fqxzm9uoqatgaqm",
    description: "NBS ROOT MAX™ is a combination of Organic Matter, Organic Carbon, and Organic NPK formulated to promote vigorous root growth and luxurious shoot development. Promotes rapid establishment of transplanted crops like vegetables, strawberries, tree crops, lawns, turfs, and brassicas (Cauliflower, cabbage, broccoli, etc).",
    suitableFor: "Vegetables, strawberries, tree crops, lawns, turfs, and brassicas",
    link: ''
  },
  {
    id: "size-plus",
    name: "NBS SIZE PLUS™",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "liquidFertilisers",
    type: "Organic Fertiliser Foliar Spray",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/w2ocaigu5s5gts2ebtjg",
    description: "NBS SIZE PLUS™ is formulated with organic potassium (K), organic matter, organic nitrogen (N), and bio-stimulants derived from plant extracts to increase the size and weight of fruits and vegetables. Its 100% water-soluble formula is easily absorbed through leaves, fruits, and roots, promoting cell division, elongation, and overall growth for higher yields.",
    suitableFor: "All fruits, vegetables, and tuber crops such as potatoes, carrots, and sugar beets",
    link: ''
  }, {

    id: "max_spreader",
    name: "NBS MAX SPREADER™",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "liquidFertilisers",
    type: "Organic Wetting Agent & Spreader",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Liquid/vsfb9nikpe5asu9demwy",
    description: "NBS MAX SPREADERTM is an innovative organic wetting agent and spreader formulated from natural materials, including organic carbon and non-ionic silicon compounds derived from rice husk. Designed to enhance the distribution and adhesion of agricultural sprays, it ensures optimal coverage and efficacy of foliar and soil-applied products. Improving the wetting properties of spray solutions facilitates better nutrient uptake and crop protection.",
    suitableFor: "All crops, including vegetables, fruits, grains, lawns, turf, floriculture, hydroponic, and ornamental plants.",
    link: ""

  }, {
    id: "microshield",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "microbesAndBioStimulants",
    name: "NBS MICROSHIELD™",
    type: "Beneficial Microbial Bio-Inoculant for Soil & Plant Health",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/rnfvilmcn9rkv8x6rt7f",
    description: "NBS MICROSHIELD™ is a talc-based formulation containing beneficial microorganisms, including Trichoderma harzianum, Trichoderma lignorum, and Trichoderma koningii. These naturally occurring microbes are known to promote root growth, enhance nutrient uptake, and improve overall plant health. This product is environmentally friendly and safe for use around children, pets, and beneficial organisms.",
    suitableFor: "Grain crops, vegetables, fruit crops, lawns, turf, floriculture, ornamental plants, seeds, transplants, bulbs, cuttings, and grafts. It can be applied as a seed treatment, soil drench, or foliar spray.",

  }, {
    id: "bio-guard",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "microbesAndBioStimulants",
    name: "NBS BIO-GUARD™",
    type: "Organic Bio-stimulant",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/tflairb1hgwjyhgsbwme",
    description: "NBS BIO-GUARD™ is an innovative organic botanical formulation designed to enhance turf and ornamental plant health in high-performance environments. Its unique blend of natural ingredients, including Azadirachtin and a silicone-based spreader, offers superior wetting and penetration properties to support plant resilience and soil vitality.",
    suitableFor: "Golf course greens, tees, and fairways, Sports turf and stadium pitches, High-traffic lawns and ornamental landscapes, Professional landscape installations.",
  }, {
    id: "neem-fertiliser",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "organicFertilisers",
    name: "NBS NEEM Fertiliser™",
    type: "Organic Fertiliser for Soil Application",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Solids/mgv3heiqwbtbiqzkn2bd",
    description: "NBS NEEM Fertiliser™ is a premium organic fertiliser formulated with organic matter, nitrogen, carbon, phosphorus, potassium, and azadirachtin. It revitalises soil health and supports plant growth, offering an eco-friendly solution to improve soil structure and bolster plant resilience against environmental stresses.",
    suitableFor: "All crops, including vegetables, fruits, grains, turf, and ornamental plants. Ideal for use as a soil amendment and in integrated fertilisation systems.",
  }, {
    id: "sapphire-granules",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "humates",
    name: "NBS SAPPHIRE GRANULES™",
    type: "Organic Fertiliser for Soil Application",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Humates/y54m5ak4j7jsgqlawqja",
    description: "NBS SAPPHIRE GRANULES™ is a water-soluble Potassium Humate fertiliser derived from premium-quality leonardite. It optimises soil health, stabilises nutrients, and promotes root development. These granules can be blended with granular fertilisers or dissolved in liquid formulations, making them ideal for urea and soluble phosphate sources.",
    suitableFor: "All broadacre crops, fruit crops, vegetables, and pastures. Compatible with granular fertilisers, dissolved urea, and other fertiliser blends.",
  }, {
    id: "pseudo-tech",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "microbesAndBioStimulants",
    name: "NBS PSEUDO TECH™",
    type: "Microbial and Plant Immunity Enhancer",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/x5cnezjr7ilczffbztbx",
    description: "NBS PSEUDO TECH™ is a microbial-based solution containing Pseudomonas fluorescens, a naturally occurring bacterium known to promote plant health. It works by stimulating plant immunity and supporting beneficial microbial activity in the soil, contributing to overall plant vigour. This environmentally friendly product is safe for use around children, pets, and beneficial organisms.",
    suitableFor: "All crops and can be applied as a soil drench or foliar spray.",
  }, {
    id: "bio-defender",
    categoryKey: "agricultureAndHorticulture",
    subcategoryKey: "microbesAndBioStimulants",
    name: "NBS BIO-DEFENDER™",
    type: "Naturally occurring Microbial",
    imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/catalog/Microbes%20and%20bio%20stimulants/tvvkjrxp9mshh1cbuxev",
    description: "NBS BIO-DEFENDER™ is a talc-based formulation enriched with naturally occurring beneficial microbes, including Beauveria bassiana, Metarhizium anisopliae, and Lecanicillium lecanii. These beneficial microbes contribute to soil health by enhancing its natural balance and fertility. The product is environmentally friendly, safe for children and pets, and does not require a withholding period on food crops.",
    suitableFor: "Vegetables, ornamentals, lawns, turfs, nursery trees, and soft fruit. It can be applied as both a soil drench and a foliar spray, making it adaptable to diverse agricultural practices.",
  }
];

export default function ProductRange() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleProductClick = (categoryKey, subcategoryKey, productId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/products/${categoryKey}/${subcategoryKey}/${productId}`);
  };

  // Slider settings for responsive behavior
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    className: "custom-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#DACEC2] py-8 sm:py-12 md:py-16">
      <style>
        {`
          .custom-slider .slick-prev,
          .custom-slider .slick-next {
            width: 45px;
            height: 45px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
            z-index: 10;
          }
          .custom-slider .slick-prev {
            left: -22px;
          }
          .custom-slider .slick-next {
            right: -22px;
          }
          .custom-slider .slick-prev:hover,
          .custom-slider .slick-next:hover {
            background: white;
            opacity: 0.9;
          }
          .custom-slider .slick-prev:before,
          .custom-slider .slick-next:before {
            color: #293E31;
            opacity: 1;
          }
          .custom-slider .slick-track {
            display: flex;
            gap: 16px;
            margin-left: auto;
            margin-right: auto;
          }
          .custom-slider .slick-slide > div {
            height: 100%;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <h2 className="text-[#293E31] text-xl sm:text-2xl lg:text-4xl font-semibold mb-8 sm:mb-10 md:mb-12 text-center">
          Browse Our Products
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <Slider ref={sliderRef} {...settings}>
            {agricultureProducts.map((product) => (
              <div key={product.id} className="h-full px-2">
                <div 
                  className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow h-full flex flex-col"
                  onClick={() => handleProductClick(product.categoryKey, product.subcategoryKey, product.id)}
                >
                  <div className="relative h-[180px] sm:h-[200px]">
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-95 bg-[#FE8340] transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex items-center justify-center p-4">
                      <div className="text-[#293E31] text-center opacity-0 group-hover:opacity-100">
                        <h1 className="font-bold text-xl mb-2">Suitable For :</h1>
                        <h6 className="text-sm line-clamp-3">{product.suitableFor}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {/* <span className="text-sm text-[#293E31]">
                        {product.categoryKey === "agricultureAndHorticulture" ? "Agriculture & Horticulture" : "Golf & Sports Turf"}
                      </span> */}
                      <span className="text-xs text-[#f47834]">
                        {product.subcategoryKey === "liquidFertilisers" ? "Liquid Fertilisers" :
                         product.subcategoryKey === "microbesAndBioStimulants" ? "Microbes & Bio-Stimulants" :
                         product.subcategoryKey === "organicFertilisers" ? "Organic Fertilisers" :
                         product.subcategoryKey === "humates" ? "Humates" : product.subcategoryKey}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#293E31] mb-4 uppercase">{product.name}</h3>
                    <Button className="w-full bg-[#f47834] hover:bg-[#e06724] text-white mt-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <Link to="/products/agricultureAndHorticulture" className="w-full sm:w-auto">
            <Button className="bg-[#FE8340] cursor-pointer text-white w-full sm:w-auto px-8 py-3 transition-all duration-300 hover:bg-[#e06724]">
              View All Products <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 