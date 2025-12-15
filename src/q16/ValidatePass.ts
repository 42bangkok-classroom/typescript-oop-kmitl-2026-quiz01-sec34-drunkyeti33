const password = (process.argv[2])
function hasAtLeastOneUppercase(input: string): boolean {
  return /[A-Z]/.test(input);
}
if (password.length >= 8 && hasAtLeastOneUppercase &&  (password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("0")))
{
  console.log("Valid")
}
else { console.log("Invalid")}