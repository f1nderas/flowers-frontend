import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;
    signIn({ email, password }, () => navigate(fromPage, { replace: true }));
  };

  return (
    <>
      <div className="container">
        <div>Login Page</div>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export { LoginPage };
