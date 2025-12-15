const q14 = Number(process.argv[2])
if (isNaN(q14)){
  console.log("Not a number")
  process.exit();
}
for (let i = 0; i <= q14; i += 2) {
  console.log(i);
}