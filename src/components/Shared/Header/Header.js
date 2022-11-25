import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const menuItems = <React.Fragment>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>

    </React.Fragment>

    console.log(user)

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl w-36 pr-0">
                        <img src={logo} alt="" srcSet="" />
                    </Link>
                    <h1 className='text-2xl font-bold'>RC Cars</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user 
                        ?
                            <Link onClick={logOut} className="btn btn-warning">LogOut</Link>
                        :
                            <Link to='/login' className="btn btn-warning">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;