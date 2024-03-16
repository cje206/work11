import { useState } from 'react';
import Table from './Table';
import Input from './Input';

export default function Ex3() {
  const [post, setPost] = useState([]);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('writer');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);
  const writerFunc = (e) => setWriter(e.target.value);
  const titleFunc = (e) => setTitle(e.target.value);
  const keywordFunc = (e) => setKeyword(e.target.value);
  const register = () => {
    const newPost = [...post, { title, writer }];
    setPost(newPost);
  };
  const search = () => {
    const postList = post.filter((el) => {
      return el[category].includes(keyword);
    });
    setResult(postList);
  };
  const searchAll = () => {
    setResult(post);
  };
  return (
    <div>
      <fieldset>
        작성자 : <Input text="작성자" func={writerFunc} />
        제목 : <Input text="제목" func={titleFunc} />
        <button onClick={register}>작성</button>
      </fieldset>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="writer">작성자</option>
        <option value="title">제목</option>
      </select>
      <Input text="검색어" func={keywordFunc} />
      <button onClick={search}>검색</button>
      <button onClick={searchAll}>전체</button>
      <Table post={post} />
      {result.length === 0 ? <h4>검색 결과가 없습니다</h4> : <h4>검색결과</h4>}
      {result.length !== 0 && <Table post={result} />}
    </div>
  );
}
