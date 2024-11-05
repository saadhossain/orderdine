import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { useAppSelector } from '../features/hooks';
import { RootState } from '../features/store';

const Header = () => {
    const { products } = useAppSelector((state: RootState) => state.cart);
    return (
        <div className='w-full bg-gray-900 py-2'>
            <div className='w-11/12 mx-auto flex items-center justify-between'>
                <NavLink to='/' className='font-semibold text-xl flex items-center gap-2'>
                    <img src={Logo} alt='Orderdine' className='w-12 h-12' />
                    <h2>Orderdine</h2>
                </NavLink>
                <div className='flex items-center gap-4'>
                    <NavLink to='/cart' className='relative'>
                        <FaShoppingCart className='h-7 w-7' />
                        <span className='absolute -top-3 -right-2 bg-primary rounded-full px-2'>{products.length > 0 && products?.length}</span>
                    </NavLink>
                    <NavLink to='/login'><button className='bg-primary py-2 px-6 rounded-3xl'>Login</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header