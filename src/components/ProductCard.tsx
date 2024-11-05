import toast from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa';
import { addToCart } from '../features/cartSlice';
import { useAppDispatch } from '../features/hooks';
import { ProductType } from '../types/ProductTypes';

const ProductCard = ({ product }: { product: ProductType }) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = (product: ProductType) => {
        const productData = {
            id: product.id,
            quantity: 1,
            price: product.price,
            title: product.title,
            thumbnail: product.thumbnail
        }
        dispatch(addToCart(productData))
        toast.success('Product added to Cart.')
    }
    return (
        <div className='bg-gray-900 rounded-md'>
            <img src={product.thumbnail} alt={product.title} className='mx-auto h-28 md:h-36 mt-2' />
            <div className='p-4'>
                <h4 className='text-base md:text-lg font-semibold'>{product.title}</h4>
                <div className='flex items-center justify-between mt-5'>
                    <h2 className='text-lg md:text-2xl font-bold'>${product.price}</h2>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className='bg-primary py-2 px-5 rounded-3xl flex items-center gap-2'
                    ><FaCartPlus />Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard