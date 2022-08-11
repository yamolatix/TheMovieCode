import React from "react";
import "./enter.css"

const Enter = () => {
    
    return (
        <div className="initial_enter">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label for="chk" aria-hidden="true">THE MOVIE CODE</label>
                        <input type="text" name="txt" placeholder="Username" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <button className="but_enter">Register</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="text" name="txt" placeholder="Username" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <button className="but_enter">Login </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Enter;