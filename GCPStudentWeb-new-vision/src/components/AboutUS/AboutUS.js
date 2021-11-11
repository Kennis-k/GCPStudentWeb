import React from "react";
// Components
import "./AboutUS.css";
import {Carousel} from "react-bootstrap";
import image1 from '../../image/logo_bg.png';
import image2 from  '../../image/cloud.png'




const AboutUS = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
            />
            <Carousel.Caption >
                <div className="leftContent">
                    <h3>Who We are?</h3>
                    <p>We are Developer Student Clubs(DSCs) in Vocational Training Council Hong Kong. DSCs are
                        university based community groups powered by Google Developer, for students interested in Google
                        developer technologies. Students from all undergraduate or graduate programs with an interest in
                        growing as a developer are welcome. By joining a DSC, students grow their knowledge in a
                        peer-to-peer learning environment and build solutions for local businesses and their
                        community.</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
            />
            <Carousel.Caption>
                <div className="SecondContent">
                    <h3>What we do?</h3>
                    <p>We are aiming at meeting students on campus interested in developer technologies, including those with diverse backgrounds and different majors. By providing a variety of events and workshops, we pormote and teach different cutting-edge technology through hands-on mini projects to students.</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>



);


export default AboutUS;