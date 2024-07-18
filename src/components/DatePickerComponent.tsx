import { useState } from "react";

const DatePickerComponent = () => {
  const [input1, setInput1] = useState(Number);
  const [input2, setInput2] = useState(Number);
  const [input3, setInput3] = useState(Number);

  const [years, setYears] = useState(Number);
  const [months, setMonths] = useState(Number);
  const [days, setDays] = useState(Number);

  var onlyDays = 0;

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

    const today = new Date();

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

  const inputStyle =
    "border-black border-2 border-solid rounded-lg w-full h-full";

  return (
    <div className="w-full pt-28">
      <div className="bg-white m-auto w-2/3 flex-col justify-center rounded-lg">
        <div className="pt-5">
          <h1 className="text-7xl text-center">Pick a date</h1>
        </div>
        <div className="py-10 px-16 w-full grid grid-cols-4 h-[100px]">
          <div className="justify-end grid-cols-3 grid col-span-3 text-center text-2xl gap-x-2">
            <h1 className="float-start pr-2">day</h1>
            <h1 className="float-start pr-2">month</h1>
            <h1 className="float-start pr-2">year</h1>
            <input
              type="number"
              className={inputStyle}
              value={input1}
              onChange={handleInput1}
            ></input>
            <input
              type="number"
              className={inputStyle}
              value={input2}
              onChange={handleInput2}
            ></input>
            <input
              type="number"
              className={inputStyle}
              value={input3}
              onChange={handleInput3}
            ></input>
          </div>
          <div className="justify-self-end h-max pt-10">
            <div className="border-black border-2 border-solid rounded-lg">
              <button
                className="px-5 py-1 text-2xl hover:bg-black hover:hover:text-white"
                onClick={buttonPress}
              >
                Pick
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-20 text-4xl text-center">
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
