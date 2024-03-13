import { Button,Heading } from "@chakra-ui/react"
import "./Navbar.css"
function Navbar() {
    return (
        <>
        <div className = "Navbar">
            <div className= "NavbarItems">
                <Heading className="Brand">BetterReads</Heading>
                <div className="OtherItems">
                    <ul>
                        <li>
                            <Button>About Us</Button>
                        </li>
                        <li>
                            <Button>Contact Us</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar