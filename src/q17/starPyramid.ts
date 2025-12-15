const star = Number(process.argv[2])
for (let i = 0; i < star; i++){
  let str = "*"
  for (let j = 0; j < star; j++){
  str += "*";
}
console.log (str)
}