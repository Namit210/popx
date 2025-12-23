import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustButton from "../components/CustButton";
import StyledInput from "../components/StyledInput";

export default function Login(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

    const handleLogin = () => {
        if (isFormValid) {
            navigate('/settings', { state: { name: formData.email.split('@')[0], email: formData.email } });
        }
    };

    return(
        <div style={{margin:'3rem 1.5rem'}}>

            <div style={{maxWidth:'80%'}} >

            <div className="heading">
                Signin to your PopX account
            </div>
            <p className="sub-heading" style={{marginBottom:'2rem'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            </div>
            <StyledInput placeholder="Enter email address" label='Email Address' labStyle={{width:'30%'}} name="email" value={formData.email} onChange={handleChange} />
            <StyledInput placeholder="Enter password" label='Password' type="password" labStyle={{width:'30%'}} name="password" value={formData.password} onChange={handleChange} />
            <CustButton color={isFormValid ? '#6C25FF' : '#CBCBCB'} style={{width:'100%', margin:'1rem 0', cursor: isFormValid ? 'pointer' : 'not-allowed'}} onClick={handleLogin}>Login</CustButton>
        </div>
    )
}