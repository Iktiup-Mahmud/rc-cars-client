import React from 'react';
import { FaBolt, FaMoneyBillAlt } from 'react-icons/fa';


const Cards = () => {
    return (
        <div className='bg-base-300 py-10'>
            <h1 className='flex justify-center font-semibold text-4xl mb-10 '>Why we are best?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 full mx-20 gap-10">
                <div className="card card-compact text-white shadow-xl bg-slate-600">
                    <div className='flex justify-center mt-3'>
                        <FaMoneyBillAlt className='text-5xl text-center text-secondary'></FaMoneyBillAlt>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title flex justify-center text-secondary">Best Price!</h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptas voluptatibus perferendis quo. Perspiciatis dolor illo blanditiis itaque iusto est esse adipisci, sed ea, aut, odio perferendis praesentium sunt suscipit.</p>
                    </div>
                </div>
                <div className="card card-compact text-white shadow-xl bg-slate-600">
                    <div className='flex justify-center mt-5'>
                        <FaBolt className='text-5xl text-center text-secondary'></FaBolt>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title flex justify-center text-secondary">Fastest Delivery!</h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur exercitationem accusamus illum quas nisi voluptate possimus doloribus molestias minus dolorem amet nobis, at mollitia.</p>
                    </div>
                </div>
                <div className="card card-compact text-white shadow-xl bg-slate-600">
                    <div className='flex justify-center mt-5'>
                        <FaBolt className='text-5xl text-center text-secondary'></FaBolt>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title flex justify-center text-secondary">Fastest Delivery!</h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur exercitationem accusamus illum quas nisi voluptate possimus doloribus molestias minus dolorem amet nobis, at mollitia.</p>
                    </div>
                </div>
                <div>4</div>
            </div>
        </div>
    );
};

export default Cards;