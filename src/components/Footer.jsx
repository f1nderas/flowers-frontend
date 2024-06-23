import "../styles/Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">Вальс цветов</div>
            <a href="tel:+79999999999" className="footer-phone">
              +79999999999
            </a>
            <div className="footer-copyright">
              © 2023 ИП Рудаков А.И. ИНН: 690200223745, ОГРНИП
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
