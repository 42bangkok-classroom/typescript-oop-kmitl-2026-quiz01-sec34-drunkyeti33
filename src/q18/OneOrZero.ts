const onezer = Number(process.argv[2])

for (let i = 0; i < onezer; i++){
  let str =""
  if (i%2 === 0){
    for (let j =0; j < onezer ; j++){
      str += "1"
    }
    console.log(str);
  }
  else {
  for (let j = 0; j < onezer; j++){
  str += "0";
}
console.log(str)
}
}