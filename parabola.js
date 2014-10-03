window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  var doodle = new Doodle(context);

  context.save();

//top left
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 - (5*i),
      startY: 0,
      endX: 0,
      endY: 5 * i,
    })
    if (i % 2 === 0) {
      newLine.color = "red";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "blue";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }
    doodle.children.push(newLine);
  }

//top right
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 + (5*i),
      startY: 0,
      endX: 1000,
      endY: 5 * i,
    })
    if (i % 2 === 0) {
      newLine.color = "red";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "cyan";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }

// bottom left
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 - (5*i),
      startY: 1000,
      endX: 0,
      endY: 1000 - (5*i),
    })
    if (i % 2 === 0) {
      newLine.color = "red";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "cyan";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }

  // bottom right
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 500 + (5*i),
      startY: 1000,
      endX: 1000,
      endY: 1000 - (5*i),

    })
    if (i % 2 === 0) {
      newLine.color = "red";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "blue";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }

//bottom left middle part
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: (5*i),
      startY: 500,
      endX: 500,
      endY: 500+ 5 * i,
    })
    if (i % 2 === 0) {
      newLine.color = "red";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "cyan";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }

//bottom right middle part
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 1000 - 5*i,
      startY: 500,
      endX: 500,
      endY: 500 + 5*i,
    })
    if (i % 2 === 0) {
      newLine.color = "fuschia";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "cyan";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }

  //bottom right middle part
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 1000 - 5*i,
      startY: 500,
      endX: 500,
      endY: 500 + 5*i,
    })
    if (i % 2 === 0) {
      newLine.color = "fuschia";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "cyan";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }
  // bottom right
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: (5*i),
      startY: 500,
      endX: 500,
      endY: 500 - (5*i),

    })
    if (i % 2 === 0) {
      newLine.color = "red";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "cyan";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }

// bottom left
  for (var i = 0; i < 100; i++) {
    var newLine = new Line ({
      startX: 1000 - (5*i),
      startY: 500,
      endX: 500,
      endY: 500 - (5*i),
    })
    if (i % 2 === 0) {
      newLine.color = "red";
    }
    if (i % 3 === 0) {
      newLine.color = "orange";
    }
    if (i % 4 === 0) {
      newLine.color = "yellow";
    }
    if (i % 5 === 0) {
      newLine.color = "green";
    }
    if (i % 6 === 0) {
      newLine.color = "cyan";
    }
    if (i % 7 === 0) {
      newLine.color = "purple";
    }

    doodle.children.push(newLine);
  }

  // Write some text.
  var text = new Text({ left: 475, height: 500, content: "Math rules!", fill: "blue" });

  doodle.children.push(text);
  
  doodle.draw();
};
