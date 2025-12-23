import CustButton from "../components/CustButton";
import StyledInput from "../components/StyledInput";

export default function Create() {
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

            <StyledInput placeholder="Enter full name" label='Full Name' labStyle={{ width: '30%' }} req={true} asterisk='show'/>
            <StyledInput placeholder="Enter phone number" label='Phone number' labStyle={{ width: '30%' }} req={true} asterisk='show'/>
            <StyledInput placeholder="Enter email address" label='Email Address' labStyle={{ width: '30%' }} req={true} asterisk='show'/>
            <StyledInput placeholder="Enter password" label='Password' type="password" labStyle={{ width: '28%' }} req={true} asterisk='show'/>
            <StyledInput placeholder="Enter company name" label='Company name' labStyle={{ width: '32%' }} req={true} asterisk='show'/>

            <div style={{ margin: '1rem 0', fontFamily: 'Rubik, sans-serif', fontSize: '15px' }}>
                <span >Are you an Agency?<span style={{ color: 'red' }}>*</span></span>
                <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                    <label htmlFor="yes" style={labelStyle}>
                        <input type="radio" name="agency" style={radioStyle} id="yes" value="yes" />
                        Yes
                    </label>
                    <label htmlFor="no" style={labelStyle}>
                        <input type="radio" name="agency" style={radioStyle} id="no" value="no" />
                        No
                    </label>
                </div>
            </div>
            </div>

                <CustButton color='#6C25FF' style={{ width: '100%', margin: '1rem 0' }}>Create Account</CustButton>
        </div>
    )
}