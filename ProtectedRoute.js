import {} from 'react';

import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ user, to, ...props }) => {
    if (!user.isAuthenticated) {
        return (
            <Route to={to}>
                <Redirect to="/login" />
            </Route>
        );
    }

    return <Route to={user} {...props}></Route>;
};

export default ProtectedRoute;
