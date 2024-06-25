import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

export const PrivatePage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(() => navigate("/"), { replace: true });
  };
  return (
    <>
      <div className="container">
        <h1>Private Page</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </>
  );
};
