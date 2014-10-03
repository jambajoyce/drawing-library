window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  var doodle = new Doodle(context);

  context.save();

 //BLACK RECTANGLES 
  var black1 = new Container({ 
    width: 75,
    height: 300,
    left: 0,
    top: 150,
    fill: "black",
    borderWidth: 0,
  });
  var black2 = new Container({ 
    width: 75,
    height: 475,
    left: 225,
    top: 150,
    fill: "black",
    borderWidth: 0,
  });
  var black3 = new Container({ 
    width: 350,
    height: 125,
    left: 600,
    top: 575,
    fill: "black",
    borderWidth: 0,
  });
  var black4 = new Container({ 
    width: 150,
    height: 100,
    left: 1150,
    top: 350,
    fill: "black",
    borderWidth: 0,
  });
  doodle.children.push(black1);
  doodle.children.push(black2);
  doodle.children.push(black3);
  doodle.children.push(black4);

 //BLUE RECTANGLES 
  var blue1 = new Container({ 
    width: 525,
    height: 100,
    left: 75,
    top: 50,
    fill: "#0d1694",
    borderWidth: 0
  });
  var blue2 = new Container({ 
    width: 350,
    height: 100,
    left: 800,
    top: 50,
    fill: "#0d1694",
    borderWidth: 0
  });
  var blue3 = new Container({ 
    width: 125,
    height: 125,
    left: 950,
    top: 450,
    fill: "#0d1694",
    borderWidth: 0
  });
  var blue4 = new Container({ 
    width: 200,
    height: 100,
    left: 600,
    top: 350,
    fill: "#0d1694",
    borderWidth: 0
  });
  doodle.children.push(blue1);
  doodle.children.push(blue2);
  doodle.children.push(blue3);
  doodle.children.push(blue4);

// RED RECTANGLES
  var red1 = new Container({ 
    width: 150,
    height: 175,
    left: 75,
    top: 450,
    fill: "#ff0d00",
    borderWidth: 0,
  });
  var red2 = new Container({ 
    width: 225,
    height: 100,
    left: 375,
    top: 350,
    fill: "#ff0d00",
    borderWidth: 0,
  });
  var red3 = new Container({ 
    width: 225,
    height: 125,
    left: 375,
    top: 575,
    fill: "#ff0d00",
    borderWidth: 0,
  });
  var red4 = new Container({ 
    width: 350,
    height: 200,
    left: 800,
    top: 150,
    fill: "#ff0d00",
    borderWidth: 0,
  });
  doodle.children.push(red1);
  doodle.children.push(red2);
  doodle.children.push(red3);
  doodle.children.push(red4);

// YELLOW RECTANGLES
  var yellow1 = new Container({ 
    width: 75,
    height: 350,
    left: 300,
    top: 350,
    fill: "#fada11",
    borderWidth: 0,
  });
  var yellow2 = new Container({ 
    width: 200,
    height: 200,
    left: 600,
    top: 150,
    fill: "#fada11",
    borderWidth: 0,
  });
  var yellow3 = new Container({ 
    width: 75,
    height: 125,
    left: 1075,
    top: 450,
    fill: "#fada11",
    borderWidth: 0,
  });
  var yellow4 = new Container({ 
    width: 75,
    height: 350,
    left: 1225,
    top: 0,
    fill: "#fada11",
    borderWidth: 0,
  });
  doodle.children.push(yellow1);
  doodle.children.push(yellow2);
  doodle.children.push(yellow3);
  doodle.children.push(yellow4);


  //borders
  var leftBorder = new Line({
    startX: 5,
    startY: 0,
    endX: 5,
    endY: 700,
    color: "black",
    lineWidth: 10
  });
  var rightBorder = new Line({
    startX: 1300,
    startY: 0,
    endX: 1300,
    endY: 700,
    color: "black",
    lineWidth: 10
  });
  var topBorder = new Line({
    startX: 5,
    startY: 0,
    endX: 1300,
    endY: 0,
    color: "black",
    lineWidth: 10
  });
  var bottomBorder = new Line({
    startX: 5,
    startY: 700,
    endX: 1300,
    endY: 700,
    color: "black",
    lineWidth: 10
  });
  doodle.children.push(leftBorder);
  doodle.children.push(rightBorder);
  doodle.children.push(topBorder);
  doodle.children.push(bottomBorder);


  var vert1 = new Line({
    startX: 75,
    startY: 0,
    endX: 75,
    endY: 625,
    color: "black",
    lineWidth: 10
  });

  var horiz1 = new Line({
    startX: 5,
    startY: 150,
    endX: 1150,
    endY: 150,
    color: "black",
    lineWidth: 10
  });

  var horiz2 = new Line({
    startX: 5,
    startY: 450,
    endX: 1300,
    endY: 450,
    color: "black",
    lineWidth: 10
  });
  var horiz3 = new Line({
    startX: 5,
    startY: 625,
    endX: 300,
    endY: 625,
    color: "black",
    lineWidth: 10
  });

  doodle.children.push(vert1);
  doodle.children.push(horiz1);
  doodle.children.push(horiz2);
  doodle.children.push(horiz3);

  var a1 = new Line({
    startX: 75,
    startY: 50,
    endX: 1150,
    endY: 50,
    color: "black",
    lineWidth: 10
  });
  var a2 = new Line({
    startX: 300,
    startY: 350,
    endX: 1300,
    endY: 350,
    color: "black",
    lineWidth: 10
  });
  var a3 = new Line({
    startX: 225,
    startY: 150,
    endX: 225,
    endY: 625,
    color: "black",
    lineWidth: 10
  });
  var a4 = new Line({
    startX: 300,
    startY: 150,
    endX: 300,
    endY: 700,
    color: "black",
    lineWidth: 10
  });
  doodle.children.push(a1);
  doodle.children.push(a2);
  doodle.children.push(a3);
  doodle.children.push(a4);

  var a5 = new Line({
    startX: 375,
    startY: 350,
    endX: 375,
    endY: 700,
    color: "black",
    lineWidth: 10
  });
  var a6 = new Line({
    startX: 525,
    startY: 150,
    endX: 525,
    endY: 350,
    color: "black",
    lineWidth: 10
  });
  var a7 = new Line({
    startX: 600,
    startY: 0,
    endX: 600,
    endY: 450,
    color: "black",
    lineWidth: 10
  });
  doodle.children.push(a5);
  doodle.children.push(a6);
  doodle.children.push(a7);

  var a8 = new Line({
    startX: 800,
    startY: 50,
    endX: 800,
    endY: 450,
    color: "black",
    lineWidth: 10
  });
  var a9 = new Line({
    startX: 1075,
    startY: 150,
    endX: 1075,
    endY: 575,
    color: "black",
    lineWidth: 10
  });
  var a10 = new Line({
    startX: 375,
    startY: 575,
    endX: 1300,
    endY: 575,
    color: "black",
    lineWidth: 10
  });
  doodle.children.push(a8);
  doodle.children.push(a9);
  doodle.children.push(a10);

  var a11 = new Line({
    startX: 600,
    startY: 575,
    endX: 600,
    endY: 700,
    color: "black",
    lineWidth: 10
  });
  var a12 = new Line({
    startX: 675,
    startY: 450,
    endX: 675,
    endY: 575,
    color: "black",
    lineWidth: 10
  });
  var a13 = new Line({
    startX: 950,
    startY: 450,
    endX: 950,
    endY: 700,
    color: "black",
    lineWidth: 10
  });
  doodle.children.push(a11);
  doodle.children.push(a12);
  doodle.children.push(a13);

  var a14 = new Line({
    startX: 1150,
    startY: 0,
    endX: 1150,
    endY: 575,
    color: "black",
    lineWidth: 10
  });
  var a15 = new Line({
    startX: 1225,
    startY: 0,
    endX: 1225,
    endY: 350,
    color: "black",
    lineWidth: 10
  });
  doodle.children.push(a14);
  doodle.children.push(a15);

  // Write some text.
  var text = new Text({ left: 1100, height: 675, content: "Inspired by Piet Mondrian" });

  doodle.children.push(text);
  
  doodle.draw();
};
