import { Link } from "react-router-dom";

const CardItem = ({ adventure }) => {
  const { text, image, label } = adventure;

  return (
    <li className="rounded-lg w-[280px] h-[320px] overflow-hidden shadow-lg md:w-[440px] md:h-[400px]">
      <Link to="/services">
        <div className="w-full h-[180px] relative overflow-hidden md:h-[280px]">
          <img
            className="w-full h-full transition-all duration-1000 hover:scale-125"
            src={image}
            alt={text}
          />
          <div className="p-4">
            <span className="bg-blue-600 absolute bottom-1 left-1 rounded p-1 text-gray-50">
              {label}
            </span>
          </div>
        </div>
        <div className="p-4 text-lg font-semibold">
          <h5>{text}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
