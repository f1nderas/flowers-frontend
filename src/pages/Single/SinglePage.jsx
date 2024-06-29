import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  return (
    <>
      <h2>{id}</h2>
    </>
  );
};

export { SinglePage };
