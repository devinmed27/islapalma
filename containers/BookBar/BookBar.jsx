import React, { useState } from "react";
import s from "./BookBar.module.scss";
import Button from "../../components/Button/Button";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../../public/static/assets/calendar.png";
import Image from "next/image";
import Select from "react-select";

const BookBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);

  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 9, label: 9 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
  ];
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
      <div className={s.content}>
        <div className={s.inputContainer}>
          <p className={s.text}>Llegada:</p>
          <div className={s.field}>
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
            <div className={s.iconContainer}>
              <Image src={calendar} alt="calendar icon" />
            </div>
          </div>
        </div>
        <div className={s.inputContainer}>
          <p className={s.text}>Salida:</p>
          <div className={s.field}>
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
            <div className={s.iconContainer}>
              <Image src={calendar} alt="calendar icon" />
            </div>
          </div>
        </div>
        <div className={`${s.inputContainer} ${s.quantity}`}>
          <p className={s.text}>N. Adultos:</p>
          <div className={s.field}>
            <select name="adults">
              {options.map((element) => (
                <option value={element.value}> {element.label} </option>
              ))}
            </select>
          </div>
        </div>
        <div className={`${s.inputContainer} ${s.quantity}`}>
          <p className={s.text}>N. Niños:</p>
          <div className={s.field}>
            <select name="kids">
              {options.map((element) => (
                <option value={element.value}> {element.label} </option>
              ))}
            </select>
          </div>
        </div>
        <a href={url} target="_blank">
          <Button text="RESERVA" width="90px" height="30px" fontSize="13px" />
        </a>
      </div>
    </div>
  );
};

export default BookBar;
