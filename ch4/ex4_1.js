var number, square, cube;

document.write("Number, Square, Cube <br /><br />");

for (number = 5; number < 16; number++)  {
    square = number * number;
    cube = number * square;
    document.write(number + ",  " + square + ",  "  + cube + "<br />");
}
