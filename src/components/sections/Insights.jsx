import { Button } from "../ui/Button"

const posts = [
  {
    title: "Benefits Soil Health: The Microbial Connection",
    date: "Apr 7",
    image: "/placeholder.svg",
  },
  {
    title: "Effective Pest Control with White Oil and Organic",
    date: "Mar 15",
    image: "/placeholder.svg",
  },
  {
    title: "Top 5 Organic Fertilisers for Maximum Crop Production",
    date: "Feb 28",
    image: "/placeholder.svg",
  },
]

export function Insights() {
  return (
    <section className="bg-[#DACEC2] py-16">
      <div className="container  px-8">
        <h2 className="text-[#293E31] text-2xl font-semibold mb-8">Insights and Updates</h2>
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">
                    A
                  </span>
                  <span>Admin</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-semibold text-[#293E31] mb-4">{post.title}</h3>
                <div className="flex text-gray-500 text-sm space-x-4">
                  <div className="flex items-center">
                    <span>0</span>
                    <span className="ml-1">💬</span>
                  </div>
                  <div className="flex items-center">
                    <span>0</span>
                    <span className="ml-1">👍</span>
                  </div>
                  <div className="flex items-center">
                    <span>0</span>
                    <span className="ml-1">❤️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button className="bg-[#FE8340] hover:bg-[#e06724] text-white">Read More</Button>
        </div>
      </div>
    </section>
  )
} 