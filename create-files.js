const fs = require("fs");

for (let i = 1; i <= 30; i++) {
  const filePath = `/tmp/data/${i}.txt`;
  const content = generateRandomText(100000000); // 100MB
  fs.writeFileSync(filePath, content);
}

function generateRandomText(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



//27ce1034c84d2afb80bf14b53df23cb8282a40432112124eea623356665141da