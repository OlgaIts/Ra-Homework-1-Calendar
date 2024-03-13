import {Calendar} from "./components/Calendar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.datepicker}>
      <Calendar />
    </div>
  );
}

export default App;
