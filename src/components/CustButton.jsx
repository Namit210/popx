export default function CustButton({children, style,color}) {

    const buttonStyle ={
background: color || '#6C25FF4B',
      opacity: '1',
      borderRadius: '6px',
      color: color ? 'white': '#1D2226',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '450',
      cursor: 'pointer',
      border: 'none',
      fontFamily: 'Rubik, sans-serif',
      margin: '0.25rem 0',
      ...style
    }


  return (
    <button style={buttonStyle}>
      {children}
    </button>
  )
}