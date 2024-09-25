import LayoutComponent from "../../../layouts/Components/Layout1Component";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import CoreComponent from "./components/CoreComponent/CoreComponent";
import ProfessionComponent from "./components/ProfessionComponent/ProfessionComponent";
import SliderComponent from "./components/SliderComponent/SliderComponent";


const Home1 = () => {
  return (
    <LayoutComponent>
      <SliderComponent />
      <CoreComponent />
      <AboutComponent />
      <ProfessionComponent />
      <ContactComponent />
    </LayoutComponent>
  )
}

export default Home1;