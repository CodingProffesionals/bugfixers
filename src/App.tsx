import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import About from "./routes/about";
import { UserContext } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
interface Usertype{
  name: string
}
const User:Usertype = {
  name: 'test'
}

function App() {
  
  return (
    <UserContext.Provider value={User}>
     <RouterProvider router={router} />
   </UserContext.Provider>
  )
}

export default App
