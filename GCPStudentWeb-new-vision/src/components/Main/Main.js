import React, {useState} from "react";
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
                    2021-2022 Team Member
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                     2020-2021 Team Member
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
                    <MainContent2 />
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <MainContent />
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