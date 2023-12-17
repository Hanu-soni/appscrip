import image2 from '../../images/productImg/Front Pic.png';
const ProductCard = ({ name, image }) => {
  console.log(image);

  return(
  
    <div className="card mb-3">
      <img src={`${image}`} className="img-fluid hero-img"  alt="no img"/>
      <div className="card-body">
        <p className="card-text">{name+" "}name</p>
        <div className='row'>
              <div className='col-10'>
                sign in
              </div>
              <div className='col-10'>
              <button style={{border:"none"}}><i className="bi bi-balloon-heart"></i></button>
              </div>
        </div>
      </div>
    </div>
  );
};
  export default ProductCard;