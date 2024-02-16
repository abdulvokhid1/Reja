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

// D-TASK:
class Shop {
  // constructor
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }
  // method
  qoldiq() {
    const now = new Date().toLocaleTimeString();
    console.log(` hozir ${now} ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta
    cola mavjud!`);
  }
  sotish(mahsulot, miqdor) {
    if (mahsulot === "non") {
      this.non -= miqdor;
    } else {
      null;
    }
  }
  qabul(mahsulot, miqdor) {
    if (mahsulot === "cola") {
      this.cola += miqdor;
    } else {
      null;
    }
  }
}
const shop = new Shop(4, 5, 2);
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
