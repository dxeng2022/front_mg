import './SignUp.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState }  from 'react';

function SignUp() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pw_confirm, setPw_confirm] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganozation] = useState('');
  const [job, setJob] = useState('');
  const [birth, setBirth] = useState('');
  const [sex, setSex] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pw_confirmValid, setPw_confirmValid] = useState(false);
  // const [authCodeValid, setauthCodeValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [organizationValid, setOrganizationValid] = useState(false);
  const [jobValid, setJobValid] = useState(false);
  const [birthValid, setBirthValid] = useState(false);
  const [sexValid, setSexValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);
  const [confirm, setConfirm] = useState(true);
  const [check, setCheck] = useState();
  const [auth, setAuth] = useState(true);
  const [authRead, setAuthRead] = useState();
  const [complete, setComplete] = useState(true);

  useEffect(() => {
    if(notAllow && confirm && auth && pwValid && pw_confirmValid && nameValid && phoneValid && birthValid && sexValid && organizationValid && jobValid) {
    setComplete(false);
    return;
    }
    setComplete(true);
}, [notAllow, confirm, auth, pwValid, pw_confirmValid, nameValid, phoneValid, birthValid, sexValid, organizationValid, jobValid]);

  useEffect(() => {
    if(emailValid === true) {
    setNotAllow(false);
    return;
    }
    setNotAllow(true);
  }, [emailValid]);

  useEffect(() => {
    if(pw_confirm === pw) {
    setPw_confirmValid(true);
    } else {
    setPw_confirmValid(false);
    }
    // console.log(pw_confirm)
  }, [pw_confirm, pw])

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = 
    //eslint-disable-next-line
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
    setEmailValid(true);
    } else {
    setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
    // if (e.target.value) {
    setPwValid(true);
    } else {
    setPwValid(false);
    }
  };

  const handlePw_confirm = (e) => {
    setPw_confirm(e.target.value);
    // if ((e.target.value) === pw) {
    //   // if (Boolean((e.target.value) === pw) && setPwValid )
    // setPw_confirmValid(true);
    // } else {
    // setPw_confirmValid(false);
    // }
  };

  const handleAuthCode = (e) => {
    setAuthCode(e.target.value);
  }

  // const handleAuthCode = (e) => {
  //   setAuthCode(e.target.value);
  //   if (e.target.value) {
  //   setauthCodeValid(true);
  //   } else {
  //   setauthCodeValid(false);
  //   }
  // };

  const handleName = (e) => {
    setName(e.target.value);
    const regex = 
    /^[???-???a-zA-Z]{2,20}$/; 
    if (regex.test(e.target.value)) {
    setNameValid(true);
    } else {
    setNameValid(false);
    }
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    const regex = 
    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    if (regex.test(e.target.value)) {
    setPhoneValid(true);
    } else {
    setPhoneValid(false);
    }
  };

  const handleSex = (e) => {
    setSex(e.target.value);
    if (e.target.value) {
    setSexValid(true);
    } else {
    setSexValid(false);
    }
  };

  const handleBirth = (e) => {
    setBirth(e.target.value);
    if (e.target.value) {
    setBirthValid(true);
    } else {
    setBirthValid(false);
    }
  };

  const handleOrganization = (e) => {
    setOrganozation(e.target.value);
    const regex = 
    //eslint-disable-next-line
    /^[???-???a-zA-Z]{2,10}$/; 
    if (regex.test(e.target.value)) {
    setOrganizationValid(true);
    } else {
    setOrganizationValid(false);
    }
  };

  const handleJob = (e) => {
    setJob(e.target.value);
    const regex = 
    //eslint-disable-next-line
    /^[???-???a-zA-Z]{2,10}$/; 
    if (regex.test(e.target.value)) {
    setJobValid(true);
    } else {
    setJobValid(false);
    }
  };

  const checkButton = () => {

    let details = {
        'username': email,
    };

    fetch("/check-dupl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(details)
    })
        .then(res => {
          console.log(1, res)
          if (res.status === 200) {
            alert('?????? ?????? ??????????????????.\n?????? ???????????? ??????????????????.');
          } 
          else {
            alert("?????? ????????? ??????????????????.\n??????????????? ?????? ????????? ??????????????????.");
            setCheck(true);
            setConfirm(false);
            setNotAllow(true);
          }
        })
  }

  const confirmButton = () => {

    let details = {
        'username': email,
    };

    fetch("/signup-auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(details)
    })
        .then(res => {
          console.log(1, res)
          if (res.status === 200) {
            alert('???????????? ???????????? ??????????????? ?????????????????????.');
            setAuth(false);
          }
          else {
            alert("ContactUs??? ??????????????????.");
          }
        })
  }

  const authButton = () => {

    let details = {
        'authCode': authCode,
    };
    
    fetch("/signup-authcheck", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(details)
    })
        .then(res => {
          console.log(1, res)
          if (res.status === 200) {
            alert('????????? ????????? ?????????????????????.');
            setAuthRead(true);
            setAuth(true);
            setConfirm(true);
          } 
          else {
            alert("????????? ??????????????? ??????????????????.");
          }
        })
  }

  const signUpButton = () => {

    const newBirth = birth.replace(/-/g, "")

    let details = {
      'username': email,
      'password' : pw,
      'name': name,
      'gender' : sex,
      'organization' :organization,
      'job' : job,
      'phone': phone,
      'birth' : newBirth
    };
    
    fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(details)
    })
        .then(res => {
          console.log(1, res)
          //eslint-disable-next-line
          if (res.status === 201) {
            navigate('/sign/signup/done');
          } 
          else {
            alert("Contact Us??? ??????????????????.");
          }
        })
  }


  return (
    <div className="signup_box">

      <div className='signup_main'>

        <div className='signup_email'>

          <div className="signup_email_check">

            <div className="signup_email_check_inputName">?????????</div>
              <div className='signup_email_check_error'>
                <div className="signup_inputbox">
                  <input
                    readOnly = {check}
                    className="signup_input"
                    type="text"
                    placeholder=" test@gmail.com "
                    value={email}
                    onChange={handleEmail}
                    autoFocus
                    />
                </div>
                <div className="signup_errorMessageWrap">
                {!emailValid && email.length > 0 && (
                    <div>????????? ???????????? ??????????????????.</div>
                )}
                </div>
              </div>

              <Button
                disabled={notAllow}
                onClick={checkButton}
                type="submit" 
                variant="contained"
                sx={{
                    backgroundColor:'#7ccc46',
                    whiteSpace: 'nowrap',
                    height: '4.5vh', 
                    width: '6.4vw', 
                    borderRadius:30,
                    fontSize: '1vw',
                    fontWeight: 600,
                    ml: '1vw',
                    '&:hover': {backgroundColor: '#7c9a67'}}}>
                ????????????
              </Button>

          </div>

          <div className="signup_email_confirm">

            <div className="signup_email_confirm_inputName">????????? ??????</div>
              <div className="signup_inputbox">
                <input
                  readOnly = {authRead}
                  value={authCode}
                  onChange={handleAuthCode}
                  className="signup_input"
                  type="text"
                  placeholder=" ???????????? ?????? "
                  />
              </div>

              <Button
                disabled={confirm}
                onClick={confirmButton}
                type="submit" 
                variant="contained"
                sx={{
                    backgroundColor:'#7ccc46', 
                    whiteSpace: 'nowrap',
                    height: '4.5vh', 
                    width: '6.4vw', 
                    borderRadius:30,
                    fontSize: '1vw',
                    fontWeight: 600,
                    ml: '1vw',
                    '&:hover': {backgroundColor: '#7c9a67'}}}>
                ????????????
              </Button>
              <Button
                disabled={auth}
                onClick={authButton}
                type="submit" 
                variant="contained"
                sx={{
                    backgroundColor:'#7ccc46', 
                    height: '4.5vh', 
                    width: '4vw', 
                    borderRadius:30,
                    fontSize: '1vw',
                    fontWeight: 600,
                    ml: '1vw',
                    '&:hover': {backgroundColor: '#7c9a67'}}}>
                ??????
              </Button>

            </div>

      </div>
        
        <div className='signup_pw'>

          <div className="signup_pw_first">
            
            <div className="signup_pw_first_inputName">????????????</div>
              <div className='signup_pw_first_error'>
                <div className="signup_inputbox">
                  <form>
                    <input
                        className="signup_input"
                        type="password"
                        placeholder=" ??????,??????,??????????????? ?????? 8????????? "
                        value={pw}
                        onChange={handlePw}
                        autoComplete="off"
                        />
                  </form>
                </div>
                <div className="signup_errorMessageWrap">
                {!pwValid && pw.length > 0 && (
                    <div>??????, ??????, ???????????? ?????? 8??? ?????? ??????????????????.</div>
                )}
                </div>
              </div>
          </div>


          <div className="signup_pw_second">
            <div className="signup_pw_second_inputName">???????????? ??????</div>
            <div className="signup_pw_second_error">
              <div className="signup_inputbox">
                <form>
                  <input
                      className="signup_input"
                      type="password"
                      value={pw_confirm}
                      onChange={handlePw_confirm}
                      placeholder=" ??????????????? ?????? ??? ??????????????????. "
                      autoComplete="off"
                      />
                </form>
              </div>
              <div className="signup_errorMessageWrap">
              {!pw_confirmValid && pw_confirm.length > 0 && (
                  <div> ??? ??????????????? ????????? ??????????????????. </div>
              )}
              </div>
            </div>  
          </div>

        </div>

      </div>




      <div className='signup_sub'>

        <div className='signup_sub1'>
          <div className="signup_inputName">??????</div>
            <div className="signup_inputbox">
              <input
                className="signup_input"
                type="text"
                placeholder=" 2?????? ?????? ??????????????????. "
                value={name}
                onChange={handleName} 
                />
            </div>
            <div className="signup_errorMessageWrap">
            {!nameValid && name.length > 0 && (
                <div>????????? ????????? ??????????????????.</div>
            )}
            </div>

            <div className="signup_inputName">??????</div>
            <div className="signup_inputbox">
              <select
                className="signup_input"
                value={sex}
                onChange={handleSex}
                >
                <option value="" selected disabled hidden> ??????????????????. </option>
                <option value="M"> ?????? </option>
                <option value="F"> ?????? </option>
              </select>    
            </div>

            <div className="signup_inputName">??????</div>
            <div className="signup_inputbox">
              <input
                  className="signup_input"
                  type="text"
                  placeholder=" ??????, ??????, ?????? ??? "
                  value={organization}
                  onChange={handleOrganization}
                  />
            </div>
            <div className="signup_errorMessageWrap">
            {!organizationValid && organization.length > 0 && (
                <div>????????? ????????? ??????????????????.</div>
            )}
            </div>
          </div>


          <div className='signup_sub2'>
            <div className="signup_inputName">????????????</div>
            <div className="signup_inputbox">
              <input
                  className="signup_input"
                  type="text"
                  placeholder=" '-' ??? ????????? 10~11?????? ??????????????????. "
                  value={phone}
                  onChange={handlePhone}
                  />
            </div>
            <div className="signup_errorMessageWrap">
            {!phoneValid && phone.length > 0 && (
                <div>????????? ??????????????? ??????????????????.</div>
            )}
            </div>

            <div className="signup_inputName">????????????</div>
            <div className="signup_inputbox">
              <input
                required
                className="signup_input"
                type="date"
                data-placeholder=" ?????? ????????? ??????????????????. "
                min="1950-01-01"
                max="2002-12-31"
                value={birth}
                onChange={handleBirth}
                />
            </div>

            <div className="signup_inputName">??????</div>
            <div className="signup_inputbox">
              <input
                  className="signup_input"
                  type="text"
                  placeholder=" ??????, ??????, ?????? ?????? "
                  value={job}
                  onChange={handleJob}
                  />
            </div>
            <div className="signup_errorMessageWrap">
            {!jobValid && job.length > 0 && (
                <div>????????? ????????? ??????????????????.</div>
            )}
            </div>
          </div>
      </div>


      <div className="signup_buttons">
        <Button
            onClick={()=>{ navigate(-1) }} 
            type="submit" 
            variant="contained"
            sx={{
                backgroundColor:'#a8a8a8', 
                height: '4.5vh', 
                width: '9vw', 
                borderRadius:30,
                fontSize: '1.5vw',
                fontWeight: 600,
                '&:hover': {backgroundColor: '#7e7e7e'}}}>
        ??? ???
        </Button>

        <Button
          disabled= {complete}
          onClick={signUpButton}
          type="submit" 
          variant="contained" 
          sx={{
              backgroundColor:'#7ccc46', 
              height: '4.5vh', 
              width: '9vw',
              borderRadius:30,
              fontSize: '1.5vw',
              fontWeight: '600',
              '&:hover': {backgroundColor: '#7c9a67'}
          }}>
          ??? ???
        </Button>
      </div>
    </div>
  )
}

export default SignUp;