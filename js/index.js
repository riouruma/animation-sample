// anime({
//   targets: "div",
//   translateX: 250,
// });

$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: "#menu",
    anchors: ["page1", "page2", "page3", "page4"],
    navigation: {
      position: "right",
      tooltips: ["section1", "section2", "section3", "section4"],
    },
    sectionsColor: ["#fff", "#ccc", "yellow", "orange"],
  });
});
