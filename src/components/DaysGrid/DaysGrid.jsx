/* eslint-disable react/prop-types */
import moment from "moment/moment";
import styles from "./DaysGrid.module.css";

export const DaysGrid = ({startDay}) => {
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const currentDay = moment().format("MMMM Do YYYY");
  const isCurrentMonth = (date) => moment().month() === moment(date).month();

  return (
    <div className={styles.grid}>
      {daysArray.map((item) => (
        <div
          className={`${styles.cellWrapp} ${
            item.format("MMMM Do YYYY") === currentDay ? styles.active : ""
          } ${isCurrentMonth(item) ? styles.other : ""}`}
          key={item}
        >
          {item.format("D")}
        </div>
      ))}
    </div>
  );
};
