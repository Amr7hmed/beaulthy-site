import { Route, Redirect } from "react-router-dom";
// import { isLogin } from '../utils';
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const user = useSelector((state) => state.user.data);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        user.token && restricted ? (
          <Redirect to="/Users" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
