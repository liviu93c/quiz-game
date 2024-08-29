
  
  // Questions for Quiz 1
  const questionsQuiz1 = [
    {
        question: "How can you quickly change the program status of a lead in a program?",
        answers: [
          { text: "Go to the Setup Tab and use the 'Change Status' function", correct: false },
          { text: "Go to the members Tab and use the 'Change Status' function", correct: true },
          { text: "Go to the Tokens Tab and use the 'Change Status' Token", correct:  false },
          { text: " Go to the Assets Tab and use the 'Change Status' Asset", correct: false }
        ],
        //image: "placeholder-image.jpg" // Optional image
      },
      {
        question: "Which of the following differs when importing a list directly into a program versus importing a list into a static list?",
        answers: [
          { text: "List import mode", correct: false },
          { text: "Program acquisition", correct: true },
          { text: "Import aliases", correct: false },
          { text: "Field mappings", correct: false }
        ]
      },
      {
        question: "You have a Program with March set as the period cost. A new lead enters the Program in April. To which period will the lead's acquisition cost be attributed?",
        answers: [
          { text: "The period cost associated with the lead's acquisition Program", correct: false },
          { text: "The lead's acquisition cost will not be accounted for", correct: false },
          { text: "March", correct: true },
          { text: "April", correct: false }
        ]
      },
      {
        question: "Tags are used...",
        answers: [
          { text: "To mark custom fields", correct: false },
          { text: "To capture attributes of individual leads", correct: false },
          { text: "To locate hidden fields on forms", correct: false },
          { text: "To further categorize programs or program types", correct: true }
        ]
      },
      {
        question: "Which of the following are valid type of tokens? (Choose all that apply)",
        answers: [
          { text: "Calendar file", correct: true },
          { text: "Date", correct: true },
          { text: "Text", correct: true },
          { text: "Score", correct: true }
        ]
      },
      {
        question: "If you set up tokens at the folder level, what type of token will you see on any program within that folder?",
        answers: [
          { text: "Local Token", correct: false },
          { text: "Inherited Token", correct: true },
          { text: "Overridden Token", correct: false },
          { text: "Lead Token", correct: false }
        ]
      },
      {
        question: "What would be the appropriate success status in a webinar program?",
        answers: [
          { text: "Didn't attend", correct: false },
          { text: "Unsubscribed", correct: false },
          { text: "Attended on demand", correct: true },
          { text: "Invited", correct: false }
        ]
      },
      {
        question: "Which type of A/B test would you run if you want to test different CTAs on your email body?",
        answers: [
          { text: "Date/time", correct: false },
          { text: "From address", correct: false },
          { text: "Whole email", correct: true },
          { text: "Subject line", correct: false }
        ]
      },
      {
        question: "An engagement program stream can include... (choose all that apply)",
        answers: [
          { text: "Emails", correct: true },
          { text: "Default programs", correct: true },
          { text: "Event programs", correct: true },
          { text: "Smart campaigns", correct: false },
          { text: "Email Send programs", correct: false },
          { text: "Forms", correct: false }
        ]
      },
      {
        question: "What program type would you need to apply to a Marketo program containing your company's lead scoring rules?",
        answers: [
          { text: "Web form", correct: false },
          { text: "Event", correct: false },
          { text: "Smart program", correct: false },
          { text: "Operational", correct: true }
        ]
      },
      {
        question: "You need to mark individuals as attended as they show up to your customer appreciation dinner. Which channel and program type should you use?",
        answers: [
          { text: "Webinar channel and Event program type", correct: false },
          { text: "Email Send channel and Email program type", correct: false },
          { text: "Live Event channel and Event program type", correct: true },
          { text: "Operational program channel and Default program type", correct: false }
        ]
      },
      {
        question: "Which of the following would be appropriate success statuses in a program? (Choose all that apply)",
        answers: [
          { text: "Engaged", correct: true },
          { text: "Attended", correct: true },
          { text: "Sent", correct: false },
          { text: "Invited", correct: false }
        ]
      },
      {
        question: "You want to track a gated piece of content on your company website for number of form fills and new names. Which channel would you select?",
        answers: [
          { text: "Website", correct: false },
          { text: "Web form", correct: true },
          { text: "Default", correct: false },
          { text: "Engagement", correct: false }
        ]
      },
      {
        question: "You want to send multiple emails to the same audience at a consistent pace and time. Which program type would you select?",
        answers: [
          { text: "Email", correct: false },
          { text: "Engagement", correct: true },
          { text: "Nurture", correct: false },
          { text: "Default", correct: false }
        ]
      },
      {
        question: "You want to send an email to individuals thanking them for stopping by at an event and asking them if they would like to receive emails from you. Which program type would you select?",
        answers: [
          { text: "Tradeshow", correct: false },
          { text: "Default", correct: false },
          { text: "Event", correct: true },
          { text: "Webinar", correct: false }
        ]
      },
      {
        question: "You have 2000 leads in an engagement program, 125 of which have exhausted all the content. You recently added new content into the program at the top of the only stream in the program. How many leads will receive the new white paper at the next cast, assuming there are no deliverability issues and no additional people will be added to the program?",
        answers: [
          { text: "125", correct: false },
          { text: "875", correct: false },
          { text: "2000", correct: true },
          { text: "1125", correct: false }
        ]
      },
      {
        question: "Which types of assets can be used in an engagement program stream?",
        answers: [
          { text: "Email", correct: true },
          { text: "Report", correct: false },
          { text: "Default program", correct: true },
          { text: "Email Send program", correct: false },
          { text: "Landing Page", correct: false },
          { text: "Event program", correct: true }
        ]
      },
      {
        question: "A lead fills out a form and the marketing manager wants two actions to occur immediately A lead fills out a form and the marketing manager wants two actions to occur immediately 'Send the lead a confirmation email' and 'Change the lead's program status to Registered'. What should be done to ensure this?",
        answers: [
          { text: "Set up a smart campaign with a 'Program Status is Changed' trigger in the smart list and a 'Send Email' step in the flow", correct: false },
          { text: "Set up a smart campaign with a 'Fills out Form' trigger in the smart list and 'Send Email' and 'Change Data Value' steps in the flow", correct: false },
          { text: "Set up a smart campaign with a 'Fills out Form' trigger in the smart list and a 'Send Email' and 'Change Program Status' step in the flow", correct: true },
          { text: "Set up a smart campaign with a 'Fills out Form' trigger in the smart list and a 'Send Alert' and 'Change Program Status' step in the flow", correct: false }
        ]
      },
      {
        question: "What types of content can be added to an engagement program? (Choose all that apply)",
        answers: [
          { text: "Emails", correct: true },
          { text: "Landing pages", correct: true },
          { text: "Email programs", correct: false },
          { text: "Events", correct: true }
        ]
      },
      {
        question: "Which of the following program types would you use if creating a new channel for lead nurture?",
        answers: [
          { text: "Default", correct: false },
          { text: "Event", correct: false },
          { text: "Engagement", correct: true },
          { text: "Email", correct: false }
        ]
      },
      {
        question: "Which of the following webinar partners does Marketo not integrate with?",
        answers: [
          { text: "Cvent", correct: true },
          { text: "GoToWebinar", correct: false },
          { text: "Brightalk", correct: false },
          { text: "Adobe Connect", correct: false },
          { text: "ON24", correct: false },
          { text: "ReadyTalk", correct: false },
          { text: "Webex", correct: false }
        ]
      },
      {
        question: "Which of the following functionality is not part of the webinar integration with Marketo?",
        answers: [
          { text: "Push registrants from Marketo to the webinar provider", correct: false },
          { text: "Push attendees from the webinar provider to Marketo", correct: false },
          { text: "Share survey results from the webinar provider with Marketo", correct: true },
          { text: "Use a custom webinar login URL token in your follow-up emails and calendar invites", correct: false }
        ]
      },
      {
        question: "You would like to run a data management campaign whenever a lead's country value is populated in the database, so you can standardize the format. Which of the following triggers and filters is the best choice to accomplish this?",
        answers: [
          { text: "Data Value Changes trigger with a constraint on Country", correct: false },
          { text: "Lead is Created trigger with a filter for Country", correct: false },
          { text: "Data Values Changes trigger with a constraint on Country and Lead is Created Trigger", correct: false },
          { text: "Lead is Created trigger, Data Value Changes trigger with a constraint on Country and a filter for Country", correct: true }
        ]
      },
      {
        question: "Which of the following are use cases for using request campaign? (Choose all that apply)",
        answers: [
          { text: "Creating a campaign for sales to use from within Sales Insight", correct: true },
          { text: "Triggering a campaign using an external system via the API", correct: true },
          { text: "Adding members to an engagement program", correct: false },
          { text: "Alerting someone to follow up on a sales lead", correct: false }
        ]
      },
      {
        question: "A marketing manager needs to gate a piece of content on the company website. Which three channel and program types correspond to this activity? (Choose all that apply)",
        answers: [
          { text: "An Email program with the channel 'Email'", correct: false },
          { text: "A Default program with the channel 'Email'", correct: false },
          { text: "An Event program with the channel 'Web Form'", correct: false },
          { text: "A Default program with the channel 'Content'", correct: false },
          { text: "A Default program with the channel 'Web Form'", correct: true },
          { text: "A Default program with the channel 'Web Content'", correct: true },
          { text: "An Engagement program with the channel 'Web Content'", correct: true }
        ]
      },
      {
        question: "For which of the following types of email messages can the operational setting be used?",
        answers: [
          { text: "Newsletter", correct: false },
          { text: "New product announcement", correct: false },
          { text: "Registration confirmation", correct: true },
          { text: "Webinar invite", correct: false }
        ]
      },
      {
        question: "An organization wants to prevent over-emailing leads. Which functionality should they use?",
        answers: [
          { text: "Audit trail", correct: false },
          { text: "Remove from flow", correct: false },
          { text: "Email admin settings", correct: false },
          { text: "Communication limits", correct: true }
        ]
      },
      {
        question: "True or false: To make it easier to make changes to scoring programs in the future, you can store your score values in tokens.",
        answers: [
          { text: "TRUE", correct: true },
          { text: "FALSE", correct: false }
        ]
      },
      {
        question: "Which of the following field types allow for you to do basic math?",
        answers: [
          { text: "Score", correct: true },
          { text: "Number", correct: false },
          { text: "Formula", correct: false },
          { text: "Boolean", correct: false }
        ]
      },
      {
        question: "A marketing manager has some leads in the database that have not opened emails in the past six months. The marketing manager wants to reset their scores to 0.Which solution would work to reset their score to 0?",
        answers: [
          { text: "Smart Campaign with a flow step - CHANGE PROGRAM SUCCESS = 0", correct: false },
          { text: "Smart Campaign with a flow step - CHANGE SCORE, New Value = 0", correct: true },
          { text: "Smart List with a flow step - CHANGE DATA VALUE, New Value = 0", correct: false },
          { text: "Smart Campaign with a flow step - Add to system list 'Unscored leads'", correct: false }
        ]
      },
      {
        question: "A lead has reached a specific lead score and is then marked as sales ready. Where is this indicated?",
        answers: [
          { text: "Lead Status", correct: true },
          { text: "A flag in Admin", correct: false },
          { text: "Email Permission", correct: false },
          { text: "Lead Owner Comments", correct: false }
        ]
      },
      {
        question: "When should custom columns be added to a lead report?",
        answers: [
          { text: "To display anonymous visitors in a Web Page Activity report", correct: true },
          { text: "To change the Lead Created At time frame to show results for the fiscal year", correct: false },
          { text: "To review email statistics on number delivered, number bounced, and open rates", correct: false },
          { text: "To show how leads that were created this year have progressed through the lifecycle", correct: false }
        ]
      },
      {
        question: "A marketing manager has an engagement program with emails that have been activated and approved. The stream cadence has been set up, and the program turned on, but after the cast date, the manager can see that emails are not sent. Which step has been missed?",
        answers: [
          { text: "The quality of the deliverability is not checked.", correct: false },
          { text: "Members have not been added to the engagement program.", correct: true },
          { text: "The CRM sync with the engagement program is not activated.", correct: false },
          { text: "The engagement score has not had sufficient time to calculate.", correct: false }
        ]
      },
      {
        question: "When editing a channel, you see the same number associated with two Program statuses. Which does this imply?Select one or more of the following:",
        answers: [
          { text: "A change program status flow step will allow the Lead to move between the two statuses at any time", correct: true },
          { text: "The Smart campaign will wait 30 minutes before applying the program status", correct: false },
          { text: "The Change program status flow step will reject moving the lead to another status", correct: false },
          { text: "Each status has maximum limit of 30 leads", correct: false }
        ]
      },
      {
        question: "I want to know if the test sample size is set for 10% in an A/B test, which of the below is true?",
        answers: [
          { text: "10% will be sent out the A/B test at 1st scheduled time , 90% of audience will be sent the A/B test at the next scheduled time.", correct: false },
          { text: "Audience is divided in half, 10% receive at the first scheduled time, 90% at the second scheduled time", correct: false },
          { text: "10% of audience selected at random will receive the email at 1st scheduled time and the winner will be received by 90% of audience at the 2nd scheduled time", correct: true },
          { text: "10% will receive A variant and 90% will receive B variant at any of the schedules times", correct: false },
          { text: "none of the above", correct: false }
        ],
        image: "Q1Q123.png" // Optional image
      },
      {
        question: "Why is it important to use tags when setting up a program?",
        answers: [
          { text: "for high level reporting", correct: true },
          { text: "to increase your audience", correct: false },
          { text: "to define audience", correct: false },
          { text: "none of the above", correct: false }
        ]
      },
      {
        question: "A Marketo administrator wants to test the inclusion of the word 'budget' in an email's subject line within an emaill send program. Which two settings must be configured for this test? (Choose two)",
        answers: [
          { text: "Sample size", correct: false },
          { text: "Champion/Challenger", correct: false },
          { text: "Segment size", correct: true },
          { text: "Dynamic content", correct: true },
          { text: "Winning criteria", correct: false }
        ]
      },
      {
        question: "A marketer wants to measure the success of various lead generation programs by leveraging acquisition programs. How is the acquisition program assigned to a lead?",
        answers: [
          { text: "A lead needs to be sent to a CRM to receive an acquisition program.", correct: false },
          { text: "A lead fills out a form on a landing page in the program.", correct: true },
          { text: "A lead is added to the CRM and synced to Marketo.", correct: false },
          { text: "Admin Acquisition Program is automatically assigned to new leads.", correct: false }
        ]
      },
      {
        question: "Where can you manage program report subscriptions? (Choose two)",
        answers: [
          { text: "In the Subscription tab of the report in Marketing Activities", correct: true },
          { text: "In the Subscription tab in Marketing Activities", correct: true },
          { text: "In the Subscription tab in Analytics", correct: false },
          { text: "In the Subscription tab in Database", correct: false }
        ]
      }
  ];

  
// Questions for Quiz 2

  const questionsQuiz2 = [
    {
        question: "What is the main use of Adobe Marketo Engage?",
        answers: [
          { text: "Graphic design", correct: false },
          { text: "Video editing", correct: false },
          { text: "Marketing automation and lead management", correct: true },
          { text: "Social media scheduling", correct: false }
        ]
      },
      {
        question: "Which of the following best describes a smart campaign in Marketo?",
        answers: [
          { text: "A campaign focused on social media engagement", correct: false },
          { text: "A workflow automation tool using triggers, filters, and flows", correct: true },
          { text: "A visual content creation tool", correct: false },
          { text: "A reporting dashboard", correct: false }
        ]
      },
      {
        question: "What is a lead scoring model used for in Marketo?",
        answers: [
          { text: "To design email templates", correct: false },
          { text: "To prioritize and qualify leads based on their behavior and engagement", correct: true },
          { text: "To automate email sends", correct: false },
          { text: "To schedule social media posts", correct: false }
        ]
      },
      {
        question: "Which feature in Marketo allows you to segment your audience based on specific attributes?",
        answers: [
          { text: "Program performance", correct: false },
          { text: "Lead scoring", correct: false },
          { text: "Smart lists", correct: true },
          { text: "Landing pages", correct: false }
        ]
      },
      {
        question: "What is the purpose of a nurture campaign in Marketo?",
        answers: [
          { text: "To send out a series of targeted emails based on the buyer’s journey", correct: true },
          { text: "To generate video content", correct: false },
          { text: "To create a landing page", correct: false },
          { text: "To schedule blog posts", correct: false }
        ]
      },
      {
        question: "In Marketo, what does a program typically represent?",
        answers: [
          { text: "An organized set of related marketing activities", correct: true },
          { text: "A software application for video editing", correct: false },
          { text: "A blog post scheduler", correct: false },
          { text: "A CRM tool", correct: false }
        ]
      }
  ];

  // Questions for Quiz 3 

  const questionsQuiz3 = [
    {
        question: "What is the main use of Adobe Marketo Engage?",
        answers: [
          { text: "Graphic design", correct: false },
          { text: "Video editing", correct: false },
          { text: "Marketing automation and lead management", correct: true },
          { text: "Social media scheduling", correct: false }
        ]
      },
      {
        question: "Which of the following best describes a smart campaign in Marketo?",
        answers: [
          { text: "A campaign focused on social media engagement", correct: false },
          { text: "A workflow automation tool using triggers, filters, and flows", correct: true },
          { text: "A visual content creation tool", correct: false },
          { text: "A reporting dashboard", correct: false }
        ]
      },
      {
        question: "What is a lead scoring model used for in Marketo?",
        answers: [
          { text: "To design email templates", correct: false },
          { text: "To prioritize and qualify leads based on their behavior and engagement", correct: true },
          { text: "To automate email sends", correct: false },
          { text: "To schedule social media posts", correct: false }
        ]
      },
      {
        question: "Which feature in Marketo allows you to segment your audience based on specific attributes?",
        answers: [
          { text: "Program performance", correct: false },
          { text: "Lead scoring", correct: false },
          { text: "Smart lists", correct: true },
          { text: "Landing pages", correct: false }
        ]
      },
      {
        question: "What is the purpose of a nurture campaign in Marketo?",
        answers: [
          { text: "To send out a series of targeted emails based on the buyer’s journey", correct: true },
          { text: "To generate video content", correct: false },
          { text: "To create a landing page", correct: false },
          { text: "To schedule blog posts", correct: false }
        ]
      },
      {
        question: "In Marketo, what does a program typically represent?",
        answers: [
          { text: "An organized set of related marketing activities", correct: true },
          { text: "A software application for video editing", correct: false },
          { text: "A blog post scheduler", correct: false },
          { text: "A CRM tool", correct: false }
        ]
      }
  ];

  // Questions for Quiz 4
  
  const questionsQuiz4 = [
    {
        question: "What is the main use of Adobe Marketo Engage?",
        answers: [
          { text: "Graphic design", correct: false },
          { text: "Video editing", correct: false },
          { text: "Marketing automation and lead management", correct: true },
          { text: "Social media scheduling", correct: false }
        ]
      },
      {
        question: "Which of the following best describes a smart campaign in Marketo?",
        answers: [
          { text: "A campaign focused on social media engagement", correct: false },
          { text: "A workflow automation tool using triggers, filters, and flows", correct: true },
          { text: "A visual content creation tool", correct: false },
          { text: "A reporting dashboard", correct: false }
        ]
      },
      {
        question: "What is a lead scoring model used for in Marketo?",
        answers: [
          { text: "To design email templates", correct: false },
          { text: "To prioritize and qualify leads based on their behavior and engagement", correct: true },
          { text: "To automate email sends", correct: false },
          { text: "To schedule social media posts", correct: false }
        ]
      },
      {
        question: "Which feature in Marketo allows you to segment your audience based on specific attributes?",
        answers: [
          { text: "Program performance", correct: false },
          { text: "Lead scoring", correct: false },
          { text: "Smart lists", correct: true },
          { text: "Landing pages", correct: false }
        ]
      },
      {
        question: "What is the purpose of a nurture campaign in Marketo?",
        answers: [
          { text: "To send out a series of targeted emails based on the buyer’s journey", correct: true },
          { text: "To generate video content", correct: false },
          { text: "To create a landing page", correct: false },
          { text: "To schedule blog posts", correct: false }
        ]
      },
      {
        question: "In Marketo, what does a program typically represent?",
        answers: [
          { text: "An organized set of related marketing activities", correct: true },
          { text: "A software application for video editing", correct: false },
          { text: "A blog post scheduler", correct: false },
          { text: "A CRM tool", correct: false }
        ]
      }
  ];
  let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswerIndex = null; // Track the selected answer
let userAnswers = []; // Store user's answers for the summary
let startTime; // Variable to store the start time
let timerInterval; // Variable to store the timer interval

// Page Elements
const loginContainer = document.getElementById('login-container');
const quizSelectionContainer = document.getElementById('quiz-selection-container');
const quizContainer = document.getElementById('quiz-container');
const quizTitle = document.getElementById('quiz-title');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const loginError = document.getElementById('login-error');
const summaryContainer = document.getElementById('summary-container');
const questionCounter = document.getElementById('question-counter'); // Question counter element
const timerElement = document.getElementById('timer'); // Timer element

// Initialize
function init() {
  if (sessionStorage.getItem('loggedIn') === 'true') {
    // If user is already logged in, go to quiz selection
    loginContainer.style.display = 'none';
    quizSelectionContainer.style.display = 'flex';
  } else {
    // Show login page if not logged in
    loginContainer.style.display = 'flex';
  }
}

// Login Function
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
    // Save login status in session storage
    sessionStorage.setItem('loggedIn', 'true');
    
    loginContainer.style.display = 'none';
    quizSelectionContainer.style.display = 'flex';
  } else {
    loginError.style.display = 'block';
  }
}

// Select Quiz
function selectQuiz(quizId) {
  switch (quizId) {
    case 'quiz1':
      currentQuiz = questionsQuiz1;
      quizTitle.textContent = 'Quiz 1 - Building and managing programs';
      break;
    case 'quiz2':
      currentQuiz = questionsQuiz2;
      quizTitle.textContent = 'Quiz 2 - Building asstes';
      break;
    case 'quiz3':
      currentQuiz = questionsQuiz3;
      quizTitle.textContent = 'Quiz 3 - Defining and targeting audiences';
      break;
    case 'quiz4':
      currentQuiz = questionsQuiz4;
      quizTitle.textContent = 'Quiz 4 - Defining and targeting audiences';
      break;
  }
  quizSelectionContainer.style.display = 'none';
  quizContainer.style.display = 'block';
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  startTime = new Date(); // Set start time
  startTimer(); // Start the timer
  showQuestion();
}

// Start Timer
function startTimer() {
  timerElement.textContent = 'Time: 00:00';
  timerInterval = setInterval(updateTimer, 1000);
}

// Update Timer
function updateTimer() {
  const now = new Date();
  const elapsed = Math.floor((now - startTime) / 1000); // Time in seconds
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  timerElement.textContent = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Show Question
function showQuestion() {
  resetState();
  const currentQuestion = currentQuiz[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Update question counter
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;

  // Display the image if present
  if (currentQuestion.image) {
    const imgElement = document.createElement('img');
    imgElement.src = currentQuestion.image;
    imgElement.alt = "Question Image";
    imgElement.classList.add('question-image'); // Add a class for custom styling
    questionElement.appendChild(imgElement);
  }

  // Check if it's the last question
  if (currentQuestionIndex === currentQuiz.length - 1) {
    nextButton.textContent = 'Finish Quiz'; // Change button text for the last question
  } else {
    nextButton.textContent = 'Next'; // Default button text
  }

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index, button));
    answerButtonsElement.appendChild(button);
  });

  nextButton.style.display = 'block'; // Ensure the next button is visible
}

// Reset State
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  nextButton.style.display = 'none';
  resultContainer.textContent = '';
  selectedAnswerIndex = null; // Reset the selected answer
}

// Select Answer
function selectAnswer(selectedIndex, buttonElement) {
  selectedAnswerIndex = selectedIndex;

  // Highlight the selected answer
  const buttons = answerButtonsElement.children;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected-answer');
  }
  buttonElement.classList.add('selected-answer');

  nextButton.style.display = 'block';
}

// Next Question
function nextQuestion() {
  if (selectedAnswerIndex === null) return; // Ensure an answer was selected

  const currentQuestion = currentQuiz[currentQuestionIndex];
  userAnswers.push({
    question: currentQuestion.question,
    correctAnswer: currentQuestion.answers.find(answer => answer.correct).text,
    selectedAnswer: currentQuestion.answers[selectedAnswerIndex].text,
    isCorrect: currentQuestion.answers[selectedAnswerIndex].correct
  });

  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Show Result
function showResult() {
  quizContainer.style.display = 'none';
  summaryContainer.style.display = 'block';
  clearInterval(timerInterval); // Stop the timer
  displaySummary();
}

// Calculate the Score
function calculateScore() {
  return userAnswers.filter(answer => answer.isCorrect).length;
}

// Display Summary
function displaySummary() {
  const score = calculateScore(); // Calculate the score
  const totalQuestions = currentQuiz.length; // Total number of questions
  const endTime = new Date();
  const elapsedTime = Math.floor((endTime - startTime) / 1000); // Time in seconds
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  // Create summary element
  const summaryElement = document.createElement('div');

  // Add score to the summary
  const scoreElement = document.createElement('h2');
  scoreElement.textContent = `Score: ${score}/${totalQuestions}`;
  summaryElement.appendChild(scoreElement);

  // Add time to the summary
  const timeElement = document.createElement('p');
  timeElement.textContent = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  summaryElement.appendChild(timeElement);

  // Add questions and answers to the summary
  userAnswers.forEach((answer, index) => {
    const questionElement = document.createElement('p');
    questionElement.classList.add('summary-question');
    questionElement.textContent = `${index + 1}. ${answer.question}`; // Include question number

    const selectedAnswerElement = document.createElement('p');
    selectedAnswerElement.textContent = `Your answer: ${answer.selectedAnswer}`;
    selectedAnswerElement.classList.add(answer.isCorrect ? 'correct-answer' : 'incorrect-answer');

    const correctAnswerElement = document.createElement('p');
    correctAnswerElement.textContent = `Correct answer: ${answer.correctAnswer}`;
    correctAnswerElement.classList.add('correct-answer');

    summaryElement.appendChild(questionElement);
    summaryElement.appendChild(selectedAnswerElement);
    summaryElement.appendChild(correctAnswerElement);
    summaryElement.appendChild(document.createElement('hr')); // Add a separator line
  });

  // Add "Start Over" button
  const startOverButton = document.createElement('button');
  startOverButton.textContent = 'Start Over';
  startOverButton.onclick = () => {
    summaryContainer.style.display = 'none';
    quizSelectionContainer.style.display = 'flex'; // Return to quiz selection
  };
  summaryElement.appendChild(startOverButton);

  // Clear the previous content and append new summary
  summaryContainer.innerHTML = '';
  summaryContainer.appendChild(summaryElement);
}

// Start the application
init();

// Login Credentials
const LOGIN_CREDENTIALS = {
    username: 'marketoquiz',
    password: 'marketoquiz'
  };
  
