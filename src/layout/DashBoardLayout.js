import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-left">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard/mybookings'>My Bookings</Link></li>
                        <li><Link to='/dashboard/my-products'>My Products</Link></li>
                        <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                        <li><Link to='/dashboard/all-seller'>All Seller</Link></li>
                        
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default DashBoardLayout;