import Button from "../shared/button";
import { login } from "./service";

function LoginPage({onLogin}) {
  
  const handleSubmit = async event => {
    event.preventDefault();
    await login({
      email: event.target.email.value,
      password: event.target.password.value,
    });
    
    //logueado
    onLogin()
    
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <Button type="submit" variant="relleno">
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
