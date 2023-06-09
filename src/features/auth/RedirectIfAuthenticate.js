import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RedirectIfAuthenticate({ children }) {
  const authUser = useSelector((state) => state.auth.user?.isActive);
  if (authUser === true) {
    return <Navigate to={'/profiles'} />;
  }
  return children;
}
