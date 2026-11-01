function isValidPassword(username, password) {
  let passwordStr = String(password);
  if (
    passwordStr.length > 7 &&
    !passwordStr.includes(" ") &&
    !passwordStr.includes(username)
  ) {
    return true;
  } else return false;
}

let result = isValidPassword("fatima", "ftimdjjhdhhd");
let result1 = isValidPassword("hamza", "hamza");

console.log(result);
console.log(result1);

// early return
// function isValidPassword(username, password) {
//   let passwordStr = String(password);

//   const passwordHas8Chars = passwordStr.length > 7;

//   if (!passwordHas8Chars) return false;

//   const passwordHasSpace = passwordStr.includes(" ");

//   if (passwordHasSpace) return false;

//   const passwordHasUsernime = passwordStr.includes(username);

//   if (passwordHasUsernime) return false;

//   return true;
// }

// function isValidPassword(username, password) {
//   let passwordStr = String(password);

//   const passwordHas8Chars = passwordStr.length > 7;
//   const passwordHasSpace = passwordStr.includes(" ");
//   const passwordHasUsernime = passwordStr.includes(username);

//   if (passwordHas8Chars && !passwordHasSpace && !passwordHasUsernime) {
//     return true;
//   } else return false;
// }
