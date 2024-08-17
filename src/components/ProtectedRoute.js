import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { app } from '../firebase'; // adjust the path as needed

const auth = getAuth(app);

const ProtectedRoute = ({ component: Component, ...props }) => {
  const [user, loading, error] = useAuthState(auth);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return user ? <Component {...props} /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
