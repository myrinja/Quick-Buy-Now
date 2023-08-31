import { useNavigate } from "react-router";
function Logout({setloggedin}){
    let navigate=useNavigate()
    setloggedin(false)
    navigate("/login")
}
export default Logout;