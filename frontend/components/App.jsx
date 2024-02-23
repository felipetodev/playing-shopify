import Hero from "./Hero"
import { AppProvider as PolarisProvider } from "@shopify/polaris";

export default function App({ home }) {
  console.log('Home', home)

  return (
    <PolarisProvider>
      <Hero />
    </PolarisProvider>
  )
}
