var pascalTriangle = function(rows){
  var triangle = [];
  if(rows <= 0){
    return triangle;
  }
  for(var i = 0; i < rows; i++){
    var row = [];
    for(var j = 0; j<i+1; j++){
      if (j === 0 || j === i){
        row.push(1);
      } else {
        row.push(triangle[i-1][j-1] + triangle[i-1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}

console.log(pascalTriangle(6));