// App.jsx
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/LocalNavbar";
import SearchForm from "./components/Forms/SearchBar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import MenuCardContainer from "./components/CardFile/MenuCardContainer";
//import TopDealsContainer from './components/CardFile/TopDeals/TopDealsContainer';
const TopDealsContainer = lazy(() =>
  import("./components/CardFile/TopDeals/TopDealsContainer")
);
import PhonesTabletsWaitList from "./components/Waitlist/PhonesTabletsWaitList";
import AudioAndMusic from "./components/Waitlist/AudioAndMusic";
import EyeCareAndJewelry from "./components/Waitlist/EyeCareAndJewelry";
import ComputerAccessories from "./components/Waitlist/ComputerAccessories";
import PhoneAccessories from "./components/Waitlist/PhoneAccessories";
import LaptopCard from "./components/CardFile/LaptopCards/LaptopCard";
import LaptopContainer from "./components/CardFile/LaptopCards/LaptopContainer";
import LaptopDetails from "./components/CardFile/LaptopCards/LaptopDetails";
//import {LaptopDetailsPage} from "./components/CardFile/LaptopCards/LaptopDetailsPage";
import { LaptopDetailsProvider } from "./context/LaptopDetailsContext";
import { PhonesAndTabletsProvider } from "./context/PhonesAndTabletsContext";
import { useLaptopDetails } from "./context/LaptopDetailsContext";
import CheckOut from "./components/CheckOutPage";
import { CartProvider } from "./context/CartProvider";
import { LaptopDetailsPage } from "./components/CardFile/LaptopCards/LaptopDetailsPage";
import NotFound from "./components/404Error";
import HelpPage from "./components/HelpPage";
import Contact from "./components/Contact";
import PhonesAndTabletsDetails from "./components/CardFile/PhonesAndTabletsCard/PhonesAndTabletsCardDetails";
import { PhonesAndTabletsDetailsPage } from "./components/CardFile/PhonesAndTabletsCard/PhonesAndTabletsCardDetailsPage";
import { PhoneAccessoriesDetailsProvider } from "./context/PhoneAccessoriesContext";

function App() {
  return (
   <CartProvider>
            <LaptopDetailsProvider>
              <PhonesAndTabletsProvider>
                <PhoneAccessoriesDetailsProvider>

    <Router>
      
        {" "}
        {/* Wrap your App component with LaptopDetailsProvider */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <SearchForm />
                <MenuCardContainer />
                <Suspense
                  fallback={<div className="font-bold text-lg">Loading...</div>}
                >
                  <TopDealsContainer />
                </Suspense>
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/waitfilter/laptops"
            element={
              <>
                <Navbar />
                <SearchForm />
                <LaptopContainer />
              </>
            }
          />

          <Route
            path="/waitfilter/phones&tablets"
            element={
              <Suspense
                fallback={<div className="font-bold text-lg">Loading...</div>}
              >
                <PhonesTabletsWaitList />{" "}
              </Suspense>
            }
          />
          <Route path="/waitfilter/audio&music" element={<AudioAndMusic />} />
          <Route
            path="/waitfilter/eyecare&jewelry"
            element={<EyeCareAndJewelry />}
          />
          <Route
            path="/waitfilter/computer-accessories"
            element={<ComputerAccessories />}
          />
          <Route
            path="/waitfilter/phone-accessories"
            element={<PhoneAccessories />}
          />
          <Route
            path="/:brand/LaptopDetail/:id"
            element={
                     <LaptopDetailsPage />
            }
          />
           <Route
            path="/:brand/PhonesAndTabletsDetail/:id"
            element={
              <PhonesAndTabletsDetailsPage/>
              
            }
          />
          <Route path="/cart" element={<CheckOut />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/help" element={<HelpPage />} /> 

          <Route path="*" element={<NotFound />} /> {/* Catch-all for unmatched routes */}

        </Routes>
    </Router>

    </PhoneAccessoriesDetailsProvider>
    </PhonesAndTabletsProvider>
    </LaptopDetailsProvider>
    </CartProvider>
  );
}

export default App;