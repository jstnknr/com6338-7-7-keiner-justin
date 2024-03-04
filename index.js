// Your code here
//make starting button appear
//when pressed, begin series of questions each with a timer
//when pressing an answer it will progress to the next question or when timer runs out
//once answers are finished show score.
//save score to local storage and display on start page. 

var quiz = document.getElementById ('quiz')
var shit = "button"
//var startButton = quiz.createElement("button")








var questionsArr = [
    {
      question: 'Which artist is known for throwing paint and splattering paint on the canvas?',
      answer: 'Jackson Pollock',
      options: [
        'Lee Krasner',
        'Willem de Kooning',
        'Mark Rothko',
        'Franz Kline',
      ]
    },
    {
        question: 'In what year did Pablo Picasso paint Guernica?',
        answer: '1937',
        options: [
          '1935',
          '1939',
          '1952',
          '1937',
        ]
      },
      {
        question: 'Frida Kahlo was born in what country',
        answer: 'Mexico',
        options: [
          'United States',
          'Puerto Rico',
          'Mexico',
          'Spain',
        ]
      },
      {
        question: 'Who was the creator of the cyanotype?',
        answer: 'Sir John Herschel',
        options: [
          'Louis Daguerre',
          'Sir John Herschel',
          'George Eastman',
          'Nicéphore Niépce',
        ]
      },
      {
        question: 'What magazine did Annie Leibovitz begin taking photos for in 1970?',
        answer: 'Rolling Stone',
        options: [
          'Playboy',
          'Life',
          'National Geographic',
          'Rolling Stone',
        ]
      },
  ]

//function runQuiz() { 
//   var score = 0 for (let i = 0; i < questionsArr.length; i++) {
//         var playerAnswer = confirm(questionsArr[i].question) 
//         if (playerAnswer === questionsArr[i].answer) { score++ } 
//        } 
//        var finalScore = Math.round(score / questionsArr.length * 100) 
//        alert('Your score was ' + finalScore + '%') 
//    }


