import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Play, Download, ChevronRight, Image as ImageIcon, FileText, BarChart2 } from "lucide-react"
import ProductsBanner from "../assets/productImages/productBanner.jpg"
import { Link, useParams, useLocation, useNavigate } from "react-router-dom"
import { caseStudies } from "../data/caseStudies"

const Media = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    const { category } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("blogs")

    // Determine active tab based on current route
    useEffect(() => {
        const path = location.pathname
        if (path.includes("/media/case-study")) {
            setActiveTab("case-studies")
        } else if (path.includes("/media/gallery")) {
            setActiveTab("gallery")
        } else if (path.includes("/media/blogs")) {
            setActiveTab("blogs")
        }
    }, [location])

    // Handle tab change
    const handleTabChange = (value) => {
        setActiveTab(value)
        if (value === "blogs") {
            navigate("/media/blogs")
        } else if (value === "case-studies") {
            navigate("/media/case-study")
        } else if (value === "gallery") {
            navigate("/media/gallery")
        }
    }

    // Dummy blog data with categories
    const blogs = [
        {
            id: 1,
            title: "Nutrition Farming",
            description: "Learn about the principles and benefits of nutrition farming for sustainable agriculture.",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
            date: "March 15, 2024",
            readTime: "5 min read",
            category: "agriculture"
        },
        {
            id: 2,
            title: "Soil Balancing for Optimum Productivity",
            description: "Discover the importance of soil balancing and how it affects crop yields and quality.",
            image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
            date: "March 10, 2024",
            readTime: "7 min read",
            category: "agriculture"
        },
    ]

    // Filter blogs based on category if provided
    const filteredBlogs = category
        ? blogs.filter(blog => blog.category === category)
        : blogs

    // Dummy gallery data
    const galleryImages = [
        {
            id: 1,
            title: "Case Study Image 1",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/dymsnkmeqgljoklehuko",
            category: "Case Study"
        },
        {
            id: 2,
            title: "Case Study Image 2",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/oxcutaw1rhrwxzshr3go",
            category: "Case Study"
        },
        {
            id: 3,
            title: "Case Study Image 3",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/krs2emsan3noexi1pryh",
            category: "Case Study"
        },
        {
            id: 8,
            title: "Case Study Image 8",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/tt88qirsllxnnvrgwtb4",
            category: "Case Study"
        },
        {
            id: 9,
            title: "Case Study Image 9",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/u9qf2ow6lqupxunq5wyo",
            category: "Case Study"
        },
        {
            id: 10,
            title: "Case Study Image 10",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/u7663mwyjn4fmy9nrzwz",
            category: "Case Study"
        },
        {
            id: 12,
            title: "Case Study Image 12",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/uxbij6bffo9awyenc8gz",
            category: "Case Study"
        },
        {
            id: 13,
            title: "Case Study Image 13",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/v6qd9g1x5dm5tetazahn",
            category: "Case Study"
        },
        {
            id: 18,
            title: "Case Study Image 18",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/wy7jvfmudvqw2znx3tjn",
            category: "Case Study"
        },
        {
            id: 22,
            title: "Case Study Image 22",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/ylgk5r2ic1txjkcgbaqt",
            category: "Case Study"
        },
        {
            id: 25,
            title: "Case Study Image 25",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/astlpqkhg57hlmablpls",
            category: "Case Study"
        },
        {
            id: 26,
            title: "Case Study Image 26",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/athv3hyegv87cvya9lgg",
            category: "Case Study"
        },
        {
            id: 27,
            title: "Case Study Image 27",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/bom0fgbxidamwnlwvodv",
            category: "Case Study"
        },
        {
            id: 31,
            title: "Case Study Image 31",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/eryidqsdp1x5fcjtfw2q",
            category: "Case Study"
        },
        {
            id: 32,
            title: "Case Study Image 32",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/f5fs66x90inw0pkixq9h",
            category: "Case Study"
        },
        {
            id: 40,
            title: "Case Study Image 40",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/ileiuqlcttpfgqbwghdu",
            category: "Case Study"
        },
        {
            id: 41,
            title: "Case Study Image 41",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/im0g7hjts5pqfemz9xf7",
            category: "Case Study"
        },
        {
            id: 42,
            title: "Case Study Image 42",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/j4zslz1syi19ey1mtig8",
            category: "Case Study"
        },
        {
            id: 45,
            title: "Case Study Image 45",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/lgyy8eaf6ifhfooto6rw",
            category: "Case Study"
        },
        {
            id: 49,
            title: "Case Study Image 49",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/lsg2ixqpshdmw5pk4cyo",
            category: "Case Study"
        },
        {
            id: 51,
            title: "Case Study Image 51",
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/o7lvv3uh1mptruwnkemm",
            category: "Case Study"
        },
        {
            id: 52,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/wopv4vcte6nzg9n1r4iu",
            title: "Treated Farm NBS Kit showing.",
            category: "Case Study"
        },
        {
            id: 53,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/ilj2e1vrci4cnulih8if",
            title: "Controlled Crop",
            category: "Case Study"
        },
        {
            id: 54,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/tmctl2ynwa0ye1kieo8a",
            title: "Treated Farm NBS Kit",
            category: "Case Study"
        },
        {
            id: 55,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/llneyiicz680dfsc07bk",
            title: "Controlled Farm",
            category: "Case Study"
        },
        {
            id: 56,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/affrprtlkwpw4u65typ3",
            title: "Treated Farm NBS Kit",
            category: "Case Study"
        },
        {
            id: 57,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/ebobnndvpreya5sxmgqh",
            title: "Controlled Crop",
            category: "Case Study"
        },
        {
            id: 58,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/mtalcahl58eaiuqclxss",
            title: "Treated Farm (NBS) Kit",
            category: "Case Study"
        },
        {
            id: 59,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/tseriaj0ojh7r6uz1ppe",
            title: "Controlled Crop",
            category: "Case Study"
        },
        {
            id: 60,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/gqjwffaozr3piwttd0ua",
            title: "Treated Farm (NBS) Kit",
            category: "Case Study"
        },
        {
            id: 61,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/fsqejjhlag1sajdavdp7",
            title: "Controlled Crop",
            category: "Case Study"
        },
        {
            id: 62,
            image: "https://res.cloudinary.com/dv3d8msjh/image/upload/f_auto,q_auto/v1/case%20Study/paddy/euelieiwhamptkbz98zt",
            title: "Final Crop Treated (NBS Kit)",
            category: "Case Study"
        },
    ]

    return (
        <>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${ProductsBanner})`,
                    }}
                >
                </div>
                {/* Overlay with Motion Text */}
                <div className="absolute inset-0 bg-black/40">
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full flex items-center text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
                    >
                        <div className="container  max-w-6xl">
                            <motion.h1
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                            >
                                Media Center
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8"
                            >
                                Explore our collection of educational resources, blogs, case studies, and gallery.
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <Button 
                                    className="bg-[#f47834] hover:bg-[#e06724] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                                    onClick={() => {
                                        const contentSection = document.getElementById('content-section');
                                        if (contentSection) {
                                            contentSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Browse Content <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>
            </div>

            <div id="content-section" className="min-h-screen bg-[#DACEC2] py-12">
                <div className="container mx-auto  max-w-6xl px-4">
                    <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
                        <TabsList className="bg-[#FCF9F4]">
                            <TabsTrigger value="blogs">Blogs</TabsTrigger>
                            <TabsTrigger value="case-studies">Results</TabsTrigger>
                            <TabsTrigger value="gallery">Gallery</TabsTrigger>
                        </TabsList>

                        <TabsContent value="blogs" className="space-y-8">
                            {category && (
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-[#293E31] capitalize">{category} Blogs</h2>
                                    <p className="text-gray-600">Explore our articles on {category}.</p>
                                </div>
                            )}
                            <div className="grid md:grid-cols-2 gap-6">
                                {filteredBlogs.map((blog) => (
                                    <Link to={`/media/blog/${blog.id}`} key={blog.id}>
                                        <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                            <div className="relative aspect-video">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover rounded-t-lg"
                                                />
                                                <div className="absolute top-4 right-4 bg-[#293E31] text-white text-xs px-3 py-1 rounded-full capitalize">
                                                    {blog.category}
                                                </div>
                                            </div>
                                            <CardHeader>
                                                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                                                    <span>{blog.date}</span>
                                                    <span>{blog.readTime}</span>
                                                </div>
                                                <CardTitle className="text-[#293E31]">{blog.title}</CardTitle>
                                                <CardDescription className="text-[#293E31]">{blog.description}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="case-studies" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                {caseStudies.map((study) => (
                                    <Link to={`/media/case-study/${study.id}`} key={study.id}>
                                        <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                                            <div className="relative aspect-video">
                                                <img
                                                    src={study.image}
                                                    alt={study.title}
                                                    className="w-full h-full object-cover rounded-t-lg"
                                                />
                                                <div className="absolute top-4 right-4 bg-[#293E31] text-white text-xs px-3 py-1 rounded-full">
                                                    {study.date}
                                                </div>
                                            </div>
                                            <CardHeader>
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                                    <BarChart2 className="h-4 w-4" />
                                                    <span>{study.location}</span>
                                                </div>
                                                <CardTitle className="text-[#293E31]">{study.title}</CardTitle>
                                                <CardDescription className="text-[#293E31] line-clamp-2">{study.subtitle}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-gray-600 line-clamp-3 mb-4">{study.description}</p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {study.products.slice(0, 3).map((product, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-[#f9fcf4] text-[#293E31] text-xs px-2 py-1 rounded-full border border-[#e0e7d5]"
                                                        >
                                                            {product}
                                                        </span>
                                                    ))}
                                                    {study.products.length > 3 && (
                                                        <span className="bg-[#f9fcf4] text-[#293E31] text-xs px-2 py-1 rounded-full border border-[#e0e7d5]">
                                                            +{study.products.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </CardContent>
                                            <div className="px-6 pb-6">
                                                <Button className="w-full bg-[#FE8340] hover:bg-[#e06724] text-white">
                                                    View Case Study <ChevronRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="gallery" className="space-y-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {galleryImages.map((image) => (
                                    <Card key={image.id} className="overflow-hidden">
                                        <div className="relative aspect-square group">
                                            <img
                                                src={image.image}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <ImageIcon className="w-12 h-12 text-white" />
                                            </div>
                                        </div>
                                        {/* <CardHeader>
                                            <CardTitle className="text-[#293E31]">{image.title}</CardTitle>
                                            <CardDescription className="text-[#293E31]">{image.category}</CardDescription>
                                        </CardHeader> */}
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default Media


