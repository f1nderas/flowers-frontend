import "./ClientReviewsCard.scss";

const ClientReviewsCard = ({ name, body }) => {
  return (
    <>
      <div className="client-reviews_item">
        <div className="client-reviews_item-tit">{name}</div>
        <div className="client-reviews_item-txt">{body}</div>
      </div>
    </>
  );
};

export default ClientReviewsCard;
