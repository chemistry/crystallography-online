import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { loginUser } from "../store/user.slice";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.user.auth);
  const error = useSelector((state: RootState) => state.user.error);

  const onSubmit = (data: { email: string; password: string}) => {
      dispatch(loginUser(data));
  };

  return (
    <div>
        <header className="app-layout-header">
            <h2 className="text-primary">Login</h2>
        </header>
        <div className="app-layout-content">
        <h1>Login</h1>
        <hr/>
          <div><b>{auth ? "Logged IN" : null}</b></div>
          <>{error.code ? error.message : null}</>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ padding: "20px" }}>
            <div >Email:
              <input type="text"  name="email" ref={register as any}  />
            </div>
            <div>Password:
              <input type="text" name="password" ref={register as any}  />
            </div>
            <div>
              <input type="submit" name="Submit" />
            </div>
          </div>
        </form>
        </div>
    </div>
  );
};
