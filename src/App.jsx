import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const ifToday =[
    "bg-stone-700",
     "text-white",
      "p-4",
       "rounded-xl",
  ]
console.log(ifToday.toString())

  const daysInMonths = () => {
    const daysArray = [];
    const monthsFirstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const monthsLastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );

    for (let i = 0; i < monthsFirstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= monthsLastDay.getDate(); i++) {
      daysArray.push(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
      );
    }
    return daysArray;
  };

  const handleChangeMonths = (e) =>{
    const selectedMonth = parseInt(e.target.value, 10) 
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedMonth, 1))
  }
  const handleChangeYear = (e) =>{
    const selectedYear = parseInt(e.target.value, 10) 
    setSelectedDate(new Date(selectedYear, selectedDate.getMonth(), 1))
  }
  const isToday = (date1, date2) =>{
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
  }

  return (
    <>
      <div className="drop-shadow-2xl">
        <div className="calendar w-5/6 mx-auto mt-10 drop-shadow-xl">
          <div className="calendar-Header flex justify-between p-2 bg-blue-300">
            <FaArrowCircleLeft className="text-3xl text-slate-700 drop-shadow-xl mt-2" onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth()-1, 1))}}/>
            <select value={selectedDate.getMonth()} className="px-5 p-1 rounded-lg drop-shadow-lg mt-2" onChange={handleChangeMonths}>
              {months.map((month, index) => (
                <option key={index} value={index} className="text-xl">
                  {month}
                </option>
              ))}
            </select>
            <select value={selectedDate.getFullYear()} className="px-5 p-1 rounded-lg drop-shadow-lg mt-2" onChange={handleChangeYear}>
              {Array.from(
                { length: 10 },
                (_, i) => selectedDate.getFullYear() - 5 + i
              ).map((year) => (
                <option key={year} value={year} className="text-xl">
                  {year}
                </option>
              ))}
            </select>
            <FaArrowCircleRight className="text-3xl text-slate-700 drop-shadow-xl mt-2" onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 1))}}/>
          </div>
          <div className="calendar-days grid grid-cols-7 p-6 justify-items-center font-semibold bg-blue-300">
            {days.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="calendar-body grid grid-cols-7 gap-3 justify-items-center p-4 border-4 border-slate-200 drop-shadow-md">
            {daysInMonths().map((dayDate, index) => (
              <div
                key={index}
                className={
                  dayDate ? (isToday(dayDate, new Date())) ? "bg-stone-700 text-white p-4 rounded-xl text-xl" : "p-4 text-center border-2 border-[#ccc] hover:bg-blue-400 rounded-xl transition duration-150 ease-in" : "p-5 border-2 border-[#ccc] bg-[#f9f9f9] rounded-xl"
                }
              >
                {dayDate ? dayDate.getDate() : " "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
