/* Doodle Drawing Library
 *
 * Drawable and Primitive are base classes and have been implemented for you.
 * Do not modify them! 
 *
 * Stubs have been added to indicate where you need to complete the
 * implementation.
 * Please email me if you find any errors!
 */

/*
 * Root container for all drawable elements.
 */
function Doodle (context) {
    this.context = context;
    this.children = [];
}

Doodle.prototype.draw = function() {
	// Your draw code here
    var myCanvas = document.getElementById("myCanvas");
    var myCanvas_context = myCanvas.getContext("2d");

    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].visible) {
            this.children[i].draw(myCanvas_context);
        }

    };
};


/* Base class for all drawable objects.
 * Do not modify this class!
 */
function Drawable (attrs) {
    var dflt = { 
        left: 0,
        top: 0,
        visible: true,
        theta: 0,
        scale: 1,
        complete: false,
    };
    attrs = mergeWithDefault(attrs, dflt);
    this.left = attrs.left;
    this.top = attrs.top;
    this.visible = attrs.visible;
    this.theta = attrs.theta*Math.PI/180;
    this.scale = attrs.scale;
    this.complete = attrs.complete;
}

/*
 * Summary: Uses the passed in context object (passed in by a doodle object)
 * to draw itself.
 */
Drawable.prototype.draw = function(context) {
    console.log("ERROR: Calling unimplemented draw method on drawable object.");
};


/* Base class for objects that cannot contain child objects.
 * Do not modify this class!
 */
function Primitive(attrs) {
    var dflt = {
        lineWidth: 1,
        color: "black"
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);
    this.lineWidth = attrs.lineWidth;
    this.color = attrs.color;
}
Primitive.inheritsFrom(Drawable);


function Text(attrs) {
    var dflt = {
        content: "",
        fill: "black",
        font: "12pt Helvetica",
        height: 12
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);
    
    // add constructor code here

    this.content = attrs.content;
    this.font = attrs.font;
    this.fill = attrs.fill;
    this.left = attrs.left;
    this.height = attrs.height;
    return this;
}

Text.inheritsFrom(Drawable);

Text.prototype.draw = function (context) {

    // your draw code here

    context.beginPath();
    context.font = this.font;
    context.fillStyle = this.fill;
    context.fillText(this.content, this.left, this.height);

};

function DoodleImage(attrs) {
    var dflt = {
        width: -1,
        height: -1,
        src: "",
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);

    // add constructor code here
    this.src = attrs.src;   
	this.width = attrs.width;
    this.height = attrs.height;
}

DoodleImage.inheritsFrom(Drawable);

DoodleImage.prototype.draw = function (context) {
    // draw code here

    var x = this.left;
    var y = this.top;
    var width = this.width;
    var height = this.height;

    var imageObject = new Image();
    imageObject.src = this.src;


    imageObject.onload = function() {
        if (width === -1) {
            width = this.width;
        }
        if (height === -1) {
            height = this.height;
        }
        
        context.drawImage(imageObject, x, y, width, height);
    };
};


function Line(attrs) {
    var dflt = {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
    };
    attrs = mergeWithDefault(attrs, dflt);
    Primitive.call(this, attrs);
    
    // constructor code
    this.startX = attrs.startX;
    this.startY = attrs.startY;
    this.endX = attrs.endX;
    this.endY = attrs.endY;
    this.color = attrs.color;
    this.lineWidth = attrs.lineWidth;


}
Line.inheritsFrom(Primitive);

Line.prototype.draw = function (context) {
    // your draw code here
    var x1 = parseFloat(this.startX);

    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.moveTo(this.startX, this.startY);
    context.lineTo(this.endX, this.endY);
    context.stroke();

};


function Rectangle(attrs) {
    var dflt = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };
    attrs = mergeWithDefault(attrs, dflt);
    Primitive.call(this, attrs);

	// rest of constructor code here
    this.x = attrs.x;
    this.y = attrs.y;
    this.width = attrs.width;
    this.height = attrs.height;
    this.color = attrs.color;
}
Rectangle.inheritsFrom(Primitive);

Rectangle.prototype.draw = function (context) {
    // draw code here

    context.beginPath();
    context.lineWidth = this.lineWidth;
    context.strokeStyle = this.color;
    context.rect(this.x, this.y, this.width, this.height);
    context.stroke();
};

function Container(attrs) {
    var dflt = {
        width: 100,
        height: 100,
        fill: false,
        borderColor: "black",
        borderWidth: 0,
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);    
    this.children = [];
    
    // rest of constructor code here.
    this.width = attrs.width;
    this.height = attrs.height;
    this.fill = attrs.fill;
    this.borderColor = attrs.borderColor;
    this.borderWidth = attrs.borderWidth;
    this.left = attrs.left;
    this.top = attrs.top;
    this.theta = attrs.theta;

}
Container.inheritsFrom(Drawable);

Container.prototype.draw = function (context) {
    // draw code here
  
    context.beginPath();

    context.rect(this.left, this.top, this.width, this.height);

    if (this.borderWidth !== 0) {
        context.lineWidth = this.borderWidth;
        context.strokeStyle = this.borderColor;
        context.stroke();
    }


    if (this.fill !== false) {
        context.fillStyle = this.fill;
        context.fillRect(this.left, this.top, this.width, this.height);
    }
    context.closePath();

    //children draw code
    if (this.children.length > 0) {
        context.save();


        context.clip();

        for (var i = 0; i < this.children.length; i++) {
            context.save();
            if (this.children[i].visible) {
                context.translate(this.left, this.top);
                context.rotate(this.theta);
                this.children[i].draw(context);
            }
            context.restore();
        }
        context.restore();

    }
};
