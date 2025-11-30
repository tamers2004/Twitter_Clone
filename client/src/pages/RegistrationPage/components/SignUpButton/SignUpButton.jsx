import "./SignUpButton.css"
const SignUpButton = ({ child, onClick }) => {
  return (
    <button onClick={onClick} id="sign_up_button">{child}</button>
  )
}

export default SignUpButton