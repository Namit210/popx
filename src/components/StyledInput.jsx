export default function StyledInput({placeholder, style, type, label, labStyle, req, asterisk}) {

    const containerStyle = {
        position: 'relative',
        width: '100%',
        marginTop: '25px',
    };

    const labelStyle = {
        position: 'absolute',
        top: '-8px',
        left: '12px',
        backgroundColor: '#F7F8F9',
        
        fontSize: '13px',
        color: '#6C25FF',
        fontFamily: 'Rubik, sans-serif',
        zIndex: 1,
        ...labStyle
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '15px',
        borderRadius: '6px',
        border: '1px solid #CCCCCC',
        fontFamily: 'Rubik, sans-serif',
        boxSizing: 'border-box',
        ...style
    };

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}{asterisk
       && <span style={{ color: 'red' }}>*</span>}</label>}
      <input 
        type={type || 'text'}
        placeholder={placeholder || ''}
        style={inputStyle}
        required={req || false}
      />
    </div>
  )
}