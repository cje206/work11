export default function PostItem({ post }) {
  const { id, title, body } = post;
  return (
    <div>
      <div>
        <span>No. {id}</span>
        <span>- {title}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
