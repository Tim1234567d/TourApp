import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
 
  return (
    <div className='form-content'>

      <form onSubmit={handleSubmit} className='form1' noValidate>
      <h2 className='form-title'>Забронировать сейчас</h2>

        
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Telephone</label>
          <input
            className='form-input'
            type='tel'
            name='telephone'
            placeholder=' 0(999) 99 99 99'
            onChange={handleChange}   
            value={values.telephone}
          
          />   
          {errors.telephone && <p>{errors.telephone}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Send
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;
