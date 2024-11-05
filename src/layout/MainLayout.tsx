import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainLayout = () => {
    return (
        <div className='w-full mx-auto'>
            <Header />
            <div className='min-h-[70vh]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout