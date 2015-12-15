
$(document).ready(function()
{
  initBuild();
})

///// INIT vars
var departure = $(".departure"),
    departCalContainer = $(".cal_depart_container"),
    departCal = $(".cal_depart"),
    departDay = $(".depart_day"),
    departCalFade = $(".fade_overlay"),
    fareOverlay = $(".current_fare"),
    headerFadeDepart = $(".header_fade", ".departure"),
    headerFadeArrive = $(".header_fade", ".arrival"),
    fareStart = $("#fare_start"),
    fareEnd = $("#fare_end"),
    arrivalCal3 = $("#arrival_cal3"),
    arrivalCal2 = $("#arrival_cal2"),
    arriveDay = $("#return_day"),
    baseSpeed = 0.45,
    calIsCollapsed = false;


///// INIT build
initBuild = function() {
  TweenLite.set(departCalFade, {alpha:0});
  TweenLite.set(departDay, {alpha:0});
  TweenLite.set(headerFadeDepart, {alpha:0});
  TweenLite.set(headerFadeArrive, {alpha:0.5});
  TweenLite.set(fareEnd, {alpha:0});
  TweenLite.set(arrivalCal3, {alpha:0});
  TweenLite.set(arrivalCal2, {alpha:0});
  TweenLite.set(arriveDay, {alpha:0});
  addListeners();
}


addListeners = function() {
  console.log("departDay: ", departDay);
  departDay.on('click', collapseCal);
  departCalFade.on('click', collapseCal);
  arriveDay.on('click', selectReturnDay);
}

collapseCal = function(evt) {
  if(!calIsCollapsed) {
    calIsCollapsed = true;
    TweenLite.to(departDay, 0.15, {alpha:1});
    TweenLite.to(departCal, baseSpeed, {y:-147, ease:Power4.easeInOut});
    TweenLite.to(departCalFade, baseSpeed, {alpha:0.5});
    TweenLite.to(departCalContainer, baseSpeed, {height:107, ease:Power4.easeInOut});
    //headers
    TweenLite.to(headerFadeDepart, 0.1, {alpha:0.5});
    TweenLite.to(headerFadeArrive, 0.1, {alpha:0});
    // fare 
    TweenLite.to(fareOverlay, 0.35, {y:-95, ease:Power4.easeInOut});
    // change calendar
    TweenLite.to(arrivalCal2, 0.35, {alpha:1, delay:baseSpeed});


  } else {
    expandCal();
  }
}

expandCal = function(evt) {
  if(calIsCollapsed) {
    calIsCollapsed = false;
    // TweenLite.to(departDay, 0.15, {alpha:1}); // the day should stay selected
    TweenLite.to(departCal, baseSpeed, {y:0, ease:Power4.easeInOut});
    TweenLite.to(departCalFade, baseSpeed, {alpha:0});
    TweenLite.to(departCalContainer, baseSpeed, {height:607, ease:Power4.easeInOut});
    //headers
    TweenLite.to(headerFadeDepart, 0.1, {alpha:0});
    TweenLite.to(headerFadeArrive, 0.1, {alpha:0.5});
  } else {
    // expandCal();
  }
}

selectReturnDay = function(evt) {
  if(calIsCollapsed) {
    TweenLite.to(arriveDay, 0.25, {alpha:1});
    TweenLite.to(arrivalCal3, baseSpeed, {alpha:1});
  }
}
