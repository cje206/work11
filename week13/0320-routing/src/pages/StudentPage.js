import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function StudentPage() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWord = searchParams.get('name');
  const navigate = useNavigate();
  return (
    <div>
      <h4>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>
        입니다
      </h4>
      {keyWord && (
        <h4>
          실제 이름은 <span style={{ color: 'red' }}>{keyWord}</span>
        </h4>
      )}
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </div>
  );
}
