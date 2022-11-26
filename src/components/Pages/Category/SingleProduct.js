import React, { useState } from 'react';
import { FaCheckSquare } from "react-icons/fa";
import BookingModal from './BookingModal';

const SingleProduct = ({ product }) => {
    const { name, img, location, resale_price, original_price, years_of_use, posted_time, seller_name, isVerifyed } = product

    const [modalData, setModalData] = useState(null)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="product" className='h-64'/></figure>
            <div className="ml-4 mt-4 ">
                <h2 className="card-title font-bold my-4">{name}</h2>
                <div className='flex'>
                    <p className='text-left font-semibold text-xl'>Seller Name: {seller_name}</p>
                    {
                        isVerifyed === 'true'
                        ? <FaCheckSquare className='align-center ml-2 mt-2 text-blue-600'></FaCheckSquare>
                        : <></>
                    }
                </div>
                <p className='text-left text-lg'>Location: {location}</p>
                <p className='text-left text-lg'>Resale Price: {resale_price}$</p>
                <p className='text-left text-lg'>Original Price: {original_price}</p>
                <p className='text-left text-lg'>Years Of Use: {years_of_use}</p>
                <p className='text-left text-lg'>Posted Time: {posted_time}</p>
                <div className="card-actions justify-center my-5">
                    <label htmlFor="booking-modal" onClick={() => setModalData({name, resale_price})} className="btn btn-warning">Book Now</label>
                </div>
            </div>
            {
                modalData &&
                <BookingModal modalData={modalData} setModalData={setModalData}></BookingModal>
            }
        </div>
    );
};

export default SingleProduct;