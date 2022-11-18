const Button = (props) => {

    let {label,color,func}=props;
    return (
        <>
        <button style={{color:color}} 
        onClick={func}>
            {label}
        </button>
        </>
    )
}

export default Button;