import axios from "axios";
(async() => {
    const encryptedPhrase = (await axios.get("https://codember.dev/encrypted.txt"))["data"];
    const words = encryptedPhrase.split(" ").map((word) => {
      let chars = word.match(/([3-9][0-9]|1[0-2][0-9])/g);
      return String.fromCharCode(...chars);
    });
    
    console.log(words.join(" "));
})();