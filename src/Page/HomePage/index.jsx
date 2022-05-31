import "./style.css";
import Form from "../../components/Form";
import TotalMoney from "../../components/TotalMoney";
import List from "../../components/List";
import Filter from "../../components/FIlter";
import Header from "../../components/Header";

function HomePage({ setIsWelcome, listTransactions, setListTransactions }) {
  function notWelcome() {
    setIsWelcome(false);
  }

  return (
    <>
      <header className="header">
        <Header notWelcome={notWelcome} />
      </header>
      <main>
        <div className="conteiner__HomePage">
          <aside className="aside__position">
            <Form
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </aside>
          <article className="article__position">
            <Filter
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />

            <List listTransactions={listTransactions} />
          </article>
        </div>
      </main>
    </>
  );
}
export default HomePage;
