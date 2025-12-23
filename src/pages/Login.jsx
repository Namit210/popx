import CustButton from "../components/CustButton";
import StyledInput from "../components/StyledInput";

export default function Login(){
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
            <StyledInput placeholder="Enter email address" label='Email Address' labStyle={{width:'30%'}} />
            <StyledInput placeholder="Enter password" label='Password' type="password" labStyle={{width:'30%'}} />
            <CustButton color='#CBCBCB' style={{width:'100%', margin:'1rem 0'}}>Login</CustButton>
        </div>
    )
}