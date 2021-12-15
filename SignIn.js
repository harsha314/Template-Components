import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = ({ user, setUser, users }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onEmail = (e) => {
        setEmail(document.getElementById('email').value);
    };
    const onPassword = (e) => {
        setPassword(document.getElementById('password').value);
    };
    const onShowPassword = (e) => {
        setShowPassword(showPassword ? false : true);
    };

    const signIn = (e) => {
        e.preventDefault();
        if (!email || !password) {
            // email or password cant be empty
            document.getElementById('error').innerText =
                'email or password cant be empty';
            setTimeout(() => {
                document.getElementById('error').innerText = '';
            }, 3000);
            // document.getElementById('error').value =
            //     'email or password cant be empty';
            return;
        }
        for (let i = 0; i < users.length; ++i) {
            let x = users[i];
            if (x.email === email && x.password === password) {
                setUser(x);
                return;
            }
        }
        document.getElementById('error').innerText = 'wrong credentials';
        setTimeout(() => {
            document.getElementById('error').innerText = '';
        }, 3000);
        return;
    };

    if (!user || !user.email) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        onChange={onEmail}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password1">
                        Password
                    </label>
                    <input
                        className="form-control"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        onChange={onPassword}
                    />
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="showpassword">
                        Show Password
                    </label>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="showpassword"
                        onClick={onShowPassword}
                    />
                    <div className="form-text" id="error"></div>
                </div>
                <div className="mb-3">
                    <input
                        className="btn btn-primary"
                        type="button"
                        value="Sign In"
                        onClick={signIn}
                    />
                </div>
            </form>
        </div>
    );
};

export default SignIn;
