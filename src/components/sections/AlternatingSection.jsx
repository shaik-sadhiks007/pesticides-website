import React from 'react';
import { motion } from "framer-motion";

export function AlternatingSection({
  title,
  description,
  bulletPoints,
  footer,
  image,
  mobileImageFirst = false,
  icon: Icon,
  bgColor = "bg-[#DACEC2]",
  textColor = "text-[#293E31]",
  imageProps = {}
}) {
  return (
    <section className={`${bgColor} py-12 sm:py-16 md:py-20`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${mobileImageFirst ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12`}>
          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              {Icon && (
                <div className="bg-[#FE8340]/10 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-[#FE8340]" />
                </div>
              )}
              <h2 className={`${textColor} text-2xl sm:text-3xl font-bold`}>
                {title}
              </h2>
            </div>

            <p className={`${textColor}/80 text-base sm:text-lg`}>
              {description}
            </p>

            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-3 text-[#293E31]/80 list-disc pl-5">
                {bulletPoints.map((point, idx) => (
                  <li key={idx} className="marker:text-[#FE8340] marker:text-xl">
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {footer && (
              <p className={`${textColor}/80 italic mt-4`}>
                {footer}
              </p>
            )}
          </div>

          {/* Image */}
          <div className="flex-1">
            {typeof image === 'string' ? (
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-md"
                {...imageProps}
              />
            ) : (
              React.createElement(image, {
                className: "w-full h-auto rounded-lg shadow-md",
                ...imageProps
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 