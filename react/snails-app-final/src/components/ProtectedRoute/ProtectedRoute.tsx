import { FC, PropsWithChildren } from 'react';

const ProtectedRoute: FC<Required<PropsWithChildren<{ isLogged: boolean }>>> = ({ children, isLogged }) => {

  if (isLogged) {
    return <>{children}</>;
  }

  return <p>no access</p>
}

export default ProtectedRoute;
