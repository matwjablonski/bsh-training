import { FC, PropsWithChildren, ReactNode } from 'react'

interface HeaderProps {
  user: ReactNode;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ user, children }) => (
  <header style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h1>{children}</h1>
    {user}
  </header>
)

export default Header;
