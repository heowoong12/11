import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Main1 from "./components/Main1";
import Slide from "./components/Slide";
import Buttons from "./components/Buttons";
import Listitem from "./components/Listitem";

function App(props) {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Main1 />
      </div>
      <Button className={styles.button}>더보기 +</Button>
      <Listitem title={"[동영상유포협박]"} type={"악질 협박범 공유 합니다.."} />
      <Listitem title={"[동영상노출]"} type={"불안합니다.."} />
      <Listitem title={"[몸캠피싱]"} type={"몸캠피싱 인가요?"} />
      <Listitem title={"[동영상유포협박]]"} type={"도와주세요.."} />
      <Listitem title={"[몸캠피싱]"} type={"어쩌죠"} />
      <Slide />
    </>
  );
}
function Button({ style, children }) {
  return (
    <>
      <button className={styles.button} style={style}>
        {children}
      </button>
    </>
  );
}

export default App;
