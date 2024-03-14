//Attributing Help: https://stackoverflow.com/questions/48599218/generate-a-random-set-from-a-limited-set-of-chars-in-javascript-using-math-rando, https://stackoverflow.com/questions/77951897/how-to-decrypt-after-adding-random-letter-after-every-two-letters-javascript
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function encrypt (message, shiftValue)
// {
//   // Your encryption code here
//   return encryptedMessage;
// }

// function decrypt (encryptedMessage, shiftValue)
// {
//   // Your decryption code here
//   return decryptedMessage;
// }

//Step 1:
//In order to return an encryptedMessage it's necessary to create a function for an encrypted message. 
function encrypt(message, shiftValue){
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++){
        let char = message[i].toLowerCase();
        if(alphabet.includes(char)){
            const index = alphabet.indexOf(char); //Finding the indexOf each character will make it possible for the letters in the encryptedMessage to shift.
            const newIndex = (index + shiftValue) % alphabet.length;  
            encryptedMessage += alphabet[newIndex]
//Step 2: I'll add a function to insert a random letter from the alphabet after every 2 letters.
                if((i + 1) % 2 === 0){
                    const randomIndex = Math.floor(Math.random() * 26);
                    encryptedMessage += alphabet[randomIndex];
                }
            } else{
                encryptedMessage += char;
            }
        }
    return encryptedMessage;
};


//Implementing the Decryption Algorithms:
function decrypt(encryptedMessage, shiftValue){
    let decryptedMessage = "";
    for (i = 0; i < encryptedMessage.length; i++){
        if ( (i+1) % 3 != 0){
            const char = encryptedMessage[i].toLowerCase();
            const index = alphabet.indexOf(char);
            if (index >= 0){
                let newIndex = index - shiftValue;
                while (newIndex < 0) newIndex += alphabet.length; //This step will ignore the extra random letters added so that the message can be decrypted properly.
                decryptedMessage += alphabet[newIndex % alphabet.length];
            } else{
                decryptedMessage += char;
            }
        }
    } 
    return decryptedMessage;
};
console.log(decrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", 42));


