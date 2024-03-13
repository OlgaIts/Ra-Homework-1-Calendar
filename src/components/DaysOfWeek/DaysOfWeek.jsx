import styles from "./DaysOfWeek.module.css";

export const DaysOfWeek = () => {
  const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return (
    <>
      <div className={styles.week}>
        {weekdays.map((item) => {
          return <div key={item}> {item} </div>;
        })}
      </div>
    </>
  );
};
