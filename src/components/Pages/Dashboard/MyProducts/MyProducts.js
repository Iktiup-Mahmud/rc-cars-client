import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [deleteProduct, setDeleteProduct] = useState(null)

    const url = `${process.env.REACT_APP_server_url}/myproducts?email=${user?.email}`

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    const handelDeleteProduct = (product) => {
        console.log(product)
    }

    const closeModal = () => {
        setDeleteProduct(null)
    }

    if (isLoading) {
        return <div className="flex justify-center items-center">
            <span className="text-2xl">Loading...</span>
            <div role="status">
                <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        </div>
    }

    console.log(products)

    return (
        <div>
            <h1 className='text-3xl mb-7 font-semibold'>My Products</h1>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Sale State</th>
                                <th>Delete</th>
                                <th>Advertise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products &&
                                products?.map((product, i) => <tr className="hover" key={product._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product?.img} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product?.name}</td>
                                    <td>{product?.category}</td>
                                    <td>{product?.resale_price}</td>
                                    <td>
                                        <button className='btn btn-warning btn-xs'>Abailable</button>
                                    </td>
                                    <td>
                                        <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-error btn-xs">Delete</label>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning btn-xs">Pay Now</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
                {
                    deleteProduct &&
                    <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deleteProduct?.name}. You will unable to restore it ever.`}
                        successAction={handelDeleteProduct}
                        buttonContent="Delete" 
                        modalData={deleteProduct}
                        closeModal={closeModal}
                    >

                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default MyProducts;