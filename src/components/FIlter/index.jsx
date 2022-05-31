import "./style.css";

function Filter() {
  return (
    <section className="filter__conteiner">
      <h3 className="filter__title">Resumo financeiro</h3>
      <div>
        <button className="filter__btn filter__btn-todos">Todos</button>
        <button className="filter__btn filter__btn-entradas">Entradas</button>
        <button className="filter__btn filter__btn-despesas">Despesas</button>
      </div>
    </section>
  );
}

export default Filter;
