var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = document.createElement("img");
img.onload = function () {
  draw();
};
img.src = "texture.png";

function draw(text) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.beginPath();

  var fontSizes = [
    120,
    116,
    112,
    108,
    102,
    98,
    92,
    88,
    82,
    78,
    72,
    68,
    62,
    58,
    52,
    48,
    42,
    36,
    ,
    32,
    28,
    26,
    22,
    12,
    10,
    5,
  ];
  var textDimensions, height;
  i = 0;
  do {
    ctx.font = fontSizes[i++] + "px stray";
    height = fontSizes[i++];

    textDimensions = ctx.measureText(text);
  } while (textDimensions.width >= canvas.width);
  ctx.textAlign = "left";
  console.log(height);
  ctx.fillText(
    text,
    ctx.canvas.width / 2 - ctx.measureText(text).width / 2,
    height
  );
  ctx.fill();

  ctx.beginPath();
  ctx.globalCompositeOperation = "source-in";
  ctx.drawImage(img, 0, 0);
  ctx.restore();
}

function create() {
  if ($("#input").val()) {
    draw($("#input").val());
    $("#output").fadeIn();
  }
}
