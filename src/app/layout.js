import './globals.css'

import NavBar from "../components/NavBar";
import {roboto} from "../app/font"
import ProductProvider from '@/context/ProductProvider';

export const metadata = {
  title: "DevStyle",
  description: "You can be buy the coding shirts",
  keywords: ["coding", "coding shirts", "programming", "products", "coding dress"]
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={`bg-gray-100 ${roboto.className}`}>
        <ProductProvider>
        <NavBar />
        {children}
        </ProductProvider>
       
        </body>
    </html>
  )
}
