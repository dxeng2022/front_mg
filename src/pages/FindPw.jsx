import './FindPw.css';
import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FindPw() {

    const navigate = useNavigate();


    return (
        <div className='findpw_box'>
            
            <div className='findpw_tab'>
                <div onClick={()=>{ navigate('/findemail') }}>이메일 찾기</div>
                <div className='findpw_tabpw'>비밀번호 찾기</div>
            </div>


            <div className="findpw_inputName">이메일</div>
            <div className="findpw_inputbox">
                <input
                    className="findpw_input"
                    type="text"
                    placeholder=" test@gmail.com "/>
            </div>

            <div className="findpw_inputName">이름</div>
            <div className="findpw_inputbox">
                <input
                    className="findpw_input"
                    type="text"
                    placeholder=" 3~4 글자 이름을 입력해주세요. "/>
            </div>

            <div className="findpw_inputName">전화번호</div>
            <div className="findpw_inputbox">
                <input
                    className="findpw_input"
                    type="text"
                    placeholder=" '-' 을 제외한 10~11자리 입력해주세요. " />
            </div>

            <div className="findpw_inputName">생년월일</div>
            <div className="findpw_inputbox">
                <input
                    className="findpw_input"
                    type="date"
                    min="1950-01-01"
                    max="2002-12-31" />
            </div>


            <div className="findpw_buttons">
                <Button
                    onClick={()=>{ navigate('/') }} 
                    className="cancelButton"
                    type="submit" 
                    variant="contained"
                    sx={{
                        backgroundColor:'#a8a8a8', 
                        height: '4.5vh', 
                        width: '9vw', 
                        borderRadius:30,
                        fontSize: '1.8vw',
                        fontWeight: 600,
                        '&:hover': {backgroundColor: '#7e7e7e'}}}>
                취 소
                </Button>

                <Button
                    className="nextButton"
                    type="submit" 
                    variant="contained" 
                    sx={{
                        backgroundColor:'#7ccc46', 
                        height: '4.5vh', 
                        width: '9vw',
                        borderRadius:30,
                        fontSize: '1.8vw',
                        fontWeight: '600',
                        '&:hover': {backgroundColor: '#7c9a67'}
                    }}>
                    다 음
                </Button>
            </div>
        </div>
    );
}

export default FindPw;