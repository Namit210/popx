import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustButton from "../components/CustButton";
import StyledInput from "../components/StyledInput";

export default function Create() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = formData.fullName.trim() !== '' && 
                        formData.phone.trim() !== '' && 
                        formData.email.trim() !== '' && 
                        formData.password.trim() !== '' && 
                        formData.company.trim() !== '' && 
                        formData.agency !== '';

    const handleSubmit = () => {
        if (isFormValid) {
            navigate('/settings', { state: { name: formData.fullName, email: formData.email } });
        }
    };

    const labelStyle = { 
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        margin:'0.2rem 0.3rem'
     }

     const radioStyle = { margin: '0 8px 0 0',
        accentColor: '#6C25FF',
        width: '24px',
        height: '24px',
        cursor: 'pointer' }

    return (
        <div style={{ padding: '2.3rem 1.5rem', justifyContent:'space-between', display:'flex', flexDirection:'column', height:'calc(100% - 3rem)' }}>
            <div>

            <div className="heading" style={{ width: '60%' }}>
                Create your PopX account
            </div>

            <StyledInput placeholder="Enter full name" label='Full Name' labStyle={{ width: '30%' }} req={true} asterisk='show' name="fullName" value={formData.fullName} onChange={handleChange} />
            <StyledInput placeholder="Enter phone number" label='Phone number' labStyle={{ width: '30%' }} req={true} asterisk='show' name="phone" value={formData.phone} onChange={handleChange} />
            <StyledInput placeholder="Enter email address" label='Email Address' labStyle={{ width: '30%' }} req={true} asterisk='show' name="email" value={formData.email} onChange={handleChange} />
            <StyledInput placeholder="Enter password" label='Password' type="password" labStyle={{ width: '28%' }} req={true} asterisk='show' name="password" value={formData.password} onChange={handleChange} />
            <StyledInput placeholder="Enter company name" label='Company name' labStyle={{ width: '32%' }} req={true} asterisk='show' name="company" value={formData.company} onChange={handleChange} />

            <div style={{ margin: '1rem 0', fontFamily: 'Rubik, sans-serif', fontSize: '15px' }}>
                <span >Are you an Agency?<span style={{ color: 'red' }}>*</span></span>
                <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                    <label htmlFor="yes" style={labelStyle}>
                        <input type="radio" name="agency" style={radioStyle} id="yes" value="yes" checked={formData.agency === 'yes'} onChange={handleChange} />
                        Yes
                    </label>
                    <label htmlFor="no" style={labelStyle}>
                        <input type="radio" name="agency" style={radioStyle} id="no" value="no" checked={formData.agency === 'no'} onChange={handleChange} />
                        No
                    </label>
                </div>
            </div>
            </div>

                <CustButton color={isFormValid ? '#6C25FF' : '#CBCBCB'} style={{ width: '100%', margin: '1rem 0', cursor: isFormValid ? 'pointer' : 'not-allowed' }} onClick={handleSubmit}>Create Account</CustButton>
        </div>
    )
}