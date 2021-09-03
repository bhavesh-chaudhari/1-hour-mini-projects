const inputDiv = document.getElementById("input");
const outputDiv = document.getElementById("output");

const inputDate1 = document.getElementById("date1");
const inputDate2 = document.getElementById("date2");
const selectBirthMonth = document.getElementById("birth-month");
const selectAtMonth = document.getElementById("at-month");
const birthYear = document.getElementById("birth-year");
const atYear = document.getElementById("at-year");

const calculateAgeBtn = document.getElementById("calculate-btn")

const monthsArray = [
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

const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

monthsArray.forEach((month, index)=>{
    selectBirthMonth.innerHTML += `<option value=${index + 1}>${month}</option>`;
    selectAtMonth.innerHTML += `<option value=${index + 1}>${month}</option>`;
})

const calculateAge = ()=>{
  const date1 = inputDate1.value;
  const date2 = inputDate2.value;
  const month1 = selectBirthMonth.value;
  const month2 = selectAtMonth.value;
  const year1 = birthYear.value;
  const year2 = atYear.value;

  const birthDate = new Date(month1 + "/" + date1 + "/" + year1);
  const atDate = new Date(month2 + "/" + date2 + "/" + year2);

    console.log(birthDate.getYear(), atDate)

    showOutput(birthDate, atDate)
}


calculateAgeBtn.addEventListener("click",()=>calculateAge())


const outputContent = document.getElementById('output-content')

const showOutput = (birthdate, atdate) =>{

    atSomeDate = inputDate2.value + "/ " + monthsArray[selectAtMonth.value - 1] + "/ " + atYear.value + " (" + daysArray[atdate.getDay()] + ")"
    console.log(atSomeDate);
    const dayDuration = 24;

    // Total difference in years and remaining months, days.
    const daysInMonth = (month, year)=>{
      return new Date(year, month, 0).getDate()
    }

    let timeDiffInSeconds = Math.abs(atdate - birthdate) / 1000;
    timeDiff = timeDiffInSeconds / (60*60*24)
    diffYears = Math.abs(Math.floor(timeDiff/365.25))

    let RemainingDays_Year = (Number(inputDate2.value) >= Number(inputDate1.value)) ? Number(inputDate2.value) - Number(inputDate1.value) : (daysInMonth(selectAtMonth.value - 1, atYear.value) - Math.abs((Number(inputDate2.value) - Number(inputDate1.value))));
    // RemainingDays_Year = 
    console.log(RemainingDays_Year)
    
    // let RemainingMonths = (selectAtMonth.value > selectBirthMonth.value) ? Math.abs(selectAtMonth.value  - selectBirthMonth.value) : 12 - Math.abs(selectAtMonth.value  - selectBirthMonth.value)

    if(selectAtMonth.value > selectBirthMonth.value){
      RemainingMonths = Math.abs(selectAtMonth.value - selectBirthMonth.value); 
    }
    else if (selectAtMonth.value < selectBirthMonth.value){
      RemainingMonths = 12 - Math.abs(selectAtMonth.value  - selectBirthMonth.value)
    }
    else if(selectAtMonth.value == selectBirthMonth.value){
      RemainingMonths = 0
    }


      console.log(RemainingMonths);
    // Check if the month has completed
    RemainingMonths = (inputDate2.value <= inputDate1.value && selectAtMonth.value > selectBirthMonth.value) ? RemainingMonths - 1 : RemainingMonths ;
    console.log(RemainingMonths);
    RemainingMonths = (selectAtMonth.value == selectBirthMonth.value && inputDate2.value > inputDate1.value) ? 0 : RemainingMonths ;
    console.log(RemainingMonths);

    console.log(daysInMonth(selectAtMonth.value, atYear.value));
    console.log(diffYears);
    console.log(RemainingMonths);
    console.log(RemainingDays_Year)

    // Total difference in months and remaining days
    let totalDiffMonths = (diffYears*12) + RemainingMonths
    RemainingDays_Month = RemainingDays_Year
    console.log(totalDiffMonths)
    console.log(RemainingDays_Month)

    // Total difference in weeks and remaining days
    let totalDiffWeeks = Math.floor(timeDiffInSeconds/(7*24*60*60));
    RemainingDays_Week = Math.round((timeDiffInSeconds / (7 * 24 * 60 * 60) % 1) * 7)
    console.log(totalDiffWeeks);
    console.log(RemainingDays_Week)

    // Total difference in hours
    let totalHours = Math.floor(timeDiffInSeconds/(60*60))

    let totalDays = Math.floor(totalHours/24)


    outputContent.innerHTML = "";
   if ((atdate - birthdate) > 0) {
     outputContent.innerHTML += `
                <h3>At ${atSomeDate} your Age is :</h3>
                <ul>
                    ${
                      diffYears > 0
                        ? `<li>${diffYears} ${
                            diffYears > 1 ? "years" : "year"
                          } ${RemainingMonths} ${
                            RemainingMonths == 0 || RemainingMonths == 1
                              ? "month"
                              : "months"
                          } &  ${RemainingDays_Year} ${
                            RemainingDays_Year > 1 ? "days" : "day"
                          }</li> `
                        : ""
                    }
                    ${
                      totalDiffMonths > 0
                        ? `<li>${totalDiffMonths} ${
                            totalDiffMonths > 1 ? "months" : "month"
                          } and ${RemainingDays_Month} ${
                            RemainingDays_Month > 1 ? "days" : "day"
                          }</li>`
                        : ""
                    }
                    ${
                      totalDiffWeeks > 0
                        ? `<li>${totalDiffWeeks} weeks ${RemainingDays_Week} days</li>`
                        : ""
                    }
                    ${totalDays > 0 ? `<li>${totalDays} days</li>` : ""}
                    ${totalHours > 0 ? `<li>${totalHours} hours</li>` : ""}
                    ${
                      timeDiffInSeconds / 60 > 0
                        ? `<li>${timeDiffInSeconds / 60} minutes</li>`
                        : ""
                    }
                    ${
                      timeDiffInSeconds > 0
                        ? `<li>${timeDiffInSeconds} seconds</li> `
                        : ""
                    }
                </ul>
    `;
   } else {
     outputContent.innerHTML =
       "Birth Date Must be earlier than the day at which you want to calculate the age !";
   }
}