import { useState } from "react";
import styled from "./Card.module.scss";
import { Heart, Plus, Minus } from "lucide-react";
import classNames from "classnames";

const Card = ({ img, text }) => {
  const [like, setLike] = useState(false);
  const [addBasket, setAddBasket] = useState(false);

  return (
    <div className={styled.card + " feature-card"}>
      <button
        className={classNames(styled.like, {
          [styled.active]: like,
        })}
        onClick={() => {
          setLike((prevValue) => !prevValue);
        }}
      >
        <Heart />
      </button>
      <div className={styled.photo}>
        <a href="#" className={styled.photoLink}>
          <img src={img} alt="" className="lazyload" />
        </a>
      </div>
      <div className={styled.tit}>
        <a href="#" className={styled.link}>
          {text}
        </a>
      </div>
      <div className={styled.bottom}>
        <div className={styled.price}>
          <span className={styled.priceLabel}>От</span>
          <span className={styled.priceCur}>500 руб.</span>
        </div>
        <button
          className={styled.basketBtn}
          onClick={() => setAddBasket((prevValue) => !prevValue)}
        >
          {addBasket ? <Minus /> : <Plus />}
        </button>
      </div>
    </div>
  );
};

export default Card;
