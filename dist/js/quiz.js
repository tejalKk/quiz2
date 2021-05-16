function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }
  
  let questions = [
    {
      id: 1,
      question: "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
      
      answer: "15",
      options: [
        "10",
        "16",
        "13",
        "15"
      ]
    },
    {
      id: 2,
      question: " Which word is the odd man out?",
      answer: "important",
      options: [
        "trival",
        "unimportant",
        "important",
        "none of these"
      ]
    },
    {
      id: 3,
      question: "Safe : Secure :: Protect :",
      answer: "Horse",
      options: [
        "Lamb",
        " Horse",
        "Elephant",
        "None of these"
      ]
    },
  
  {
    id: 4,
    question:"Pointing to a girl in the photograph, Ajay said, Her mothers brother is the only son of my mother's father.how is the girl's mother related to Ajay?",
    answer: "Aunt",
    options: [
      "Mother",
      "Sister",
      "Aunt",
      "Grandmother"
    ]
  },
  
  {
  id: 5,
  question: "How many pairs of letters are there in the word 'NURSING which have as many letters between then as in the alphabet?",
  answer: "five",
  options: [
    "one",
    "two",
    "five",
    "None of these"
  ]
  },
  
  {
  id: 6,
  question: "6 : 18 : : 4 : ?",
  answer: "8",
  options: [
    "4",
    "8",
    "2",
    "16"
  ]
  },
  
  {
  id: 7,
  question: " Five children are sitting in a row. S is sitting next to P but not T. K is sitting next to R who is sitting on the extreme left and T is not sitting next to K. Who are sitting adjacent to S?",
  answer:  "P&T",
  options: [
    "K&P",
    "R&P",
    "only P",
    "P&T"
  ]
  },
  {
  id: 8,
  question: "In a code, CORNER is written as GSVRIV. How can CENTRAL be written in that code",
  answer: "GIRXVEP",
  options: [
    "DFOUSBM",
    "GIRXVEP",
    "GNFJKER",
    "None Of These"
  ]
  },
  {
  id: 9,
  question:"26, 12, 10, 16,",
  answer: "56",
  options: [
    "45",
    "53",
    "56",
    "None of these"
  ]
  },
  {
  id: 10,
  question: " In Arun opinion, his weight is greater than 65 kg but less than 72 kg. His brother doesn't agree with Arun and he thinks that Aruns weight is greater than 60 kg but less than 70 kg. His mother's view is that his weight cannot be greater than 68 kg. If all are them are correct in their estimation, what is the average of different probable weights of Arun?",
  answer: "67kg",
  options: [
    "76kg",
    "20kg",
    "67kg",
    "None of these"
  ]
  },
  ];
  
  
  
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 1;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  