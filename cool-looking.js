 window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  var doodle = new Doodle(context);

  context.save();


  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 + (5*i),
      startY: 1000,
      endX: 0,
      endY: 5 * i,
    })
    doodle.children.push(newLine);
  }

 var text = new Text({ left: 800, height: 300, content: "this is a doodle" });

  doodle.children.push(text);

//bottom left corner
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 - (5*i),
      startY: 1000,
      endX: 5 * i,
      endY: 500 + (5*i),
    })
    doodle.children.push(newLine);
  }

  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 + (5*i),
      startY: 1000,
      endX: 5 * i,
      endY: 500 + (5*i),
    })
    doodle.children.push(newLine);
  }

  //cool mountainous thing

  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 * i,
      startY: 1000,
      endX: 500 + (5*i),
      endY: 5*i,
    })
    doodle.children.push(newLine);
  }
  
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 * i,
      startY: 1000,
      endX: 500 + (5*i),
      endY: 5*i,
    })
    doodle.children.push(newLine);
  }

// fan from left
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 0,
      startY: 100 + i,
      endX: 400 + i,
      endY: 5*i,
    })
    doodle.children.push(newLine);
  }
  
  doodle.draw();
};
