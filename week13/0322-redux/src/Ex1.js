import { useState } from 'react';
import { deposit, withdraw } from './store/bankReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Ex1() {
  const [money, setMoney] = useState(0);
  const balance = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {balance}원</h3>
      <input type="number" onChange={(e) => setMoney(e.target.value)} />
      <button onClick={() => dispatch(deposit(money))}>입금</button>
      <button onClick={() => dispatch(withdraw(money))}>출금</button>
    </div>
  );
}
