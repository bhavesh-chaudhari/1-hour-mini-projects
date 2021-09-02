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

     console.log(birthDate, atDate)

    /* calculating difference between dates, short-trick from SO - 
    https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript */

  // diffTime = Math.abs(atDate - birthDate);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");

  // console.log(atDate.getDay())

    showOutput(birthDate, atDate)
}


calculateAgeBtn.addEventListener("click",()=>calculateAge())


const outputContent = document.getElementById('output-content')

const showOutput = (birthdate, atdate) =>{

    atSomeDate = inputDate2.value + "/ " + monthsArray[selectAtMonth.value - 1] + "/ " + atYear.value + " (" + daysArray[atdate.getDay()] + ")"
    console.log(atSomeDate);
    const dayDuration = 24;

    // Calculate difference in years, remaining months and days.
    // const diffYears = Math.abs(birthYear.value - atYear.value);
    // const diffRemainingMonths = Math.abs((selectAtMonth.value - 1)   - selectBirthMonth.value)
    // const diffRemainingDays_Year = (inputDate2.value - inputDate1.value) > 0 ? (inputDate2.value - inputDate1.value) : 0

    // // Calculate total difference in months and remaining days
    // const totalDiffMonths = (diffYears * 12) + atdate.getMonth() - birthdate.getMonth() // excluding the months which contain dates
    // const diffRemainingDays_Month = Math.abs(inputDate2.value - inputDate1.value)
    // console.log(totalDiffMonths);

    // Experimentation

    const timeDiffInMs = Math.abs(atdate - birthdate);
    const timeDiffInMinutes = timeDiffInMs/(1000*60)
    const diffYears = Math.floor(timeDiffInMinutes/(60*24*365))
    console.log(diffYears);



    

    outputContent.innerHTML = "";
    // outputContent.innerHTML += `
    //             <h3>At ${atSomeDate} your Age is :</h3>
    //             <ul>
    //                 ${diffYears > 0 ? `<li>${diffYears} ${diffYears > 1 ? "years" : "year"} ${diffRemainingMonths} ${diffRemainingMonths == 0 || diffRemainingMonths ==  1 ? "month" : "months"} &  ${diffRemainingDays_Year} ${diffRemainingDays_Year > 1 ? "days" : "day"  }</li> `: ""}
    //                 ${totalDiffMonths > 0 ? `<li>${totalDiffMonths} ${totalDiffMonths > 1 ? "months" : "month"} and ${diffRemainingDays_Month} ${diffRemainingDays_Month > 1 ? "days" : "day"}</li>` : ""}
    //                 <li>1039 weeks 0 days</li>
    //                 <li>7,273 days</li>
    //                 <li>174,552 hours</li>
    //                 <li>10,473,120 minutes</li>
    //                 <li>628,387,200 seconds</li>
    //             </ul>
    // `;
}