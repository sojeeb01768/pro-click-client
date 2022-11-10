import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

const {user, loading} = useContext(AuthContext)
const location = useLocation();

    if(loading){
        return <h3>Loading...</h3>
    }

    if(!user){
        return <Navigate state={{from:location}} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;