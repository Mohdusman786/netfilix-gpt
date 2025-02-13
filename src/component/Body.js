import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browes from './Browes'
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browes",
      element: <Browes />
    },
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body