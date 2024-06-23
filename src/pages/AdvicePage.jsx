import ProductCard from "../components/UI/ProductCard/ProductCard";
import "../styles/AdvicePage.scss";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
const AdvicePage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="section">
        <div className="container">
          <button onClick={goBack}>go back</button>
          <h1 className="h1_title">Инструкция по уходу за цветами</h1>
          <div className="advice">
            <div className="advice-left">
              {/* {products.map((product) => (
                <ProductCard key={product.text} {...product} />
              ))} */}
              <div className="advice-item feature-card">Срезанные цветы</div>
              <div className="advice-item feature-card">
                Горшечные расстения
              </div>
            </div>
            <div className="advice-right">
              <p>
                Мы знаем, как важно дарить радость родным и близким. И
                обязательно поможем вам это сделать -добавив немного природного
                волшебства с помощью горшочных растений и очаровательных
                букетов.
              </p>
              <p>
                Каждый цветок или букет уникален и может отличаться от
                фотографии в каталоге.
              </p>
              <p>
                Ваш букет собирается индивидуально для вас. Вы покупаете не
                фотографию, середине а ощущения цветов, гамму и эмоции!
              </p>
              <p>
                Букет цветов, подаренный от души хочется сохранить как можно
                дольше. Вот несколько простых но очень важных советов:
              </p>
              <ul>
                <li>
                  <Check />
                  после того, как букет окажется дома, необходимо: дать цветам
                  полежать 15-20 минут,особенно это актуально в зимнее время
                  года -так растения быстрее адаптируются к новым условиям.
                </li>
                <li>
                  налить в чистую вазу воды, комнатной температуры или не
                  слишком холодную. Лучше брать отстоянную. Очистить стебли от
                  нижних листьев, так как их нахождение в воде приводит к ее
                  быстрому закисанию.
                </li>
                <li>
                  стебли подрезать, сделать косой срез- так цветок больше берет
                  воды. Менять воду ежедневно, а в жаркие дни и два раза в
                  сутки. Перед сменой воды вазу обязательно нужно промывать.
                </li>
                <li>
                  разместить вазу с цветами лучше в прохладном помещении, без
                  сквозняков, без прямых солнечных лучей. Если влажность не
                  высокая, то можно периодически опрыскивать листву, не не в
                  коем случае не попадая на бутоны.
                </li>
                <li>
                  не рекомендуется цветы держать рядом с овощами и фруктами -
                  так как они выделяют этилен ускоряющий увядание.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdvicePage };
