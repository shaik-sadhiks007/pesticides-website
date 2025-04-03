import Image1 from "../../assets/image1.jpg"
import { FileDown } from "lucide-react"
import agricultureCatalog from "../../assets/pdfs/brochure/agricultureCatalog.pdf"
import golfCatalog from "../../assets/pdfs/brochure/golfCatalog.pdf"

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
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[60vh] lg:h-[100vh]">
      {/* First column with an image and download button */}
      <div className="bg-[#293E31] flex flex-col justify-center items-center p-4 relative group">
        <img
          src={Image1}
          alt="Farm worker1"
          className="object-cover w-[250px] h-[150px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[300px] transition-transform duration-500 group-hover:scale-95"
        />
        {/* Floating Download Button */}
        <div className="absolute  bottom-8 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-[250px] md:w-[400px] lg:w-[500px]">
          <button
            onClick={() => handleDownload(agricultureCatalog, 'agriculture-catalog.pdf')}
            className="w-full cursor-pointer bg-[#FE8340] hover:bg-[#e06724] text-white p-4 rounded-lg flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileDown className="w-6 h-6" />
            <span className="text-lg font-semibold">Agriculture Brochure</span>
          </button>
        </div>
      </div>

      {/* Second column: Background image with download button */}
      <div className="relative w-full h-[50vh] md:h-screen overflow-hidden group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover md:bg-fixed transition-transform duration-500 group-hover:scale-[1.02]"
          style={{
            backgroundImage: `url('https://static.wixstatic.com/media/ad420a_3a81fba6eaac4f47bc45e66572c0bda2~mv2_d_5700_3804_s_4_2.jpg')`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: "scale(1)",
          }}
        ></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating Download Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={() => handleDownload(golfCatalog, 'golf-catalog.pdf')}
            className="bg-white cursor-pointer text-[#293E31] px-6 py-4 rounded-lg flex items-center gap-3 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
          >
            <div className="relative cursor-pointer">
              <FileDown className="w-6 h-6 transition-transform duration-300 group-hover/btn:scale-110" />
              <div className="absolute inset-0 animate-ping opacity-30 group-hover/btn:opacity-0">
                <FileDown className="w-6 h-6" />
              </div>
            </div>
            <span className="text-lg font-semibold">Golf Brochure</span>
          </button>
        </div>
      </div>
    </section>
  );
}
