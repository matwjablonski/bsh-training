import { FC, ReactNode, useEffect, useState } from 'react';
import { Snail } from '../../App';
import Item from '../Item/Item';
import Test from '../Test/Test';

interface ListProps {
  list: Snail[];
  header: ReactNode;
}

const List: FC<ListProps> = ({ list, header }) => {
  const [bets, setBets] = useState<{ [key: string]: number }>({});
  
  const checkIsFastest = (speed: number): boolean => {
    const maxValue = Math.max(...list.map(item => item.speed));
    return maxValue === speed;
  }

  const changeBet = (name: string, bet: number) => {
    setBets((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + bet,
    }))
  }

  return (<ul>
    {header}
    {list.map(item => <Item
      key={item.name}
      {...item}
      isFastest={checkIsFastest(item.speed)}
      changeBet={changeBet}  
    />)}
    <button onClick={() => console.log(bets)}>Show all</button>
  </ul>)
}

export default List;
