import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//src\app\_components\header\header.jsx
import HeaderPage from "./header/header";
import Services from "./services/services";
import AboutUs from "./AboutUs/AboutUs";
import HowToWork from "./howToWork/howToWork";
import BestSolution from "./bestSolution/bestSolution"
import SomeServices from "./SomeServices/SomeServices"
import Numbers from "./Numbers/Numbers"
import OurTeam from "./OurTeam/OurTeam"

export default function Home() {
  return (
    <>
      <div className='w-full '>
        <HeaderPage></HeaderPage>
        <Services />
        <AboutUs />
        <HowToWork />
        <BestSolution />
        <SomeServices />
        <Numbers />
        <OurTeam />
      </div>
    </>
  )
} 