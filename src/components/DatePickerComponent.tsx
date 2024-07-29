import { useState } from "react";

const DatePickerComponent = () => {
  const today = new Date();

  const [input1, setInput1] = useState(today.getDate());
  const [input2, setInput2] = useState(today.getMonth() + 1);
  const [input3, setInput3] = useState(today.getFullYear());

  const [years, setYears] = useState(Number);
  const [months, setMonths] = useState(Number);
  const [days, setDays] = useState(Number);

  var onlyDays = 0;
  let inputStyle =
    "border-black border-2 border-solid rounded-lg w-full h-full";

  function handleInput1(e: any) {
    //day
    setInput1(e.target.value);
  }

  function handleInput2(e: any) {
    //month
    setInput2(e.target.value);
  }

  function handleInput3(e: any) {
    //year
    setInput3(e.target.value);
  }

  function buttonPress(e: any) {
    e.preventDefault();

    onlyDays =
      (today.getFullYear() - input3) * 365 +
      (today.getMonth() + 1 - input2) * 30.42 +
      (today.getDate() - input1);

    setYears(Math.floor(onlyDays / 365));
    setMonths(
      Math.floor((onlyDays - Math.floor(onlyDays / 365) * 365) / 30.42)
    );
    setDays(
      Math.floor(
        onlyDays -
          Math.floor(onlyDays / 365) * 365 -
          Math.floor((onlyDays - Math.floor(onlyDays / 365) * 365) / 30.42) *
            30.42
      )
    );
  }

  return (
    <div className="w-full md:pt-28 sm:pt-16 pt-10">
      <div className="bg-white m-auto md:w-2/3 sm:w-5/6 w-11/12 flex-col justify-center rounded-lg">
        <div className="pt-5">
          <h1 className="md:text-7xl sm:text-5xl text-3xl text-center">
            Pick a date
          </h1>
        </div>
        <div className="md:py-10 sm:py-7 py-4 px-16 w-full grid grid-cols-3 md:grid-cols-4 md:grid-rows-1 grid-rows-2 h-[100px]">
          <div className="justify-end grid-cols-3 grid col-span-3 text-center md:text-2xl sm:text-lg text-base gap-x-2">
            <h1 className="float-start pr-2">day</h1>
            <h1 className="float-start pr-2">month</h1>
            <h1 className="float-start pr-2">year</h1>
            <input
              type="number"
              className={inputStyle}
              value={input1}
              onChange={handleInput1}
              max={31}
              min={1}
            ></input>
            <input
              type="number"
              className={inputStyle}
              value={input2}
              onChange={handleInput2}
              max={12}
              min={1}
            ></input>
            <input
              type="number"
              className={inputStyle}
              value={input3}
              onChange={handleInput3}
              max={today.getFullYear()}
              min={0}
            ></input>
          </div>
          <div className="justify-self-center md:justify-self-end col-start-2 md:col-start-auto h-max pt-7 sm:pt-10 md:pt-7">
            <div className="border-black border-2 border-solid rounded-lg">
              <button
                className="px-5 py-1 md:text-2xl text-lg hover:bg-black hover:hover:text-white"
                onClick={buttonPress}
              >
                Pick
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-7 pt-14 md:text-4xl text-xl text-center">
          <h1>
            {`${years} ${years == 1 ? "year" : "years"} ${months} ${
              months == 1 ? "month" : "months"
            } ${days} ${days == 1 ? "day" : "days"}.`}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;
