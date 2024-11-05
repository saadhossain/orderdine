import { Link } from 'react-router-dom';
import CartItems from '../components/CartItems';
import { useAppSelector } from '../features/hooks';
import { RootState } from '../features/store';

const Cart = () => {
    const { products } = useAppSelector((state: RootState) => state.cart);

    const totalPrice = products.reduce((prev, product) => prev + product.price * product.quantity, 0).toFixed(2);
    return (
        <div className='w-11/12 mx-auto my-5'>
            {/* Table */}
            {
                products.length < 1 ? (
                    <div className='flex flex-col items-center justify-center gap-3 mt-10'>
                        <h2 className='text-xl font-semibold'>No Product in the Cart</h2>
                        <Link to='/'><button className='bg-primary rounded-3xl py-2 px-6'>Go to Shop</button></Link>
                    </div>
                ) : (
                    <div className="container p-2 mx-auto sm:p-4">
                        <h2 className="mb-4 text-2xl font-semibold leading-tight">Cart</h2>
                        <div className="overflow-x-auto text-xs md:text-base">
                            <table className="min-w-full">
                                <colgroup>
                                    <col className='w-24' />
                                    <col className='min-w-36' />
                                    <col className='min-w-20 md:min-w-24' />
                                    <col className='min-w-32 md:min-w-40 text-center' />
                                    <col className='min-w-24 md:min-w-28' />
                                    <col className='w-20' />
                                </colgroup>
                                <thead className="bg-gray-900">
                                    <tr className="text-left">
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Product Name</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3 text-center">Quantity</th>
                                        <th className="p-3">Total Price</th>
                                        <th className="p-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => <CartItems key={product.id} product={product} />)
                                    }
                                </tbody>
                                <tfoot className='bg-gray-900'>
                                    <tr className="text-right">
                                        <th className="p-3"></th>
                                        <th className="p-3"></th>
                                        <th className="p-3"></th>
                                        <th className="p-3 text-base md:text-lg">Grand Total:</th>
                                        <th className="p-3 text-base md:text-lg text-center">${totalPrice}</th>
                                        <th className="p-3"></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart