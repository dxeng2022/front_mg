// import './FindPw.css';
// import React, { useEffect, useState } from 'react'
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function FindPw() {

//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [birth, setBirth] = useState('');

//     const [nameValid, setNameValid] = useState(false);
//     const [phoneValid, setPhoneValid] = useState(false);
//     const [birthValid, setBirthValid] = useState(false);
//     const [notAllow, setNotAllow] = useState(true);

//     const [resUser, setResUser] = useState();

//     useEffect(() => {
//         if(nameValid && phoneValid && birthValid) {
//         setNotAllow(false);
//         return;
//         }
//         setNotAllow(true);
//     }, [nameValid, phoneValid, birthValid]);

//     const handleName = (e) => {
//         setName(e.target.value);
//         const regex = 
//         /^[가-힣]{2,4}$/;
//         if (regex.test(e.target.value)) {
//         setNameValid(true);
//         } else {
//         setNameValid(false);
//         }
//     };

//     const handlePhone = (e) => {
//         setPhone(e.target.value);
//         const regex = 
//         /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
//         if (regex.test(e.target.value)) {
//         setPhoneValid(true);
//         } else {
//         setPhoneValid(false);
//         }
//     };

//     const handleBirth = (e) => {
//         setBirth(e.target.value);
//         if (e.target.value) {
//         setBirthValid(true);
//         } else {
//         setBirthValid(false);
//         }
//     };

//     const onClickConfirmButton = () => {

//         const newBirth = birth.replace(/-/g, "")

//         let details = {
//             'name': name,
//             'phone1': phone,
//             'birth' : newBirth
//         };

//         fetch("http://192.168.0.157:9090" + "/find", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
//             },
//             body: JSON.stringify(details)
//         })
//                 .then(res => {
//                     console.log(1, res)
//                     if (res.status === 200) {
//                         return res.json();
//                     } else if (res.status === 204) {
//                         return null;
//                     }
//                 })
//                 .then(res => { // Catch는 여기서 오류가 나야 실행됨
//                     console.log("정상", res);
//                     if (res !== null) {
//                         setResUser(res);
//                         alert('회원님의 이메일은은 + {setResUser} + 입니다. ');
//                     } else {
//                         alert(' 입력하신 정보와 일치한 Email이 없습니다. ');
//                     }})
//     }

//     return (
//         <div className='findpw_box'>
            
//             <div className='findpw_tab'>
//                 <div onClick={()=>{ navigate('/findemail') }}>이메일 찾기</div>
//                 <div className='findpw_tabpw'>비밀번호 찾기</div>
//             </div>

//             {/* <div className="findpw_inputName">이름</div>
//             <div className="findpw_inputbox">
//                 <input
//                     className="findpw_input"
//                     type="text"
//                     placeholder=" 3~4 글자 이름을 입력해주세요. "
//                     value={name}
//                     onChange={handleName} />
//             </div>
//             <div className="findpw_errorMessageWrap">
//             {!nameValid && name.length > 0 && (
//                 <div>올바른 이름을 입력해주세요.</div>
//             )}
//             </div>

//             <div className="findpw_inputName">전화번호</div>
//             <div className="findpw_inputbox">
//                 <input
//                     className="findpw_input"
//                     type="text"
//                     placeholder=" '-' 을 제외한 10~11자리 입력해주세요. "
//                     value={phone}
//                     onChange={handlePhone} />
//             </div>
//             <div className="findpw_errorMessageWrap">
//             {!phoneValid && phone.length > 0 && (
//                 <div>올바른 전화번호를 입력해주세요.</div>
//             )}
//             </div>

//             <div className="findpw_inputName">생년월일</div>
//             <div className="findpw_inputbox">
//                 <input
//                     className="findpw_input"
//                     type="date"
//                     value={birth}
//                     min="1950-01-01"
//                     max="2002-12-31"
//                     onChange={handleBirth} />
//             </div>

//             <div className="findpw_buttons">
//                 <Button
//                     onClick={()=>{ navigate('/') }} 
//                     className="cancelButton"
//                     type="submit" 
//                     variant="contained"
//                     sx={{
//                         backgroundColor:'#a8a8a8', 
//                         height: '4.5vh', 
//                         width: '9vw', 
//                         borderRadius:30,
//                         fontSize: '1.8vw',
//                         fontWeight: 600,
//                         '&:hover': {backgroundColor: '#7e7e7e'}}}>
//                 취 소
//                 </Button>

//                 <Button
//                     onClick={onClickConfirmButton}
//                     disabled={notAllow}
//                     className="nextButton"
//                     type="submit" 
//                     variant="contained" 
//                     sx={{
//                         backgroundColor:'#7ccc46', 
//                         height: '4.5vh', 
//                         width: '9vw',
//                         borderRadius:30,
//                         fontSize: '1.8vw',
//                         fontWeight: '600',
//                         '&:hover': {backgroundColor: '#7c9a67'}
//                     }}>
//                     다 음
//                 </Button>
//             </div> */}
//         </div>
//     );
// }

// export default FindPw;