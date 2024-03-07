//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
     e.preventDefault();
 
     document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior: 'smooth'
     });
   });
 });

//array of birthday wishes
const birthdayWishes = [
    "Wishing you a day filled with love, joy, and all the happiness you deserve on your special day.",
    "May your birthday be as beautiful and special as you are to me. Happy birthday!",
    "On your birthday, I wish you abundant happiness and love. May all your dreams become a reality. Happy birthday!",
    "Sending you warm wishes and lots of love on your birthday. May you have a fantastic day!",
    "Happy birthday to someone who brings so much joy and positivity into the lives of others. Have a wonderful day!",
    "May your birthday be the start of a year filled with good luck, good health, and much happiness. Happy birthday!",
    "Wishing you a day filled with love, laughter, and cherished moments. Happy birthday!",
    "Sending you heartfelt wishes for a birthday that's as special as you are. Happy birthday!",
    "On your special day, I want you to know how much you mean to me. Happy birthday, my dear friend!",
    "May your birthday be as bright and beautiful as you are. Happy birthday!",
    "Wishing you all the best on your birthday and throughout the year. Have a fantastic day!",
    "Sending you warm hugs and best wishes on your birthday. May it be a day full of joy and celebration!",
    "Happy birthday! May your day be filled with laughter, love, and unforgettable memories.",
    "Wishing you a day filled with laughter, love, and happiness. Happy birthday!",
    "May your birthday be filled with everything you love and more. Have a fantastic day!",
    "Happy birthday! May this year bring you all the happiness and success you deserve.",
    "Sending you heartfelt wishes on your birthday. May it be a day full of joy and blessings.",
    "On your birthday, I wish you endless happiness, love, and unforgettable moments. Happy birthday!",
    "Wishing you a birthday that's just as amazing as you are. Have a fantastic day!",
    "Happy birthday to someone who fills my life with love and laughter. Have a wonderful day!",
    "May your birthday be filled with laughter, love, and cherished memories. Happy birthday!",
    "Wishing you a day full of joy, laughter, and love on your special day. Happy birthday!",
    "Happy birthday! May your day be filled with happiness, love, and all the things that bring you joy.",
    "Sending you warm wishes and heartfelt greetings on your birthday. Have a fantastic day!",
    "On your special day, I want you to know how much you mean to me. Happy birthday!",
    "May your birthday be as special and beautiful as you are to me. Happy birthday!",
    "Wishing you all the happiness and love in the world on your birthday. Have a fantastic day!",
    "Happy birthday! May your day be filled with laughter, joy, and lots of love.",
    "Sending you warm wishes and lots of love on your birthday. May it be a day full of joy and celebration!",
    "Wishing you a birthday that's as beautiful and special as you are. Happy birthday!",
    "On your birthday, I want you to know how much you mean to me. Happy birthday!",
    "May your birthday be filled with happiness, love, and all the things you enjoy the most. Happy birthday!",
    "Sending you warm wishes and heartfelt greetings on your special day. Have a fantastic birthday!",
    "Happy birthday! May this year bring you all the happiness and success you deserve.",
    "Wishing you a day filled with love, laughter, and cherished moments. Happy birthday!",
    "On your special day, I want you to know how much you mean to me. Happy birthday, my dear friend!",
    "May your birthday be as bright and beautiful as you are. Happy birthday!",
    "Wishing you all the best on your birthday and throughout the year. Have a fantastic day!",
    "Happy birthday! May your day be filled with laughter, love, and unforgettable memories.",
    "Wishing you a day filled with joy, laughter, and love on your special day. Happy birthday!",
    "May your birthday be filled with everything you love and more. Have a fantastic day!",
    "Happy birthday to someone who fills my life with love and laughter. Have a wonderful day!",
    "Wishing you a birthday that's just as amazing as you are. Have a fantastic day!",
    "Happy birthday! May this year bring you all the happiness and success you deserve.",
    "Sending you warm wishes and heartfelt greetings on your birthday. Have a fantastic day!",
    "On your special day, I want you to know how much you mean to me. Happy birthday!",
    "May your birthday be as special and beautiful as you are to me. Happy birthday!",
    "Wishing you all the happiness and love in the world on your birthday. Have a fantastic day!",
    "Happy birthday! May your day be filled with laughter, joy, and lots of love.",
    "Sending you warm wishes and lots of love on your birthday. May it be a day full of joy and celebration!",
    "Wishing you a birthday that's as beautiful and special as you are. Happy birthday!",
    "On your birthday, I want you to know how much you mean to me. Happy birthday!",
    "May your birthday be filled with happiness, love, and all the things you enjoy the most. Happy birthday!",
    "Sending you warm wishes and heartfelt greetings on your special day. Have a fantastic birthday!",
];


//button for generating birthday wishes
const form = document.getElementById('generateButton').addEventListener('click', function(event){
    event.preventDefault()

    const birthdayWishPos = Math.floor(Math.random() * birthdayWishes.length)

    const wish = birthdayWishes[birthdayWishPos]
    const textarea = document.getElementById('wish')

    textarea.value = wish
})

//button to copy the generated wishes
document.getElementById('copyBtn').addEventListener('click', async(e)=>{
  e.preventDefault()
  const textarea = document.getElementById('wish')
  const button = document.getElementById('copyBtn')
  try {
    await navigator.clipboard.writeText(textarea.value)
    button.innerHTML = "Copied"

    setTimeout(() =>{
      getSelection().removeAllRanges()
      button.innerHTML = 'Copy'
    }, 2000)
  } catch (error) {
    alert('error')
  }
})