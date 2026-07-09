// English Tenses Questions
// Original multiple-choice questions on the twelve English tenses:
// forms, uses, and signal words.
// Format: 4 options, one correct answer (correctIndex is 0-based)

const questions = [
  {
    id: "tns001",
    question: "Which tense is used to talk about general truths and permanent facts, e.g. \"The Earth rotates round its axis\"?",
    options: ["Present continuous", "Present simple", "Present perfect", "Past simple"],
    correctIndex: 1
  },
  {
    id: "tns002",
    question: "\"The train ______ at 3 tomorrow.\" (a fixed timetable)",
    options: ["leaves", "is leave", "will leaving", "has left"],
    correctIndex: 0
  },
  {
    id: "tns003",
    question: "Which set of time phrases signals the present simple?",
    options: ["Now, at the moment, Look!", "Yesterday, two days ago, last week", "Always, often, usually, seldom", "Just, already, yet"],
    correctIndex: 2
  },
  {
    id: "tns004",
    question: "The negative of \"He works\" is:",
    options: ["He work not.", "He isn't work.", "He don't work.", "He doesn't work."],
    correctIndex: 3
  },
  {
    id: "tns005",
    question: "The past simple is used for:",
    options: ["Actions happening at the moment of speaking", "Actions completed in the past with a finished time expression", "Actions that started in the past and continue now", "Future arrangements"],
    correctIndex: 1
  },
  {
    id: "tns006",
    question: "\"He opened the door, switched on the light and fed his cat.\" — This use of the past simple describes:",
    options: ["A succession of past actions in a story", "An interrupted past action", "A past habit that continues", "Background description"],
    correctIndex: 0
  },
  {
    id: "tns007",
    question: "\"He fell asleep while the teacher ______ new grammar rules.\"",
    options: ["explained", "explains", "was explaining", "has explained"],
    correctIndex: 2
  },
  {
    id: "tns008",
    question: "\"Did she ______ to the seaside last summer?\"",
    options: ["went", "goes", "gone", "go"],
    correctIndex: 3
  },
  {
    id: "tns009",
    question: "Which sentence correctly predicts the future with \"I think...\"?",
    options: ["I think it will rain tomorrow.", "I think it rains tomorrow.", "I think it is raining tomorrow.", "I think it rained tomorrow."],
    correctIndex: 0
  },
  {
    id: "tns010",
    question: "\"Do you like these shoes?\" — \"Yes, ______ them.\" (decision made at the moment of speaking)",
    options: ["I buy", "I'm buying", "I'll buy", "I bought"],
    correctIndex: 2
  },
  {
    id: "tns011",
    question: "In modern English, \"shall\" is used mostly:",
    options: ["With he/she/it in statements", "In questions like \"Shall I...?\" and \"Shall we...?\"", "In negative commands", "In reported speech only"],
    correctIndex: 1
  },
  {
    id: "tns012",
    question: "The present continuous is formed with:",
    options: ["do/does + base verb", "have/has + past participle", "will + be + base verb", "am/is/are + verb + -ing"],
    correctIndex: 3
  },
  {
    id: "tns013",
    question: "\"Look! The boys ______ football.\"",
    options: ["are playing", "play", "played", "have played"],
    correctIndex: 0
  },
  {
    id: "tns014",
    question: "\"What are you doing on Saturday?\" — \"I ______ my friend at the station.\" (already arranged)",
    options: ["will met", "meet always", "am meeting", "have met"],
    correctIndex: 2
  },
  {
    id: "tns015",
    question: "Which time expressions typically signal the present continuous?",
    options: ["Never, seldom, rarely", "Now, at the moment, these days", "Ago, last year, in 1970", "By 5 o'clock, by then"],
    correctIndex: 1
  },
  {
    id: "tns016",
    question: "The past continuous is used to describe:",
    options: ["A completed sequence of actions", "A general truth", "A future timetable", "A temporary action in progress at a given past moment"],
    correctIndex: 3
  },
  {
    id: "tns017",
    question: "\"I ______ on the computer when the telephone rang.\"",
    options: ["was working", "worked", "am working", "have worked"],
    correctIndex: 0
  },
  {
    id: "tns018",
    question: "\"She was cooking dinner and her kids ______ TV.\" (two simultaneous past actions)",
    options: ["watched", "have watched", "were watching", "watch"],
    correctIndex: 2
  },
  {
    id: "tns019",
    question: "\"The sun was shining and the birds were singing...\" — This use of the past continuous provides:",
    options: ["A future prediction", "Background information in a story", "A polite request", "A conditional meaning"],
    correctIndex: 1
  },
  {
    id: "tns020",
    question: "\"I will be playing tennis at 10 am tomorrow.\" — This is the:",
    options: ["Future perfect", "Future simple", "Present continuous", "Future continuous"],
    correctIndex: 3
  },
  {
    id: "tns021",
    question: "\"When you arrive, he ______ for you.\"",
    options: ["will be waiting", "waits", "has waited", "was waiting"],
    correctIndex: 0
  },
  {
    id: "tns022",
    question: "In the present perfect, the only thing that matters is:",
    options: ["The exact time the action happened", "The place of the action", "The result connected with the present", "The person who performed the action"],
    correctIndex: 2
  },
  {
    id: "tns023",
    question: "\"I ______ my keys. I can't open the door.\"",
    options: ["lost", "have lost", "was losing", "had lost"],
    correctIndex: 1
  },
  {
    id: "tns024",
    question: "Questions in the present perfect never start with:",
    options: ["When", "How long", "Have", "Has"],
    correctIndex: 0
  },
  {
    id: "tns025",
    question: "Which time expressions typically accompany the present perfect?",
    options: ["Yesterday, ago, last week", "In 1970, the other day", "Tomorrow, next month", "Already, just, never, yet, so far"],
    correctIndex: 3
  },
  {
    id: "tns026",
    question: "\"Have you called your mother ______?\" (the time period is not finished)",
    options: ["yesterday", "today", "last night", "two days ago"],
    correctIndex: 1
  },
  {
    id: "tns027",
    question: "The past perfect denotes:",
    options: ["An action completed before a certain moment in the past", "A succession of past actions", "An action happening now", "A repeated present habit"],
    correctIndex: 0
  },
  {
    id: "tns028",
    question: "\"By the time the police arrived, he ______.\"",
    options: ["already disappeared", "has already disappeared", "had already disappeared", "was already disappearing"],
    correctIndex: 2
  },
  {
    id: "tns029",
    question: "\"No sooner ______ than it started to rain.\"",
    options: ["they had arrived", "had they arrived", "they arrived", "did they arrived"],
    correctIndex: 1
  },
  {
    id: "tns030",
    question: "\"I had hardly done it ______ they came.\"",
    options: ["than", "that", "as", "when"],
    correctIndex: 3
  },
  {
    id: "tns031",
    question: "\"She will have finished this work by 2 o'clock tomorrow.\" — This tense is the:",
    options: ["Future perfect", "Future continuous", "Present perfect", "Future simple"],
    correctIndex: 0
  },
  {
    id: "tns032",
    question: "Which time phrase signals the future perfect?",
    options: ["At the moment", "Every day", "By this time tomorrow", "While"],
    correctIndex: 2
  },
  {
    id: "tns033",
    question: "\"I've been learning English for six years.\" — This tense says:",
    options: ["The learning finished six years ago", "How long something has been continuing up to now", "Learning will begin in six years", "The action happened only once"],
    correctIndex: 1
  },
  {
    id: "tns034",
    question: "\"Your hands are dirty.\" — \"I ______ the walls.\"",
    options: ["paint", "am painting", "painted", "have been painting"],
    correctIndex: 3
  },
  {
    id: "tns035",
    question: "With non-progressive verbs like \"be, know, have (=own)\", instead of the present perfect continuous we use:",
    options: ["The present perfect simple", "The past continuous", "The future continuous", "The past perfect continuous"],
    correctIndex: 0
  },
  {
    id: "tns036",
    question: "\"How long ______ your car?\"",
    options: ["have you been having", "are you having", "have you had", "do you having"],
    correctIndex: 2
  },
  {
    id: "tns037",
    question: "\"We could not go out because it ______ for two hours.\"",
    options: ["rains", "had been raining", "is raining", "will rain"],
    correctIndex: 1
  },
  {
    id: "tns038",
    question: "\"The baby's face was red and wet. He ______.\" (an action no longer going on, but in progress not long before)",
    options: ["cries", "is crying", "will cry", "had been crying"],
    correctIndex: 3
  },
  {
    id: "tns039",
    question: "\"You ______ for more than two hours when her plane finally arrives.\"",
    options: ["will have been waiting", "are waiting", "have waited", "will waiting"],
    correctIndex: 0
  },
  {
    id: "tns040",
    question: "The answer to a \"How long...?\" question in the present perfect continuous usually begins with:",
    options: ["at or on", "for or since", "by or until", "ago or before"],
    correctIndex: 1
  },
  {
    id: "tns041",
    question: "\"I have been learning Japanese ______ September.\"",
    options: ["for", "during", "since", "from"],
    correctIndex: 2
  },
  {
    id: "tns042",
    question: "Which sentence uses the past perfect continuous correctly?",
    options: ["I had been working at the company for five years when I got the promotion.", "I have been worked at the company for five years when I got the promotion.", "I was been working at the company for five years when I got the promotion.", "I had being worked at the company for five years when I got the promotion."],
    correctIndex: 0
  },
  {
    id: "tns043",
    question: "\"When I wrote the letter, I posted it.\" — Both verbs are in the past simple because the sentence expresses:",
    options: ["An unreal condition", "An interrupted action", "Background description", "A succession of actions, one after the other"],
    correctIndex: 3
  },
  {
    id: "tns044",
    question: "\"It ______ a lot in autumn.\" (a general fact)",
    options: ["is raining", "rains", "has rained", "rained"],
    correctIndex: 1
  },
  {
    id: "tns045",
    question: "\"This time on Sunday I ______ in the sea.\"",
    options: ["bathe", "have bathed", "will be bathing", "was bathing"],
    correctIndex: 2
  }
];
