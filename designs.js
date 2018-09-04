// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // TODO: set values for height and width (columns and rows), table (canvas), submit button (sizePicker), color
  let inputHeight = $("#input_height").val();
  let inputWidth = $("#input_width").val();
  let sizePicker = $("#sizePicker").val();
  const canvas = $("#pixel_canvas");
  // TODO: while submitting new values (input_height and input_width) the previous grid is removed and new gird is created
  canvas.empty();
  // TODO: nested loops - setting the size of the table as an N (height /h/ rows) by M (width /w/ columns) grid
  for (w = 1; w <= inputHeight; w++) {
    let row = $("<tr></tr>");
    canvas.append(row);
    for (h = 1; h <= inputWidth; h++) {
      row.append("<td></td>");
    }
  }
}
// TODO: manipulate DOM elements
// TODO: remove 'Lab:'
$("h1")
  .text("Pixel Art Maker")
  .css("color", "black");
// TODO: remove 'Choose Grid Size'
$("body")
  .find("h2")
  .eq(0)
  .remove();
// TODO: change font size for grids h and w
$("form")
  .addClass("font-size")
  .css({ "font-size": "18px" });
// TODO: change a font-weight property
$("form")
  .addClass("font-weight")
  .css({ "font-weight": "bold" });
// TODO: change font size for <h2>
$("h2")
  .addClass("font-size")
  .css({ "font-size": "18px" });
// TODO: change text in <h2>Pick a color</h2>
$("body")
  .find("h2")
  .eq(0)
  .text("Pick a color ");
// TODO: change margin for h2: Pick a color
$("h2:first-of-type").css({ "margin-top": "1em" });
// TODO: move color button to the right of 'Pick a color'
$(":button, input[type=color]").appendTo("h2:first");
// TODO: change size of the color button
$("#colorPicker").css({ width: "58", height: "28", cursor: "pointer" });
// TODO: change bottom margin for Design Canvas
$("h2").css({ margin: "0.75em 0 0.75em" });
// TODO: create rounded submit button
$("form")
  .find("input[type=submit]")
  .addClass("input[type=submit]")
  .css({ "border-radius": "6px" });
// TODO: change size of submit button
$("form")
  .find("input[type=submit]")
  .css({ width: "70", height: "35"});
// TODO: add a value to the submit button
$("form")
  .find("input[type=submit]")
  .val("Submit");
// TODO: set a max value for height
$("form")
  .find("#input_height")
  .attr("max", "50");
// TODO: set a max value for width
$("form")
  .find("#input_width")
  .attr("max", "50");

// TODO: call the makeGrid when submitting the form
$("#sizePicker").on("submit", function(event) {
  makeGrid();
  event.preventDefault();
}),
  // TODO: choose color and assign it to a cell
  $("#pixel_canvas").on("click", "td", function() {
    const canvas = $("#pixel_canvas");
    let colorPicker = $("#colorPicker").val();
    // TODO: assign color to a cell
    $(this).css("background", colorPicker);
  });