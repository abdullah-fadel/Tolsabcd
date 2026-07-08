// English Grammar & Language Functions Questions
// Source: "المغني في الاختبار الوطني الموحد للغة الإنكليزية" (Grammar, Language
// Functions, Written Conversation, Reading Comprehension skills)
// Format: 4 options, one correct answer (correctIndex is 0-based)

const questions = [
  // ===== Parts of Speech & Basics =====
  {
    id: "gram001",
    question: "How many parts of speech are there in English?",
    options: ["Six", "Seven", "Eight", "Ten"],
    correctIndex: 2
  },
  {
    id: "gram002",
    question: "Which sentence follows the correct order of adjectives before a noun?",
    options: ["He has a white new small Iraqi bag.", "He has a nice small new white Iraqi bag.", "He has an Iraqi small new nice white bag.", "He has a new nice white small Iraqi bag."],
    correctIndex: 1
  },
  {
    id: "gram003",
    question: "Which order of adverbs is correct in English?",
    options: ["Time + place + manner", "Place + time + manner", "Manner + time + place", "Manner + place + time"],
    correctIndex: 3
  },
  {
    id: "gram004",
    question: "\"It rained heavily in Mosul yesterday.\" The adverbs follow the order:",
    options: ["Manner, place, time", "Place, manner, time", "Time, manner, place", "Manner, time, place"],
    correctIndex: 0
  },
  {
    id: "gram005",
    question: "We use the article \"an\" before a word that begins with:",
    options: ["Any consonant letter", "A capital letter", "A vowel sound", "A silent syllable"],
    correctIndex: 2
  },
  {
    id: "gram006",
    question: "Which of these nouns does NOT normally take an indefinite article (a/an)?",
    options: ["Engineer", "Egg", "Boy", "Sugar"],
    correctIndex: 3
  },
  {
    id: "gram007",
    question: "The possessive pronoun corresponding to \"she\" is:",
    options: ["Her", "Hers", "Herself", "She's"],
    correctIndex: 1
  },
  {
    id: "gram008",
    question: "Choose the correct reflexive pronoun: \"Mark hurt ______ on the playground.\"",
    options: ["himself", "him", "his", "themselves"],
    correctIndex: 0
  },
  {
    id: "gram009",
    question: "The demonstrative used for plural distant things is:",
    options: ["This", "These", "That", "Those"],
    correctIndex: 3
  },
  {
    id: "gram010",
    question: "Which question word asks about possession?",
    options: ["Whom", "Whose", "Which", "Who"],
    correctIndex: 1
  },
  {
    id: "gram011",
    question: "\"______ did you meet there?\" — asking about a human object of the verb, the most formal choice is:",
    options: ["Who", "Which", "Whom", "Whose"],
    correctIndex: 2
  },
  {
    id: "gram012",
    question: "To ask about quantity of an uncountable noun we use:",
    options: ["How much", "How many", "How long", "How far"],
    correctIndex: 0
  },
  {
    id: "gram013",
    question: "\"______ languages can you speak?\"",
    options: ["How much", "How long", "How far", "How many"],
    correctIndex: 3
  },
  {
    id: "gram014",
    question: "The past participle (third form) of the verb \"be\" is:",
    options: ["Was", "Been", "Being", "Were"],
    correctIndex: 1
  },
  {
    id: "gram015",
    question: "Which auxiliary is used with \"he, she, it\" in the present perfect?",
    options: ["Have", "Had", "Has", "Having"],
    correctIndex: 2
  },

  // ===== Modals =====
  {
    id: "gram016",
    question: "Which of the following is a modal verb?",
    options: ["Ought", "Have", "Do", "Be"],
    correctIndex: 0
  },
  {
    id: "gram017",
    question: "To express prohibition we use:",
    options: ["Have to", "Mustn't", "Don't have to", "Had better"],
    correctIndex: 1
  },
  {
    id: "gram018",
    question: "The past form of \"can\" is:",
    options: ["May", "Must", "Should", "Could"],
    correctIndex: 3
  },
  {
    id: "gram019",
    question: "The past of \"mustn't\" (when the prohibition no longer applied) is expressed by:",
    options: ["Did not have to", "Must not have", "Could not", "Should not have"],
    correctIndex: 0
  },
  {
    id: "gram020",
    question: "\"I am on holiday, so I ______ get up early tomorrow.\"",
    options: ["must", "don't have to", "mustn't", "had better"],
    correctIndex: 1
  },
  {
    id: "gram021",
    question: "\"I feel terrible.\" — \"You ______ go to work today.\"",
    options: ["had better", "would rather", "had better not", "should have"],
    correctIndex: 2
  },
  {
    id: "gram022",
    question: "What is the difference between \"should\" and \"had better\" when giving advice?",
    options: ["Should is stronger than had better", "Had better is used only in questions", "Should refers to the past; had better to the future", "Should gives a general opinion; had better refers to a specific situation"],
    correctIndex: 3
  },
  {
    id: "gram023",
    question: "\"He must tidy his room, ______ he?\" — the correct question tag is:",
    options: ["mustn't", "doesn't", "hasn't", "won't"],
    correctIndex: 0
  },
  {
    id: "gram024",
    question: "To express necessity in the past we say:",
    options: ["He must went to the doctor.", "He had to go to the doctor.", "He has to went to the doctor.", "He must to go to the doctor."],
    correctIndex: 1
  },

  // ===== Questions =====
  {
    id: "gram025",
    question: "The yes/no question form of \"She has done her homework.\" is:",
    options: ["Does she has done her homework?", "Did she done her homework?", "Has she done her homework?", "Is she done her homework?"],
    correctIndex: 2
  },
  {
    id: "gram026",
    question: "The correct question form of \"They go to school.\" is:",
    options: ["Do they go to school?", "Are they go to school?", "Does they go to school?", "Go they to school?"],
    correctIndex: 0
  },
  {
    id: "gram027",
    question: "\"Ali went to school.\" — To ask about the subject, we say:",
    options: ["Who did go to school?", "Who did went to school?", "Whom went to school?", "Who went to school?"],
    correctIndex: 3
  },
  {
    id: "gram028",
    question: "\"They sent a letter.\" — The correct question about the object is:",
    options: ["What they sent?", "What did they send?", "What did they sent?", "What do they sent?"],
    correctIndex: 1
  },
  {
    id: "gram029",
    question: "\"He wakes up early.\" — The correct question is:",
    options: ["When does he wakes up?", "When he wakes up?", "When does he wake up?", "When is he wake up?"],
    correctIndex: 2
  },

  // ===== Conditionals =====
  {
    id: "gram030",
    question: "The zero conditional (If + present simple, present simple) is used mainly to express:",
    options: ["General truths and scientific facts", "Imaginary present situations", "Regrets about the past", "Future plans"],
    correctIndex: 0
  },
  {
    id: "gram031",
    question: "\"Water ______ if you put it on the heater.\"",
    options: ["boiled", "boils", "would boil", "will boiled"],
    correctIndex: 1
  },
  {
    id: "gram032",
    question: "\"She ______ the exam if she doesn't study hard.\"",
    options: ["failed", "would fail", "will fail", "had failed"],
    correctIndex: 2
  },
  {
    id: "gram033",
    question: "After \"unless\", the if-clause must be:",
    options: ["In the future tense", "Negative", "In the past perfect", "Affirmative (not negative)"],
    correctIndex: 3
  },
  {
    id: "gram034",
    question: "\"Unless he gets up early, he will miss the bus.\" means the same as:",
    options: ["If he doesn't get up early, he will miss the bus.", "If he gets up early, he will miss the bus.", "If he misses the bus, he will get up early.", "He will not miss the bus even if he gets up late."],
    correctIndex: 0
  },
  {
    id: "gram035",
    question: "The second conditional is used for:",
    options: ["Facts that are always true", "Plans that will certainly happen", "Unreal, impossible, or untrue present situations", "Completed past actions"],
    correctIndex: 2
  },
  {
    id: "gram036",
    question: "\"If I ______ wings, I would fly everywhere.\"",
    options: ["have", "had", "will have", "would have"],
    correctIndex: 1
  },
  {
    id: "gram037",
    question: "\"If I ______ you, I would apply to two or three colleges.\"",
    options: ["am", "was being", "had been", "were"],
    correctIndex: 3
  },
  {
    id: "gram038",
    question: "The third conditional pattern is:",
    options: ["If + past perfect, would have + past participle", "If + past simple, would + base verb", "If + present simple, will + base verb", "If + present perfect, would + base verb"],
    correctIndex: 0
  },
  {
    id: "gram039",
    question: "\"If I ______ him yesterday, I would have told him your news.\"",
    options: ["saw", "would see", "had seen", "have seen"],
    correctIndex: 2
  },
  {
    id: "gram040",
    question: "\"We ______ at that restaurant if we had known it was so expensive.\"",
    options: ["wouldn't eat", "wouldn't have eaten", "won't eat", "hadn't eaten"],
    correctIndex: 1
  },
  {
    id: "gram041",
    question: "\"If I had known it was raining when I left, I ______ an umbrella.\"",
    options: ["would bring", "will bring", "brought", "would have brought"],
    correctIndex: 3
  },

  // ===== Reported Speech =====
  {
    id: "gram042",
    question: "In reported speech, the present simple normally changes to:",
    options: ["Past simple", "Past perfect", "Present perfect", "Future in the past"],
    correctIndex: 0
  },
  {
    id: "gram043",
    question: "In reported speech, the past simple normally changes to:",
    options: ["Present perfect", "Past continuous", "Past perfect", "It never changes"],
    correctIndex: 2
  },
  {
    id: "gram044",
    question: "Tariq said: \"I know all about it.\" — The reported form is:",
    options: ["Tariq said that he knows all about it.", "Tariq said that he knew all about it.", "Tariq said that I knew all about it.", "Tariq said that he had knew all about it."],
    correctIndex: 1
  },
  {
    id: "gram045",
    question: "Mariam said: \"I am enjoying myself.\" — The reported form is:",
    options: ["Mariam said she is enjoying herself.", "Mariam said she has been enjoying herself.", "Mariam said I was enjoying myself.", "Mariam said she was enjoying herself."],
    correctIndex: 3
  },
  {
    id: "gram046",
    question: "\"We will have to get to the match early.\" — In reported speech, \"will\" becomes:",
    options: ["Would", "Should", "Might", "Must"],
    correctIndex: 0
  },
  {
    id: "gram047",
    question: "To report a yes/no question such as \"Is there any bread?\", we use:",
    options: ["that", "what", "if / whether", "which"],
    correctIndex: 2
  },
  {
    id: "gram048",
    question: "\"Where is the book?\" — The correct reported question is:",
    options: ["She asked where was the book.", "She asked where the book was.", "She asked where is the book.", "She asked where the book is."],
    correctIndex: 1
  },
  {
    id: "gram049",
    question: "\"Do you like Indian music?\" — The correct reported form is:",
    options: ["She asked whether we liked Indian music.", "She asked did we like Indian music.", "She asked whether do we like Indian music.", "She asked that we liked Indian music."],
    correctIndex: 0
  },
  {
    id: "gram050",
    question: "\"Get off the grass.\" — The correct reported command is:",
    options: ["He told us that get off the grass.", "He told us getting off the grass.", "He told to us get off the grass.", "He told us to get off the grass."],
    correctIndex: 3
  },
  {
    id: "gram051",
    question: "\"Let's go to the beach.\" — Reported with \"suggest\", this becomes:",
    options: ["He suggested to go to the beach.", "He suggested going to the beach.", "He suggested that going to the beach.", "He suggested go to the beach."],
    correctIndex: 1
  },
  {
    id: "gram052",
    question: "The verb \"suggest\" is followed by:",
    options: ["To + base verb", "Base verb only", "Verb + -ing", "That + imperative"],
    correctIndex: 2
  },
  {
    id: "gram053",
    question: "\"Don't park near the restaurant.\" — Reported with \"warn\":",
    options: ["He warned us not to park near the restaurant.", "He warned us to not parking near the restaurant.", "He warned that we don't park near the restaurant.", "He warned us don't park near the restaurant."],
    correctIndex: 0
  },
  {
    id: "gram054",
    question: "\"Shall I clean the windows?\" — Reported with \"offer\":",
    options: ["He offered cleaning the windows.", "He offered that he cleans the windows.", "He offered to clean the windows.", "He offered clean the windows."],
    correctIndex: 2
  },

  // ===== Relative Clauses =====
  {
    id: "gram055",
    question: "The relative pronoun used for places is:",
    options: ["Who", "Which", "Whose", "Where"],
    correctIndex: 3
  },
  {
    id: "gram056",
    question: "\"I have a friend ______ speaks five languages.\"",
    options: ["who", "which", "whose", "where"],
    correctIndex: 0
  },
  {
    id: "gram057",
    question: "\"She has a parrot ______ can talk.\"",
    options: ["who", "whose", "which", "where"],
    correctIndex: 2
  },
  {
    id: "gram058",
    question: "\"What's the name of your friend ______ father is a film star?\"",
    options: ["who", "whose", "which", "whom"],
    correctIndex: 1
  },
  {
    id: "gram059",
    question: "A defining relative clause differs from a non-defining one because it:",
    options: ["Always comes at the start of the sentence", "Must be separated by commas", "Always uses 'that'", "Gives essential information about the noun it describes"],
    correctIndex: 3
  },
  {
    id: "gram060",
    question: "\"We visited the town ______ my father was born.\"",
    options: ["which", "where", "whose", "who"],
    correctIndex: 1
  },

  // ===== Word Formation & Spelling =====
  {
    id: "gram061",
    question: "The -ing form of the verb \"die\" is:",
    options: ["dieing", "dying", "dyeing", "diing"],
    correctIndex: 1
  },
  {
    id: "gram062",
    question: "Which verb doubles its final consonant before adding -ing?",
    options: ["Fix", "Show", "Swim", "Play"],
    correctIndex: 2
  },
  {
    id: "gram063",
    question: "The correct past form of \"study\" is:",
    options: ["studied", "studyed", "studdied", "studyd"],
    correctIndex: 0
  },
  {
    id: "gram064",
    question: "The plural of \"wolf\" is:",
    options: ["wolfs", "wolfes", "wolve", "wolves"],
    correctIndex: 3
  },
  {
    id: "gram065",
    question: "Which noun has an irregular plural?",
    options: ["Radio", "Goose", "Roof", "Key"],
    correctIndex: 1
  },
  {
    id: "gram066",
    question: "Which of these nouns stays the same in the plural?",
    options: ["Sheep", "Ox", "Mouse", "Analysis"],
    correctIndex: 0
  },
  {
    id: "gram067",
    question: "The three forms of the verb \"choose\" are:",
    options: ["choose / choosed / choosed", "choose / chose / chose", "choose / chose / chosen", "choose / chosen / chose"],
    correctIndex: 2
  },
  {
    id: "gram068",
    question: "Which verb has the same form in the present, past, and past participle?",
    options: ["Bring", "Run", "Sell", "Cut"],
    correctIndex: 3
  },
  {
    id: "gram069",
    question: "The three forms of \"begin\" follow the pattern i → a → u, giving:",
    options: ["begin / began / begun", "begin / begun / began", "begin / beginned / begun", "begin / began / began"],
    correctIndex: 0
  },
  {
    id: "gram070",
    question: "The past form of \"teach\" is:",
    options: ["teached", "tought", "taught", "teached up"],
    correctIndex: 2
  },

  // ===== has gone / has been =====
  {
    id: "gram071",
    question: "\"Adil is on holiday. He ______ to Dubai.\" (he is still there)",
    options: ["has been", "has gone", "had been", "went and returned"],
    correctIndex: 1
  },
  {
    id: "gram072",
    question: "\"Muna is back in Iraq now. She ______ to Italy.\"",
    options: ["has gone", "is going", "has been", "goes"],
    correctIndex: 2
  },
  {
    id: "gram073",
    question: "The essential difference between \"has gone to\" and \"has been to\" is:",
    options: ["Gone is formal; been is informal", "Gone is for places; been is for people", "Been is used only in questions", "Gone means the person is still there; been means the person went and came back"],
    correctIndex: 3
  },

  // ===== Test-Yourself Grammar Items =====
  {
    id: "gram074",
    question: "\"I understand that you've sent him an e-mail message. I think you ______ him instead.\"",
    options: ["ought to have phoned", "should phone", "couldn't have phoned", "had phoned"],
    correctIndex: 0
  },
  {
    id: "gram075",
    question: "\"I promise I will be here when you come back, but I'm afraid everyone else ______ by then.\"",
    options: ["leaves", "will have left", "is leaving", "left"],
    correctIndex: 1
  },
  {
    id: "gram076",
    question: "\"Do you have any idea what she ______ at this time tomorrow?\"",
    options: ["has done", "was doing", "will be doing", "has been doing"],
    correctIndex: 2
  },
  {
    id: "gram077",
    question: "\"He ______ from the university in 1995. Then, he ______ two years in the army.\"",
    options: ["has graduated / has spent", "had graduated / has spent", "has graduated / spent", "graduated / spent"],
    correctIndex: 3
  },
  {
    id: "gram078",
    question: "\"They ______ each other for a long time before they finally decided to get married.\"",
    options: ["had known", "have known", "were knowing", "have been knowing"],
    correctIndex: 0
  },
  {
    id: "gram079",
    question: "\"Nobody ______ him for weeks. I wonder where he ______ these days.\"",
    options: ["saw / was hanging about", "has seen / is hanging about", "had seen / has been hanging about", "sees / will hang about"],
    correctIndex: 1
  },
  {
    id: "gram080",
    question: "\"Everyone objected to her coming along with us, ______?\"",
    options: ["did no one", "didn't he", "didn't they", "did anyone"],
    correctIndex: 2
  },
  {
    id: "gram081",
    question: "\"The statistics ______ in your article ______ to be incorrect.\"",
    options: ["giving / appears", "are given / appears", "appearing / are given", "given / appear"],
    correctIndex: 3
  },
  {
    id: "gram082",
    question: "\"I'm not really sure where the cat is, but I think she ______ in the kitchen.\"",
    options: ["might be playing", "might have played", "used to play", "needs to play"],
    correctIndex: 0
  },
  {
    id: "gram083",
    question: "\"I really ______ fishing with my friends, but unfortunately I was down with the flu.\"",
    options: ["must go", "want to go", "would like to have gone", "had been going"],
    correctIndex: 2
  },
  {
    id: "gram084",
    question: "\"I asked two people the way to the station, but ______ could help me.\"",
    options: ["both of them", "neither of them", "either of them", "both of whom"],
    correctIndex: 1
  },
  {
    id: "gram085",
    question: "\"If I'd gone down to Bodrum as all my friends did, I, too, ______ scuba diving lessons.\"",
    options: ["had better taken", "should take", "had taken", "could have taken"],
    correctIndex: 3
  },

  // ===== Language Functions =====
  {
    id: "gram086",
    question: "Which structure expresses purpose?",
    options: ["He used an axe so as to cut the tree.", "He used an axe although he cut the tree.", "He used an axe unless he cut the tree.", "He used an axe whether he cut the tree."],
    correctIndex: 0
  },
  {
    id: "gram087",
    question: "After \"for\" expressing purpose, the verb takes the form:",
    options: ["Base verb", "To + base verb", "Verb + -ing", "Past participle"],
    correctIndex: 2
  },
  {
    id: "gram088",
    question: "To express ability in the past we use:",
    options: ["Can", "May", "Must", "Could"],
    correctIndex: 3
  },
  {
    id: "gram089",
    question: "\"I'm extremely sorry for your loss.\" is an expression used when:",
    options: ["You arrive late to a meeting", "Someone has died", "You break something", "You didn't hear what was said"],
    correctIndex: 1
  },
  {
    id: "gram090",
    question: "If you did not catch what somebody said, the polite response is:",
    options: ["Pardon?", "My apologies for being late.", "I'm terribly sorry for your loss.", "Never mind!"],
    correctIndex: 0
  },
  {
    id: "gram091",
    question: "Which sentence is a polite request?",
    options: ["Pass me the salt now.", "You must pass the salt.", "Could you pass me the salt, please?", "I wonder why you like salt."],
    correctIndex: 2
  },
  {
    id: "gram092",
    question: "\"I wonder if you could lend me your car?\" expresses:",
    options: ["Certainty", "Warning", "Conclusion", "Asking for permission"],
    correctIndex: 3
  },
  {
    id: "gram093",
    question: "Which is a correct way of giving advice?",
    options: ["If I were you, I would study at home.", "If I am you, I will study at home.", "If I was you, I am studying at home.", "If I be you, I would have studied at home."],
    correctIndex: 0
  },
  {
    id: "gram094",
    question: "\"She might come soon.\" expresses:",
    options: ["Necessity", "Probability", "Prohibition", "Certainty"],
    correctIndex: 1
  },
  {
    id: "gram095",
    question: "\"The man went to prison.\" — Drawing a conclusion, we say:",
    options: ["He should steal a car.", "He can steal a car.", "He must have stolen a car.", "He would steal a car."],
    correctIndex: 2
  },
  {
    id: "gram096",
    question: "\"What a pity!\" is an expression of:",
    options: ["Satisfaction", "Gratitude", "Hope", "Disappointment"],
    correctIndex: 3
  },
  {
    id: "gram097",
    question: "\"Don't forget to call your uncle.\" is the language function of:",
    options: ["Reminding", "Warning", "Suggesting", "Apologizing"],
    correctIndex: 0
  },
  {
    id: "gram098",
    question: "Sarah: \"I passed my Chinese test.\" — Mother: \"______\"",
    options: ["I'm sorry to hear that.", "Congratulations!", "Your father will be angry.", "You are bad at Chinese."],
    correctIndex: 1
  },
  {
    id: "gram099",
    question: "Eric: \"I failed my English test.\" — Mother: \"______\"",
    options: ["Congratulations!", "You're welcome.", "I'm sorry to hear that.", "Well done!"],
    correctIndex: 2
  },
  {
    id: "gram100",
    question: "Book seller: \"______\" — John: \"Do you have any Harry Potter books?\"",
    options: ["I don't have any books.", "What do you want?", "Do you want any books?", "May I help you?"],
    correctIndex: 3
  },
  {
    id: "gram101",
    question: "Mother: \"What does your new teacher look like?\" — Liz: \"______\"",
    options: ["She is pretty and has long brown hair.", "She likes to play the piano.", "She teaches me Science.", "She doesn't like to watch cartoons."],
    correctIndex: 0
  },
  {
    id: "gram102",
    question: "Billy: \"I am sorry, I lost the pencil I borrowed from you.\" — Tony: \"______. It wasn't expensive.\"",
    options: ["I am angry", "Don't worry", "I am sad", "How dare you"],
    correctIndex: 1
  },
  {
    id: "gram103",
    question: "Student: \"______, may I go to the toilet?\" — Teacher: \"Yes, be quick.\"",
    options: ["I'm sorry", "Goodbye", "Excuse me", "You're welcome"],
    correctIndex: 2
  },
  {
    id: "gram104",
    question: "Tom: \"My job is very stressful. I want less stress in my life.\" — The best suggestion is:",
    options: ["Be patient and do your work.", "No, my job is more stressful than yours.", "Be careful! Unemployed people are more stressed.", "Why don't you find a new job?"],
    correctIndex: 3
  },
  {
    id: "gram105",
    question: "Adam: \"I am bored.\" — Tom: \"______\" — Adam: \"We can't do that. I don't have enough money for a ticket.\"",
    options: ["Let's go to the cinema.", "Why don't we watch TV?", "How about playing computer games?", "Why don't we play football?"],
    correctIndex: 0
  },

  // ===== Conversation & Reading Skills =====
  {
    id: "gram106",
    question: "In listening/conversation questions, a \"detail\" question asks about:",
    options: ["The speaker's tone of voice", "Specific facts stated in the conversation", "The historical background of the speakers", "The grammar used by the speakers"],
    correctIndex: 1
  },
  {
    id: "gram107",
    question: "Man: \"Could you explain the assignment, Miss Smith?\" — Woman: \"Certainly. Read the next chapter and come prepared to discuss it.\" — What are the speakers talking about?",
    options: ["The weekend", "The book market", "Homework", "A field trip"],
    correctIndex: 2
  },
  {
    id: "gram108",
    question: "An idiom is best defined as:",
    options: ["A word borrowed from another language", "A grammatical error common in speech", "A technical scientific term", "A fixed expression whose overall meaning differs from the meanings of its separate words"],
    correctIndex: 3
  },
  {
    id: "gram109",
    question: "\"The exam yesterday was a piece of cake.\" means the exam was:",
    options: ["Very easy", "Very long", "About cooking", "Badly written"],
    correctIndex: 0
  },
  {
    id: "gram110",
    question: "Woman: \"Have you heard about the new professor?\" — Man: \"Just that she's no pushover.\" — The man means the professor is:",
    options: ["Very generous", "Very strict", "Often absent", "Easy to persuade"],
    correctIndex: 1
  },
  {
    id: "gram111",
    question: "Woman: \"Dr. John's class is closed.\" — Man: \"It's offered every term. Why don't you just take it next semester?\" — The man suggests that the woman:",
    options: ["Complain to the department", "Ask Dr. John for permission", "Wait until next semester to take the class", "Choose a different major"],
    correctIndex: 2
  },
  {
    id: "gram112",
    question: "Woman: \"Let's e-mail our response to Larry instead of calling.\" — Man: \"Larry has an e-mail address?\" — The man had assumed that:",
    options: ["Larry prefers e-mail", "Larry never answers calls", "Larry has two e-mail accounts", "Larry would not have an e-mail address"],
    correctIndex: 3
  },
  {
    id: "gram113",
    question: "Woman: \"Where's Anita? We were supposed to study at the library.\" — Man: \"Here is her coat, and her books are on the chair.\" — The man implies that:",
    options: ["Anita has not left for the library yet", "Anita is already at the library", "Anita lost her books", "Anita changed her plans"],
    correctIndex: 0
  },
  {
    id: "gram114",
    question: "\"Reading between the lines\" — grasping suggested or implied meaning — is which level of comprehension?",
    options: ["Literal", "Inferential", "Critical", "Phonetic"],
    correctIndex: 1
  },
  {
    id: "gram115",
    question: "The level of reading in which the reader analyzes and makes personal evaluative judgements is:",
    options: ["Literal comprehension", "Inferential comprehension", "Critical comprehension", "Scanning"],
    correctIndex: 2
  },
  {
    id: "gram116",
    question: "In the story \"The Applicant\", the gentleman hired the boy because:",
    options: ["He brought many letters of recommendation", "He was the first to arrive", "His father knew the employer", "His polite, careful, and kind behavior served as his recommendation"],
    correctIndex: 3
  },
  {
    id: "gram117",
    question: "In \"The Applicant\", what did the hired boy do with the book that had been placed on the floor on purpose?",
    options: ["He picked it up and placed it on the table", "He stepped over it like the others", "He hid it under his coat", "He handed it to another applicant"],
    correctIndex: 0
  },
  {
    id: "gram118",
    question: "In the interpreter passage, Samira Al Mahmoud prepared for the oil conference by:",
    options: ["Memorizing all the speeches in advance", "Reading about oil to learn the technical terms", "Visiting an oil field", "Hiring an assistant translator"],
    correctIndex: 1
  },
  {
    id: "gram119",
    question: "According to Samira, the most important quality of a conference interpreter is:",
    options: ["Speaking many dialects", "Writing quickly", "Remaining calm under pressure", "Having a loud voice"],
    correctIndex: 2
  },
  {
    id: "gram120",
    question: "In the interpreter passage, \"working freelance\" means:",
    options: ["Working without being paid", "Working only in an office", "Working every day of the week", "Working when you choose and for the organization you choose"],
    correctIndex: 3
  }
];
