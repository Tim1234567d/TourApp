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
  

      <form onSubmit={handleSubmit} className="form-container1" noValidate>
      

        
        <div className="form-group-name1">
          <div className="form-grup-item1">
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

          <div className="form-grup-item1">
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your last name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
          </div>
        </div> 

        
        <div className="form-group-addresss1">
          <div className="col-md-12">
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
        </div>

        <div className='form-group-addresss1'>
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

        <div className='form-group-message1'>
          
          <textarea
                  className="textarea"
                  placeholder="Write your message."
                  cols="30"
                  rows="10"
                  name='message'
                  onChange={handleChange}   
                  value={values.message}

                ></textarea>
          {errors.message && <p>{errors.message}</p>}

        </div>
        <button className='form-input-btn' type='submit'>
          Send
        </button>
        
      </form>
  
  );
};

export default FormSignup;
