export const isPalindromo = (originalSentence) => {


    let sentence = originalSentence.replace(/\s/g, "").toLowerCase()

    let backSentence = sentence.split('').reverse().join("")

    const palindromoStatus = sentence == backSentence

    return palindromoStatus

}

export const yungestPeople = (people) => people.filter((person) => {


    return (person.age < 18 ? person : "")

})

export const fizzFizz = (number) => {


    parseInt(number)


    return (number % 5 == 0 && number % 3 == 0) ? "FizzBuzz" :
        number % 5 == 0 ? "Buzz" :
            number % 3 == 0 ? "Fizz" : number.toString()

}
