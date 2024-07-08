import { useState } from "react";
import styled from "./Card.module.scss";
import { Heart, Plus, Minus, ShoppingBasket } from "lucide-react";
import classNames from "classnames";

const Card = ({ img, text }) => {
  const [like, setLike] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={classNames(styled.card, "feature-card")}>
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
          <span className={styled.priceCur}>3 мл крови Девственници</span>
        </div>
        <button
          className={classNames(styled.basketBtn, {
            [styled.active]: quantity > 0,
          })}
          onClick={() => {
            if (quantity === 0) {
              setQuantity(1);
            }
          }}
        >
          {quantity > 0 ? (
            <div className={styled.quantityContainer}>
              <button
                className={classNames(styled.minusBtn, {
                  [styled.show]: quantity > 0,
                })}
                onClick={(e) => {
                  e.stopPropagation();
                  setQuantity((prevQuantity) => prevQuantity - 1);
                }}
              >
                <Minus />
              </button>
              <span className={styled.quantity}>{quantity}</span>
              <button
                className={styled.plusBtn}
                onClick={() => {
                  setQuantity((prevQuantity) => prevQuantity + 1);
                }}
              >
                <Plus />
              </button>
            </div>
          ) : (
            <div>
              <ShoppingBasket />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
