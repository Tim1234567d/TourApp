export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  if (!values.lastname.trim()) {
    errors.lastname = 'lastname required';
  }
  
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.telephone) {
    errors.telephone = 'Telephone is required';
  } 
  if (!values.message) {
    errors.message = 'message is required';
  } 

  return errors;
}
