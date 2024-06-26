import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const DeliveryPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container">
        <button onClick={goBack} className="goBack">
          <ArrowLeft />
        </button>
        <div className="section">
          <h1 className="h1_title">Доставка и оплата</h1>
        </div>

        <div className="section">
          <h2 className="section_title">Работаем для вас в Твери и области!</h2>
          <p>
            Настоящая красота не требует жертв - она требует умелых рук мастера
            и теплых чувств того, кто дарит букет!
          </p>
          <p>
            Сеть цветочных павильонов "АртБукет" - осуществляет доставку по
            городу и области ,гарантирует свежесть цветов и высокое качество
            выполненных работ!
          </p>
          <p>
            Наш сервис рассчитан на всех, кому необходимо преподнести прекрасный
            букет из восхитительных цветов, проявить уважение, рассказать о
            своей любви, преданности, выразить нежность или признательность...
          </p>
        </div>
        <div className="section">
          <h2 className="section_title">Наша служба доставки цветов - это:</h2>
          <p>
            Прекрасные свежие букеты, за которыми не надо бежать в обед или
            объезжать полгорода по пробкам! Мы доставим вам цветы точно ко
            времени!
          </p>
          <p>
            К букету бесплатно прикладывается сопроводительная открытка, на
            которой мы от вашего имени напишем пожелания.
          </p>
          <p>У нас всегда богатый ассортимент цветов и доступные цены!</p>
          <p>Постоянным клиентам предоставляется значительная скидка!</p>
          <p>
            <strong>Минимальная стоимость заказа на доставку 1000р</strong>
          </p>
        </div>

        <div className="section">
          <h2 className="section_title">Стоимость доставки:</h2>
          <p>
            <strong>300р</strong> - доставка с указанным интервалом времени как
            минимум час. Цена действует в дневное время с 9.00-20.00
          </p>
          <p>
            от <strong>5000 руб ДОСТАВКА БЕСПЛАТНАЯ</strong> (в рабочее время, в
            интервале времени и в черте города)
          </p>
          <p>
            <strong>500р</strong> – доставка в утренние часы с 7.00-9.00 и в
            вечерние часы с 20.00-24.00
          </p>
          <p>
            Стоимость доставки по области и в другие города{" "}
            <strong>ДОГОВОРНАЯ</strong>
          </p>
        </div>
        <div className="section">
          <h2 className="section_title">Способы оплаты:</h2>
          <ol>
            <li>наличными курьеру</li>
            <li>
              оплата с помощью перевода на банковскую карту СБЕРБАНК{" "}
              <strong>4276 6300 1101 9166</strong> Александр Игоревич Р.
            </li>
            <li>в любом салоне сети "АртБукет"</li>
            <li>юкасса (картой онлайн) или по ссылке после согласования</li>
          </ol>
        </div>
        <div className="section">
          <h2 className="section_title"> Уважаемые клиенты:</h2>
          <p>
            - звонки по номеру единой справочной службы сети "АртБукет"{" "}
            <strong> 8 (4822) 60-99-60</strong> принимаются ежедневно с 8.00 до
            21.00
          </p>
          <p>
            - заказы (в том числе online-заказы, которые осуществляются через
            интернет-магазин "АртБукет") обрабатываются ежедневно с 9.00 до
            21.00
          </p>
          <p>
            Просьба: не оплачивайте заказ без получения подтверждения о приеме
            заказа от менеджера
          </p>
          <p>(смс-подтверждение, либо звонок)</p>
        </div>

        <div className="section">
          <h2 className="section_title"> Защита информации:</h2>
          <p>
            Оплата заказа через интернет кредитной картой проводится с помощью
            защищенного SSL-соединения, установленного между нашим сервером и
            сервером платежной системы Сбербанка. Протокол https, по которому
            проходит авторизация платежа, делает эту операцию безопасной для
            вас.
          </p>
          <p>
            Вы можете проверить наш SSL-сертификат, на странице, где будете
            вводить данные своей кредитной карты или на любой защищенной
            странице нашего сайта, нажав на значок в нижнем правом углу вашего
            браузера.
          </p>
        </div>
        <div className="section">
          <p>
            <span>
              * Вы самостоятельно осуществляете перевод стоимости заказа с
              указанием его номера с помощью банковского терминала или
              автоматизированных банковских приложений на указанный номер
              банковской карты.
            </span>
          </p>
          <p>
            <span>
              Перевод поступает в течении 5-10минут с момента оплаты, после чего
              статус заказа меняется на "ОПЛАЧЕН".
            </span>
          </p>
          <p>
            <span>
              Клиент получает смс-уведомление об изменении статуса заказа.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export { DeliveryPage };
