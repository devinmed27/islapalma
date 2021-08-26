import React, { useState } from "react";
import s from "./BookBar.module.scss";
import Button from "../../components/Button/Button";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);

  const updateDate = (newStartDate, newEndDate) => {
    const startDay = moment(newStartDate).format("DD");
    const startMonth = moment(newStartDate).format("MM");
    const startYear = moment(newStartDate).format("YYYY");
    const endDay = moment(newEndDate).format("DD");
    const endMonth = moment(newEndDate).format("MM");
    const endYear = moment(newEndDate).format("YYYY");
    setUrl(
      `${process.env.BOOK_URL_ES}&start_day=${startDay}&start_month=${startMonth}&start_year=${startYear}&end_day=${endDay}&end_month=${endMonth}&end_year=${endYear}`
    );
  };

  return (
    <div className={s.container}>
      <div className={s.inputContainer}>
        <p className={s.text}>Llegada:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setEndDate(date);
            updateDate(date, endDate);
          }}
          selectsStart
          minDate={startDate}
          startDate={startDate}
          endDate={endDate}
          withPortal
          customInput={<input type="button" className={s.input} />}
        />
      </div>
      <div className={s.inputContainer}>
        <p className={s.text}>Salida:</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => {
            setEndDate(date);
            updateDate(startDate, date);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          withPortal
          customInput={<input type="button" className={s.input} />}
        />
      </div>
      <a href={url} target="_blank">
        <Button text="RESERVA" width="90px" height="30px" fontSize="13px" />
      </a>
    </div>
  );
};

export default BookBar;
