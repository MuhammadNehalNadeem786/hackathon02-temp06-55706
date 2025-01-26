import Header from "./components/Header"
import Hero from "./components/Hero"
import BrowseTheRange from "./components/SubHero"
import RoomIspirations from "./components/Inspiration"
import ProductGrid from "@/app/components/ProductGrid"
import Furniture from "./components/Furniture-Furno"
import Footer from "./components/Footer"

const Home=()=>{
  return (
    <div>
      <Header/>
      <Hero/>
      <BrowseTheRange />
      <ProductGrid />
      <RoomIspirations/>
      <Furniture/>
      <Footer/>
    </div>
  )
}
export default Home;




