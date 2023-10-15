function Card({ description, title, imageUrl }) {
  return (
    <>
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <img className="animal-image" src={imageUrl} alt="" />
      </div>
    </>
  );
}

export default Card;
