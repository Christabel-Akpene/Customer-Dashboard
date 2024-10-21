import Customer from "./components/Customer/Customer";
import Header from "./components/Header-Component/Header";
import Navigation from "./components/Navigation/Navigation";
import Pagination from "./components/Pagination/Pagination";
import Summary from "./components/Summary/Summary";
import data from "./components/db/users";
import { useState } from "react";

function App() {

  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // const openSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };

  return (
    <>
      <Header  />
      <Navigation />
      <Summary />
      <Customer />
      <Pagination/>
    </>
  );

}




export default App;
