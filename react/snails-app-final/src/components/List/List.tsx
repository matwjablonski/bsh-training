import { FC, ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snail } from '../../App';
import Item from '../Item/Item';
import Modal from '../Modal/Modal';
import {addBet} from '../../redux/snails.slice';

interface ListProps {
  list: Snail[];
  header: ReactNode;
}

const List: FC<ListProps> = ({ list, header }) => {
  // const [bets, setBets] = useState<{ [key: string]: number }>({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const bets = useSelector((state: any) => state.snails);
  
  const checkIsFastest = (speed: number): boolean => {
    const maxValue = Math.max(...list.map(item => item.speed));
    return maxValue === speed;
  }

  const changeBet = (name: string, bet: number) => {
    dispatch(addBet({
      name,
      bet,
    }))
    // setBets((prev) => ({
    //   ...prev,
    //   [name]: (prev[name] || 0) + bet,
    // }))
  }

  console.log(bets);

  return (<ul>
    {header}
    {list.map(item => <Item
      key={item.name}
      {...item}
      isFastest={checkIsFastest(item.speed)}
      changeBet={changeBet}  
    />)}
    <button onClick={() => {
      console.log(bets);
      setShowModal(true)
    }}>Show all</button>
    {showModal && <Modal data={[1, 2, 3]} />}
  </ul>)
}

export default List;
