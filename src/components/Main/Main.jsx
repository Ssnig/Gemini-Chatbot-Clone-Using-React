import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Kyawmini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Welcome Dev...</span></p>
                    <p>How can I help you today ?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>
                            Suggest Beautiful place to see on upcoming roadtrip
                        </p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Briefly Summerize this concept: Urban Planning
                        </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Brainstorm team bonding activities for our work retreat
                        </p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Improve readability of following code
                        </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' name="" id="" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                        
                    </div>
                    <p className="bottom-info">
                            Kyawmini may display inaccurate info , including about people ,so double-check it's responses. Your privacy and Gemini Apps
                        </p>
                </div>
            </div>

        </div>
    )
}

export default Main