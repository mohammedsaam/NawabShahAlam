import React from 'react';
import {NavDropdown, Navbar, Nav, ListGroup } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./navigation.css";
import CLanguageQuiz from './photos/CLanguageQuiz';
import Photo from './photos/Photo';
import Republic from './photos/Republic';
import SideBar from './SideBar';
import BTechOreintationProgram2015 from './photos/BTechOreintationProgram2015';
import Laboraties from './photos/Laboraties';
import MechanicalEnggDepartment from './photos/MechanicalEnggDepartment';
import GraduationDay2014 from './photos/GraduationDay2014';
import OreintationProgramme2016 from './photos/OreintationProgramme2016';
import IndustrialTourECEMechDept from './photos/IndustrialTourECEMechDept';
import CamBridgeEnglish from './photos/CamBridgeEnglish';
import SoftSkillDEVElopment from './photos/SoftSkillDEVElopment';



export const NavigationBar = () => {
  return (
    <Router>
    <div>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/SideBar">Gallery</a>
    </li>
  </ul>
  <h1>hennbiub</h1>
<Switch>
      
      <Route path="/SideBar">
        <SideBar/>
      </Route>
      <Route path="/Photo">
        <Photo/>
      </Route>
      <Route path="/Republic">
        <Republic/>
      </Route>
      <Route path="/CLanguageQuiz">
        <CLanguageQuiz/>
      </Route>
      <Route path="/BTechOreintationProgram2015">
        <BTechOreintationProgram2015/>
      </Route>
      <Route path="/Laboraties">
           <Laboraties/>
      </Route>
      <Route path="/MechanicalEnggDepartment">
           <MechanicalEnggDepartment/>
      </Route>
       <Route path="/GraduationDay2014">
            <GraduationDay2014/>
       </Route>
       <Route path="/OreintationProgramme2016">
            <OreintationProgramme2016/>
       </Route>
       <Route path="/IndustrialTourECEMechDept">
        <IndustrialTourECEMechDept />
      </Route>
      <Route path="/CamBridgeEnglish">
           <CamBridgeEnglish/>
      </Route>
      <Route path="/SoftSkillDEVElopment">
       <SoftSkillDEVElopment/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
};

export default NavigationBar;