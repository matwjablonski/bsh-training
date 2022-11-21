import { FC, useState } from 'react';
import { Snail } from '../../App';
import Item from '../Item/Item';

interface ListProps {
  list: Snail[];
}

const List: FC<ListProps> = ({ list }) => {
  
  const checkIsFastest = (speed: number): boolean => {
    const maxValue = Math.max(...list.map(item => item.speed));
    return maxValue === speed;
  }
  return (<ul>
    {list.map(item => <Item key={item.name} {...item} isFastest={checkIsFastest(item.speed)} />)}
  </ul>)
}

export default List;
