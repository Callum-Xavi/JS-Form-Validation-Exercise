
const form = document.querySelector("#example-form")
// event "handler"
form.addEventListener("submit", (event) => {
    const ageInput = document.querySelector("#age-input")
    const age = ageInput.value
    let ageValidationResult = ageValidator(age)

    if (ageValidationResult) {
      // ONLY PUT THE VALUE INTO OUTPUT
      // if it passes validation
      const outputTarget = document.querySelector("#output")
      outputTarget.innerHTML = "<p>Age: " + ageInput.value + "</p>"
      // clear the values from the form
      ageInput.value = ""
    } else {
      console.log("Can not submit!");
    }





    // prevent submission
    event.preventDefault()
})

const ageInput = document.querySelector("#age-input")
ageInput.addEventListener("keyup", () => {
    const age = ageInput.value
    ageValidator(age)
})

const ageValidator = (age) => {
    // console.log(age)
    const numberAge = Number(age)
    if (!isNaN(numberAge)) {
        if (numberAge < 0 || numberAge > 114) {
            // handle this error message
            console.log("Invalid age! Too young or old.")
            // display in HTML
            const errorBox = document.querySelector("#age-error")
            errorBox.innerText = "Invalid age! Too young or old."
            return false;
        } else {
            const errorBox = document.querySelector("#age-error")
            errorBox.innerText = ""
            return true;
        }
    } else {
        // handle this error message
        console.log("Age is not a valid number!")
        const errorBox = document.querySelector("#age-error")
        errorBox.innerText = "Age is not a valid number!"
        return false;
    }
}


// Stage 1:
// const ageInput = document.querySelector("#age-input")
// ageInput.addEventListener("change", () => {
//     const age = ageInput.value
//     const numberAge = Number(age)
//     if (!isNaN(numberAge)) {
//         console.log("It's a number!")
//         // check it's a valid age -> 0 to 114
//         if (numberAge < 0 || numberAge > 114) {
//             console.log("Invalid age! Too young or old.")
//         } else {
//             console.log("This is a valid age")
//         }
//     } else {
//         console.log("Age is not a valid number!")
//     }
//     /*
//     Edge case:
//     all the scenarios you have to think of
//     that are unlikely but valid (or unlikely and invalid)
//     when you are validating a figure, depending on who your users are/what data you are storing.
//      */
// })
