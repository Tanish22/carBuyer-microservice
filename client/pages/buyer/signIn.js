import React, {useState} from "react";
import axios from "axios";

const LoginBuyer = () => { 
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 

    /* the usestate hook will enable to track the user changes to the input fields via onChange handler which
       inturn takes in a callback thats comes with the useState hook (setName fn) & stores that value in a
       variable (name) */

    /* e.target represents a dom element value hence is used in the function */   

    const submitForm = async (e) => {
        try{
            e.preventDefault();

            const response = await axios.post('http://localhost:2222/api/buyers/signIn', {
                email, 
                password
            });

            console.log("from formSubmit", response.data);
        }

        catch(e){
            console.log('error : ', e);
        }
    }

     /* onChange is used to change the value of the value prop of input tag */
    return (
        <>    
            <form align="center" onSubmit={ submitForm }>
                <h2>Sign In</h2>

                <div> 
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <button className="btn btn-lg btn-info">send</button>
            </form>
        </>
    )
}

export default LoginBuyer;

