import React from "react";
// Components
import "./News.css";
import image1 from '../../image/gift.png';
import { CardBody } from 'reactstrap';
import Card from "react-bootstrap/Card";


const News = () => (

        <div className="contact">
            <div
                className="contactLeft"
                style={{ backgroundImage: `url(${image1})` }}
            ></div>
            <div className="contactRight">
                <h1> Taking Your GDG Gift</h1>
                <h6>If you join GDG online talk you can get a gift<br/>

                    Date: 28 Oct 2020<br/>
                    Time: 0830-1530<br/>
                    Venue: 3/F staff office,LWL<br/>
                    Abstract: ...</h6>
                <p>* If you get a luckydraw gift, please tell us your name of the gift. <br />You can find in GDG channel: <a href="https://www.youtube.com/watch?v=YLOxkSvIu2s&ab_channel=GDGCloudHK">Here is GDG channel</a></p>



            </div>
        </div>
)
;

export default News;