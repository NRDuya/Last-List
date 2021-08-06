import axios from 'axios';
import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login(){
    const usernameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/users/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        })
        .then((res) => {
            if(res.data.success){
                localStorage.setItem("isLogged", true);
                history.push("/dashboard");
            }
            else{
                window.location.reload(false);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label>Username</label>
                    <input id="username" type="text" placeholder="Username" ref={usernameRef} required />
                </div>
                <div className='form-field'>
                    <label>Password</label>
                    <input id="password" type="text" placeholder="Password" ref={passwordRef} required />
                </div>

                <div id='login-options'>
                    <Link to='/signup'>
                        Register
                    </Link>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>

    );
}

export default Login;