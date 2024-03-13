import './Practice2.css';

export default function Practice2({ book }) {
  const { title, author, price, type } = book;
  return (
    <div className="book">
      <h1 className="category">이번주 베스트셀러</h1>
      <img
        className="bookImg"
        src="https://image.yes24.com/goods/93513663/XL"
        alt="나의 하루는 4시 30분에 시작된다"
      />
      <h1 className="title">{title}</h1>
      <div className="author">저자: {author}</div>
      <div className="price">판매가: {price}</div>
      <div className="type">구분: {type}</div>
    </div>
  );
}
