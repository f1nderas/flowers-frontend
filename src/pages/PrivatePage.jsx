import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

export const PrivatePage = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(() => navigate("/"), { replace: true });
  };
  console.log(user);
  return (
    <>
      <div className="container">
        <h1>Private Page</h1>
        <div>
          <span>mail: </span>
          <span>{user?.email}</span>{" "}
        </div>

        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </>
  );
};
