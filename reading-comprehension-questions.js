// Reading Comprehension Questions
// Original multiple-choice questions on general-knowledge reading topics
// (nature, science, history, health, culture, and short stories). Each
// question names its topic so it can stand alone.
// Format: 4 options, one correct answer (correctIndex is 0-based)

const questions = [
  // ===== Wolverines =====
  {
    id: "rc001",
    question: "According to the wolverines passage, a wolverine is:",
    options: ["A type of bear", "The largest type of weasel", "A type of dog", "A type of large bird"],
    correctIndex: 1
  },
  {
    id: "rc002",
    question: "In the wolverines passage, wolverines mostly live:",
    options: ["In tropical forests", "In deserts", "Alone in the mountains", "In grasslands near people"],
    correctIndex: 2
  },
  {
    id: "rc003",
    question: "The wolverines passage says wolverines store their food in:",
    options: ["The snow", "Tree hollows", "Underground burrows", "Riverbanks"],
    correctIndex: 0
  },
  {
    id: "rc004",
    question: "According to the passage, wolverines help the environment because they:",
    options: ["Plant seeds as they travel", "Kill harmful animals only", "Dig water channels", "Eat almost anything, acting like a clean-up crew"],
    correctIndex: 3
  },
  {
    id: "rc005",
    question: "The wolverines passage says scientists find wolverines hard to study because:",
    options: ["They attack researchers", "There aren't many of them and they stay hidden", "They live in deep caves", "They only move at night"],
    correctIndex: 1
  },
  {
    id: "rc006",
    question: "According to the passage, wolverines need a lot of space because they:",
    options: ["Live in very large groups", "Build large nests", "Can travel up to 15 miles a day hunting for food", "Reproduce very quickly"],
    correctIndex: 2
  },
  {
    id: "rc007",
    question: "In the wolverines passage, people are protecting wolverines by:",
    options: ["Keeping some private land wild with ranchers' help", "Building special zoos for them", "Feeding them in winter", "Training them to live with humans"],
    correctIndex: 0
  },

  // ===== Meteorologists =====
  {
    id: "rc008",
    question: "According to the weather passage, the scientists who study the weather are called:",
    options: ["Geologists", "Astronomers", "Biologists", "Meteorologists"],
    correctIndex: 3
  },
  {
    id: "rc009",
    question: "The weather passage says meteorologists begin predicting the weather by:",
    options: ["Watching animal behavior", "Collecting a lot of information", "Studying last century's records only", "Asking local residents"],
    correctIndex: 1
  },
  {
    id: "rc010",
    question: "According to the passage, weather forecast maps can warn people about:",
    options: ["Earthquakes and volcanoes", "Rising sea levels over decades", "Very bad weather like hurricanes or heat waves", "Changes in population growth"],
    correctIndex: 2
  },
  {
    id: "rc011",
    question: "The weather passage explains that meteorologists sometimes get the forecast wrong because:",
    options: ["Weather can change quickly and is sometimes hard to predict", "Their satellites stop working", "They rely only on old data", "They ignore ground instruments"],
    correctIndex: 0
  },
  {
    id: "rc012",
    question: "According to the passage, one benefit of accurate weather forecasts for a community is that they:",
    options: ["Boost the local economy directly", "Increase the population growth rate", "Ensure residents are better prepared for bad weather", "Help with planning recreational activities only"],
    correctIndex: 2
  },

  // ===== The Corps of Discovery =====
  {
    id: "rc013",
    question: "In the Corps of Discovery passage, President Jefferson sent the group mainly to:",
    options: ["Build new cities", "Explore the western land", "Fight Native American tribes", "Search for gold"],
    correctIndex: 1
  },
  {
    id: "rc014",
    question: "The leaders of the Corps of Discovery were:",
    options: ["Jefferson and Lewis", "Clark and Sacagawea", "Jefferson and Sacagawea", "Meriwether Lewis and William Clark"],
    correctIndex: 3
  },
  {
    id: "rc015",
    question: "According to the passage, Sacagawea helped the Corps of Discovery because she:",
    options: ["Could communicate with the Native Americans", "Knew how to make maps", "Was a skilled hunter", "Owned boats for the journey"],
    correctIndex: 0
  },
  {
    id: "rc016",
    question: "The Corps of Discovery began its exploring voyage from:",
    options: ["The Pacific Ocean", "The Columbia River", "The Missouri River", "The Rocky Mountains"],
    correctIndex: 2
  },
  {
    id: "rc017",
    question: "Along the way, Lewis and Clark made:",
    options: ["Maps and notes about animals and plants", "A new language for trading", "Roads and bridges", "Treaties with European powers"],
    correctIndex: 0
  },
  {
    id: "rc018",
    question: "In the Corps of Discovery passage, which part of the U.S. was inhabited first (by settlers)?",
    options: ["The western coast", "The eastern states", "California", "The central plains"],
    correctIndex: 1
  },

  // ===== Robots =====
  {
    id: "rc019",
    question: "According to the robots passage, a robot is best described as:",
    options: ["A simple machine", "A machine that makes mistakes", "A machine that gets tired easily", "A machine that moves and follows instructions from a computer"],
    correctIndex: 3
  },
  {
    id: "rc020",
    question: "The robots passage says a robot does not make mistakes because:",
    options: ["It is perfect", "It follows instructions from a computer", "It is made of gold", "It has human-like intelligence"],
    correctIndex: 1
  },
  {
    id: "rc021",
    question: "According to the passage, the poet who imagined robots over 2,000 years ago was:",
    options: ["Homer", "Virgil", "Shakespeare", "Ovid"],
    correctIndex: 0
  },
  {
    id: "rc022",
    question: "The robots passage says the first real robot, Unimate, was made in:",
    options: ["1980", "1900", "1961", "2003"],
    correctIndex: 2
  },
  {
    id: "rc023",
    question: "According to the passage, Unimate was used to:",
    options: ["Explore volcanoes", "Answer telephone calls", "Clean houses", "Help make cars"],
    correctIndex: 3
  },
  {
    id: "rc024",
    question: "The author of the robots passage feels that robots are:",
    options: ["Helpful", "Dangerous", "Confusing", "Old-fashioned"],
    correctIndex: 0
  },
  {
    id: "rc025",
    question: "According to the robots passage, in the future robots will help us:",
    options: ["Make more mistakes", "Fight fires and sickness", "Make life harder", "Replace all human jobs"],
    correctIndex: 1
  },

  // ===== A Nation of Immigrants =====
  {
    id: "rc026",
    question: "The phrase \"a nation of immigrants\" was used in an essay by:",
    options: ["Abraham Lincoln", "George Washington", "John F. Kennedy", "Thomas Jefferson"],
    correctIndex: 2
  },
  {
    id: "rc027",
    question: "According to the immigrants passage, John F. Kennedy was the ______ president of the United States.",
    options: ["25th", "30th", "40th", "35th"],
    correctIndex: 3
  },
  {
    id: "rc028",
    question: "In Kennedy's time, it was difficult for some people to immigrate to the U.S. because:",
    options: ["Certain laws made it harder for Asian and African immigrants", "The U.S. had no immigration laws", "America was full", "Ships were too expensive"],
    correctIndex: 0
  },
  {
    id: "rc029",
    question: "According to the passage, which group had an easier time immigrating to the U.S. back then?",
    options: ["People from Africa", "People from Europe", "People from Asia", "People from South America"],
    correctIndex: 1
  },
  {
    id: "rc030",
    question: "According to the passage, what did Kennedy do to help immigrants?",
    options: ["He built new houses for them", "He stopped all immigration", "He wrote an essay about their important contributions", "He created a new country for them"],
    correctIndex: 2
  },
  {
    id: "rc031",
    question: "The immigrants passage says that after Kennedy's death:",
    options: ["Immigration became much harder", "More people were banned from the U.S.", "Nothing changed at all", "Congress ended the unfair immigration law"],
    correctIndex: 3
  },

  // ===== Karim's Journey =====
  {
    id: "rc032",
    question: "In the passage about Karim, the young Iraqi man traveled to India to:",
    options: ["Pursue a master's degree", "Start a business", "Visit his relatives", "Learn a new craft"],
    correctIndex: 0
  },
  {
    id: "rc033",
    question: "According to the passage, Karim traveled to India with:",
    options: ["His wife", "His friend", "No one", "His father"],
    correctIndex: 2
  },
  {
    id: "rc034",
    question: "In the Karim passage, upon arriving in India Karim encountered:",
    options: ["Good weather and easy studies", "Obstacles such as cultural differences and the language barrier", "Old friends from Iraq", "A job offer"],
    correctIndex: 1
  },
  {
    id: "rc035",
    question: "The qualities that contributed to Karim's final success were:",
    options: ["Fear and doubt", "Laziness and indifference", "Luck and wealth", "Courage and patience"],
    correctIndex: 3
  },

  // ===== Layla and the Puppy =====
  {
    id: "rc036",
    question: "In the story of Layla, what did she see while walking home from school?",
    options: ["A lost puppy wandering on the sidewalk", "A small kitten in a tree", "A stray goat", "A wounded bird"],
    correctIndex: 0
  },
  {
    id: "rc037",
    question: "In the Layla story, how did she approach the lost puppy?",
    options: ["Quickly and loudly", "Running towards it", "Slowly and quietly", "She ignored it at first"],
    correctIndex: 2
  },
  {
    id: "rc038",
    question: "The next morning, Layla:",
    options: ["Took the puppy to a shelter", "Went door to door in her neighborhood looking for the puppy's owner", "Ignored the puppy and went to school", "Sold the puppy"],
    correctIndex: 1
  },
  {
    id: "rc039",
    question: "When the puppy's owner saw her pet safe with Layla, she was:",
    options: ["Angry", "Disappointed", "Sad", "Overjoyed"],
    correctIndex: 3
  },

  // ===== Oil Paint =====
  {
    id: "rc040",
    question: "According to the oil paint passage, artists make oil paint by combining:",
    options: ["Dry colored powder and oil", "Flower petals and water", "Dirt and dry powder", "Oil and liquid dye"],
    correctIndex: 0
  },
  {
    id: "rc041",
    question: "The famous painter mentioned in the oil paint passage who painted in layers was:",
    options: ["Pablo Picasso", "Leonardo da Vinci", "Jan van Eyck", "Vincent van Gogh"],
    correctIndex: 2
  },
  {
    id: "rc042",
    question: "According to the passage, artists today often prefer acrylic paint because it:",
    options: ["Is much more expensive", "Dries quicker and can be painted over more easily", "Comes in brighter colors only", "Was used by the old masters"],
    correctIndex: 1
  },
  {
    id: "rc043",
    question: "In the oil paint passage, painting in many layers helped artists to:",
    options: ["Save money on materials", "Finish paintings faster", "Make the canvas stronger", "Create light, shadows, and different shades of color"],
    correctIndex: 3
  },

  // ===== The Invention of Basketball =====
  {
    id: "rc044",
    question: "In the basketball passage, James Naismith was:",
    options: ["A music teacher in Massachusetts", "A gym teacher at a school in Massachusetts", "A student in Massachusetts", "A basket maker"],
    correctIndex: 1
  },
  {
    id: "rc045",
    question: "The problem James Naismith was trying to solve was:",
    options: ["How to keep his students fit during the long winter", "How to make students follow the rules", "How to help students become better runners", "How to build a cheap gymnasium"],
    correctIndex: 0
  },
  {
    id: "rc046",
    question: "According to the basketball passage, the first basket used in the game was:",
    options: ["A metal ring with a net", "A wooden box", "A peach basket nailed ten feet high", "A fishing net"],
    correctIndex: 2
  },
  {
    id: "rc047",
    question: "What can you conclude about basketball since it was invented?",
    options: ["It has stayed exactly the same", "It is only played in the U.S.", "It lost its popularity over time", "It has changed a lot — new rules were added and the ball changed several times"],
    correctIndex: 3
  },

  // ===== Nadia and the Bird =====
  {
    id: "rc048",
    question: "In the story of Nadia, the village girl was first known for being:",
    options: ["Kind and generous", "Wild and rude", "Lazy and careless", "Rich and proud"],
    correctIndex: 0
  },
  {
    id: "rc049",
    question: "In the Nadia story, after some weeks under Nadia's watchful eye, the wounded bird:",
    options: ["Died", "Got worse", "Began to heal", "Broke its leg"],
    correctIndex: 2
  },
  {
    id: "rc050",
    question: "In the Nadia story, the best meaning of the word \"cradle\" (she cradled it in her hand) is:",
    options: ["To keep in a cage", "To treat carefully", "To give food", "To set free"],
    correctIndex: 1
  },
  {
    id: "rc051",
    question: "At the end of the story, Nadia released the bird:",
    options: ["On the ground", "In the garden", "In the desert", "Into the sky"],
    correctIndex: 3
  },
  {
    id: "rc052",
    question: "The main idea of the Nadia passage is:",
    options: ["Nadia's selfless act of love and compassion", "The strength of wild birds", "The beauty of the village", "The danger of wild animals"],
    correctIndex: 0
  },

  // ===== Rosie and the Mini Bike =====
  {
    id: "rc053",
    question: "In the Rosie story, why was Rosie's anger described as \"palpable\"?",
    options: ["It was misplaced", "It was irrational", "It was so intense it seemed like it could be touched", "It was very difficult to understand"],
    correctIndex: 2
  },
  {
    id: "rc054",
    question: "In the Rosie story, the expression \"par for the course\" implies that something is:",
    options: ["To be expected", "Impossible to undo", "Sure to cause anger", "Meant to be hurtful"],
    correctIndex: 0
  },
  {
    id: "rc055",
    question: "In the Rosie story, the best antonym for \"insurmountable\" is:",
    options: ["Phony", "Unjustified", "Sane", "Conquerable"],
    correctIndex: 3
  },
  {
    id: "rc056",
    question: "In the Rosie story, the best antonym for \"fervor\" is:",
    options: ["Gluttony", "Indifference", "Politeness", "Quietness"],
    correctIndex: 1
  },
  {
    id: "rc057",
    question: "In the Rosie story, which best describes the act of being \"relegated\"?",
    options: ["A star athlete is given a coveted award", "The birthday boy is taken to his favorite restaurant", "A disobedient dog is put in the garage to sleep", "A student is given a prize in class"],
    correctIndex: 2
  },

  // ===== Storms & Nowcasting =====
  {
    id: "rc058",
    question: "The storms/Nowcasting passage mainly discusses:",
    options: ["Computers and their history", "Dangerous storms in Canada", "Satellites in space", "Weather forecasting"],
    correctIndex: 3
  },
  {
    id: "rc059",
    question: "The author mentions the 1987 tornado in Edmonton, Canada in order to:",
    options: ["Give an example of a damaging storm", "Show that tornadoes are common in summer", "Explain different types of weather", "Prove tornadoes occur frequently in Canada"],
    correctIndex: 0
  },
  {
    id: "rc060",
    question: "In the storms passage, weather-balloon observations are of limited value because they are taken:",
    options: ["Only in summer", "Just once every twelve hours at widely separated locations", "Only over the oceans", "By untrained volunteers"],
    correctIndex: 1
  },
  {
    id: "rc061",
    question: "In the storms passage, the word \"compile\" is closest in meaning to:",
    options: ["Look up", "Pile high", "Put together", "Work over"],
    correctIndex: 2
  },
  {
    id: "rc062",
    question: "In the storms passage, the word \"raw\" (raw weather data) is closest in meaning to:",
    options: ["Stormy", "Inaccurate", "Uncooked", "Unprocessed"],
    correctIndex: 3
  },
  {
    id: "rc063",
    question: "Which of the following would best illustrate \"Nowcasting\"?",
    options: ["A warning about a severe thunderstorm on the radio", "A five-day forecast", "The average rainfall for each month", "A list of temperatures in major cities"],
    correctIndex: 0
  },
  {
    id: "rc064",
    question: "Which of the following is NOT mentioned in the storms passage as an advance in short-range weather forecasting?",
    options: ["Radar systems", "Weather balloons", "Automated instruments", "Satellites"],
    correctIndex: 1
  },

  // ===== The Wellderly (Long Life) =====
  {
    id: "rc065",
    question: "According to the long-life passage, a baby born today could potentially live to be:",
    options: ["100 years old at most", "150 years old", "120 years old", "200 years old"],
    correctIndex: 2
  },
  {
    id: "rc066",
    question: "In the long-life passage, the term \"wellderly\" describes people over 80 who:",
    options: ["Take many medications", "Live in special villages", "Exercise every day", "Have no chronic diseases and have never taken medication for them"],
    correctIndex: 3
  },
  {
    id: "rc067",
    question: "The village of Molochio, mentioned in the long-life passage, is located in:",
    options: ["Calabria", "Ecuador", "Hawaii", "Japan"],
    correctIndex: 0
  },
  {
    id: "rc068",
    question: "When people over 80 in the passage are asked the secret of their long life, their answer almost always involves:",
    options: ["Regular exercise", "A diet rich in fruit and vegetables", "Sleeping many hours", "Living near the sea"],
    correctIndex: 1
  },
  {
    id: "rc069",
    question: "The long-life passage suggests that long life results from an interaction between:",
    options: ["Diet and climate only", "Work and rest", "Genes, the environment, and luck", "Medicine and technology"],
    correctIndex: 2
  },

  // ===== Dates =====
  {
    id: "rc070",
    question: "In the dates passage, the word \"thrive\" (palm trees thrive in hot climates) most probably means:",
    options: ["Die", "Ripen", "Harvest", "Grow"],
    correctIndex: 3
  },
  {
    id: "rc071",
    question: "According to the dates passage, which of the following is NOT an advantage of dates?",
    options: ["They strengthen heart and uterus muscles", "They increase constipation", "They prevent night blindness", "They improve eye health"],
    correctIndex: 1
  },
  {
    id: "rc072",
    question: "The dates passage is mainly talking about:",
    options: ["The advantages of dates", "How and where dates grow", "Why Arabs eat dates with milk", "The colors of dates"],
    correctIndex: 0
  },
  {
    id: "rc073",
    question: "According to the passage, yellow dates and dark-colored dates:",
    options: ["Are both preserved directly after harvest", "Are bad for the muscles", "Are preserved differently after being harvested", "Taste exactly the same"],
    correctIndex: 2
  },

  // ===== The Iraqi Marshlands =====
  {
    id: "rc074",
    question: "The Iraqi Marshlands passage describes the marshes as:",
    options: ["A small lake in northern Iraq", "A desert region", "A man-made reservoir", "The largest wetland ecosystem in the Middle East"],
    correctIndex: 3
  },
  {
    id: "rc075",
    question: "According to the passage, the Iraqi Marshlands cover an area of around:",
    options: ["20,000 square kilometers", "30,000 square kilometers", "10,000 square kilometers", "5,000 square kilometers"],
    correctIndex: 0
  },
  {
    id: "rc076",
    question: "The Iraqi government dried up the marshes during the:",
    options: ["1970s", "2000s", "1990s", "1950s"],
    correctIndex: 2
  },
  {
    id: "rc077",
    question: "After 2003, the Iraqi government with international organizations:",
    options: ["Dried the marshes again", "Implemented a plan to save and recover the marshes", "Turned the marshes into farmland", "Built dams over the marshes"],
    correctIndex: 1
  },
  {
    id: "rc078",
    question: "The local Arab communities in the marshes live in reed houses called:",
    options: ["Villas", "Tents", "Huts", "Mudhifs"],
    correctIndex: 3
  },
  {
    id: "rc079",
    question: "The marshlands are located in:",
    options: ["The lower part of Mesopotamia", "The upper part of Mesopotamia", "The north of Iraq", "The middle of Baghdad"],
    correctIndex: 0
  },

  // ===== The Ghost of Elmwood Farm =====
  {
    id: "rc080",
    question: "In the Elmwood Farm story, farm hands frequently gave up their jobs because:",
    options: ["The pay was too low", "The brothers treated them badly", "They kept waking up to find the work had been done overnight", "They found a lion on the farm"],
    correctIndex: 2
  },
  {
    id: "rc081",
    question: "In the Elmwood Farm story, the \"ghost\" turned out to be:",
    options: ["Ben Fox", "Edwin Fox, the eldest son who had been hiding for decades", "The father of the family", "A traveling worker"],
    correctIndex: 1
  },
  {
    id: "rc082",
    question: "In the story, Edwin deserted his regiment during the First World War because:",
    options: ["He hated army life", "He was injured", "He got married", "He joined a football team"],
    correctIndex: 0
  },
  {
    id: "rc083",
    question: "How long was the secret of the Elmwood Farm ghost kept?",
    options: ["Ten years", "Two years", "Four years", "Over forty years"],
    correctIndex: 3
  },
  {
    id: "rc084",
    question: "In the Elmwood Farm story, how many people knew the ghost's secret?",
    options: ["One", "Two", "Three", "Six"],
    correctIndex: 2
  },

  // ===== Amina of Cairo =====
  {
    id: "rc085",
    question: "In the story of Amina of Cairo, she juggled multiple jobs because she:",
    options: ["Loved money", "Wanted to provide a good future for her children", "Planned to buy a house", "Wanted to travel abroad"],
    correctIndex: 1
  },
  {
    id: "rc086",
    question: "In the Amina story, her view of education was that it is:",
    options: ["The key to a successful life", "Stressful work", "Too expensive", "Only for boys"],
    correctIndex: 0
  },
  {
    id: "rc087",
    question: "In the Amina story, her son Samir was fond of:",
    options: ["Engineering", "Computers and technology", "Trade", "Medicine"],
    correctIndex: 3
  },
  {
    id: "rc088",
    question: "In the Amina story, her daughter Dina set her sights on becoming:",
    options: ["A doctor", "A teacher", "An engineer", "A lawyer"],
    correctIndex: 2
  },

  // ===== U.S. Citizenship =====
  {
    id: "rc089",
    question: "According to the citizenship passage, U.S. citizens can:",
    options: ["Only visit the country", "Vote and run for office", "Travel for free to any country", "Skip all taxes"],
    correctIndex: 1
  },
  {
    id: "rc090",
    question: "According to the passage, a Green Card allows a person to:",
    options: ["Become a citizen immediately", "Vote in U.S. elections", "Travel for free", "Live and work permanently in the U.S."],
    correctIndex: 3
  },
  {
    id: "rc091",
    question: "Before applying for U.S. citizenship, a person must have:",
    options: ["Lived in the U.S. for at least five years", "Been born in the U.S.", "Owned a house in the U.S.", "Traveled to all 50 states"],
    correctIndex: 0
  },
  {
    id: "rc092",
    question: "In the citizenship passage, \"allegiance\" means:",
    options: ["Obedience to traffic law", "Voting rights", "Loyalty", "Speaking another language"],
    correctIndex: 2
  },
  {
    id: "rc093",
    question: "According to the passage, after taking the Oath of Allegiance immigrants receive:",
    options: ["A visa", "A certificate of U.S. citizenship", "A Green Card", "A new job"],
    correctIndex: 1
  },
  {
    id: "rc094",
    question: "The citizenship passage says the citizenship process takes years because:",
    options: ["Only the president can approve applications", "The U.S. only allows 10 citizens per year", "Immigrants must travel outside the U.S. first", "There are many applicants and steps"],
    correctIndex: 3
  },

  // ===== Dogs =====
  {
    id: "rc095",
    question: "According to the dogs passage, there are over ______ different kinds of dogs.",
    options: ["300", "100", "200", "400"],
    correctIndex: 0
  },
  {
    id: "rc096",
    question: "The most popular dog breed mentioned in the passage is the:",
    options: ["Chihuahua", "Great Dane", "Labrador Retriever", "Mastiff"],
    correctIndex: 2
  },
  {
    id: "rc097",
    question: "According to the passage, the world's largest dog breed is the:",
    options: ["St. Bernard", "Great Dane", "Irish Wolfhound", "Mastiff"],
    correctIndex: 1
  },
  {
    id: "rc098",
    question: "The dogs passage says a Chihuahua weighs only about:",
    options: ["Fifteen pounds", "Ten pounds", "Twenty pounds", "Six pounds"],
    correctIndex: 3
  },
  {
    id: "rc099",
    question: "In the dogs passage, a puppy whose parents come from different breeds is called:",
    options: ["A mixed-breed or mutt", "A pedigree", "A purebred", "A hybrid retriever"],
    correctIndex: 0
  },
  {
    id: "rc100",
    question: "According to the passage, what makes dogs wonderful pets?",
    options: ["Their independence", "Their size", "Their love for people", "Their ability to guard houses"],
    correctIndex: 2
  }
];
