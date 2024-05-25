import Navbar from "./../../components/LocalNavbar";
import SearchForm from '../Forms/SearchBar'
import PhoneAccessoriesContainer from "../CardFile/PhoneAccessories/PhoneAccessoriesContainer";

export default function PhoneAccessories() {
  return (
    <>
    <Navbar/>
    <SearchForm/>
    <div>
      <PhoneAccessoriesContainer/>
      </div>
    </>
  )
}
