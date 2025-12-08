import "./GeneralButton.css"
const GeneralButton = ({
  child,
  onClick,
  backgroundColor = "white",
  textColor = 'black',
  hoverBackgroundColor = "green",
  hoverTextColor = "purple"
}) => {
  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        border: "1px solid grey",
        "--hover-bg": hoverBackgroundColor,
        "--hover-color": hoverTextColor
      }}
      onClick={onClick} id="general_button">{child}</button>
  )
}

export default GeneralButton;