import "./HomePages.scss";
import ProductCard from "../../components/UI/ProductCard/ProductCard";
import Card from "../../components/UI/Card/Card";
import ClientReviewsCard from "../../components/UI/ClientReviewsCard/ClientReviewsCard";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { categories, popularGoods } from "../../data/data";

const clientReviews = [
  {
    id: 1,
    name: "Даниил",
    body: "Часто заказываю в интернет-магазине АРТ Букет цветы для любимой и мамы. Нравятся хорошие цены в сравнении с их конкурентами и душевный подход, часто предлагают новинки как например макарунс к цветам)",
  },
  {
    id: 2,
    name: "Татьяна",
    body: "В очередной раз выбрали Арт Букет и все как всегда на высоте, шляпная коробка стояла неделю, аромат от цветов был просто невероятный. Приятно, что в наше время остаются места, где со временем ничего не меняется. Спасибо Вам за Вашу работу и труд.",
  },
  {
    id: 3,
    name: "Алена",
    body: "Огромное спасибо флористам на Симеоновской, мой любимый цветочный магазин! Заказывали букет на свадьбу к друзьям, наш букет был самый шикарный и непохожий на остальные! Невеста была в восторге от того, что букет был собран в цветовой схеме свадьбы- а это для девушек очень важно) за цветами только к вам!",
  },
];

const ImageLoader = () => (
  <ContentLoader viewBox="0 0 400 200" height={200} width={400}>
    <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
  </ContentLoader>
);

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setImages(categories);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="h1_title">Свежие цветы с доставкой по Твери</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          {loading ? (
            <div className="layout-grid">
              <ImageLoader />
              <ImageLoader />
              <ImageLoader />
            </div>
          ) : (
            <TransitionGroup className="layout-grid">
              {images.map((image) => (
                <CSSTransition key={image.id} timeout={500} classNames="fade">
                  <ProductCard {...image} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="popular-goods">
            <h2 className="section_title">ПОПУЛЯРНЫЕ ТОВАРЫ </h2>
            <div className="slider">
              <div className="slider-list">
                {popularGoods.map((product) => {
                  return <Card key={product.id} {...product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="client-reviews section">
        <div className="container">
          <div className="section_title">Отзывы клиентов</div>
          <div className="client-reviews_grid layout-grid_type-2">
            {clientReviews.map((review) => {
              return <ClientReviewsCard key={review.id} {...review} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
