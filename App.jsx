import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,Link,RouterProvider,Outlet } from "react-router-dom";
import Header from "./src/Components/user/Header";
import Home from "./src/Components/user/Home";
import Login from "./src/Components/user/Login";
import Footer from "./src/Components/user/Footer";
import Signup from "./src/Components/user/Signup";
import  ReduxStore  from "./src/Config/Redux/Store";
import { Provider } from "react-redux";
import AHeader from "./src/Components/admin/AHeader";
import AHome from "./src/Components/admin/AHome";
import EditUser from "./src/Components/admin/EditUser";
import Profile from "./src/Components/user/Profile";
import Alogin from "./src/Components/admin/Alogin";



export const App=()=>{

    return(
        <>
<Provider store={ReduxStore}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </Provider>
      </> 
       
    )
} 
export const Admin=()=>{
    return(
        <>
        <Provider store={ReduxStore}>
        <AHeader/>
        <Outlet/>
        </Provider>
        </>
    )
}
const Routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>, 
        errorElement:<h1>this root is not exist</h1>,

        //below  is outlets
        children:[
            {
                path:'/',
                element:<Home/>
            },

            {
                path:'/login',
                element:<Login></Login>,
                
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/logout',
                element:<Login></Login>
            },
            {
                path:'/profile/:id',
                element:<Profile/>
            }
        ]
        

         
    },
    {
        path:'/admin',
        element:<Admin/>,
        errorElement:<h1>nope</h1>,
        children:[
            {
                path:'/admin',
                element:<AHome/>
            },
            {
               path:'/admin/addUser',
               element:<Signup/>
            },
            {
                path:'/admin/editUser/:id',
                element:<EditUser/>
            },
            {
                path:'/admin/login',
                element:<Alogin/>
            }
            
            
        ]
        
    }
])

    

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={Routes}></RouterProvider>);