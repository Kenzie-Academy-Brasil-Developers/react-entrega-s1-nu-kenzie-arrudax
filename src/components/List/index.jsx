import Card from "../Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <section>
      <ul>
        {listTransactions.map(({ description, type, value }, index) =>
          description !== '' && type !== '' && value !== '' ? (
            <Card
              key={index}
              description={description}
              type={type}
              value={value}
            />
          ) : (null)
        )}
      </ul>
    </section>
  );
}
export default List;
