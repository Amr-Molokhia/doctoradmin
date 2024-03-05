
import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protocoles from './pages/Protocoles/Protocoles';
import Stats from './pages/Stats/Stats';
import Notification from './pages/Notification/Notification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
        </Route>
        <Route path="/Protocoles">
        <Route index element={<Protocoles />} /> 
        </Route>

        <Route path="/Stats">
        <Route index element={<Stats />} /> 
        </Route>

        <Route path="/notification">
        <Route index element={<Notification/>} /> 
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*


function App() {

  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
}};

const Layout = () =>{
  return(
    <div className="app">
      
      <Outlet/>
      
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/OVR",
        element:<OVRForm/>
      },
      {
        path:"/Admin",
        element:<AdminForm/>
      }
    ]
  },
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

*/

