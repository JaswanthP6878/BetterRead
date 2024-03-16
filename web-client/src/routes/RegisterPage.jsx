import Navbar from "../components/NavBar"
import RegisterForm from "../components/Register"

function Register () {
    return (
        <div className="HomePage">
            <Navbar></Navbar>
            <div className = "LoginSpace">
                <RegisterForm></RegisterForm>
            </div>
        </div>
    )
}



export default Register