import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function registerForm() {
    const transactions = {
      description,
      type,
      value,
    };

    if (
      transactions.description !== "" &&
      transactions.type !== "" &&
      transactions.value !== ""
    ) {
      setListTransactions([...listTransactions, transactions]);
    }
  }
  return (
    <section className="form__bg">
      <form
        className="form__content"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="position__descricao">
          <label className="form__descricao">Descrição</label>
          <input
            className="form__input--descricao"
            placeholder="Digite aqui sua descrição"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />
          <label className="form__ex">Ex: Compra de roupas</label>
        </div>
        <div className="position__values">
          <div className="position__valor">
            <label className="form__valor">Valor</label>
            <input
              className="form__input--valor"
              placeholder="1            R$"
              type="number"
              value={console.log(value.split('.')[0].charAt(0).includes(0))}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="position__tipo">
            <label className="form__tipo">Tipo de valor</label>

            <select
              className="form__select"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>

        <button onClick={registerForm} className="form__btn">
          Inserir valor
        </button>
      </form>
    </section>
  );
}

export default Form;
