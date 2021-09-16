import React, {Fragment, useState} from "react";
import axios from "axios";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const h2Color = {
        color: "white",
        align: "center"
    };

    const formFontColor = {color: "white"};

    const submit = (e) => {
        e.preventDefault();

        try {
            const response = axios.post("/api/buyers/signIn", {
                email, 
                password
            })

            console.log(response.data);
        }
        catch(e) {
            console.log("error", e);
        }
    }

    return (
        <Fragment>
            <div>
                <h2 style={h2Color}>Sign In</h2>

                <form style={formFontColor} align="center" onSubmit={submit}>

                    <div>
                        <label>Email :</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label>Password :</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button>Send</button>

                </form>
            </div> 
        </Fragment>          
    )
}

export default Signin;