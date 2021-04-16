import React from 'react';
import { Link } from '@reach/router';


const AdminLogin = () => {

    return (
        <div>
            <h1>Login Here</h1>
            <Link to="/dashboard">View Appointment Dashboard</Link>
        </div>

    )
}

export default AdminLogin;