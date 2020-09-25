import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Learn from "./Learn";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Homecontent from "./Homecontent";
import Footer from "./Footer";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'



class Home extends React.Component{

render(){
  return(
    <div>
    <Header />
    <Sidebar />
    <Homecontent />
    <About />
    <Learn />
    <Contact />
    <Footer />
    </div>

    

  );
}

}

export default Home;