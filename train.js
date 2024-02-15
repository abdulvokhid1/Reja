// B TASK
function countDigits(str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      count++;
    }
  }
  return count;
}
console.log(countDigits("ojn1jbsidh8sjdfbj3bjkbdv9dijbcjrbt5"));
