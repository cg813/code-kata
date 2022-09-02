import { FC } from "react";

interface Props {
  authorized: boolean;
  children: any
}

const AuthGuard: FC<Props> = ({authorized, children}) => {
  const loggedIn = localStorage.getItem("adminToken") ? true : false;

  if (authorized !== loggedIn) {
    return null
  }

  return <>{children}</>;
}

export default AuthGuard;
