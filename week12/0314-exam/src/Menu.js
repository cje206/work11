export default function Menu({ info }) {
  const { image, title, price, selectFunc } = info;
  const src = `./${image}.jpg`;
  return (
    <tr>
      <td>
        <img src={src} alt={title} />
      </td>
      <td>{title}</td>
      <td>{price}원</td>
      <td>
        <button onClick={() => selectFunc(title)}>선택</button>
      </td>
    </tr>
  );
}
