import "./style.css";
function TotalMoney({ listTransactions }) {
  return (
    <>
      <section className="totalMoney__bg">
        <div className="totalMoney__conteiner">
          <h3>valor Total:</h3>
          <p className="totalMoney__value">
            $
            {listTransactions.description !== '' ? listTransactions.reduce(
              (acc, currentValue) => acc + +currentValue.value,
              0
            ) : 0},00
          </p>
        </div>
        <div className="totalMoney__p">
          <p>O valor se refere ao saldo</p>
        </div>
      </section>
    </>
  );
}

export default TotalMoney;
//
