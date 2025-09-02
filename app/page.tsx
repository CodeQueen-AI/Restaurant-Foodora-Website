import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Box from './components/Boxes'
import Banner from './components/Banner'
import Price from './components/Price'
import TrendyRecipe from './components/Trendy Recipe'
import Work from './components/Works'
import Feature from './components/Feature'
import Sepciality from './components/speciality'


export default function page() {
  return (
    <>
      <Navbar />
      <Home/>
      <Menu/>
      <Box/>
      <Work/>
      <Banner/>
      <Feature/>
      <Sepciality/>
      <TrendyRecipe/>
      <Price/>
    </>
  );
}
