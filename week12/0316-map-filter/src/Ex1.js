import { useState } from 'react';

export default function Ex1() {
  const [info, setInfo] = useState([
    { name: '코디', email: 'codi@gmail.com' },
    { name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const register = () => {
    const newInfo = info.concat({ name, email });
    setInfo(newInfo);
    setName('');
    setEmail('');
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) register();
  };
  const deleteInfo = (id) => {
    console.log(id);
    const newInfo = info.filter((el) => {
      return el !== info[id];
    });
    setInfo(newInfo);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={register}>등록</button>
      <div>
        {info.map((value, idx) => (
          <h3 key={idx} onDoubleClick={() => deleteInfo(idx)}>
            {value.name}: {value.email}
          </h3>
        ))}
      </div>
    </div>
  );
}
