import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignUp = ({ user, users, setUsers, isAuthenticated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const onName = (e) => {
        setName(document.getElementById('name').value);
    };
    const onEmail = (e) => {
        setEmail(document.getElementById('email').value);
    };
    const onPassword1 = (e) => {
        setPassword1(e.target.value);
        document.getElementById('passwordmatch').innerText =
            e.target.value == password2 ? '' : 'Passwords 1 dont match';
    };

    const onPassword2 = function (e) {
        // setPassword2(document.getElementById('password2').value);
        setPassword2(e.target.value);
        document.getElementById('passwordmatch').innerText =
            password1 == e.target.value ? '' : 'Passwords 2 dont match';
    };
    const onShowPassword = (e) => {
        setShowPassword(showPassword ? false : true);
    };

    const signUp = (e) => {
        e.preventDefault();
        if (!email || !password1) {
            // email or password cant be empty
            document.getElementById('passwordmatch').innerText =
                'email or password cant be empty';

            return;
        }
        if (password1 !== password2) {
            // password don't match
            return;
        }
        for (let i = 0; i < users.length; ++i) {
            let x = users[i];
            if (x.email === email) {
                // email already used
                document.getElementById('passwordmatch').innerText =
                    'email already used';
                setTimeout(() => {
                    document.getElementById('passwordmatch').innerText = '';
                }, 3000);
                return;
            }
        }
        setSignUpSuccess(true);
        setUsers([...users, { name, email, password: password1 }]);
    };

    if (isAuthenticated(user)) {
        return <Redirect to="/" />;
    }

    if (signUpSuccess) {
        return <Redirect to="/signin" />;
    }

    return (
        <div>
            <h1 className="text-center">Sign Up</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        onChange={onName}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        onChange={onEmail}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password1">Password</label>
                    <input
                        className="form-control"
                        type={showPassword ? 'text' : 'password'}
                        id="password1"
                        onChange={onPassword1}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password2">Re-enter Password</label>
                    <input
                        className="form-control"
                        type={showPassword ? 'text' : 'password'}
                        id="password2"
                        onChange={onPassword2}
                    />
                    <div className="form-text" id="passwordmatch">
                        Hello
                    </div>
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
                </div>
                <div className="mb-3">
                    <input
                        className="btn btn-primary"
                        type="button"
                        value="Sign Up"
                        onClick={signUp}
                    />
                </div>
            </form>
        </div>
    );
};

export default SignUp;
