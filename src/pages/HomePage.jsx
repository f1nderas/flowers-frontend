import "../styles/HomePages.scss";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import Card from "../components/UI/Card/Card";
import ClientReviewsCard from "../components/UI/ClientReviewsCard/ClientReviewsCard";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const products = [
  {
    text: "Розы1",
    webp: "https://static.insales-cdn.com/r/eSakWZf1X7M/rs:fit:500:0:1/q:100/plain/files/1/973/33825741/original/12312_f5f74f55ccd02300c65fc90a9b85dbde_4a4d3cfe10241271bc3a898417771b76.jpg@webp",
    jpg: "https://static.insales-cdn.com/r/6yvSC_LzCy4/rs:fill-down:480:241:1/q:100/plain/files/1/973/33825741/original/12312_f5f74f55ccd02300c65fc90a9b85dbde_4a4d3cfe10241271bc3a898417771b76.jpg@jpg",
  },
  {
    text: "Розы2",
    webp: "https://static.insales-cdn.com/r/4zzUva35h8U/rs:fit:500:0:1/q:100/plain/files/1/936/33825704/original/1231_a5b53b0be4aae89f3507b1ecac2a2f4e_15de42c0b28f86533c5234badabb04a3.jpg@webp",
    jpg: "https://static.insales-cdn.com/r/78hpRzOCzgo/rs:fill-down:480:241:1/q:100/plain/files/1/936/33825704/original/1231_a5b53b0be4aae89f3507b1ecac2a2f4e_15de42c0b28f86533c5234badabb04a3.jpg@jpg",
  },
  {
    text: "Кустовые розы3",
    webp: "https://static.insales-cdn.com/r/lAOgKM-5EDg/rs:fit:500:0:1/q:100/plain/files/1/1258/33826026/original/53204884__1__118450b0d91034435c38f5433855a3eb.jpg@webp",
    jpg: "https://static.insales-cdn.com/r/nAJGu6lMkzc/rs:fill-down:480:241:1/q:100/plain/files/1/1258/33826026/original/53204884__1__118450b0d91034435c38f5433855a3eb.jpg@jpg",
  },
  {
    text: "Кустовые розы4",
    webp: "https://static.insales-cdn.com/r/Lqrv9YIiJCU/rs:fit:500:0:1/q:100/plain/files/1/7873/28188353/original/classic.webp@webp",
    jpg: "https://static.insales-cdn.com/r/vDfuCdZAzUU/rs:fill-down:480:241:1/q:100/plain/files/1/7873/28188353/original/classic.webp@webp",
  },
  {
    text: "Кустовые розы5",
    webp: "https://static.insales-cdn.com/r/ku4vYZupLEI/rs:fit:500:0:1/q:100/plain/files/1/6088/28194760/original/macaron.webp@webp",
    jpg: "https://static.insales-cdn.com/r/ge4jIXVQjvw/rs:fill-down:480:241:1/q:100/plain/files/1/6088/28194760/original/macaron.webp@webp",
  },
  {
    text: "Кустовые розы6",
    webp: "https://static.insales-cdn.com/r/Uq3hJ1A_B7k/rs:fit:500:0:1/q:100/plain/files/1/7925/28188405/original/box.webp@webp",
    jpg: "https://static.insales-cdn.com/r/zcZt4DA13f4/rs:fill-down:480:241:1/q:100/plain/files/1/7925/28188405/original/box.webp@webp",
  },
];

const popularGoods = [
  {
    id: 1,
    img: "https://static.insales-cdn.com/r/UqsZxsEM0g4/rs:fit:400:0:1/q:100/plain/images/products/1/2374/806390086/large_msg1749038394-74922.jpg@jpg",
  },
  {
    id: 2,
    img: "https://static.insales-cdn.com/r/H5kYBFD_LKE/rs:fit:400:0:1/q:100/plain/images/products/1/5316/705950916/large_IMG_3505-scaled.jpeg_@webp",
  },
];

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
      setImages(products);
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
                <CSSTransition key={image.text} timeout={500} classNames="fade">
                  <ProductCard {...image} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="section_title">ПОПУЛЯРНЫЕ ТОВАРЫ </h2>
          <div className="slider">
            <div className="slider-list">
              {popularGoods.map((product) => {
                return <Card key={product.id} img={product.img} />;
              })}
              <Card />
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

export default HomePage;
