import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from "./components"
import Osis from "./components/halamanOrganisasi/osis"
import Pmr  from "./components/halamanOrganisasi/pmr"
import Guru from "./components/halamanGuru/"


const router = createBrowserRouter([
  { 
    path: "/",
    Component: Index
  },
  {
    path: "/osis",
    Component: Osis
  },
  {
    path:"/pmr",
    Component: Pmr
  },
  {
    path: "/guru",
    Component: Guru
  }
])


function App() {

  return (
    <div data-theme="bluetheme bg-custom-radial">
      {/* <h1 className="text-red-500">lfkslkdfj</h1> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
