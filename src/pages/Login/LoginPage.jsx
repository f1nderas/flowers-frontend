import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import "./Login.scss";
import { Eye } from "lucide-react";

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
      <div className="login">
        <div className="container">
          <div className="login-inner">
            <div className="login_title h1_title">
              Вход в кабинет покупателя
            </div>
            <form onSubmit={handleSubmit} className="login_form form">
              <div className="form-group">
                <label htmlFor="email">Телефон или Email</label>
                <input id="email" type="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <div className="input">
                  <input id="password" type="password" name="password" />
                  <button className="form_btn_absolute">
                    <Eye />
                  </button>
                </div>
              </div>
              <div className="form-controls">
                <button className="btn" type="submit">
                  Войти
                </button>
                <div>Восстановить пароль</div>
                <div>Зарегестрироваться</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginPage };
