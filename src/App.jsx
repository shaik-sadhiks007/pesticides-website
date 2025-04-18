import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import Contact from "./pages/Contact"
// import Products from "./pages/Products"
import Products from "./components/Products"

import ProductDetail from "./components/ProductDetail"

// import ProductDetails from "./pages/ProductDetails"
import CropPrograms from "./pages/CropPrograms"
import WhatsAppButton from "./components/WhatsAppButton"
import { DataProvider } from "./context/DataContext"
import { ProductProvider } from "./context/ProductContext"
import { SearchProvider } from "./context/SearchContext"
import Services from "./pages/Services"
import Media from "./pages/Media"
import BlogPost from "./pages/BlogPost"
import CaseStudyDetail from "./pages/CaseStudyDetail"
import EmailUs from "./components/sections/EmailUs"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <GoogleAnalytics />
        <ProductProvider>
          <SearchProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:category" element={<Products />} />
                  <Route path="/products/:category/:subcategory" element={<Products />} />
                  <Route path="/products/:category/:subcategory/:productId" element={<ProductDetail />} />
                  <Route path="/crop-programs" element={<CropPrograms />} />
                  <Route path="/crop-programs/:programId" element={<CropPrograms />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/media/blogs" element={<Media />} />
                  <Route path="/media/blogs/:category" element={<Media />} />
                  <Route path="/media/blog/:id" element={<BlogPost />} />
                  <Route path="/media/case-study" element={<Media />} />
                  <Route path="/media/case-study/:id" element={<CaseStudyDetail />} />
                  <Route path="/media/gallery" element={<Media />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                  {/* <Route path="/email-us" element={<EmailUs />} /> */}
                </Routes>
              </main>
              <Footer />
            </div>
          </SearchProvider>
        </ProductProvider>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App 