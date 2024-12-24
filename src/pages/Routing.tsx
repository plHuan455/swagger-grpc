import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./Home"
import LayoutMain from "@/layouts/main"
import ServicesPage from "./Services"
import PageSetting from "./Setting"

export const router = createBrowserRouter([
  {
    element: <LayoutMain />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/settings', element: <PageSetting />},
      {path: '/services/:slug', element: <ServicesPage />},
    ]
  }
])

export default function Routing() {
  return (  
    <RouterProvider router={router} />
  )
}
