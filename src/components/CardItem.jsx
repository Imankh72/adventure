import { Link } from "react-router-dom";

const CardItem = ({ adventure }) => {
  const { text, image, label } = adventure;

  return (
    <li>
      <Link to="/services">
        <figure>
          <img src={image} alt={text} />
        </figure>
        <div>
          <h5>{text}</h5>
        </div>
        <div>
          <span>{label}</span>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
