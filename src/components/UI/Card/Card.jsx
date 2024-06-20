import styled from "./Card.module.scss";
import { Heart, ShoppingBasket } from "lucide-react";

const Card = (props) => {
  return (
    <div className={styled.card + " feature-card"}>
      <button className={styled.cardFavoritesBtn}>
        <Heart />
      </button>
      <div className={styled.cardPhoto}>
        <a href="#" className={styled.cardPhotoLink}>
          <img src={props.img} alt="" className="lazyload" />
        </a>
      </div>
      <div className={styled.cardTit}>
        <a href="#" className={styled.cardLink}>
          Букет из 15 белых французских роз в упаковке
        </a>
      </div>
      <div className={styled.cardBottom}>
        <div className={styled.cardPrice}>
          <span className={styled.cardPriceLabel}>От</span>
          <span className={styled.cardPriceCur}>500 руб.</span>
        </div>

        <a href="#" className={styled.cardBtnLink}>
          <ShoppingBasket />
        </a>
      </div>
    </div>
  );
};

export default Card;
