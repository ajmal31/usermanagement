import React,{useRef} from 'react'
import { ReactDOM } from 'react-dom/client'
import '../../CSS/signup.css'
import { Link,useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import axios from 'axios';
import {BASE_URL} from '../../URLS/urls'

      
const Signup = () => {
    const go=useNavigate()

  return ( 
      
                 
    <> 
      {/* <div className="signup-form" >
        <h1>Create An Account</h1>
        <h3>Signup</h3>

        <form >
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>

          <div>
            <label>Password:</label>
            <input type="password"/>
          </div>
          <br />
          <button type="submit" >Login</button>
          <Link to={'/login'}><h3>Login</h3></Link>
        </form>
      </div> */}

 
 <Formik
       initialValues={{ userName:'',email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
       
       
        axios.post(BASE_URL+'signup',values)
        .then((response)=>{

          console.log('axios response',response)
         if(response.data)
         {
            go('/login')
         }else{
          go('/signup')
         }
  
         
     })

        
       }}
     >
       {({ values,errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, }) => (
        <div className="signup-form">
           <h1>Create An Account</h1>
        <h3>Signup</h3>
         <form onSubmit={handleSubmit}>
         <label htmlFor="">Username:</label>
           <input
             type="text"
             name="userName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.userName}
             required
           />
           {errors.userName && touched.userName && errors.userName}
          <label htmlFor="">Email:</label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             required
           />
           {errors.email && touched.email && errors.email}
           <label htmlFor="">Password:</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             required
           />
           {errors.password && touched.password && errors.password}
           
           <br />
           <br />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           <Link to={'/login'}><h3>Login</h3></Link>
         </form>
         </div> 
       )}
     </Formik>
    </>

  )
}

export default Signup;
