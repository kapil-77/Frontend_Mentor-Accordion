function toggleAccordion(question) {
  //gets immediate next element of question i.e. answer
  const answer = question.nextElementSibling

  //if answer is visible of the cliced question toggle it
  if (answer.style.display === 'block') {
    answer.style.display = 'none'
    question.querySelector('.plus').style.display = 'inline'
    question.querySelector('.minus').style.display = 'none'
  } else {
    //hide all answers and minus icons
    const accordionItems = document.querySelectorAll('.accordion-item')

    accordionItems.forEach((item) => {
      item.querySelector('.answer').style.display = 'none'
      item.querySelector('.plus').style.display = 'inline'
      item.querySelector('.minus').style.display = 'none'
    })

    //toggle if any plus icon clicked
    answer.style.display = 'block'
    question.querySelector('.plus').style.display = 'none'
    question.querySelector('.minus').style.display = 'inline'
  }
}

//Event listener when DOM fully loads
document.addEventListener('DOMContentLoaded', () => {
  //Select all question icons and attach CLICK event listener
  const AllQuestions = document.querySelectorAll('.question')
  AllQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      //toggle accordion item visibility when icon is clicked
      toggleAccordion(question)
    })
  })
})
