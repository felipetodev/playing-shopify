import Hero from "./Hero"
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import { AppProvider as PolarisProvider } from "@shopify/polaris";

export default function App({ home }) {
  console.log('Home', home)

  return (
    <PolarisProvider>
      <Navbar />
      <Hero />
      <Pricing />
    </PolarisProvider>
  )
}
