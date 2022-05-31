import "./style.css";
import { IoMdTrash } from "react-icons/io";

function Card({ description, type, value }) {
  return (
    <li className="card__content">
      <span className={'card__detail' + (type !== "Despesa" ? '--green' : '--grey')}></span>
      <div className="position__valueTrash">
        <span className="card__title">{description}</span>
        <span className="card__type">{type}</span>
      </div>
      <span className="value__content">$ {value},00</span>
      <button onClick={() => console.log()} className="trash__detail">
        <IoMdTrash />
      </button>
    </li>
  );
}

export default Card;
