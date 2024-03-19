import { useRef, useState } from 'react';

export default function Ex2() {
  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [comment, setComment] = useState([
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ]);
  const writerRef = useRef();
  const titleRef = useRef();

  const addComment = () => {
    if (!inputWriter.trim()) {
      writerRef.current.focus();
      return;
    } else if (!inputTitle.trim()) {
      titleRef.current.focus();
      return;
    }
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    // state 추가
    setComment([...comment, newComment]);
    setInputWriter('');
    setInputTitle('');
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          ref={writerRef}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          ref={titleRef}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
