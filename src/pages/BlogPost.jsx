import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const BlogPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // This would typically come from your data source
    const blogData = {
        1: {
            title: "Nutrition Farming",
            date: "March 15, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
            content: `
                <h2>Understanding Nutrition Farming</h2>
                <p>Nutrition farming is a holistic approach to agriculture that focuses on maintaining and improving soil health through balanced nutrition management. This method goes beyond traditional farming practices by considering the complex interactions between soil, plants, and microorganisms.</p>

                <h2>Key Principles</h2>
                <ul>
                    <li>Soil Health: The foundation of nutrition farming is maintaining healthy soil with balanced mineral content.</li>
                    <li>Microbial Activity: Promoting beneficial microbial populations in the soil.</li>
                    <li>Plant Nutrition: Ensuring plants receive all necessary nutrients in the right proportions.</li>
                    <li>Sustainable Practices: Implementing methods that maintain long-term soil fertility.</li>
                </ul>

                <h2>Benefits of Nutrition Farming</h2>
                <p>Adopting nutrition farming practices can lead to:</p>
                <ul>
                    <li>Improved crop yields and quality</li>
                    <li>Enhanced soil structure and fertility</li>
                    <li>Reduced dependency on synthetic inputs</li>
                    <li>Better resistance to pests and diseases</li>
                    <li>Long-term sustainability of farming operations</li>
                </ul>

                <h2>Implementation Strategies</h2>
                <p>To implement nutrition farming effectively:</p>
                <ol>
                    <li>Conduct regular soil testing to assess nutrient levels</li>
                    <li>Develop a balanced fertilization program</li>
                    <li>Incorporate organic matter into the soil</li>
                    <li>Practice crop rotation and diversity</li>
                    <li>Monitor and adjust based on plant response</li>
                </ol>

                <h2>Conclusion</h2>
                <p>Nutrition farming represents a sustainable approach to agriculture that focuses on soil health and balanced nutrition. By implementing these practices, farmers can improve their yields while maintaining the long-term health of their land.</p>
            `
        },
        2: {
            title: "Soil Balancing for Optimum Productivity",
            date: "March 10, 2024",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
            content: `
                <h2>The Importance of Soil Balance</h2>
                <p>Soil balancing is crucial for achieving optimal crop productivity. It involves maintaining the right proportions of essential nutrients and minerals in the soil to support healthy plant growth.</p>

                <h2>Key Elements of Soil Balance</h2>
                <ul>
                    <li>Macronutrients: Nitrogen, phosphorus, and potassium</li>
                    <li>Secondary Nutrients: Calcium, magnesium, and sulfur</li>
                    <li>Micronutrients: Iron, zinc, copper, and others</li>
                    <li>Soil pH: Maintaining optimal pH levels</li>
                    <li>Organic Matter: Essential for soil structure and nutrient cycling</li>
                </ul>

                <h2>Soil Testing and Analysis</h2>
                <p>Regular soil testing is essential for:</p>
                <ul>
                    <li>Identifying nutrient deficiencies</li>
                    <li>Determining pH levels</li>
                    <li>Assessing organic matter content</li>
                    <li>Planning fertilization programs</li>
                    <li>Monitoring soil health over time</li>
                </ul>

                <h2>Balancing Techniques</h2>
                <p>Effective soil balancing involves:</p>
                <ol>
                    <li>Regular soil testing and analysis</li>
                    <li>Applying appropriate amendments</li>
                    <li>Managing pH levels</li>
                    <li>Incorporating organic matter</li>
                    <li>Practicing crop rotation</li>
                </ol>

                <h2>Benefits of Balanced Soil</h2>
                <p>Maintaining balanced soil leads to:</p>
                <ul>
                    <li>Improved crop yields</li>
                    <li>Better nutrient uptake</li>
                    <li>Enhanced plant health</li>
                    <li>Reduced disease pressure</li>
                    <li>Sustainable production</li>
                </ul>

                <h2>Conclusion</h2>
                <p>Soil balancing is fundamental to successful farming. By maintaining proper nutrient levels and soil conditions, farmers can achieve optimal crop productivity while ensuring long-term soil health.</p>
            `
        }
    }

    const blog = blogData[id]

    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#DACEC2]">
                <h1 className="text-2xl font-bold mb-4 text-[#293E31]">Blog post not found</h1>
                <Button onClick={() => navigate("/media")} className="bg-[#f47834] hover:bg-[#e06724] text-white">
                    Back to Media
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#DACEC2]">
            <div className="container mx-auto px-4 py-12">
                <Button 
                    onClick={() => navigate("/media")}
                    variant="ghost"
                    className="mb-8 text-[#293E31] hover:text-[#f47834]"
                >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Media
                </Button>

                <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-[#FCF9F4] rounded-lg overflow-hidden shadow-lg"
                >
                    <div className="relative h-[400px]">
                        <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="p-8">
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                            <span>{blog.date}</span>
                            <span>{blog.readTime}</span>
                        </div>
                        
                        <h1 className="text-3xl font-bold text-[#293E31] mb-6">{blog.title}</h1>
                        
                        <div 
                            className="prose prose-lg max-w-none text-[#293E31]"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </motion.article>
            </div>
        </div>
    )
}

export default BlogPost 