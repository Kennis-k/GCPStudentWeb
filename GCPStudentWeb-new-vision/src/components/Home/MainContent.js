import React from 'react'
import CtaButton from './CtaButton';
import SmallHeading from './SmallHeading';
import blockchain from '../../image/12476380705.png';
import "./MainContent.css"

function MainContent() {
    return (
            <div className="MainContent">
                <div className="MainCon">
                    <div className="left">
                        <SmallHeading title={'Leading with simplicity and intelligence'} identifier={'Before'} />
                        <h1>
                            Developer Student Club (IVE) <span className='GradientText'><br /></span>
                        </h1>
                        <p>
                            By Google Developers
                        </p>
                        <div className="btns-con">
                            <CtaButton name={'discover more'} />
                        </div>
                    </div>
                    <div className="right">
                        <img src={blockchain} alt="" />
                    </div>
                </div>
            </div>
    );
}



export default MainContent;