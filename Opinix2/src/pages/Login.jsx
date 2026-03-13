import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login(){
    const navigate = useNavigate();
    return(
        <>
        <div className="log-page">
        <h1 className="title">OPINIX</h1>
        <div className="log-sign">
            <button onClick={() => navigate("/home")}>Login</button>
            <button>Register</button>
        </div>
        <button className = "guest" onClick={() => navigate("/home")}>Go as guest</button>
        </div>
        </>
    )
}

export default Login;