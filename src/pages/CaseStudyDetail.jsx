import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Download, FileText, BarChart2 } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [study, setStudy] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleDownload = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${study.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getProductPath = (product) => {
    // Add mapping for different product categories
    const categoryMap = {
      "Bio-Stimulator": '/products/agricultureAndHorticulture/humates/bio-stimulator',
      "Bug Shield": '/products/agricultureAndHorticulture/microbesAndBioStimulants/bug-shield',
      "Yield Booster": '/products/agricultureAndHorticulture/liquidFertilisers/yield-booster',
      "Bio-Protect" : '/products/agricultureAndHorticulture/microbesAndBioStimulants/bio-protect',
      "Microshield" : '/products/agricultureAndHorticulture/microbesAndBioStimulants/microshield',
      "Sapphire Granules" : '/products/agricultureAndHorticulture/humates/sapphire-granules',
      "Max Spreader" : "/products/agricultureAndHorticulture/liquidFertilisers/max_spreader"
    };

    return categoryMap[product] || `/products/agricultureAndHorticulture/humates/${product.toLowerCase().replace(/\s+/g, '-')}`;
  };

  useEffect(() => {
    // Find the case study by ID
    const foundStudy = caseStudies.find((s) => s.id === id);
    
    if (foundStudy) {
      setStudy(foundStudy);
      setIsLoaded(true);
    } else {
      // If no case study is found, navigate back to the media page
      navigate("/media");
    }
  }, [id, navigate]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#DACEC2]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#293E31] mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    return (
      <div className="p-6">
        <div className="flex flex-col gap-8">
          <div className="w-full">
            {study.content.aim && (
              <>
                <h3 className="text-xl font-semibold text-[#293E31] mb-4">Aim</h3>
                <p className="text-gray-700 mb-6">{study.content.aim}</p>
              </>
            )}

            <h3 className="text-xl font-semibold text-[#293E31] mb-4">Introduction</h3>
            {Array.isArray(study.content.introduction) ? (
              study.content.introduction.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
              ))
            ) : (
              <p className="text-gray-700 mb-4">{study.content.introduction}</p>
            )}

            {study.content.methodology && (
              <>
                <h3 className="text-xl font-semibold text-[#293E31] mb-4">Research Methodology</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  {study.content.methodology.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {study.content.analysis && (
              <>
                <h3 className="text-xl font-semibold text-[#293E31] mb-4">Analysis</h3>
                {Array.isArray(study.content.analysis) ? (
                  study.content.analysis.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p className="text-gray-700 mb-6">{study.content.analysis}</p>
                )}
                {study.content.analysisImages && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
                    {study.content.analysisImages.map((image, index) => (
                      <div key={index} className="rounded-lg">
                        <img
                          src={image}
                          alt={`Analysis Image ${index + 1}`}
                          className="w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-2 bg-transparent text-sm text-[#293E31] font-medium text-center">
                          {image.title}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {study.content.conclusion && (
              <>
                <h3 className="text-xl font-semibold text-[#293E31] mb-4">Results and Conclusion</h3>
                {Array.isArray(study.content.conclusion) ? (
                  study.content.conclusion.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p className="text-gray-700 mb-4">{study.content.conclusion}</p>
                )}
                {study.content.conclusionImages && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
                    {study.content.conclusionImages.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-48 hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-2 bg-transparent text-sm text-[#293E31] font-medium text-center">
                          {image.title}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {study.content.researcher && (
              <div className="text-right text-gray-600 italic mt-8">
                <p>{study.content.researcher.name}</p>
                <p>{study.content.researcher.title}</p>
                <p>{study.content.researcher.organization}</p>
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="bg-[#f9fcf4] rounded-lg p-6 border border-[#e0e7d5]">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-[#293E31] mb-4">Products Used</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {study.products.map((product, index) => (
                      <Link 
                        key={index} 
                        to={getProductPath(product)}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="bg-[#293E31] text-white p-2 rounded-full">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-[#293E31] font-medium">{product}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-[#293E31] mb-4">Key Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.content.keyResults.map((result, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="bg-[#4CAF50] h-3 w-3 rounded-full"></div>
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <button 
                      onClick={() => handleDownload(study.pdfUrl)}
                      className="flex items-center justify-center gap-2 bg-[#FE8340] text-white py-3 px-6 rounded-lg hover:bg-[#e06724] transition-colors duration-300 w-full"
                    >
                      <Download className="w-5 h-5" />
                      Download Full Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#DACEC2]">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${study.image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto max-w-6xl h-full flex flex-col justify-center px-4 sm:px-6 text-white"
          >
            <Link to="/media" className="flex items-center gap-2 text-white/80 hover:text-white mb-6 w-fit">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Media</span>
            </Link>
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              {study.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl max-w-2xl mb-4"
            >
              {study.subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-4 text-sm"
            >
              <span>{study.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <BarChart2 className="h-4 w-4" />
                {study.location}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col gap-8">
              <div className="w-full">
                {study.content.aim && (
                  <>
                    <h3 className="text-xl font-semibold text-[#293E31] mb-4">Aim</h3>
                    <p className="text-gray-700 mb-6">{study.content.aim}</p>
                  </>
                )}

                <h3 className="text-xl font-semibold text-[#293E31] mb-4">Introduction</h3>
                {Array.isArray(study.content.introduction) ? (
                  study.content.introduction.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p className="text-gray-700 mb-4">{study.content.introduction}</p>
                )}

                {study.content.methodology && (
                  <>
                    <h3 className="text-xl font-semibold text-[#293E31] mb-4">Research Methodology</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                      {study.content.methodology.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {study.content.analysis && (
                  <>
                    <h3 className="text-xl font-semibold text-[#293E31] mb-4">Analysis</h3>
                    {Array.isArray(study.content.analysis) ? (
                      study.content.analysis.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                      ))
                    ) : (
                      <p className="text-gray-700 mb-6">{study.content.analysis}</p>
                    )}
                    {study.content.analysisImages && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
                        {study.content.analysisImages.map((image, index) => (
                          <div key={index} className="rounded-lg ">
                            <img
                              src={image.url}
                              alt={image.title}
                              className="w-full h-48 hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-2 bg-transparent text-sm text-[#293E31] font-medium text-center">
                              {image.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {study.content.conclusion && (
                  <>
                    <h3 className="text-xl font-semibold text-[#293E31] mb-4">Results and Conclusion</h3>
                    {Array.isArray(study.content.conclusion) ? (
                      study.content.conclusion.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                      ))
                    ) : (
                      <p className="text-gray-700 mb-4">{study.content.conclusion}</p>
                    )}
                    {study.content.conclusionImages && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
                        {study.content.conclusionImages.map((image, index) => (
                          <div key={index} className="rounded-lg">
                            <img
                              src={image.url}
                              alt={image.title}
                              className="w-full h-48 hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-2 bg-transparent text-sm text-[#293E31] font-medium text-center">
                              {image.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {study.content.researcher && (
                  <div className="text-right text-gray-600 italic mt-8">
                    <p>{study.content.researcher.name}</p>
                    <p>{study.content.researcher.title}</p>
                    <p>{study.content.researcher.organization}</p>
                  </div>
                )}
              </div>

              <div className="w-full">
                <div className="bg-[#f9fcf4] rounded-lg p-6 border border-[#e0e7d5]">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold text-[#293E31] mb-4">Products Used</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {study.products.map((product, index) => (
                          <Link 
                            key={index} 
                            to={getProductPath(product)}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="bg-[#293E31] text-white p-2 rounded-full">
                              <FileText className="w-4 h-4" />
                            </div>
                            <span className="text-[#293E31] font-medium">{product}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold text-[#293E31] mb-4">Key Results</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.content.keyResults.map((result, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="bg-[#4CAF50] h-3 w-3 rounded-full"></div>
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <button 
                          onClick={() => handleDownload(study.pdfUrl)}
                          className="flex items-center justify-center gap-2 bg-[#FE8340] text-white py-3 px-6 rounded-lg hover:bg-[#e06724] transition-colors duration-300 w-full"
                        >
                          <Download className="w-5 h-5" />
                          Download Full Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail; 