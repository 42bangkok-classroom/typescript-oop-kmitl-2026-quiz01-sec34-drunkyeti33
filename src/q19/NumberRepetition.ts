const numrep = Number(process.argv[2])

for (let i = 0; i < numrep; i++){
  let str =""
  if (i%2 === 0){
    for (let j =0; j < numrep ; j++){
      str += i+1
    }
    console.log(str);
  }
  else {
  for (let j = 0; j < numrep; j++){
  str += i+1;
}
console.log(str)
}
}