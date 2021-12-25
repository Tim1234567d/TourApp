import React from 'react';
import './Form.css';


const FormSuccess = () => {
  return (
    <div className='form-content'>
      <h1 className='form-success'>Мы получили ваш запрос!
      <br/>
      В скором времени мы с вами свяжемся!
       </h1>
      <div>
      <img className='form-img-2' src='https://ic.pics.livejournal.com/tanjand/44781189/95461836/95461836_original.jpg' alt='success-image' />
      </div>
    </div>
  );
};

export default FormSuccess;
