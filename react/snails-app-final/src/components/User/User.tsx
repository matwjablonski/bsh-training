import { Avatar, Box } from '@mui/material'
import { FC, useEffect, useState } from 'react';
import { User as UserInterface } from '../../App';

interface UserProps {
  user: UserInterface;
}

const User: FC<UserProps> = ({ user: { avatar, name, crew } }) => {
  const [borderWidth, setBorderWidth] = useState(0);

  const handleClick = () => {
    setBorderWidth(prev => prev < 7 ? prev + 1 : 0);
  }

  useEffect(() => {
    document.title = `${name} - Bet your snails`
  }, [ name ]);

  return (
    <Box sx={{ display: 'flex', p: 2 }}>
      <Avatar style={{
        border: `${borderWidth}px solid blue`
      }} src={avatar} alt={name} onClick={handleClick}/>
      <h2 style={{ margin: `0 20px`}}>{name} <small>({crew})</small></h2>
    </Box>
  )
};

export default User;
