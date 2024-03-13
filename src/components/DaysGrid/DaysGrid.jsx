/* eslint-disable react/prop-types */
import moment from "moment/moment";
import styles from "./DaysGrid.module.css";

export const DaysGrid = ({startDay}) => {
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const currentDay = moment().format("MMMM Do YYYY");

  // const startOfMonth = moment().startOf("month");
  // const endOfMonth = moment().endOf("month");

  // const currentMonth = moment().month(2).startOf("month");
  // const monthDays = [...Array(31)].map(() =>
  //   currentMonth.add(1, "day").clone(),   Начинается со 2 марта, а должен с первого...
  // );       

  // console.log(monthDays); Но даже если бы получилось, все равно не знаю как это применить

  return (
    <div className={styles.grid}>
      {daysArray.map((item) => {
        return (
          <div
            className={`${styles.cellWrapp} ${
              item.format("MMMM Do YYYY") === currentDay ? styles.active : ""
            } `}
            key={item}
          >
            {item.format("D")}
          </div>
        );
      })}
    </div>
  );
};
