import "./ProductCard.scss";

const ProductCard = ({ title, webp, jpg }) => {
  return (
    <a href={title} className="product-card_item feature-card">
      <picture className="product-card_picture">
        <source srcSet={webp} type="image/webp" />
        <img src={jpg} alt={title} loading="lazy" />
      </picture>
    </a>
  );
};

export default ProductCard;
