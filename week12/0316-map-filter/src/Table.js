export default function Table({ post }) {
  return (
    <table cellSpacing={0} border={1}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
        {post.map((value, idx) => {
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
  );
}
