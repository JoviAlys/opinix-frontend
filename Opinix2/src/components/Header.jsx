import { useNavigate } from "react-router-dom";
import "../css/Header.css";


function Header(){
    const navigate = useNavigate();
    return(
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>         
            
            <div className="titlebar">
                <h1>OPINIX</h1>
                <div className="ribbonbar">
                    <div className="poll-settings">
                        <button><p>Import Polls</p></button>
                        <button><p>Create Polls</p></button>
                        <button onClick={() => navigate("/home")}><p>Home</p></button>
                    </div>
                    <div className="user-settings">
                        <button><p>Profile</p></button>
                        <button><p>Settings</p></button>
                        <button onClick={() => navigate("/")}><p>Logout</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;