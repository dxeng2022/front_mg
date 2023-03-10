import './Login.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
        if(emailValid && pwValid) {
        setNotAllow(false);
        return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

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
    
    const onClickConfirmButton = () => {

        let details = {
            'username': email,
            'password': pw,
        };

        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        console.log(formBody)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: formBody,
        })
        .then(res => {
            console.log(1, res)
            const form = res.url.substring(res.url.lastIndexOf(":"));
            //eslint-disable-next-line
            const url = form.slice(form.indexOf("/"));
            if (res.status === 200) {
                navigate('/module');
            } 
            else {
                alert("???????????? ?????? ???????????????.");
            }
        })
    }
    
    
    return (
        <div className="login_contentWrap">

            <div className='login_tab'>??? ??? ???</div>

            <div className="login_inputTitle">?????????</div>
                <div className="login_inputWrap">
                    <input
                        className="login_input"
                        type="text"
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
            <div className="login_errorMessageWrap">
            {!emailValid && email.length > 0 && (
                <div>????????? ???????????? ??????????????????.</div>
            )}
            </div>

            <div className="login_inputTitle">
            ????????????
            </div>
            <div className="login_inputWrap">
            <input
                className="login_input"
                type="password"
                placeholder="??????, ??????, ???????????? ?????? 8??? ??????"
                value={pw}
                onChange={handlePw}
            />
            </div>
            <div className="login_errorMessageWrap">
            {!pwValid && pw.length > 0 && (
                <div>??????, ??????, ???????????? ?????? 8??? ?????? ??????????????????.</div>
            )}
            </div>

            <div className='login_find' onClick={()=>{ navigate('/findemail') }} >
                ??????????????? ???????????????????
            </div>
            
            <div className='login_buttons'>
                    <Button
                        onClick={onClickConfirmButton} 
                        disabled={notAllow}
                        className="login_Button"
                        type="submit" 
                        variant="contained"
                        sx={{
                            backgroundColor:'#4ec6e1', 
                            height: '4.5vh', 
                            width: '23vw', 
                            borderRadius:30,
                            fontSize: '1.8vw',
                            fontWeight: 600,
                            '&:hover': {backgroundColor: '#6ba3af'}}}>
                    ??? ??? ???
                    </Button>

                    <Button
                        onClick={()=>{ navigate('/Sign') }}
                        type="submit" 
                        variant="contained" 
                        sx={{
                            backgroundColor:'#7ccc46', 
                            height: '4.5vh', 
                            width: '23vw',
                            borderRadius:30,
                            fontSize: '1.8vw',
                            fontWeight: '600',
                            '&:hover': {backgroundColor: '#7c9a67'},
                            mt: '1.7vh'
                        }}>
                        ??? ??? ??? ???
                    </Button>
            </div>    
        </div>    
    )
}

export default Login;