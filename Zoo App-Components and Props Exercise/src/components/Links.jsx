export default function Links({ imgUrl, url }) {
  return (
    <div className="link-container">
      <img src={imgUrl} alt="Logo" className="link-logo" />
      <a href={url} target="_blank" rel="noopener noreferrer" className="link-text">
        Click
      </a>
    </div>
  );
}
