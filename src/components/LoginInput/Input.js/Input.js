import React from "react";
import { ErrorMessage ,useField } from "formik";
import './Input.css';
function Input(props) {
  const [field, meta] = useField(props)
  return (
    <div className="inp-group">
      <input className={`inps ${meta.touched && meta.error && 'is-invalid'}`} 
      {...field} 
      {...props} 
      /> <br/>
      <ErrorMessage component="p" name={field.name} className="error" />
    </div>
  ) 
}

export default Input