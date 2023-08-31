import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Main1 from "./components/Main1";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Main1 />
      </div>
      <Button className={styles.button}>더보기 +</Button>
      <Button className={styles.button}>더보기 +</Button>
      <Buttons />
      <Buttons />
    </>
  );
}
function Button({ style, children }) {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
}

export default App;
