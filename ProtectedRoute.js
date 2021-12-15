import {} from 'react';

import { Redirect, Route } from 'react-router-dom';

// using router v5

const ProtectedRoute = ({ user, to, ...props }) => {
    if (!user || !user.email) {
        return (
            <Route to={to}>
                <Redirect to="/login" />
            </Route>
        );
    }

    return (
        <Route to={to} {...props}>
            {props.children}
        </Route>
    );
};

export default ProtectedRoute;
