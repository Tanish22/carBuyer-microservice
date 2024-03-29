import React, {useState} from "react";
import axios from "axios";

const CreateBuyer = () => {
    const [ name, setName ] = useState(''); 
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 

    const submit = async (e) => {
        try{
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
        <form align="center" onSubmit={submit}>
            <h2>Sign Up</h2>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>

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
    )
}

export default CreateBuyer;

