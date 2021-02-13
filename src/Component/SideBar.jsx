import React from 'react';
import {ListGroup, Image} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import CLanguageQuiz from './photos/CLanguageQuiz';
import Photo from './photos/Photo';
import Republic from './photos/Republic';
import './side.css'; 
import BTechOreintationProgram2015 from './photos/BTechOreintationProgram2015';
import Laboraties from './photos/Laboraties';
import MechanicalEnggDepartment from './photos/MechanicalEnggDepartment';
import GraduationDay2014 from './photos/GraduationDay2014';
import OreintationProgramme2016 from './photos/OreintationProgramme2016';
import IndustrialTourECEMechDept from './photos/IndustrialTourECEMechDept';
import CamBridgeEnglish from './photos/CamBridgeEnglish';
import SoftSkillDEVElopment from './photos/SoftSkillDEVElopment';


const SideBar = () => {
    return (
      <Router>
        <div>
            <ListGroup className="sidebars">
          <ListGroup.Item className="anchor" action href="./Republic">
          Republic Day-2017
          </ListGroup.Item>
          <ListGroup.Item action href="./Photo">
          Republic Day-2016
          </ListGroup.Item>
          <ListGroup.Item action href="./CLanguageQuiz">
          C-Language Quiz
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          CSE Department Activities
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          EEE Department Activities
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          IT Department Activities
          </ListGroup.Item>
          <ListGroup.Item action href="./BTechOreintationProgram2015">
          B.Tech-Oreintation Program-2015
          </ListGroup.Item>
          <ListGroup.Item action href="./Laboraties">
          Laboraties
          </ListGroup.Item>
          <ListGroup.Item action href="./MechanicalEnggDepartment">
          Mechanical Engg Department
          </ListGroup.Item>
          <ListGroup.Item action href="./GraduationDay2014">
          Graduation Day-2014
          </ListGroup.Item>
          <ListGroup.Item action href="./OreintationProgramme2016">
          Oreintation Programme 2016
          </ListGroup.Item>
          <ListGroup.Item action href="/IndustrialTourECEMechDept">
          Industrial Tour,ECE & Mech Dept
          </ListGroup.Item>
          <ListGroup.Item action href="/CamBridgeEnglish">
          CamBridge English
          </ListGroup.Item>
          <ListGroup.Item action href="/SoftSkillDEVElopment">
          Soft Skill DEVElopment
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Faculty DEvelopment Program
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Civil Engg Department
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          National Confrence
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Tech Fest 2017
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Graduation Day-2017
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          College Campus
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Oreintation Program-2017
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Management At NSAKCET
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Inspection AICTE,JNTU & SBTET
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Meja Job Fair 2018
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Techno Vision 2018
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          JNTU Inspection 2018
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          SBTET Inspection 2018
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Two Days Workshop on Linux
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Oreintation Program 2018
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Yoga Session
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Appreciations
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Projectors
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Lecture Capturing System
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          MNT-LAB-LIB
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Competative Examination
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Career Counsiling
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Remedial coaching
          </ListGroup.Item> 
          <ListGroup.Item action href="#">
          Language Lab
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Bridge Course 
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          College Events
          </ListGroup.Item>
          <ListGroup.Item action href="#">
          Winrar
          </ListGroup.Item>
          </ListGroup>
          <Image src="Assest/CE01.jpg" width="350px" height="300px" className="image"></Image>
          <Image src="Assest/CE02.jpg" width="350px" height="300px" className="image"></Image>
          <Image src="Assest/CE03.jpg" width="350px" height="300px" className="image"></Image>
          <Image src="Assest/BC01.jpg" width="350px" height="300px" className="image"></Image>
          <Image src="Assest/BC02.jpg" width="350px" height="300px" className="image"></Image>
          <Image src="Assest/CAC06.jpg" width="350px" height="300px" className="image"></Image>
          <Image src="Assest/CAC03.jpg" width="350px" height="300px" className="image"></Image>
          <Image src="Assest/CAC04.jpg" width="350px" height="300px" className="image"></Image>
          <h1>bbbjsdstvgjvh dw</h1>
          jkyfyuvhnebyfygveehcytcghw
        <Switch>     
              <Route path="/photo">
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
        <IndustrialTourECEMechDept/>
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

export default SideBar;