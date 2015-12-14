
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
    calIsCollapsed = false;


///// INIT build
initBuild = function() {
  TweenLite.set(departCalFade, {alpha:0});
  TweenLite.set(departDay, {alpha:0});
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
    TweenLite.to(departCal, 0.45, {y:-147, ease:Power4.easeInOut});
    TweenLite.to(departCalFade, 0.45, {alpha:0.5});
    TweenLite.to(departCalContainer, 0.45, {height:107, ease:Power4.easeInOut});
  } else {
    expandCal();
  }
}

expandCal = function(evt) {
  if(calIsCollapsed) {
    calIsCollapsed = false;
    // TweenLite.to(departDay, 0.15, {alpha:1}); // the day should stay selected
    TweenLite.to(departCal, 0.45, {y:0, ease:Power4.easeInOut});
    TweenLite.to(departCalFade, 0.45, {alpha:0});
    TweenLite.to(departCalContainer, 0.45, {height:607, ease:Power4.easeInOut});
  } else {
    // expandCal();
  }
}
