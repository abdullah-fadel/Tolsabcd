// University of Baghdad — English Literature Exam Questions
// Source: "UOB English Literature" PDF (recalled exam questions, College of
// Education for Women, English Literature specialization)
// Format: 4 options, one correct answer (correctIndex is 0-based)

const questions = [
  {
    id: "uob001",
    question: "Which term refers to an Old English poet and singer?",
    options: ["Gleeman", "Bard", "Troubadour", "Scop"],
    correctIndex: 3
  },
  {
    id: "uob002",
    question: "Which poem by William Blake shows how repressed emotion becomes destructive?",
    options: ["The Sick Rose", "A Poison Tree", "The Lamb", "The Chimney Sweeper"],
    correctIndex: 1
  },
  {
    id: "uob003",
    question: "In Wordsworth's Tintern Abbey, the smoke rising from the cottages represents:",
    options: ["The poet's growing mind", "Industrial progress", "Silence of the large humanity", "The destruction of nature"],
    correctIndex: 2
  },
  {
    id: "uob004",
    question: "The main implied theme in Walter de la Mare's poetry is:",
    options: ["Love", "War", "Nature", "Time and mystery"],
    correctIndex: 3
  },
  {
    id: "uob005",
    question: "Yeats's Sailing to Byzantium is mainly about:",
    options: ["Immortality", "Nationalism", "Politics", "Nature"],
    correctIndex: 0
  },
  {
    id: "uob006",
    question: "Tennyson's Ulysses focuses on a spirit that is:",
    options: ["Nostalgic and defeated", "Content with ruling quietly", "Aggressively progressive, always striving forward", "Religious and repentant"],
    correctIndex: 2
  },
  {
    id: "uob007",
    question: "Jane Austen's novels mainly deal with:",
    options: ["Feminist issues", "Domestic life and social manners", "Political issues", "Religious themes"],
    correctIndex: 1
  },
  {
    id: "uob008",
    question: "Christina Rossetti's Goblin Market is mainly about:",
    options: ["Sisterly love and sacrifice", "Mistaken identity", "War", "Politics"],
    correctIndex: 0
  },
  {
    id: "uob009",
    question: "In The Great Gatsby, the green light symbolizes:",
    options: ["Wealth", "Envy", "Nature", "Gatsby's hope for Daisy and the American Dream"],
    correctIndex: 3
  },
  {
    id: "uob010",
    question: "The Valley of Ashes in The Great Gatsby symbolizes:",
    options: ["Wealth and success", "Moral and social decay", "Happiness", "Nature"],
    correctIndex: 1
  },
  {
    id: "uob011",
    question: "The Roman influence on English tragedy mainly comes from:",
    options: ["Ovid", "Cicero", "Seneca", "Virgil"],
    correctIndex: 2
  },
  {
    id: "uob012",
    question: "Early English drama developed from:",
    options: ["Church liturgy", "Roman comedy", "Greek tragedy", "Epic poetry"],
    correctIndex: 0
  },
  {
    id: "uob013",
    question: "Shakespeare's early works were mainly:",
    options: ["Tragedies", "Problem plays", "Late romances", "Historical plays and comedies"],
    correctIndex: 3
  },
  {
    id: "uob014",
    question: "Who introduced the idea of \"The Pity of War\"?",
    options: ["Siegfried Sassoon", "Wilfred Owen", "Rupert Brooke", "Isaac Rosenberg"],
    correctIndex: 1
  },
  {
    id: "uob015",
    question: "In Lord of the Flies, the conch symbolizes:",
    options: ["Savagery", "Violence", "Democracy and authority", "Fear"],
    correctIndex: 2
  },
  {
    id: "uob016",
    question: "The main theme of Lord of the Flies is:",
    options: ["Human savagery", "War and colonialism", "Friendship", "Heroism"],
    correctIndex: 0
  },
  {
    id: "uob017",
    question: "In Coleridge's Frost at Midnight, the poet remembers:",
    options: ["His happy childhood", "His travels", "His friends", "His unpleasant childhood"],
    correctIndex: 3
  },
  {
    id: "uob018",
    question: "George Bernard Shaw's \"Unpleasant Plays\" are called so because:",
    options: ["They are tragedies", "They criticize social evils and Victorian society", "They use Greek mythology", "They are comedies only"],
    correctIndex: 1
  },
  {
    id: "uob019",
    question: "The \"Comedy of Menace\" is associated with:",
    options: ["Harold Pinter", "Samuel Beckett", "John Osborne", "Edward Albee"],
    correctIndex: 0
  },
  {
    id: "uob020",
    question: "Daniel Defoe moved English literature toward:",
    options: ["Romanticism", "Transcendentalism", "Symbolism", "Realism"],
    correctIndex: 3
  },
  {
    id: "uob021",
    question: "Which author–work pair is correct?",
    options: ["Thomas Hardy — Ulysses", "James Joyce — Mrs Dalloway", "Virginia Woolf — Mrs Dalloway", "Virginia Woolf — Ulysses"],
    correctIndex: 2
  },
  {
    id: "uob022",
    question: "A main feature of Modern literature is:",
    options: ["Fragmentation", "Optimism", "Heroism", "Certainty and order"],
    correctIndex: 0
  },
  {
    id: "uob023",
    question: "Which theme became less prominent in War Poetry compared to Victorian poetry?",
    options: ["Religious themes", "Nature", "Social themes", "Death"],
    correctIndex: 1
  },
  {
    id: "uob024",
    question: "Whose motto was \"Make it New\"?",
    options: ["T.S. Eliot", "James Joyce", "W.B. Yeats", "Ezra Pound"],
    correctIndex: 3
  },
  {
    id: "uob025",
    question: "In Arms and the Man, George Bernard Shaw speaks mainly through the character of:",
    options: ["Sergius", "Bluntschli", "Raina", "Petkoff"],
    correctIndex: 1
  },
  {
    id: "uob026",
    question: "In Wuthering Heights, the story is narrated through:",
    options: ["Lockwood and Nelly Dean", "Heathcliff and Catherine", "Edgar and Isabella", "Joseph and Hareton"],
    correctIndex: 0
  },
  {
    id: "uob027",
    question: "In Don Juan, Byron uses the form of the:",
    options: ["Folk epic", "Religious epic", "Satirical epic", "Mythological epic"],
    correctIndex: 2
  },
  {
    id: "uob028",
    question: "Pamela was written by:",
    options: ["Henry Fielding", "Thomas Hardy", "Daniel Defoe", "Samuel Richardson"],
    correctIndex: 3
  },
  {
    id: "uob029",
    question: "The idea of beauty taken out of the eternal appears in Keats's:",
    options: ["Ode on a Grecian Urn", "Ode to a Nightingale", "Ode on Melancholy", "The Eve of St. Agnes"],
    correctIndex: 0
  },
  {
    id: "uob030",
    question: "Post-war poets were chiefly marked by:",
    options: ["Optimism", "Patriotism", "Disillusionment", "Romantic idealism"],
    correctIndex: 2
  },
  {
    id: "uob031",
    question: "The main theme of Dickens's Hard Times is:",
    options: ["Criticism of industrialism and utilitarianism", "A love story", "War", "Adventure"],
    correctIndex: 0
  },
  {
    id: "uob032",
    question: "A characteristic feature of modern poetry is:",
    options: ["Heroic celebration", "Epic style", "Pastoral escape", "Social satire"],
    correctIndex: 3
  },
  {
    id: "uob033",
    question: "Brecht's \"Alienation Effect\" means:",
    options: ["Increasing the audience's emotional involvement", "Making the audience think critically by distancing their emotions and breaking the fourth wall", "Preserving the classical unities", "Creating suspense through hidden information"],
    correctIndex: 1
  },
  {
    id: "uob034",
    question: "Matthew Arnold divided English society into Barbarians, Philistines, and Populace in:",
    options: ["The Study of Poetry", "Essays in Criticism", "Culture and Anarchy", "Literature and Dogma"],
    correctIndex: 2
  },
  {
    id: "uob035",
    question: "Sir Richard Steele is best known as:",
    options: ["A Restoration tragedian", "A Romantic poet", "A Victorian novelist", "An essayist who co-founded The Tatler and The Spectator"],
    correctIndex: 3
  },
  {
    id: "uob036",
    question: "Maurya's words in Riders to the Sea — \"the sea has taken everything, and there is nothing more it can do to me\" — reflect:",
    options: ["Realism", "Expressionism", "Romanticism", "Surrealism"],
    correctIndex: 0
  },
  {
    id: "uob037",
    question: "The most important figure of American Transcendentalism is:",
    options: ["Walt Whitman", "Edgar Allan Poe", "Ralph Waldo Emerson", "Tennessee Williams"],
    correctIndex: 2
  },
  {
    id: "uob038",
    question: "Vanity Fair was written by:",
    options: ["William Makepeace Thackeray", "Charles Dickens", "Thomas Hardy", "George Eliot"],
    correctIndex: 0
  },
  {
    id: "uob039",
    question: "In Pride and Prejudice, Elizabeth Bennet wants a husband who:",
    options: ["Is rich", "Is noble", "Is famous", "Respects her intelligence"],
    correctIndex: 3
  },
  {
    id: "uob040",
    question: "In Poe's The Black Cat, the narrator is unreliable because:",
    options: ["He forgets the events", "He justifies his violence", "He is insane only", "He keeps changing the story's ending"],
    correctIndex: 1
  }
];
