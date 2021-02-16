// let year = 2489;
let year = prompt("WE ARE GENERATION : คุณอยู่รุ่นไหน")
if(year<=2490)
{
    alert(year + "YOU ARE GENERATION BUILDERS")
    console.log (year + "YOU ARE GENERATION");
    document.getElementById("hContent").innerHTML = year + "= YOU ARE GENERATION BUILDERS";
}
else if (year>= 2490 && year<=2507)
{
    alert(year + "YOU ARE GENERATION boomers")
    console.log (year + "YOU ARE GENERATION Baby boomers ");
    document.getElementById("hContent").innerHTML = year + "= YOU ARE GENERATION Baby boomers";
}
else if (year>= 2508  && year<=2524)
{
    alert(year + "YOU ARE GENERATION Gen X")
    console.log (year + "YOU ARE GENERATION Gen. X ");
    document.getElementById("hContent").innerHTML = year + "= YOU ARE GENERATION  Gen X";
}
else if (year>=2525 && year<=2538)
{
    alert(year + "YOU ARE GENERATION Gen Y")
    console.log (year + "YOU ARE GENERATION Gen. Y");
    document.getElementById("hContent").innerHTML = year + "= YOU ARE GENERATION Gen Y";
}
else if (year>= 2539&& year<=2552)
{
    alert(year + "YOU ARE GENERATION Gen Z")
    console.log (year + "YOU ARE GENERATION Gen. Z ");
    document.getElementById("hContent").innerHTML = year + "= YOU ARE GENERATION Gen Z";
}
else if (year>= 2553)
{
    alert(year + "YOU ARE GENERATION Gen Alpha")
    console.log (year + "YOU ARE GENERATION Gen Alpha");
    document.getElementById("hContent").innerHTML = year + "= YOU ARE GENERATION Gen Alpha";
}