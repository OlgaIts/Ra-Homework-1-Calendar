import moment from "moment/moment";
import "moment/locale/ru";
import styles from "./Calendar.module.css";
import {DaysGrid} from "../DaysGrid/DaysGrid";
import {DaysOfWeek} from "../DaysOfWeek/DaysOfWeek";

export const Calendar = () => {
  window.moment = moment;
  moment.updateLocale("ru", {week: {dow: 1}});
  const startDay = moment().startOf("month").startOf("week");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.dayOfWeek}>{moment().format("dddd")}</div>
        <div className={styles.date}>
          <div className={styles.dayNum}>{moment().format("D")}</div>
          <div className={styles.month}>{moment().format("MMMM")}</div>
          <div className={styles.year}>{moment().format("YYYY")}</div>
          <div className={styles.fullDate}>{moment().format("MMMM YYYY")}</div>
        </div>
      </header>
      <DaysOfWeek />
      <DaysGrid startDay={startDay} />
    </>
  );
};
