import React, {Fragment, useState} from "react";
import axios from "axios";

const CreateBuyer = () => {
    const [ name, setName ] = useState(''); 
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 

    const h1Color = {
        color: "white",
        align: "center"
    };

    const formFontColor = {color: "white"};

    const submit = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post('/api/buyers/signUp', {
                name,
                email, 
                password
            });
                                                
            console.log(response.data);
        }

        catch(e){
            console.log('error : ', e);
        }
    }

    return (
        <Fragment>
            <div>
                <h1 style={h1Color} align="center">Welcome to Car Buyer</h1>

                <form style={formFontColor} align="left" onSubmit={submit}>            

                    <h2>Sign Up</h2>
                    <div>
                        <label>Name : </label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div> 
                        <label>Email : </label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label>Password : </label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button>send</button>
                </form>
            </div>
            
        </Fragment>        
    )
}

export default CreateBuyer;

