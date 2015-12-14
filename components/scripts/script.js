
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
    headerFadeDepart = $(".header_fade", ".departure"),
    headerFadeArrive = $(".header_fade", ".arrival"),
    baseSpeed = 0.45,
    calIsCollapsed = false;


///// INIT build
initBuild = function() {
  TweenLite.set(departCalFade, {alpha:0});
  TweenLite.set(departDay, {alpha:0});
  TweenLite.set(headerFadeDepart, {alpha:0});
  TweenLite.set(headerFadeArrive, {alpha:0.5});
  addListeners();
}


addListeners = function() {
  console.log("departDay: ", departDay);
  departDay.on('click', collapseCal);
  departCalFade.on('click', collapseCal);
}

collapseCal = function(evt) {
  if(!calIsCollapsed) {
    calIsCollapsed = true;
    TweenLite.to(departDay, 0.15, {alpha:1});
    TweenLite.to(departCal, baseSpeed, {y:-147, ease:Power4.easeInOut});
    TweenLite.to(departCalFade, baseSpeed, {alpha:0.5});
    TweenLite.to(departCalContainer, baseSpeed, {height:105, ease:Power4.easeInOut});
    //headers
    TweenLite.to(headerFadeDepart, 0.1, {alpha:0.5});
    TweenLite.to(headerFadeArrive, 0.1, {alpha:0});

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
