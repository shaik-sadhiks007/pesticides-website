import Image1 from "../../assets/image1.jpg"
import { FileDown } from "lucide-react"
import agricultureCatalog from "../../assets/pdfs/brochure/agricultureCatalog.pdf"
import golfCatalog from "../../assets/pdfs/brochure/golfCatalog.pdf"
import { motion } from "framer-motion"

export function ImageSection() {
  const handleDownload = (pdfPath, fileName) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] md:min-h-[60vh] lg:min-h-[100vh] w-full">
      {/* First column with an image and download button */}
      <div className="bg-[#293E31] flex flex-col justify-center items-center p-4 relative group min-h-[50vh] md:min-h-[60vh] w-full">
        <motion.h3 
          className="text-white text-xl sm:text-2xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          Download our product catalogue now
        </motion.h3>
        <img
          src={"https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeCatalog/av21x1exqelfvceue0cw"}
          alt="Farm worker1"
          className="object-cover w-full h-[250px] sm:w-[400px] sm:h-[350px] md:w-[300px] md:h-[400px] lg:w-[500px] lg:h-[450px] transition-transform duration-500 group-hover:scale-95"
        />
        {/* Download Button - Always visible on mobile and tablet, floating on desktop */}
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] mt-6 md:mt-8 lg:mt-0 lg:absolute lg:bottom-8 lg:transform lg:translate-y-0 lg:opacity-100 transition-all duration-500">
          <button
            onClick={() => handleDownload(agricultureCatalog, 'agriculture-catalog.pdf')}
            className="w-full cursor-pointer bg-[#FE8340] hover:bg-[#e06724] text-white py-4 px-6 rounded-lg flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileDown className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg font-semibold">Agriculture Brochure</span>
          </button>
        </div>
      </div>

      {/* Second column: Background image with download button */}
      <div className="relative w-full min-h-[50vh] md:min-h-[60vh] overflow-hidden group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/HomeCatalog/kg7xqfv3ymnd6rfvzqaj')`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        
        {/* Overlay gradient - Always visible on mobile and tablet, hover on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Download Button - Always visible on mobile and tablet, floating on desktop */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform lg:translate-y-0 lg:opacity-100 transition-all duration-500 w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
          <button
            onClick={() => handleDownload(golfCatalog, 'golf-catalog.pdf')}
            className="w-full bg-white cursor-pointer text-[#293E31] px-6 py-4 rounded-lg flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
          >
            <div className="relative cursor-pointer">
              <FileDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/btn:scale-110" />
              <div className="absolute inset-0 animate-ping opacity-30 group-hover/btn:opacity-0">
                <FileDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <span className="text-base sm:text-lg font-semibold">Golf Brochure</span>
          </button>
        </div>
      </div>
    </section>
  );
}
