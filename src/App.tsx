import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/routers'

const App = () => {
  return (
    <div>
      <RouterProvider router={routers}>
      </RouterProvider>
      <Toaster
      // position='top-right'
      // toastOptions={{
      //   style: {
      //     marginTop: '40px'
      //   }
      // }}
      />
    </div>
  )
}

export default App