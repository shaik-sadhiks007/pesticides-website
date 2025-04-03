import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Download, FileText, BarChart2 } from "lucide-react";

// Import the case studies data
// In a real application, you would fetch this from an API
import { caseStudies } from "../data/caseStudies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [study, setStudy] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
          {study.id === "paddy-case-study" && (
            <div className="p-6">
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-[#293E31] mb-4">Aim</h3>
                  <p className="text-gray-700 mb-6">{study.content.aim}</p>
                  
                  <h3 className="text-xl font-semibold text-[#293E31] mb-4">Introduction</h3>
                  {study.content.introduction.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                  
                  <h3 className="text-xl font-semibold text-[#293E31] mb-4">Research Methodology</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    {study.content.methodology.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#293E31] mb-4">Analysis</h3>
                  <p className="text-gray-700 mb-6">{study.content.analysis}</p>
                  
                  <div className="bg-[#f9fcf4] p-6 rounded-lg border border-[#e0e7d5] mb-6">
                    <h4 className="text-lg font-semibold text-[#293E31] mb-3">Key Findings</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {study.content.keyFindings.map((finding, index) => (
                        <li key={index}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#293E31] mb-4">Results and Conclusion</h3>
                  {study.content.conclusion.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                  
                  <div className="text-right text-gray-600 italic">
                    <p>{study.content.researcher.name}</p>
                    <p>{study.content.researcher.title}</p>
                    <p>{study.content.researcher.organization}</p>
                  </div>
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
                              to={`/products/plant-nutrition/bio-stimulants/${product.toLowerCase().replace(/\s+/g, '-')}`}
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
                          <a 
                            href={study.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#FE8340] text-white py-3 px-6 rounded-lg hover:bg-[#e06724] transition-colors duration-300 w-full"
                          >
                            <Download className="w-5 h-5" />
                            Download Full Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {study.id === "turf-farm-nursery-program" && (
            <div className="p-6">
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <div className="mb-6 text-gray-700">
                    <p className="mb-4">{study.content.introduction}</p>
                    <p className="text-sm text-gray-500 italic">{study.content.copyright}</p>
                  </div>
                  
                  {study.content.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      <h3 className="text-xl font-semibold text-[#293E31] mb-4">{section.title}</h3>
                      <p className="text-gray-700 mb-4">{section.description}</p>
                      
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="mb-6">
                          <h4 className="text-lg font-semibold text-[#293E31] mb-3">{subsection.title}</h4>
                          {subsection.description && (
                            <p className="text-gray-700 mb-3">{subsection.description}</p>
                          )}
                          
                          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                          
                          {subsection.notes && (
                            <div className="bg-[#f9fcf4] p-4 rounded-lg border border-[#e0e7d5] mt-4">
                              <h5 className="font-semibold text-[#293E31] mb-2">Notes:</h5>
                              <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {subsection.notes.map((note, noteIndex) => (
                                  <li key={noteIndex}>{note}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {subsection.optional && (
                            <div className="mt-4">
                              <h5 className="font-semibold text-[#293E31] mb-2">Optional:</h5>
                              <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {subsection.optional.map((opt, optIndex) => (
                                  <li key={optIndex}>{opt}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
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
                              to={`/products/plant-nutrition/bio-stimulants/${product.toLowerCase().replace(/\s+/g, '-')}`}
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
                        <h3 className="text-lg font-semibold text-[#293E31] mb-4">Key Benefits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.content.keyResults.map((result, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="bg-[#4CAF50] h-3 w-3 rounded-full"></div>
                              <span className="text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6">
                          <a 
                            href={study.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#FE8340] text-white py-3 px-6 rounded-lg hover:bg-[#e06724] transition-colors duration-300 w-full"
                          >
                            <Download className="w-5 h-5" />
                            Download Full Program
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {study.id === "sapphire-granules" && (
            <div className="p-6">
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <div className="mb-6 text-gray-700">
                    <p className="mb-4">{study.content.introduction}</p>
                  </div>
                  
                  {study.content.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      <h3 className="text-xl font-semibold text-[#293E31] mb-4">{section.title}</h3>
                      <p className="text-gray-700 mb-4">{section.description}</p>
                      
                      {section.recipe && (
                        <div className="bg-[#f9fcf4] p-6 rounded-lg border border-[#e0e7d5] mb-6">
                          <h4 className="text-lg font-semibold text-[#293E31] mb-3">DIY Recipe</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {section.recipe.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {section.keyFeatures && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          {section.keyFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="border-l-4 border-[#293E31] pl-4">
                              <h4 className="text-lg font-semibold text-[#293E31] mb-2">{feature.title}</h4>
                              <p className="text-gray-700">{feature.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.testingMethod && (
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-[#293E31] mb-2">Testing Method</h4>
                          <p className="text-gray-700">{section.testingMethod}</p>
                        </div>
                      )}
                      
                      {section.applicationComparison && (
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-[#293E31] mb-2">Application Comparison</h4>
                          <p className="text-gray-700">{section.applicationComparison}</p>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="mt-6 p-6 bg-[#f9fcf4] rounded-lg border border-[#e0e7d5]">
                    <h3 className="text-xl font-semibold text-[#293E31] mb-4">Conclusion</h3>
                    <p className="text-gray-700">{study.content.conclusion}</p>
                  </div>
                </div>
                
                <div className="w-full">
                  <div className="bg-[#f9fcf4] rounded-lg p-6 border border-[#e0e7d5]">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <h3 className="text-lg font-semibold text-[#293E31] mb-4">Products</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {study.products.map((product, index) => (
                            <Link 
                              key={index} 
                              to={`/products/plant-nutrition/bio-stimulants/${product.toLowerCase().replace(/\s+/g, '-')}`}
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
                        <h3 className="text-lg font-semibold text-[#293E31] mb-4">Key Benefits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.content.keyResults.map((result, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="bg-[#4CAF50] h-3 w-3 rounded-full"></div>
                              <span className="text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6">
                          <a 
                            href={study.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#FE8340] text-white py-3 px-6 rounded-lg hover:bg-[#e06724] transition-colors duration-300 w-full"
                          >
                            <Download className="w-5 h-5" />
                            Download Product Guide
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {study.id === "microshield-grapes-trial" && (
            <div className="p-6">
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <div className="mb-6 text-gray-700">
                    <p className="mb-4">{study.content.introduction}</p>
                  </div>
                  
                  {study.content.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      <h3 className="text-xl font-semibold text-[#293E31] mb-4">{section.title}</h3>
                      <p className="text-gray-700 mb-4">{section.description}</p>
                      
                      {section.additionalInfo && (
                        <p className="text-gray-700 mb-4">{section.additionalInfo}</p>
                      )}
                      
                      {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="mb-6">
                          <h4 className="text-lg font-semibold text-[#293E31] mb-3">{subsection.title}</h4>
                          {subsection.description && (
                            <p className="text-gray-700 mb-3">{subsection.description}</p>
                          )}
                          
                          {subsection.items && (
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          )}
                          
                          {subsection.table && (
                            <div className="overflow-x-auto mb-4">
                              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead className="bg-[#f9fcf4]">
                                  <tr>
                                    <th className="py-2 px-4 border-b text-left">Treatment</th>
                                    {subsection.table[0].description && (
                                      <th className="py-2 px-4 border-b text-left">Description</th>
                                    )}
                                    {subsection.table[0].dose && (
                                      <th className="py-2 px-4 border-b text-left">Dose</th>
                                    )}
                                    {subsection.table[0].rottenBerries && (
                                      <th className="py-2 px-4 border-b text-left">Rotten Berries</th>
                                    )}
                                    {subsection.table[0].freshness && (
                                      <th className="py-2 px-4 border-b text-left">Freshness Rating</th>
                                    )}
                                  </tr>
                                </thead>
                                <tbody>
                                  {subsection.table.map((row, rowIndex) => (
                                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                      <td className="py-2 px-4 border-b">{row.treatment}</td>
                                      {row.description && (
                                        <td className="py-2 px-4 border-b">{row.description}</td>
                                      )}
                                      {row.dose && (
                                        <td className="py-2 px-4 border-b">{row.dose}</td>
                                      )}
                                      {row.rottenBerries && (
                                        <td className="py-2 px-4 border-b">{row.rottenBerries}</td>
                                      )}
                                      {row.freshness && (
                                        <td className="py-2 px-4 border-b">{row.freshness}</td>
                                      )}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                  
                  <div className="mt-6 p-6 bg-[#f9fcf4] rounded-lg border border-[#e0e7d5]">
                    <h3 className="text-xl font-semibold text-[#293E31] mb-4">Conclusion</h3>
                    <p className="text-gray-700">{study.content.conclusion}</p>
                  </div>
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
                              to={`/products/plant-nutrition/bio-stimulants/${product.toLowerCase().replace(/\s+/g, '-')}`}
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
                          <a 
                            href={study.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#FE8340] text-white py-3 px-6 rounded-lg hover:bg-[#e06724] transition-colors duration-300 w-full"
                          >
                            <Download className="w-5 h-5" />
                            Download Full Research Report
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail; 