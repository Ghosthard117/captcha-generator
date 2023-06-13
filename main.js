// selecting dom elements
const captchaTxtBox = document.querySelector(".captch_box input"),
refreshBtns = document.querySelector('.refresh_button'),
captchaInputBox = document.querySelector('.captch_input input'),
message = document.querySelector('.message'),
submitBtn = document.querySelector('.button')

// store generated captcha
let captcha = null

// function to generate captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7)
  const randomStringArray = randomString.split('')
  const changeString = randomStringArray.map((char) => 
  (Math.random() > 0.5 
  ? char.toUpperCase() 
  : char))
  captchaText = changeString.join(' ')
  captchaTxtBox.value = captchaText
  console.log(captchaText)
}

// generate captcha again
const refreshBtnClick = () => {
  generateCaptcha()
  captchaInputBox.value = ''
  captchaKeyUpValidate()
}

const captchaKeyUpValidate = () => {
  // toggle submit button disable class based on input field
  submitBtn.classList.toggle('disable', !captchaInputBox.value)

  if (!captchaInputBox.value) message.classList.remove('active')
}

// function to validate the entered captcha
const captchaValidate = () => {
  captchaText = captchaText
  .split('')
  .filter((char) => char !== ' ')
  .join('')

  message.classList.add('active')

  // captcha validation
  if (captchaInputBox.value === captchaText) {
    message.innerText = "Captcha is correct"
    message.style.color = '#826afb'
  } else {
    message.innerText = "Captcha is incorrect"
    message.style.color = '#ff2525'
  }
}

// add event listeners for refresh button, captchaInputBox, and submit button
refreshBtns.addEventListener('click', refreshBtnClick) 
captchaInputBox.addEventListener('keyup', captchaKeyUpValidate)
submitBtn.addEventListener('click', captchaValidate)

// generate a captcha when the page loads
generateCaptcha()
