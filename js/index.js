// Timeframe buttons
const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");

//Main element showing hours 
const cur = document.getElementsByClassName("cur")

//Elements showing hours last day/week/month
const pre = document.getElementsByClassName("pre")

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
fetch("data.json")
    .then(res => res.json())
    .then(data => console.log(data))
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
