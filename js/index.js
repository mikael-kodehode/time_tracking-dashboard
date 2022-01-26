// Timeframe buttons
const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");

//Main element showing hours 
const curEls = document.getElementsByClassName("cur");

//Elements showing hours last day/week/month
const preEls = document.getElementsByClassName("pre");

let curArr = [];
let preArr = [];

//Function that resets the active button
function addOpacity() {
  const timeframe = [dailyBtn, weeklyBtn, monthlyBtn];
  for (let x = 0; x < timeframe.length; x++) {
      timeframe[x].classList.remove("active-timeframe");
      timeframe[x].classList.add("opacity");
  };
};

function pushHours(btn, when) {
  let i = 0;
  for (x of curEls) {
    if (curArr[i] === 1) {
      x.innerHTML = "1hr";
    } else {
      x.innerHTML = `${curArr[i]}hrs`;
    };
    i++
  };
  i = 0;
  for (x of preEls) {
    if (preArr[i] === 1) {
      x.innerHTML = `${when} - 1hr`;
    } else {
      x.innerHTML = `${when} - ${preArr[i]}hrs`;
    };
    i++
  }
  btn.classList.remove("opacity");
  btn.classList.add("active-timeframe");
};

function showStats(timeframe) {
  addOpacity();
  curArr = []
  preArr = []
  fetch("js/data.json")
    .then(res => res.json())
    .then(data => {
      switch (timeframe) {
        case daily:
          for (x in data) {
            curArr.push(data[x].timeframes.daily.current);
            preArr.push(data[x].timeframes.daily.previous);
          };
          pushHours(dailyBtn, "Yesterday")
          break
        case weekly:
          for (x in data) {
            curArr.push(data[x].timeframes.weekly.current);
            preArr.push(data[x].timeframes.weekly.previous);
          };
          pushHours(weeklyBtn, "Last week")
          break
        case monthly:
          for (x in data) {
            curArr.push(data[x].timeframes.monthly.current);
            preArr.push(data[x].timeframes.monthly.previous);
          };
          pushHours(monthlyBtn, "Last month")
          break
        default:
          for (x in data) {
            curArr.push(data[x].timeframes.weekly.current);
            preArr.push(data[x].timeframes.weekly.previous);
          };
          pushHours(weeklyBtn, "Last week")
      }    
    })
};
//Initial statistics
showStats()

dailyBtn.addEventListener("click", function() {
  showStats(daily);
})
weeklyBtn.addEventListener("click", function() {
  showStats(weekly);
})
monthlyBtn.addEventListener("click", function() {
  showStats(monthly);
})
