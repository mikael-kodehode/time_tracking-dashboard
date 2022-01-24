data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
// Timeframe buttons
const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");

//Main elements showing hours
const workHours = document.querySelector("#work-hours");
const playHours = document.querySelector("#play-hours");
const studyHours = document.querySelector("#study-hours");
const excerciseHours = document.querySelector("#excercise-hours");
const socialHours = document.querySelector("#social-hours");
const selfCareHours = document.querySelector("#self-care-hours");
//Creating an array for easy use
const hoursArr = [workHours, playHours, studyHours, excerciseHours, socialHours, selfCareHours];

//Elements showing hours last day/week/month
const workLast = document.querySelector("#work-last");
const playLast = document.querySelector("#play-last");
const studyLast = document.querySelector("#study-last");
const excerciseLast = document.querySelector("#excercise-last");
const socialLast = document.querySelector("#social-last");
const selfCareLast = document.querySelector("#self-care-last");
//Same, creating an array for easy use
const lastArr = [workLast, playLast, studyLast, excerciseLast, socialLast, selfCareLast];

//Function that resets the active button
function addOpacity() 
{
    const timeframe = [dailyBtn, weeklyBtn, monthlyBtn]
    for (let x = 0; x < timeframe.length; x++) 
    {
        timeframe[x].classList.remove("active-timeframe");
        timeframe[x].classList.add("opacity");
    }
}

//A switch based on a specific parameter from each event listener deciding what timeframe to show.
function showHours(number) 
{
    addOpacity()
    switch (number)
    {
        case 1:
            dailyBtn.classList.remove("opacity");
            dailyBtn.classList.add("active-timeframe");
            for (x in hoursArr) 
            {        
                if (data[x].timeframes.daily.current === 1) 
                {
                    hoursArr[x].innerHTML = "1hr";
                }
                else 
                {
                    hoursArr[x].innerHTML = `${data[x].timeframes.daily.current}hrs`;
                }
                if (data[x].timeframes.daily.previous === 1) 
                {
                    lastArr[x].innerHTML = `Last day - ${data[x].timeframes.daily.previous}hr`;
                }
                else
                {
                    lastArr[x].innerHTML = `Last day - ${data[x].timeframes.daily.previous}hrs`;
                }
            }
            break
        case 2:
            weeklyBtn.classList.remove("opacity");
            weeklyBtn.classList.add("active-timeframe");
            for (x in hoursArr) 
            {        
                if (data[x].timeframes.weekly.current === 1) 
                {
                    hoursArr[x].innerHTML = "1hr";
                }
                else 
                {
                    hoursArr[x].innerHTML = `${data[x].timeframes.weekly.current}hrs`;
                }
                if (data[x].timeframes.weekly.previous === 1) 
                {
                    lastArr[x].innerHTML = `Last day - ${data[x].timeframes.weekly.previous}hr`;
                }
                else
                {
                    lastArr[x].innerHTML = `Last day - ${data[x].timeframes.weekly.previous}hrs`;
                }
            }
            break
        case 3:
            monthlyBtn.classList.remove("opacity");
            monthlyBtn.classList.add("active-timeframe");
            for (x in hoursArr) 
            {        
                if (data[x].timeframes.monthly.current === 1) 
                {
                    hoursArr[x].innerHTML = "1hr";
                }
                else 
                {
                    hoursArr[x].innerHTML = `${data[x].timeframes.monthly.current}hrs`;
                }
                if (data[x].timeframes.monthly.previous === 1) 
                {
                    lastArr[x].innerHTML = `Last day - ${data[x].timeframes.monthly.previous}hr`;
                }
                else
                {
                    lastArr[x].innerHTML = `Last day - ${data[x].timeframes.monthly.previous}hrs`;
                }
            }
            break
        default:
            console.log("Error. Invalid entry to switch.");
    }
}

dailyBtn.addEventListener("click", function() 
{
    showHours(1);
})
weeklyBtn.addEventListener("click", function()
{
    showHours(2);
})
monthlyBtn.addEventListener("click", function() 
{
    showHours(3);
})
