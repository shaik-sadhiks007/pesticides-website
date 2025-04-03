import { Hero } from "../components/sections/Hero"
import { Commitment } from "../components/sections/Commitment"
import  ProductRange  from "../components/sections/ProductRange"
import { ImageSection } from "../components/sections/ImageSection"
import { Insights } from "../components/sections/Insights"
import Testimonials from "../components/sections/Testimonials"
import TrustedBrands from "./TrustedBrands"
import { HomeBanner } from "../components/sections/HomeBanner"  
export function Home() {
  return (
    <main>
      <HomeBanner />
      <Commitment />
      <ProductRange />
      <ImageSection />
      <Testimonials />
      <TrustedBrands />
      {/* <Insights /> */}
    </main>
  )
} 