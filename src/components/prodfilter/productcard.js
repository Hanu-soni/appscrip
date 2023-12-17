const ProductCard = ({ name, image }) => (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
  export default ProductCard;