import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_HOST from '../API_ENDPOINTS/API_HOST';
import API_ENDPOINTS from '../API_ENDPOINTS/API_ENDPOINTS';

const Login = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const submit = (e) => {
        if(email === ''){
            setEmailError('Invalid Email')
            return false;
        }
        if(password === ''){
            setPasswordError('Invalid Password')
            return false;
        }
        const postData = {
            "email" : email,
            "password" : password
        }
        let baseURL = API_HOST.baseUrl + API_ENDPOINTS.addEnquiry;
        const headers = {
            'Content-Type': 'text/plain'
        };
        axios.post(baseURL, postData, headers )
        .then((response) => {
            console.log(postData);
            navigate("/dashboard");
        });
        
    };
  return (
    <div className='middleForm'>
        <div className="middleFormWrp">
            <h1 className="heading text-center mb-4">Sign in</h1>
            <div className="form-group">
                <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <span>{emailError}</span>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <span>{passwordError}</span>
            </div>
            <div className="form-group mb-0">
                <button className="greenBtn fullWidth border-0 justify-content-center" onClick={submit}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login;