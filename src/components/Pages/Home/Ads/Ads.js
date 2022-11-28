import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const Ads = () => {

    const url = `${process.env.REACT_APP_server_url}/ads`

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    console.log(products)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10 mb-20'>
            <h1 className='mt-20 mb-10 font-semibold text-4xl'>Advertisement</h1>
            <div className="carousel w-2/3 mx-auto h-64 gap-10">
                {
                    products?.map((product, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl border-4">
                        <figure><img src={product.img} alt="Shoes" className='h-64' /></figure>
                        <div className="">
                            <h2 className="card-title">{product.name}</h2>
                        </div>
                    </div>
                )}


                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Ads;