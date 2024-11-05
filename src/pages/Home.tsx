import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../features/api/apiSlice';
import { ProductType } from '../types/ProductTypes';

const Home = () => {
    const { data: products, isLoading } = useGetProductsQuery('/products');
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-xl font-semibold my-5 border-l-4 border-secondary pl-2'>On Sale Products</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    products?.products?.map((product: ProductType) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default Home