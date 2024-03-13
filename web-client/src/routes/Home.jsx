import Navbar from "../components/NavBar"
import Login from "../components/Login"

function Home () {
    return (
        <div className="HomePage">
            <Navbar></Navbar>
            <div className = "LoginSpace">
                <Login></Login>
            </div>
        </div>
    )
}



export default Home