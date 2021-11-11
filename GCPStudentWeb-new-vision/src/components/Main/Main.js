import React, {useState} from "react";
import {Container} from "reactstrap";
import {Row, Col} from "reactstrap";
import image20 from '../../ICON/AlexCheng.png'
import image2 from '../../ICON/AlexLuk.png'
import image3 from '../../ICON/AnsonLam.png'
import image4 from '../../ICON/Chan man Fung.png'
import image5 from '../../ICON/CHAN Wai Lam.png'
import image6 from '../../ICON/ChoiCheukLam.png'
import image7 from '../../ICON/FokWaiYin.png'
import image8 from '../../ICON/HugoCheng.png'
import image9 from '../../ICON/HuiKaiHin.png'
import image10 from '../../ICON/JackChan.png'
import image11 from '../../ICON/JackyHo.png'
import image12 from '../../ICON/LawMeiChing.png'
import image13 from '../../ICON/MakYeungFung.png'
import image14 from '../../ICON/PunChoYan.png'
import image15 from '../../ICON/RonaldLeung.png'
import image16 from '../../ICON/SamLam.png'
import image17 from '../../ICON/TIAN Li.png'
import image18 from '../../ICON/TsuiKaYan.png'
import image19 from '../../ICON/WONG Chiu Ching.png'
import './Main.css';
import MainContent from "./MainContent";
import MainContent2 from "./MainContent2";

function Main() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="MemberCon">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    2019-2020 Team Member
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                     2021-2022 Team Member
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    2022-2023 Team Member
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <MainContent />
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <MainContent2 />
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >

                </div>
            </div>
        </div>
    );
}

export default Main;