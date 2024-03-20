export default function PostItem({ post }) {
  const { id, title, body } = post;
  return (
    <div className="postBox">
      <div className="postTitle">
        <span className="postNumber">No. {id}</span>
        <span className="postTitleText">- {title}</span>
      </div>
      <p className="postContent">{body}</p>
    </div>
  );
}
