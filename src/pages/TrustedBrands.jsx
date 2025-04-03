import React from "react";

const brands = [
  {
    name: "Total Coffee",
    imgSrc: "https://total.coffee/wp-content/uploads/2021/08/13-1.png"
  },
  {
    name: "Coffee Brand 1",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD1_HL9nQ4Zl-EzOqaG872xjXvGS0G8Ex3IKa81mXmTKN_K6vkZDYdYJgIN6uiUeNf2c&usqp=CAU"
  },
  {
    name: "Coffee Brand 2",
    imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/80dd6776342573.5c66a9f725e4f.jpg"
  },
  {
    name: "Leaf and Bean",
    imgSrc: "https://cauverypeakestate.com/wp-content/uploads/2018/05/LEAF-and-BEAN2.png"
  },
  {
    name: "Coffee Brand 3",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHshg2mAIGOFu9s17kGYmLmZapWXP81P9r1ycr9pEPxjjgY18AzKEo31FmimVYTLBo9Q&usqp=CAU"
  },
  {
    name: "Coffee Brand 4",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh31sHhlZb2iOQMIjzeUEYNDTq79h3Toe1Q30lm7CGKy7N7z8OHxNhBhtCJxL7tad7WQ&usqp=CAU"
  },
  {
    name: "Coffee Brand 5",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7KqW0Vkmvy_Vb6cFO1-Xoh37m7yQIA1YH9ak1-NZuL3uICbZtobVYuVij6fCUSUHaHM&usqp=CAU"
  },
  {
    name: "Krushnai",
    imgSrc: "https://5.imimg.com/data5/SELLER/Logo/2023/9/348085556/NQ/DT/SX/87901395/krushnai-logo-120x120.jpeg"
  },
  {
    name: "Sahyadri",
    imgSrc: "https://cdn.prod.website-files.com/62989fa3c77f0da24e43f3c0/6299cf4e914a3bd401682d3f_625cf519082278b79e72983f_Sahyadri_logo_size_5.54_in%20(1)-ai%20(1).svg"
  },
  {
    name: "Coffee Brand 6",
    imgSrc:"https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/trustedBrands/em4abkua8ir7qz51dz2b"
  }
]

const TrustedBrands = () => {
  return (
    <div className="py-10 bg-[#DACEC2]">
      <h2 className="text-2xl font-semibold text-center text-[#1e3a29] mb-6">
        We work with industry leaders
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center w-40 h-20 ">
            <img src={brand.imgSrc} alt={brand.name} className="w-40 h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
