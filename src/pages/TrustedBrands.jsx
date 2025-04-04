import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: "Total Coffee", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/m2sjtsezihjb0ufjbnei" },
  { name: "Coffee Brand 1", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/x3dknusm6pez2dyotdpe" },
  { name: "Coffee Brand 2", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/jvkalklvhsb7anz9oip8" },
  { name: "Leaf and Bean", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/erpc22esabydwihngiri" },
  { name: "Coffee Brand 3", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/ykff5jvtuecg19a38wmq" },
  { name: "Coffee Brand 4", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/agtkue3uvv6jxiqtlapl" },
  { name: "Coffee Brand 5", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/mik1ggt3o8xpdscu2z93" },
  { name: "Krushnai", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/cimz5xx9pc94bhu4ci4e" },
  { name: "Sahyadri", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/esflguyfgn94wixwmkqg" },
  { name: "Coffee Brand 7", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/ejmtshsjr1epsynx1xqg" },
  { name: "Coffee Brand 6", imgSrc: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/qhcewnqw2g8bdpncygcv" }
];

const TrustedBrands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-[#DACEC2] ">
      <h2 className="text-2xl font-semibold text-center text-[#1e3a29] mb-6">
        We work with Trusted Partners
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img src={brand.imgSrc} alt={brand.name} className="w-40 h-20 object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustedBrands;
