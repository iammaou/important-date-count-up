const DatePickerComponent = () => {
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
            <input type="number" className={inputStyle}></input>
            <input type="number" className={inputStyle}></input>
            <input type="number" className={inputStyle}></input>
          </div>
          <div className="justify-self-end h-max pt-10">
            <div className="border-black border-2 border-solid rounded-lg">
              <button className="px-5 py-1 text-2xl hover:bg-black hover:hover:text-white">
                Pick
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-20 text-4xl text-center">
          <h1>{`1 years 2 months 3 days.`}</h1>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;
