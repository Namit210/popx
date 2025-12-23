import { useLocation } from 'react-router-dom';
import profileImg from '../assets/Ellipse 114.png';
import camera from '../assets/Group 1585.png';

export default function Settings(){
    const location = useLocation();
    const { name, email } = location.state || { name: 'User', email: 'user@email.com' };

    const titleStyle={
        padding:'1.5rem 1rem',
        backgroundColor:'white', fontSize:'18px',
        boxShadow: '0px 3px 6px #00000007',
        fontWeight:'regular',
        color:'#1D2226'
        }

    const imgContainerStyle={
        position: 'relative',
        width: '76px',
        height: '76px',
    }

    const imgStyle={
        width:'76px',
        height:'76px',
        borderRadius:'50%',
        background: 'transparent'
    }

    const cameraIconStyle={
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '21px',
        height: '23px',
        background:'transparent',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    }

    return(
        <div>
        <div style={titleStyle}>Account Settings</div>
        <div style={{padding:'1rem'}}>
        
        <div style={{display:'flex',gap:'1rem', margin:'0.9rem 0',}}>
            <div style={imgContainerStyle}>
                <img src={profileImg} alt="" style={imgStyle}/>
                <div style={cameraIconStyle}>
                <img src={camera}/>
                    
                </div>
            </div>
            <div style={{lineHeight:'19px'}}>
                <div style={{fontSize:'15px', textTransform:'capitalize', color:'#1D2226', fontWeight:'500'}}>{name}</div>
                <div style={{fontSize:'14px', color:'#1D2226'}}>{email}</div>
            </div>
        </div>
        <p style={{fontSize:'14px', lineHeight:'22px', color:'#1D2226'}}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        </div>
        
        </div>
    )

}
