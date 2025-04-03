import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
// import Products from "./pages/Products"
import Products from "./components/Products"

import ProductDetail from "./components/ProductDetail"

// import ProductDetails from "./pages/ProductDetails"
import CropPrograms from "./pages/CropPrograms"
import WhatsAppButton from "./components/WhatsAppButton"
import { DataProvider } from "./context/DataContext"
import { ProductProvider } from "./context/ProductContext"
import Services from "./pages/Services"
import Media from "./pages/Media"
import BlogPost from "./pages/BlogPost"
import CaseStudyDetail from "./pages/CaseStudyDetail"
import EmailUs from "./components/sections/EmailUs"
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ProductProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* <WhatsAppButton /> */}
            {/* <TawkMessengerReact
              propertyId="67eb9428bcc73e19037a3d2c"
              widgetId="1ino3lg22" /> */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category" element={<Products />} />
                <Route path="/products/:category/:subcategory" element={<Products />} />
                <Route path="/products/:category/:subcategory/:productId" element={<ProductDetail />} />
                <Route path="/crop-programs" element={<CropPrograms />} />
                <Route path="/services" element={<Services />} />
                <Route path="/media" element={<Media />} />
                <Route path="/media/blog/:id" element={<BlogPost />} />
                <Route path="/media/case-study/:id" element={<CaseStudyDetail />} />
                <Route path="/contact-us" element={<Contact />} />
                {/* <Route path="/email-us" element={<EmailUs />} /> */}
              </Routes>
            </main>
            <Footer />
          </div>
        </ProductProvider>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App 