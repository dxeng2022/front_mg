import React from 'react';
import { Routes, Route } from "react-router-dom";
// import SignPolicy from "./SignPolicy.jsx";

function Sign() {

    return (
        <>
            <div className="sign_box">
                <div className="sign_title">
                    설계정보 디지털 변환 플랫폼
                    <div className='sign_subtitle'>회원가입</div>
                </div>

                <Routes>
                    {/* <Route path="/" element={<SignPolicy />} /> */}
                </Routes>

            </div>
        </>
    )
}

export default Sign;