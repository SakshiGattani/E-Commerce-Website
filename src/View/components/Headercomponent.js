
export default function Headercomponent(){
    return(
        <div className="header-nav">
            <div className="header-left">
                <img src={require("../image/logo/logo.png")} />
            </div>
            <div className="header-mid">
            <ol>
                <li>Home</li>
                <li>Register</li>
                <li>Login</li>
                </ol>
            </div>
            <div className="header-right">
            <h1>header-right</h1>
            </div>
        </div>
    )
}
