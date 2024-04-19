// props
// name, grade, part,handleClick()

import { useState } from 'react';

interface StudentInfo {
  name: string;
  grade: number;
  part?: string; // optional한 props
  handleClick: (name: string, grade: number) => void;
}

export default function Student({
  name,
  grade,
  part,
  handleClick,
}: StudentInfo) {
  const [score, setScore] = useState<number>(0);
  return (
    <div>
      <ul onClick={() => handleClick(name, grade)}>
        <li>이름 : {name}</li>
        <li>학년: {grade}</li>
        <li>전공: {part || '자유 전공'}</li>
      </ul>
    </div>
  );
}
