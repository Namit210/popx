import CustButton from "../components/CustButton"
export default function Home() {

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', height:'100%'}}>
    <div style={{margin:'0.5rem 1rem'}}>

      <div style={{maxWidth:'80%'}}>
      <div className='heading'>Welcome to PopX</div>
      <p className='sub-heading'>Lorem
      ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      </div>
      <CustButton style={{width:'100%'}} color='#6C25FF'>Create Account</CustButton>
      <CustButton style={{width:'100%'}}>Already Registered? Login</CustButton>
      </div>
      </div>
  )
}