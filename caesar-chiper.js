// variable alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// define initial value crypt
let crypText = "";

// Function Encryption Text
const encrypt = (text, key) => {
  // Loop input text
  for (let i = 0; i < text.length; i++) {
    // loop alphabet variable
    for (let j = 0; j < alphabet.length; j++) {
      // if letter text same as alphabet variable true
      if (text[i].toLowerCase() == alphabet[j]) {
        console.log(alphabet[j]);
        // create variable indexCrypt to hold data j
        let indexCryp = j;
        // loop to add variable indexCrypt depends how many keys
        for (let k = 0; k <= key; k++) {
          indexCryp++;
          // if variable indexCrypt lebih dari length alphabet so indexCrypt will be 0
          if (indexCryp > alphabet.length) {
            indexCryp = 1;
          }
          console.log(indexCryp);
          // cek if this is the last loop
          if (k === key) {
            // append letter alphabet to cryptText
            crypText += alphabet[indexCryp - 1];
          }
        }
      }
    }
  }
  return (document.querySelector(".result").textContent = crypText);
};

const decrypt = (text, key) => {
  // Loop input text
  for (let i = 0; i < text.length; i++) {
    // loop alphabet variable
    for (let j = 0; j < alphabet.length; j++) {
      // if letter text same as alphabet variable true
      if (text[i].toLowerCase() == alphabet[j]) {
        console.log(alphabet[j]);
        // create variable indexCrypt to hold data j
        let indexCryp = j;
        console.log(j);
        // loop to add variable indexCrypt depends how many keys
        for (let k = 0; k <= key; k++) {
          if (indexCryp < 0) {
            indexCryp = 24;
          } else {
            indexCryp--;
          }
          console.log(indexCryp);
          // cek if this is the last loop
          if (k === key) {
            // append letter alphabet to cryptText
            crypText += alphabet[indexCryp + 1];
          }
        }
      }
    }
  }
  return (document.querySelector(".result").textContent = crypText);
};

// Function button to run encrypt function
const caesarChiperEn = () => {
  let text = document.querySelector(".text").value;
  let key = document.querySelector(".key").value;
  encrypt(text, Number(key));
  crypText = "";
};

const caesarChiperDec = () => {
  let text = document.querySelector(".text").value;
  let key = document.querySelector(".key").value;
  decrypt(text, Number(key));
  crypText = "";
};

// ALGORITMA
// 1. get text from input
// 2. text will move depends number of key
// 3. looping text
// 4. match the text and alphabet
// 5. if letter text match with alphabet move the alphabet index depends that how many keys
// 6. append the the last looping from key to variable crypText
