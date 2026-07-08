// English Prepositions Questions
// Source: "English Grammar For All Levels" by Murad Sawalmeh — Prepositions
// chapter (uses of in/at/on/by/with/from/to/for/of..., position of
// prepositions, verbs and adjectives with prepositions, fixed expressions)
// Format: 4 options, one correct answer (correctIndex is 0-based)

const questions = [
  // ===== Time prepositions =====
  {
    id: "prep001",
    question: "Which preposition is used with months, years, seasons, and centuries?",
    options: ["In", "At", "On", "By"],
    correctIndex: 0
  },
  {
    id: "prep002",
    question: "\"My father was born ______ 1977.\"",
    options: ["at", "on", "in", "since"],
    correctIndex: 2
  },
  {
    id: "prep003",
    question: "\"My brother will be here ______ a year.\" (meaning: within/after that period)",
    options: ["at", "in", "on", "until"],
    correctIndex: 1
  },
  {
    id: "prep004",
    question: "Which preposition indicates clock time, as in \"Adnan gets up ______ 7:00 o'clock\"?",
    options: ["in", "on", "by", "at"],
    correctIndex: 3
  },
  {
    id: "prep005",
    question: "Which group of expressions correctly takes \"at\"?",
    options: ["at dawn, at noon, at night, at dusk", "at the morning, at Friday, at 1990", "at summer, at March, at the evening", "at yesterday, at the past, at future"],
    correctIndex: 0
  },
  {
    id: "prep006",
    question: "\"The first man walked on the moon ______ 21 July 1969.\"",
    options: ["in", "at", "on", "by"],
    correctIndex: 2
  },
  {
    id: "prep007",
    question: "\"My birthday is ______ the tenth of October.\"",
    options: ["at", "on", "in", "of"],
    correctIndex: 1
  },
  {
    id: "prep008",
    question: "\"______ October we shall have finished painting the house.\" (by the start of that time)",
    options: ["On", "At", "In", "By"],
    correctIndex: 3
  },
  {
    id: "prep009",
    question: "\"He has been abroad ______ January.\" (from that point in the past until now)",
    options: ["since", "for", "from", "at"],
    correctIndex: 0
  },
  {
    id: "prep010",
    question: "\"I have lived in Amman ______ three years.\"",
    options: ["since", "during", "for", "from"],
    correctIndex: 2
  },
  {
    id: "prep011",
    question: "\"The weather gets cold ______ winter.\" (throughout that period)",
    options: ["during", "at", "on", "by"],
    correctIndex: 0
  },
  {
    id: "prep012",
    question: "\"The bank is open ______ 3 o'clock.\" (up to that time)",
    options: ["for", "until/till", "since", "through"],
    correctIndex: 1
  },
  {
    id: "prep013",
    question: "\"It is ten ______ four.\" (telling the time: 3:50)",
    options: ["at", "past", "for", "to"],
    correctIndex: 3
  },
  {
    id: "prep014",
    question: "\"The manager will come ______ 10 minutes.\" (inside that period)",
    options: ["at", "on", "within", "until"],
    correctIndex: 2
  },

  // ===== Place & other core uses =====
  {
    id: "prep015",
    question: "Which preposition is used with countries and big cities (America, Jordan, Damascus)?",
    options: ["at", "in", "on", "by"],
    correctIndex: 1
  },
  {
    id: "prep016",
    question: "\"Put the flowers ______ the table.\"",
    options: ["on", "in", "at", "by"],
    correctIndex: 0
  },
  {
    id: "prep017",
    question: "\"The football match was watched ______ thousands of people.\" (passive agent)",
    options: ["with", "from", "of", "by"],
    correctIndex: 3
  },
  {
    id: "prep018",
    question: "\"I opened the door ______ the key.\" (the instrument)",
    options: ["by", "with", "of", "from"],
    correctIndex: 1
  },
  {
    id: "prep019",
    question: "\"I saw a girl ______ black hair.\" (having, possessing)",
    options: ["with", "of", "in", "by"],
    correctIndex: 0
  },
  {
    id: "prep020",
    question: "\"He studies ______ six till eight o'clock.\"",
    options: ["at", "on", "from", "for"],
    correctIndex: 2
  },
  {
    id: "prep021",
    question: "\"I want some money ______ buy this book.\"",
    options: ["for", "so", "in order", "to"],
    correctIndex: 3
  },
  {
    id: "prep022",
    question: "\"I bought this car ______ 3000 JD.\" (price)",
    options: ["for", "with", "by", "at"],
    correctIndex: 0
  },
  {
    id: "prep023",
    question: "\"I saw Khalid ______ two hours ago.\" (approximately)",
    options: ["along", "about", "over", "beside"],
    correctIndex: 1
  },
  {
    id: "prep024",
    question: "\"This table is made ______ wood.\"",
    options: ["from", "by", "of", "in"],
    correctIndex: 2
  },
  {
    id: "prep025",
    question: "\"Ahmed sat ______ Ali and Sameer.\" (two people)",
    options: ["among", "beside", "along", "between"],
    correctIndex: 3
  },
  {
    id: "prep026",
    question: "\"I saw Mohammed sitting ______ the crowd.\" (more than two)",
    options: ["among", "between", "beside", "next"],
    correctIndex: 0
  },
  {
    id: "prep027",
    question: "What is the difference between \"between\" and \"among\"?",
    options: ["Between is for places; among is for people", "Between is used for two; among for more than two", "Between is informal; among is formal", "There is no difference at all"],
    correctIndex: 1
  },
  {
    id: "prep028",
    question: "\"Children ______ ten years old.\" (younger than ten)",
    options: ["under of", "at below", "below", "down"],
    correctIndex: 2
  },
  {
    id: "prep029",
    question: "\"The man swam ______ the current.\" (in the opposite direction)",
    options: ["along", "toward", "with", "against"],
    correctIndex: 3
  },
  {
    id: "prep030",
    question: "\"I walked ______ the road.\" (following its length)",
    options: ["along", "against", "across of", "between"],
    correctIndex: 0
  },
  {
    id: "prep031",
    question: "\"Ali was in the room, then he went ______ the living room.\" (movement to the inside)",
    options: ["at", "into", "onto", "in front of"],
    correctIndex: 1
  },
  {
    id: "prep032",
    question: "\"He left ______ saying goodbye.\"",
    options: ["with", "beside", "without", "out"],
    correctIndex: 2
  },
  {
    id: "prep033",
    question: "\"We drove ______ the center of London.\" (passing from one side to the other)",
    options: ["among", "at", "over of", "through"],
    correctIndex: 3
  },
  {
    id: "prep034",
    question: "\"I lived in England ______ over ten years.\"",
    options: ["for", "since", "during", "at"],
    correctIndex: 0
  },

  // ===== Position of prepositions =====
  {
    id: "prep035",
    question: "In the question \"Where did you come from?\", the preposition is placed:",
    options: ["Before the question word", "At the end of the question", "Before the verb", "It is omitted"],
    correctIndex: 1
  },
  {
    id: "prep036",
    question: "Which sentence places the preposition correctly before a relative pronoun?",
    options: ["This is the university which I graduated from which.", "This is the university from I graduated which.", "This is the university from which I graduated.", "This is the university which from I graduated."],
    correctIndex: 2
  },
  {
    id: "prep037",
    question: "In passive sentences like \"This teacher is relied ______.\", the preposition:",
    options: ["Is dropped", "Moves before the subject", "Becomes 'by' automatically", "Stays at the end of the sentence (on)"],
    correctIndex: 3
  },

  // ===== Fixed expressions & collocations =====
  {
    id: "prep038",
    question: "\"He knows the poem ______ heart.\"",
    options: ["by", "with", "on", "at"],
    correctIndex: 0
  },
  {
    id: "prep039",
    question: "\"He broke the window ______ mistake.\"",
    options: ["with", "by", "in", "at"],
    correctIndex: 1
  },
  {
    id: "prep040",
    question: "\"I prefer to travel ______ ship.\"",
    options: ["with", "in", "by", "at"],
    correctIndex: 2
  },
  {
    id: "prep041",
    question: "\"The workers did the job step ______ step.\"",
    options: ["with", "to", "at", "by"],
    correctIndex: 3
  },
  {
    id: "prep042",
    question: "\"She is interested ______ music.\"",
    options: ["in", "on", "at", "of"],
    correctIndex: 0
  },
  {
    id: "prep043",
    question: "\"The telephone is ______ use at the moment.\" (being used)",
    options: ["on", "in", "at", "by"],
    correctIndex: 1
  },
  {
    id: "prep044",
    question: "\"______ my opinion, this is the best solution.\"",
    options: ["On", "At", "In", "By"],
    correctIndex: 2
  },
  {
    id: "prep045",
    question: "\"The thief is now ______ arrest.\"",
    options: ["at", "in", "on", "under"],
    correctIndex: 3
  },
  {
    id: "prep046",
    question: "\"The house is ______ fire!\"",
    options: ["on", "in", "at", "under"],
    correctIndex: 0
  },
  {
    id: "prep047",
    question: "\"I watched a beautiful film ______ television.\"",
    options: ["in", "on", "at", "by"],
    correctIndex: 1
  },
  {
    id: "prep048",
    question: "\"He will arrive ______ Friday.\"",
    options: ["at", "in", "on", "by"],
    correctIndex: 2
  },
  {
    id: "prep049",
    question: "\"The doctor is ______ duty tonight.\"",
    options: ["in", "at", "under", "on"],
    correctIndex: 3
  },
  {
    id: "prep050",
    question: "\"This machine is ______ order. It doesn't work.\"",
    options: ["out of", "off", "away from", "outside"],
    correctIndex: 0
  },
  {
    id: "prep051",
    question: "\"The book you want is ______ print. You can't buy it anymore.\"",
    options: ["off", "out of", "under", "beyond"],
    correctIndex: 1
  },
  {
    id: "prep052",
    question: "\"Staying out late is ______ the question!\" (impossible)",
    options: ["off", "under", "out of", "against"],
    correctIndex: 2
  },
  {
    id: "prep053",
    question: "\"He looks ill. He seems a bit ______ the weather.\"",
    options: ["off", "out of", "against", "under"],
    correctIndex: 3
  },
  {
    id: "prep054",
    question: "\"Driving without a license is ______ the law.\"",
    options: ["against", "under", "off", "out of"],
    correctIndex: 0
  },
  {
    id: "prep055",
    question: "\"The road is ______ repair, so we must take another way.\"",
    options: ["in", "under", "on", "at"],
    correctIndex: 1
  },
  {
    id: "prep056",
    question: "\"Please finish the report without ______.\" (immediately, with no waiting)",
    options: ["fail", "doubt", "delay", "notice"],
    correctIndex: 2
  },
  {
    id: "prep057",
    question: "\"He is angry ______ his brother.\"",
    options: ["from", "of", "on", "with"],
    correctIndex: 3
  },
  {
    id: "prep058",
    question: "\"She is afraid ______ dogs.\"",
    options: ["of", "from", "with", "at"],
    correctIndex: 0
  },
  {
    id: "prep059",
    question: "\"He suffers ______ a bad headache.\"",
    options: ["of", "from", "with", "by"],
    correctIndex: 1
  },
  {
    id: "prep060",
    question: "\"He is good ______ mathematics.\"",
    options: ["in", "on", "at", "with"],
    correctIndex: 2
  },
  {
    id: "prep061",
    question: "\"This house belongs ______ my uncle.\"",
    options: ["for", "of", "with", "to"],
    correctIndex: 3
  },
  {
    id: "prep062",
    question: "\"We look forward ______ hearing from you.\"",
    options: ["to", "for", "at", "of"],
    correctIndex: 0
  },
  {
    id: "prep063",
    question: "\"He apologized ______ being late.\"",
    options: ["from", "for", "at", "on"],
    correctIndex: 1
  },
  {
    id: "prep064",
    question: "\"My brother is looking ______ a flat these days.\"",
    options: ["at", "after", "for", "to"],
    correctIndex: 2
  },
  {
    id: "prep065",
    question: "\"The team depends ______ its captain.\"",
    options: ["at", "of", "in", "on"],
    correctIndex: 3
  },
  {
    id: "prep066",
    question: "\"He is married ______ my cousin.\"",
    options: ["to", "with", "from", "by"],
    correctIndex: 0
  },
  {
    id: "prep067",
    question: "\"Your answer is different ______ mine.\"",
    options: ["of", "from", "at", "for"],
    correctIndex: 1
  },
  {
    id: "prep068",
    question: "\"Amman is famous ______ its old buildings.\"",
    options: ["of", "with", "for", "by"],
    correctIndex: 2
  },
  {
    id: "prep069",
    question: "\"He is proud ______ his success.\"",
    options: ["with", "for", "on", "of"],
    correctIndex: 3
  },
  {
    id: "prep070",
    question: "\"Water consists ______ hydrogen and oxygen.\"",
    options: ["of", "from", "on", "in"],
    correctIndex: 0
  },
  {
    id: "prep071",
    question: "\"He recovered ______ his illness quickly.\"",
    options: ["of", "from", "at", "over"],
    correctIndex: 1
  },
  {
    id: "prep072",
    question: "\"He is capable ______ solving this problem.\"",
    options: ["to", "for", "of", "with"],
    correctIndex: 2
  },
  {
    id: "prep073",
    question: "\"She takes care ______ her little brother.\"",
    options: ["for", "about", "on", "of"],
    correctIndex: 3
  },
  {
    id: "prep074",
    question: "\"They congratulated him ______ his success.\"",
    options: ["on", "for", "with", "about"],
    correctIndex: 0
  },
  {
    id: "prep075",
    question: "\"He insisted ______ paying for the meal.\"",
    options: ["at", "on", "in", "for"],
    correctIndex: 1
  },
  {
    id: "prep076",
    question: "\"She is worried ______ her exams.\"",
    options: ["from", "of", "about", "on"],
    correctIndex: 2
  },
  {
    id: "prep077",
    question: "\"Students don't go to school ______ Friday.\"",
    options: ["at", "in", "on", "of"],
    correctIndex: 2
  },
  {
    id: "prep078",
    question: "\"I always go to school ______ foot.\"",
    options: ["by", "with", "for", "on"],
    correctIndex: 3
  },
  {
    id: "prep079",
    question: "\"My mother cut the meat ______ a knife.\"",
    options: ["with", "in", "by", "at"],
    correctIndex: 0
  },
  {
    id: "prep080",
    question: "\"Some people drink tea ______ sugar.\"",
    options: ["about", "without", "of", "in"],
    correctIndex: 1
  },
  {
    id: "prep081",
    question: "\"Children were playing ______ the trees.\" (more than two trees)",
    options: ["between", "with", "among", "in"],
    correctIndex: 2
  },
  {
    id: "prep082",
    question: "\"I enjoy reading stories ______ night.\"",
    options: ["in", "of", "on", "at"],
    correctIndex: 3
  },
  {
    id: "prep083",
    question: "\"I stayed in London ______ a week.\"",
    options: ["for", "into", "at", "in"],
    correctIndex: 0
  },
  {
    id: "prep084",
    question: "\"He began to feel ill ______ the exam.\"",
    options: ["by", "during", "round", "of"],
    correctIndex: 1
  },
  {
    id: "prep085",
    question: "\"There are some trees ______ the hotel.\" (facing it)",
    options: ["to", "from", "in front of", "of"],
    correctIndex: 2
  },
  {
    id: "prep086",
    question: "\"He sent her a present ______ her birthday.\"",
    options: ["with", "in", "by", "on"],
    correctIndex: 3
  }
];
