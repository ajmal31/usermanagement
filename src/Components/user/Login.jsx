import React, { useEffect } from 'react'
import { ReactDOM } from 'react-dom/client';
import { Link } from 'react-router-dom';
import '../../CSS/login.css'
import { Formik } from 'formik';
import { BASE_URL } from '../../URLS/urls';
import  axios  from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../../Config/Redux/Slices';

const Login=()=> {
  const dispatch=useDispatch()
  const go=useNavigate()
  useEffect(()=>{
    localStorage.removeItem('token')
  },[])
  return (
    
<React.Fragment>  
      {/* <h1>Login</h1> 
      <div className="login-page">
        <div className="login-form">
          <h2>Login</h2>
         
          <form > 
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
               
                required
              />
            </div>
            <button type="submit">Login</button>
            <Link to={"/signup"}>
              <h3>Signup</h3>
            </Link>
          </form>
        </div>
      </div> */}
      
      
      <Formik
  initialValues={{ email: '', password: '' }}
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
    
    axios.post(BASE_URL+'login',values).then((Result)=>{
      
      if(Result.data.status)
      {
        let temp=Result?.data?.authtoken
        console.log('jwt token client side',temp)
       dispatch(postUser(Result.data.response))
        go('/')

      }else
      {
        go('/login')
      }
    })
  }}
>
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
  }) => (
    <div>
      <h1>Login</h1>
     
        <div className="signup-form">
        <form onSubmit={handleSubmit}>
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
           <Link to={'/signup'}><h3>Create Account</h3></Link>
         </form>
        </div>
      
    </div>
  )}
</Formik>

    
    </React.Fragment>
  )
}

export default Login
