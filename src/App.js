import React from 'react';
import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if(!values.email) errors.email= 'field required';
      if(!values.password) errors.password= 'field required';
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       <div>Email:</div>
       <input 
       id="emailField" 
       type="text" 
       onChange={formik.handleChange} 
       value={formik.values.email}/>
        {formik.errors.email ? (
        <div id="emailError" style={{color:'red'}}>
          {formik.errors.email}
          </div>
          ) : null}
        <div>Password</div>
        <input id="pswField" 
        type="text" 
        onChange={formik.handleChange} 
        value={formik.values.password}/>
        {formik.errors.password ? (
        <div id="pswError" style={{color:'red'}}>
          {formik.errors.password}
          </div>
          ) : null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
