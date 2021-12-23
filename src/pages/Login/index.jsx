import { useForm, Controller } from "react-hook-form";
import {TextField,makeStyles,} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../../components/header/button.css'
import '../../components/header/form/Form.css'

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: loginData } = await api.auth.login(data);

      auth.setToken(loginData.token);
      auth.setUser(loginData.user);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <div className='form-container'>
      <div>
      <Link to='/home'>
          <span className="closeBtn">x</span>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}  className='form'>
      <div className="form_title" ><h2 >Login</h2></div>  

        <div className='form-inputs'>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.email?.message)}
                  fullWidth={true}
                  type="email"
                  label="Email"
                  variant="filled"
                  helperText={errors.email?.message}
                />
              )}
            />
          </div>

        <div className='form-inputs'>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.password?.message)}
                  type="password"
                  fullWidth={true}
                  label="Password"
                  variant="filled"
                  helperText={errors.password?.message}
                />
              )}
            />
          </div>
          
        <button  className='regBtn'  type="submit" disabled={isLoading}>Login</button>
            <Link  to="/registration">
            <button  type="submit" className='regBtn'> Create an account</button>
            </Link>
      </form>
    </div>
    </div>
  );
}

export default Login;
