import React from "react";

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts'
import Footer from "./Footer";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

const Masterlayout = () => {
  return (
    <div className="sb-nav-fixed">
         <Navbar />
      <div id="layoutSidenav">

        <div id="layoutSidenav_nav">
           <Sidebar />
        </div>
   
      <div id="layoutSidenav_content">
        <main>
             <h1>Master Layouts</h1>
        </main>
         <Footer />
     </div>

     </div>

    </div>
  );
}

export default Masterlayout;