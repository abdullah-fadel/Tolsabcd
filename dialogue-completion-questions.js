// Dialogue Completion Questions
// Source: "Dialogue Completion — TEST 7" PDF (Book 3). Original items had five
// options; each item here keeps the correct answer with the three strongest
// distractors.
// Format: 4 options, one correct answer (correctIndex is 0-based)

const questions = [
  {
    id: "dlg001",
    question: "\"We went to Berlin last weekend.\" — \"______\"",
    options: ["How did you get there?", "Yes, last weekend was rather rainy.", "My father says he is always tired after work.", "Sure, your teachers are very good."],
    correctIndex: 0
  },
  {
    id: "dlg002",
    question: "A: \"What is the best way to get to Broadway?\" B: \"By underground, I think.\" A: \"Is it the shortest way?\" B: \"______\"",
    options: ["You can go as slowly as you like", "The fastest one", "Take the double-decked buses", "I advise you to travel there by car"],
    correctIndex: 1
  },
  {
    id: "dlg003",
    question: "\"Your dress is so nice.\" — \"______\"",
    options: ["She is so beautiful", "I like them too", "I have made it myself", "Your dress is too short"],
    correctIndex: 2
  },
  {
    id: "dlg004",
    question: "\"I see you are talking again. What do the women always talk about?\" — \"______\"",
    options: ["She always talks much", "Some of the women prefer listening to men", "They are talking about their problems", "They usually discuss their family problems"],
    correctIndex: 3
  },
  {
    id: "dlg005",
    question: "\"Why, Ann! Are you reading without light? Turn on the lamp, please.\" — \"______\"",
    options: ["Oh yes, it's getting dark", "Oh, no, I'm too hungry", "Oh yes, it's too light", "Thank you, very well"],
    correctIndex: 0
  },
  {
    id: "dlg006",
    question: "\"Why did the team not win the game?\" — \"______\"",
    options: ["He was very late.", "I think Nick didn't take part in it.", "Because we were at a party.", "I suppose it began late."],
    correctIndex: 1
  },
  {
    id: "dlg007",
    question: "A: \"I couldn't watch TV yesterday.\" B: \"Why couldn't you?\" A: \"______\"",
    options: ["I don't like to watch TV.", "I could stay and watch TV with them.", "We both, my sister and I, were punished by my father.", "I'll stay at home and learn English."],
    correctIndex: 2
  },
  {
    id: "dlg008",
    question: "Jane: \"Would you like some more cake?\" — Mike: \"______\"",
    options: ["Please take a piece of cake.", "No, I've already caught it.", "Thank you for a nice party.", "Thanks, I haven't eaten my first piece yet."],
    correctIndex: 3
  },
  {
    id: "dlg009",
    question: "Kate: \"I've never played cops and robbers. How do you play it?\" — Robert: \"Everybody plays this game.\" — Kate: \"______\"",
    options: ["Well, will you show me what to do?", "You'll be at the police station.", "Work in a group of four.", "Shall I help you, sir?"],
    correctIndex: 0
  },
  {
    id: "dlg010",
    question: "\"I was told an interesting story yesterday.\" — \"______\"",
    options: ["Neither was he.", "So were we.", "Either did I.", "Didn't you?"],
    correctIndex: 1
  },
  {
    id: "dlg011",
    question: "\"How many times have you been in South Africa?\" — \"______\"",
    options: ["I went last year.", "Next summer.", "Once.", "Yes, I've."],
    correctIndex: 2
  },
  {
    id: "dlg012",
    question: "\"Will you cook macaroni this year?\" — \"______\"",
    options: ["Just a moment.", "Sorry, I couldn't.", "Yes, he will.", "Yes, of course."],
    correctIndex: 3
  },
  {
    id: "dlg013",
    question: "\"Who is the best reader in your class?\" — \"______\"",
    options: ["Pete is, but I read better than he does.", "We take books from the school library.", "We never read books at math lessons.", "My mother doesn't allow me to read books at the library."],
    correctIndex: 0
  },
  {
    id: "dlg014",
    question: "A: \"May I watch TV now?\" B: \"No, you can't.\" A: \"Why?\" B: \"______\"",
    options: ["We'll go for a walk tomorrow", "You'll disturb the kids", "I must stay in bed", "You can tell the truth"],
    correctIndex: 1
  },
  {
    id: "dlg015",
    question: "A: \"Why are you so tired?\" B: \"______\" A: \"Who helped you?\" B: \"______\"",
    options: ["I worked much / you'll help me", "I prefer walking / my mother did", "I've just worked hard / nobody did", "I shall not be tired / my wife did"],
    correctIndex: 2
  },
  {
    id: "dlg016",
    question: "A: \"Mary is out now.\" B: \"______\" A: \"Not far away.\"",
    options: ["What did she study?", "Where are the girls?", "Where is he from?", "Where has she gone?"],
    correctIndex: 3
  },
  {
    id: "dlg017",
    question: "A: \"What do you usually do at your school yard?\" B: \"______\" A: \"What kinds of them do you prefer?\" B: \"______\"",
    options: ["We plant flowers / roses and tulips", "We buy vegetables / potatoes and carrot", "We plant trees / milk and pudding", "We sell vegetables / apples and cherries"],
    correctIndex: 0
  },
  {
    id: "dlg018",
    question: "A: \"The new film is splendid.\" B: \"______\"",
    options: ["He is wonderful, of course", "Not exactly so", "Of course she is", "It's cold"],
    correctIndex: 1
  },
  {
    id: "dlg019",
    question: "A: \"Let's go for a walk.\" B: \"______\" A: \"Where can we go?\" B: \"______\"",
    options: ["Thank you / At 5 o'clock", "I can't / To the park", "Agreed / As far as the bridge", "Certainly / Tomorrow"],
    correctIndex: 2
  },
  {
    id: "dlg020",
    question: "\"Where did you see the New Year in?\" — \"______\" — \"Really?\"",
    options: ["Fishing in the river next week.", "I prefer to go there by train.", "It's hard to say.", "As usual in the open air."],
    correctIndex: 3
  },
  {
    id: "dlg021",
    question: "A: \"My brother thinks that English isn't easy.\" B: \"Why does he think so?\" A: \"______\"",
    options: ["Because he has to work very hard", "He learnt either English or French", "He has no time", "Because it is one of the easiest languages"],
    correctIndex: 0
  },
  {
    id: "dlg022",
    question: "\"How did you ______ your stay in Nigeria?\" — \"Oh, very much.\"",
    options: ["prefer", "enjoy", "observe", "offer"],
    correctIndex: 1
  },
  {
    id: "dlg023",
    question: "\"Oh, it's raining heavily.\" — \"______\" — \"Let's hide somewhere.\"",
    options: ["I think it's 20 degrees above zero.", "It looks like to rain.", "Oh, yes, it's raining cats and dogs.", "Cold weather has set in."],
    correctIndex: 2
  },
  {
    id: "dlg024",
    question: "\"______\" — \"Yes, I went to The National Film Theatre last week and saw a Japanese film.\" — \"______\" — \"Yes, I liked it but of course I didn't understand a word.\"",
    options: ["What time is it? / Surely.", "Where were you yesterday? / Very good.", "What did you do last week? / Have you already seen any of them?", "Have you seen any good films lately? / Did you like it?"],
    correctIndex: 3
  },
  {
    id: "dlg025",
    question: "\"______\" — \"Are you going by bus?\" — \"______\" — \"I'd love to.\"",
    options: ["We are going to Bath on Monday with Tom / No, we are going in Tom's car. Would you like to come?", "Have you ever been to Bath? / Yes let's go", "Could you go to Bath with us, please? / No, we went in Tom's car", "We have visited Bath lately / Yes, we are"],
    correctIndex: 0
  },
  {
    id: "dlg026",
    question: "A: \"Who will you go to the country with?\" B: \"______\" A: \"What about your children?\" B: \"______\"",
    options: ["My sister will join me. / He is at home.", "I'll go alone. / They are away.", "I've just come. / They prefer to go with me.", "Nobody wants to. / She went there."],
    correctIndex: 1
  },
  {
    id: "dlg027",
    question: "\"She goes in for sports. She is a very good swimmer and very pretty at that.\" — \"______\"",
    options: ["Her mother is not in", "She is out", "She is the very girl we need", "Her friend doesn't study well"],
    correctIndex: 2
  },
  {
    id: "dlg028",
    question: "\"I say, Nick, let us go to the park?\" — \"______. Only I must finish my work first. Can you wait a little?\" — \"______\"",
    options: ["Let's / Yes, you can", "Of course / Yes, please", "Certainly / Yes, he can", "All right / Certainly"],
    correctIndex: 3
  },
  {
    id: "dlg029",
    question: "Kate: \"Have you just shot a new film?\" Jane: \"______\" Kate: \"Are you going to shoot another?\" Jane: \"______\"",
    options: ["Yes, we have / Yes, next year", "No, we haven't / I think so", "It's a pity / I'm sorry", "The same to you / Sorry, I'm late"],
    correctIndex: 0
  },
  {
    id: "dlg030",
    question: "Mary: \"Did you pass your exam?\" Ann: \"______\" Mary: \"Was it difficult?\" Ann: \"______\"",
    options: ["No, I haven't / I don't know", "Yes, I did / I don't think it was", "Of course, it was / I'm sorry", "It's a pity / Nice to see you"],
    correctIndex: 1
  },
  {
    id: "dlg031",
    question: "A: \"Would you like a cup of tea?\" B: \"______\" A: \"Would you like it with milk and sugar?\" B: \"______\"",
    options: ["With pleasure / not at all", "It's a pity / I have a nice weekend", "Yes, please / little sugar, no milk", "I'm sorry / good-bye then"],
    correctIndex: 2
  },
  {
    id: "dlg032",
    question: "A: \"Will you repair my clock?\" B: \"______\" A: \"Thank you.\" B: \"______\"",
    options: ["No, I can't / Tomorrow", "I'm busy / I'm sorry to hear that", "Oh, yes, he can / He is out", "Yes, of course / You're welcome"],
    correctIndex: 3
  },
  {
    id: "dlg033",
    question: "A: \"May I watch what you are doing?\" B: \"______\"",
    options: ["Sure. You are welcome.", "I am sitting.", "You must watch me.", "Why were you here?"],
    correctIndex: 0
  },
  {
    id: "dlg034",
    question: "A: \"Can I have tickets for the early morning train to Michigan tomorrow?\" B: \"______\" A: \"Two, please.\"",
    options: ["How much is it?", "How many?", "Where is it?", "What about the other one?"],
    correctIndex: 1
  },
  {
    id: "dlg035",
    question: "A: \"Who is that young man?\" B: \"He is a first year student.\" A: \"______\" B: \"More than two weeks, I think.\"",
    options: ["Where was he before?", "Is he ill?", "How long has he been here?", "Did he come from Turkey?"],
    correctIndex: 2
  },
  {
    id: "dlg036",
    question: "Pete: \"I'll tell you a story.\" Jack: \"______\" Pete: \"Well, one day, when my daughter was little…\"",
    options: ["Oh, no, sir. I'm not free.", "Can't you?", "Was it very interesting?", "Oh, yes, sir. Please, do."],
    correctIndex: 3
  },
  {
    id: "dlg037",
    question: "A: \"Excuse me. Can you speak English?\" B: \"______\" A: \"Could you tell me how to get to Independence Square?\" B: \"______\"",
    options: ["Yes, I can / Yes, certainly, take trolley-bus 11.", "No, I won't / Fine, thanks.", "Sorry, I'm late / That's all right.", "Good-bye / The same to you."],
    correctIndex: 0
  },
  {
    id: "dlg038",
    question: "T: \"Oh, I must water the plants.\" H: \"No, you needn't, ______\"",
    options: ["Do it yourself", "I'll do it myself", "Hurry up", "I'm sorry to hear that"],
    correctIndex: 1
  },
  {
    id: "dlg039",
    question: "T: \"Please, don't tell anyone.\" B: \"______\" T: \"Do you promise?\" B: \"______\"",
    options: ["Yes, I was / I can't", "I can't / Thank you", "Don't worry, I won't / Yes, I do", "We are late / I'm afraid"],
    correctIndex: 2
  },
  {
    id: "dlg040",
    question: "\"Is this seat vacant?\" — \"______\" — \"I thought I was lucky.\"",
    options: ["Sorry, I was busy", "Certainly, you can", "You were right", "It's taken"],
    correctIndex: 3
  },
  {
    id: "dlg041",
    question: "Mother: \"You can't go out skiing today, Bob. It's warm again and there is no snow.\" Bob: \"______\" Mother: \"Don't worry. Today is not the last day of the winter.\"",
    options: ["Well, that's a pity. I wanted to go skiing so much.", "I'm very glad.", "I don't like to ski.", "I was not going to ski today."],
    correctIndex: 0
  },
  {
    id: "dlg042",
    question: "\"I'm sorry for keeping you waiting for such a long time.\" — \"______\"",
    options: ["Certainly.", "That's all right.", "You are welcome.", "Not at all."],
    correctIndex: 1
  },
  {
    id: "dlg043",
    question: "\"My parents have just come back from Paris. They say it's a very beautiful city. ______?\" — \"Never. It's my dream. I hope it will come true.\"",
    options: ["Do you go there", "Will you go there", "Have you ever been there", "Were they there last year"],
    correctIndex: 2
  },
  {
    id: "dlg044",
    question: "A: \"Excuse me, sir.\" B: \"Yes?\" A: \"______\" B: \"This way please.\"",
    options: ["What can I do for you?", "I'm sorry to hear that.", "What is it?", "Where is the smoking room?"],
    correctIndex: 3
  },
  {
    id: "dlg045",
    question: "The teacher said: \"It is better to give than to receive.\" A small boy said his father used that as his motto in business. The teacher asked: \"What is his business?\" The boy said: \"______\"",
    options: ["He is a boxer.", "He is a cashier.", "He is a postman.", "He is a driver."],
    correctIndex: 1
  },
  {
    id: "dlg046",
    question: "\"Can you help me with this work?\" — \"I'm afraid, I can't. I'm very busy now.\" — \"______\" — \"Yes, certainly. I think I'll be free in an hour.\"",
    options: ["Can I come a little later?", "What are you busy with?", "When will you be free?", "Can you help me tomorrow?"],
    correctIndex: 2
  },
  {
    id: "dlg047",
    question: "\"We are going on an excursion tomorrow. Would you like to join us?\" — \"______ Shall I take any food with me?\" — \"______ We'll be away for 2 days.\"",
    options: ["I'd love to / Certainly", "No, I wouldn't / Oh, no", "No, I don't / Yes, please", "Yes / You needn't"],
    correctIndex: 0
  },
  {
    id: "dlg048",
    question: "Helen: \"Nick, have you got anything special on tonight?\" Nick: \"______\"",
    options: ["Oh, Helen, I'm so sorry.", "No, not really. Why?", "No, I didn't.", "Yes, I do."],
    correctIndex: 1
  },
  {
    id: "dlg049",
    question: "Woman: \"Do you think she is better, doctor?\" Doctor: \"______\" Woman: \"I am very glad to hear that. Thank you.\"",
    options: ["She has a bad illness.", "She is very ill.", "She'll be all right in a day or two.", "She was all right."],
    correctIndex: 2
  },
  {
    id: "dlg050",
    question: "\"Which platform does the train 2550 start from?\" — \"______\" — \"Let's find it out together.\" — \"______\"",
    options: ["Can you help me / You are polite", "I think so / Thank you", "From the next / I have no job", "I'm also looking for it / All right"],
    correctIndex: 3
  },
  {
    id: "dlg051",
    question: "\"Shall we have a snack lunch in a pub for a change?\" — \"______\"",
    options: ["That's a good idea, I haven't been to any pub lately.", "The nearest pub is round the corner.", "We have no pubs in our country.", "And what about dessert?"],
    correctIndex: 0
  },
  {
    id: "dlg052",
    question: "\"What's the weather like?\" — \"______. Put on your coat.\" — \"Is it snowing?\" — \"No, it's not but ______.\"",
    options: ["It's warm / it is raining", "It's cold / it's going to", "It's fine / it rains", "It is bad / it is hot"],
    correctIndex: 1
  },
  {
    id: "dlg053",
    question: "\"Let's go to the park. It's so nice there.\" — \"______. Can I take my little brother with me?\" — \"______. We'll have a good time there.\"",
    options: ["Sorry. I can't / No", "I'm busy / Certainly", "O.K. / Certainly", "Certainly / I'm afraid not"],
    correctIndex: 2
  },
  {
    id: "dlg054",
    question: "\"Meet Kate. She is my friend.\" — \"______. I'm glad to meet you.\" — \"______. Glad to meet you too.\"",
    options: ["How are you? / How do you do?", "O.K. / O.K.", "How is your family? / And what about you?", "How do you do? / How do you do?"],
    correctIndex: 3
  },
  {
    id: "dlg055",
    question: "\"What's the matter with Dick? He hasn't come to school today.\" — \"______. He has a headache.\" — \"Let's visit him after lessons.\" — \"______\"",
    options: ["He is not well / O.K.", "She is ill / All right", "He is out / Good", "He is well / I'm busy"],
    correctIndex: 0
  },
  {
    id: "dlg056",
    question: "\"Can you play chess?\" — \"______, I don't play chess at all. Can you play tennis?\" — \"Yes, ______.\" — \"Let's play tennis then.\"",
    options: ["Yes / I don't", "I'm sorry / of course", "No / I can't", "Of course / do, please"],
    correctIndex: 1
  },
  {
    id: "dlg057",
    question: "\"Why didn't you go to the cinema with us, Susan?\" — \"______\"",
    options: ["I couldn't continue writing.", "I'll mend it within a week.", "I had to stay at home yesterday.", "Thanks to you I've got into the theatre."],
    correctIndex: 2
  },
  {
    id: "dlg058",
    question: "\"John is going to buy an expensive car.\" — \"______?\" — \"He told me that himself.\"",
    options: ["Where did you take it", "Are you in need of food", "Do you live in the South", "How do you know"],
    correctIndex: 3
  },
  {
    id: "dlg059",
    question: "\"Tommy, your mother is a teacher and you cannot write a word.\" — \"______\"",
    options: ["Your father is a dentist and your little brother has no teeth", "Your mother is a good housewife", "Your aunt can't go to the mountains with us", "Your mother wanted to see us both"],
    correctIndex: 0
  },
  {
    id: "dlg060",
    question: "\"What is the use of quarreling? Let's forgive and forget.\" — \"______\"",
    options: ["I don't quarrel", "I am always forgiving, and you are always forgetting", "You will forget", "That's just the trouble"],
    correctIndex: 1
  },
  {
    id: "dlg061",
    question: "\"Ken, you live in Riverton, how do you like it?\" — \"______\" — \"Ann and I want to move. Our apartment is too small for us.\"",
    options: ["I don't know", "There is a playground there", "It's a nice town. Why do you ask?", "Oh, I like it very much"],
    correctIndex: 2
  },
  {
    id: "dlg062",
    question: "A: \"I don't think English is easy.\" B: \"______\" A: \"Because I have to work hard learning a lot by heart.\"",
    options: ["So do I", "It is easy", "I want to help", "Why do you think so?"],
    correctIndex: 3
  },
  {
    id: "dlg063",
    question: "\"When are you leaving?\" — \"______\"",
    options: ["I'm flying on Saturday.", "I live not far from here.", "May I see you off?", "I'm leaving home."],
    correctIndex: 0
  },
  {
    id: "dlg064",
    question: "\"Who is a cashier?\" — \"______\"",
    options: ["A man who makes things out of wood.", "Someone who looks after the money in a bank, a shop or an office.", "A person who has been shipwrecked.", "A companion who likes to spend money."],
    correctIndex: 1
  },
  {
    id: "dlg065",
    question: "\"What do you do?\" — \"______\"",
    options: ["Very well. Thank you.", "Pleased to meet you.", "I'm an architect.", "It doesn't matter."],
    correctIndex: 2
  },
  {
    id: "dlg066",
    question: "Husband: \"No dinner ready! I'm going to a restaurant.\" Wife: \"______\" H: \"Will it be ready then?\" W: \"No, it won't. But I'll be ready myself to come with you.\"",
    options: ["Give me some cakes.", "I don't mind your cooking.", "O.K. I'll be ready.", "Couldn't you wait a few minutes?"],
    correctIndex: 3
  },
  {
    id: "dlg067",
    question: "\"______?\" — \"Because I need it for my job.\"",
    options: ["Why are you learning English?", "Who made you buy this book?", "Why are these books on your table?", "Why have you come here?"],
    correctIndex: 0
  },
  {
    id: "dlg068",
    question: "\"______\" — \"I went there on business. I had to go to a conference.\"",
    options: ["When did you go to a conference?", "Did you go there on business or for pleasure?", "Have you had your contract signed?", "Did you enjoy yourself?"],
    correctIndex: 1
  },
  {
    id: "dlg069",
    question: "\"Have you got any books by O. Wilde?\" — \"Yes, we have. ______\"",
    options: ["Here is it", "Take it", "Here they are", "Here are they"],
    correctIndex: 2
  },
  {
    id: "dlg070",
    question: "\"It was so kind of you to give me such an interesting book. Thank you for it.\" — \"______. I've got a lot of books at home.\"",
    options: ["Here you are", "Certainly", "Here it is", "You are welcome"],
    correctIndex: 3
  },
  {
    id: "dlg071",
    question: "\"Have you heard the news? Mary and Nick are engaged.\" — \"______ Mary didn't like him, did she?\" — \"______\"",
    options: ["Really? / That's right", "That's right / Really", "She couldn't / No, she didn't", "I'm sure of it / You are right"],
    correctIndex: 0
  },
  {
    id: "dlg072",
    question: "\"Will you have some more chicken?\" — \"______. I'm full.\" — \"And you, Mr. Thompson?\" — \"______, just a little. It's delicious.\"",
    options: ["Yes / No", "No, thank you / Yes, please", "A little more / No, thank you", "Of course / Certainly"],
    correctIndex: 1
  },
  {
    id: "dlg073",
    question: "\"What outdoor games are popular in England?\" — \"Oh, there's football, hockey, golf, billiard, table-tennis and so on.\" — \"But ______ and ______ are indoor games, aren't they?\" — \"Oh, I'm sorry. Right you are.\"",
    options: ["hockey / golf", "football / billiard", "billiard / table-tennis", "golf / football"],
    correctIndex: 2
  },
  {
    id: "dlg074",
    question: "\"Could I see you on Monday?\" — \"______. When can you come?\" — \"At 10 in the morning.\" — \"______. See you on Monday then. Good-bye.\"",
    options: ["I'm sorry, I can't / That won't do", "No, you can't / Why?", "Yes / No, I'm busy at 10", "Certainly / Very good"],
    correctIndex: 3
  },
  {
    id: "dlg075",
    question: "\"______\" — \"Yes, I went there last week. The tulips were wonderful.\" — \"______\"",
    options: ["Have you been to Hampton Court? / Did you go there by car?", "Where have you been lately? / Who did you go there with?", "Have you finished your work? / Did you do it yourself?", "Who has taken you to Hampton Court? / Was it nice?"],
    correctIndex: 0
  },
  {
    id: "dlg076",
    question: "\"What bus are you waiting for?\" — \"______\" — \"You usually go to work by car, don't you?\" — \"______\"",
    options: ["I was waiting for him. / They belonged to my mother.", "I'm waiting for bus 9 or 14. / Yes, but my mother sometimes needs it.", "I was waiting for a doctor. / That's right.", "What time is it? / Thanks a lot."],
    correctIndex: 1
  },
  {
    id: "dlg077",
    question: "Mike: \"What are you doing, Alice?\" Alice: \"______\" Mike: \"Why? Let me see what's the matter with it.\"",
    options: ["I'm looking for my sister.", "I'm going home.", "I can't close my bag.", "I'm reading a book."],
    correctIndex: 2
  },
  {
    id: "dlg078",
    question: "Mike: \"Let me go and buy the newspapers for you, Dad?\" Father: \"______\"",
    options: ["I have already bought them.", "You can buy them.", "A good idea.", "Do, please."],
    correctIndex: 3
  },
  {
    id: "dlg079",
    question: "Bob: \"What about going to the cinema?\" Tom: \"______\" Bob: \"You can do your work after cinema.\"",
    options: ["I have a lot of things to do", "With pleasure", "I like going to the cinema very much", "I am afraid I can't"],
    correctIndex: 0
  },
  {
    id: "dlg080",
    question: "A: \"Do you think you could give me your bicycle this morning?\" B: \"______\" A: \"______\"",
    options: ["You can't have it now / Certainly", "I'm sorry, I'm using it myself / Well, thanks", "Yes, I can't / Not at all", "I thought it over / With pleasure"],
    correctIndex: 1
  },
  {
    id: "dlg081",
    question: "A: \"Can I borrow your pen for a moment?\" B: \"______\" A: \"______\"",
    options: ["You must / Don't mention it", "No / Here it is", "Sure. Here you are / Thanks", "Not a bit / Thank you"],
    correctIndex: 2
  },
  {
    id: "dlg082",
    question: "\"Hello! ______?\" — \"Not bad, thank you.\"",
    options: ["Glad to see you", "How do you do", "Is that you", "How are you"],
    correctIndex: 3
  },
  {
    id: "dlg083",
    question: "\"______\" — \"No, I'm waiting for Tom.\" — \"______\" — \"I'm not in a hurry. I'll wait till he's ready.\"",
    options: ["Aren't you coming with us? / But he won't be ready for some time", "Who are you waiting for? / He is out", "You are waiting for Sally, aren't you? / She has just left", "Did you come yesterday? / With pleasure"],
    correctIndex: 0
  },
  {
    id: "dlg084",
    question: "\"What are you doing at the week-end?\" — \"______\" — \"Would you like to go to a football match with me?\" — \"______\"",
    options: ["I'm going to the country / No, I haven't any time to go there", "At the week-end? I haven't thought of it yet / Oh, I'd love to", "I'll work in the garden / Yes, be sure, please", "He didn't think about it / Yes"],
    correctIndex: 1
  },
  {
    id: "dlg085",
    question: "\"Look over there! What can it be? It's scared me out of my wits.\" — \"______\"",
    options: ["Call the speaking clock.", "I don't know, the weather is likely to change tomorrow.", "Oh, that's OK. Calm down. It's only a cat.", "Let's make a transferred charge call now."],
    correctIndex: 2
  },
  {
    id: "dlg086",
    question: "A: \"What are you doing, Bob?\" B: \"______\" A: \"What are you writing to him about?\" B: \"Don't ask so many questions ______\"",
    options: ["I'm going to write a letter / There is no time left", "I'm going to visit my uncle / He is ill", "I'm busy writing a letter to you / Are you going to read it?", "I'm writing a letter to Helen / Curiosity killed the cat"],
    correctIndex: 3
  },
  {
    id: "dlg087",
    question: "A: \"Are you ready to go?\" B: \"______\" A: \"When will you be ready?\" B: \"______\" A: \"Hurry up, I'm waiting for you.\"",
    options: ["Not yet / In five minutes", "Yes, of course / I don't know", "I'm afraid I can't / Tomorrow morning", "Why? Shall we go anywhere? / I shan't be ready"],
    correctIndex: 0
  },
  {
    id: "dlg088",
    question: "A: \"______?\" B: \"'Friends', I think.\"",
    options: ["Who is your office manager?", "What's on tonight?", "Whom did you meet?", "What's in your bag?"],
    correctIndex: 1
  },
  {
    id: "dlg089",
    question: "\"Can you spare me a few minutes?\" — \"______. I'm very busy just at present. Can you come a little later?\" — \"______. When shall I come?\" — \"______\"",
    options: ["Yes, certainly / Yes / Yesterday", "No / Of course / Next year", "I'm sorry / Certainly / In an hour or so", "Certainly / Yes, I can / Just now"],
    correctIndex: 2
  },
  {
    id: "dlg090",
    question: "\"What's wrong with you? You look so pale!\" — \"I feel terrible. ______\" — \"Have you consulted a doctor?\" — \"______. I think I'd better call him. I've got a high temperature.\"",
    options: ["I'm feverish / Yes, I have", "I'll be better soon / Certainly", "I've got a sore throat / I've consulted the dentist", "I've got a cold / Not yet, but I'm going to"],
    correctIndex: 3
  },
  {
    id: "dlg091",
    question: "\"The weather is so awful today. It's been raining all day long.\" — \"______. We'll have to put off our excursion.\" — \"______. We would have a splendid time if ______.\"",
    options: ["Yes, it's raining cats and dogs / It's a pity / the weather were fine", "Well / O.K. / we go there", "Yes, it has / Nice! / the weather is fine", "So it is / I'm sorry / we should go there"],
    correctIndex: 0
  },
  {
    id: "dlg092",
    question: "\"I'm flying to New York tomorrow.\" — \"______\"",
    options: ["You're welcome!", "Have a good journey!", "Help yourself", "Welcome here"],
    correctIndex: 1
  },
  {
    id: "dlg093",
    question: "A: \"Do you know the men standing over there?\" B: \"Yes, of course.\" A: \"What are they?\" B: \"______\"",
    options: ["They are Pete and Mike.", "This man is John Smith.", "They are famous sportsmen.", "They are kind."],
    correctIndex: 2
  },
  {
    id: "dlg094",
    question: "\"______\" — \"Yes, I'm packing because I'm going to catch a plane to New York in three hours' time.\" — \"Lucky girl! How long are you staying in New York?\" — \"______\"",
    options: ["Where were you going? / For a year", "Have you already done everything? / Certainly", "What will you be doing? / At 5 tomorrow", "Are you doing anything at the moment, Sally? / For a fortnight"],
    correctIndex: 3
  }
];
