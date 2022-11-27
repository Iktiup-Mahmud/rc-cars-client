import React from 'react';

const Contact = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col gap-36 lg:flex-row">
                <img src="https://img.freepik.com/premium-vector/customer-care-illustration-concept_42694-26.jpg" className="max-w-sm rounded-lg shadow-2xl"  alt='' />
                <section className='text-center lg:py-16 lg:my-20 mx-10'>
                    <h4 className='text-primary font-bold text-3xl'>CONTACT US</h4>
                    <h2 className='text-4xl mb-10 '>Stay Connected with us</h2>
                    <div className='items-center'>
                        <input type="email" placeholder="Email Address" className="input w-full mx-auto mt-3 block" required />
                        <input type="text" placeholder="Subject" className="input w-full mx-auto mt-3 block " />
                        <textarea className="textarea my-3 h-28 w-full block mx-auto" placeholder="Your Message" required></textarea>
                        <button className='btn btn-warning'>Submit</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;