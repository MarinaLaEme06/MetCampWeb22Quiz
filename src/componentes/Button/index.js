function Button({text, onClick})
{
    return <button  className="button is-success is-light m-2" onClick={onClick}>{text}</button>
}

export default Button