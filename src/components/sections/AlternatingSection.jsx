export function AlternatingSection({ 
  title, 
  description, 
  image: Image, 
  imageProps = {}, 
  reverseOnMobile = false,
  className = "",
  containerClassName = "",
  bgColor = "bg-[#FCF9F4]"
}) {
  return (
    <section className={`${bgColor} py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 ${className}`}>
      <div className={`container  flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 ${containerClassName}`}>
        {/* Text Content */}
        <div className={`w-full md:w-1/2 ${reverseOnMobile ? 'order-1 md:order-2' : 'md:pr-8'}`}>
          <h2 className="text-[#293E31] text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-[#293E31] text-base sm:text-lg mb-4 sm:mb-6">
            {description}
          </p>
        </div>

        {/* Image/Icon */}
        <div className={`w-full md:w-1/2 flex justify-center items-center ${reverseOnMobile ? 'order-2 md:order-1' : ''}`}>
          <Image width="100%" height="300" className="max-w-[300px] md:max-w-[411px]" {...imageProps} />
        </div>
      </div>
    </section>
  )
} 