import { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaDeleteLeft } from "react-icons/fa6";
import { decrementQuantity, incrementQuantity, incrementQuantityByNumber, removeFromCart } from '../features/cartSlice';
import { useAppDispatch } from '../features/hooks';
import { CartProduct } from '../types/ProductTypes';

const CartItems = ({ product }: { product: CartProduct }) => {
    const totalPrice = (product.price * product.quantity).toFixed(2);

    const dispatch = useAppDispatch();

    const handleQuantityByAmount = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const newQuantity = value === '' ? ' ' : parseInt(value);

        dispatch(incrementQuantityByNumber({ id: product.id, quantity: newQuantity }));
    }

    const handleRemoveProduct = (id: number) => {
        const confirmation = window.confirm('Do you want to Remove Item?');

        if (confirmation) {
            dispatch(removeFromCart(id));
            toast.success('Product removed from Cart.')
        }
    }
    return (
        <tr className="border-b border-opacity-20 border-gray-950 bg-gray-800">
            <td className="p-3">
                <img src={product.thumbnail} alt={product.title} className='w-12 h-12' />
            </td>
            <td className="p-3">
                <p className='font-semibold'>{product.title}</p>
            </td>
            <td className="p-3 font-semibold">
                <p>$ {product.price}</p>
            </td>
            <td className="p-3 text-center">
                <div className='flex items-center gap-2 justify-center'>
                    <button onClick={() => dispatch(decrementQuantity(product.id))}><FaMinus /></button>
                    <input
                        type="text"
                        value={product.quantity}
                        className='bg-gray-800 w-8 h-6 text-center border border-gray-500 rounded font-semibold focus:outline-none'
                        onChange={(e) => handleQuantityByAmount(e)}
                    />
                    <button onClick={() => dispatch(incrementQuantity(product.id))}><FaPlus /></button>
                </div>
            </td>
            <td className="p-3 font-semibold text-center">
                <p>$ {totalPrice}</p>
            </td>
            <td className="p-3 font-semibold text-center">
                <button onClick={() => handleRemoveProduct(product.id)}>
                    <FaDeleteLeft className='w-6 h-6 text-red-400' />
                </button>
            </td>
        </tr>
    )
}

export default CartItems