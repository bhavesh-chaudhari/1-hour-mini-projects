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

    //  console.log(birthDate, atDate)

    /* calculating difference between dates, method from SO - 
    https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript */

  diffTime = Math.abs(atDate - birthDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");

  calculateAge.birthDate = birthDate;
  calculateAge.atDate = atDate;

}

calculateAgeBtn.addEventListener("click",()=>calculateAge())

console.log(calculateAge.birthDate);

const outputContent = document.getElementById('output-content')

const showOutput = () =>{

}