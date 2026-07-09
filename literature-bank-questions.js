// English Literature Question Bank
// Original multiple-choice questions covering English literary history, drama,
// poetry, fiction, literary terms, criticism and theory, and world literature.
// Format: 4 options, one correct answer (correctIndex is 0-based)

const questions = [
  // ===== Literary History & Periods =====
  {
    id: "lit001",
    question: "The term \"Renaissance\" literally means:",
    options: ["Enlightenment", "Rebirth", "Reformation", "Restoration"],
    correctIndex: 1
  },
  {
    id: "lit002",
    question: "The Restoration Period in English literature began in:",
    options: ["1642", "1611", "1660", "1688"],
    correctIndex: 2
  },
  {
    id: "lit003",
    question: "The literary era named after the reign of Queen Elizabeth I is the:",
    options: ["Jacobean Era", "Elizabethan Era", "Victorian Era", "Augustan Era"],
    correctIndex: 1
  },
  {
    id: "lit004",
    question: "Which period came immediately after the Renaissance in English literature?",
    options: ["The Romantic Period", "The Victorian Period", "The Medieval Period", "The Neoclassical Period"],
    correctIndex: 3
  },
  {
    id: "lit005",
    question: "The first English printer was:",
    options: ["William Caxton", "Thomas More", "Roger Ascham", "John Gower"],
    correctIndex: 0
  },
  {
    id: "lit006",
    question: "Who is traditionally called the \"Father of English Poetry\"?",
    options: ["William Langland", "John Gower", "Geoffrey Chaucer", "Thomas Malory"],
    correctIndex: 2
  },
  {
    id: "lit007",
    question: "The oldest epic poem in English literature is:",
    options: ["Paradise Lost", "Beowulf", "The Faerie Queene", "Piers Plowman"],
    correctIndex: 1
  },
  {
    id: "lit008",
    question: "In the Old English epic Beowulf, the monster defeated by the hero is:",
    options: ["Grendel", "Fafnir", "Polyphemus", "Leviathan"],
    correctIndex: 0
  },
  {
    id: "lit009",
    question: "Piers Plowman, the famous medieval dream-vision poem, was written by:",
    options: ["Geoffrey Chaucer", "John Gower", "Thomas Malory", "William Langland"],
    correctIndex: 3
  },
  {
    id: "lit010",
    question: "Morte d'Arthur, the great prose work on King Arthur, was written by:",
    options: ["Thomas Malory", "Edmund Spenser", "William Langland", "Geoffrey of Monmouth"],
    correctIndex: 0
  },
  {
    id: "lit011",
    question: "Everyman is the best-known example of which dramatic genre?",
    options: ["Revenge tragedy", "Morality play", "Comedy of manners", "Masque"],
    correctIndex: 1
  },
  {
    id: "lit012",
    question: "Utopia, describing an ideal imaginary society, was written by:",
    options: ["Francis Bacon", "Philip Sidney", "Thomas More", "Edmund Spenser"],
    correctIndex: 2
  },
  {
    id: "lit013",
    question: "An Apology for Poetry, a major work of Elizabethan criticism, was written by:",
    options: ["Ben Jonson", "Philip Sidney", "John Dryden", "Samuel Johnson"],
    correctIndex: 1
  },

  // ===== Renaissance Drama & Shakespeare =====
  {
    id: "lit014",
    question: "The Spanish Tragedy by Thomas Kyd is historically significant because it is considered:",
    options: ["The first English comedy", "The first morality play", "The first revenge tragedy", "The first history play"],
    correctIndex: 2
  },
  {
    id: "lit015",
    question: "Christopher Marlowe's famous \"mighty line\" refers to his mastery of:",
    options: ["The heroic couplet", "Blank verse", "The Spenserian stanza", "Free verse"],
    correctIndex: 1
  },
  {
    id: "lit016",
    question: "Who wrote Doctor Faustus, the tragedy of a scholar who sells his soul?",
    options: ["William Shakespeare", "Ben Jonson", "Thomas Kyd", "Christopher Marlowe"],
    correctIndex: 3
  },
  {
    id: "lit017",
    question: "How many sonnets did Shakespeare write?",
    options: ["154", "150", "126", "165"],
    correctIndex: 0
  },
  {
    id: "lit018",
    question: "The theatre most closely associated with Shakespeare's company was:",
    options: ["The Rose", "The Swan", "The Globe", "The Fortune"],
    correctIndex: 2
  },
  {
    id: "lit019",
    question: "Shakespeare's shortest tragedy is:",
    options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
    correctIndex: 1
  },
  {
    id: "lit020",
    question: "Venus and Adonis is Shakespeare's:",
    options: ["Narrative poem", "Problem play", "Late romance", "Sonnet sequence"],
    correctIndex: 0
  },
  {
    id: "lit021",
    question: "Ben Jonson is credited with creating which dramatic type?",
    options: ["Comedy of Menace", "Comedy of Manners", "Comedy of Humours", "Sentimental Comedy"],
    correctIndex: 2
  },
  {
    id: "lit022",
    question: "The Duchess of Malfi and The White Devil, masterpieces of Jacobean tragedy, were written by:",
    options: ["Thomas Middleton", "John Webster", "John Ford", "Thomas Dekker"],
    correctIndex: 1
  },

  // ===== Milton & the Seventeenth Century =====
  {
    id: "lit023",
    question: "Milton's pastoral elegy Lycidas mourns the death of:",
    options: ["Arthur Hallam", "John Keats", "Edward King", "Sir Philip Sidney"],
    correctIndex: 2
  },
  {
    id: "lit024",
    question: "Milton's Areopagitica is a famous defense of:",
    options: ["The divine right of kings", "Freedom of the press", "The English Church", "Classical education"],
    correctIndex: 1
  },
  {
    id: "lit025",
    question: "The most prominent and memorable character in Paradise Lost is generally considered to be:",
    options: ["Adam", "The Archangel Michael", "God the Father", "Satan"],
    correctIndex: 3
  },
  {
    id: "lit026",
    question: "Samson Agonistes shows Milton deliberately imitating the form of:",
    options: ["Greek tragedy", "Roman comedy", "The medieval morality play", "Elizabethan revenge tragedy"],
    correctIndex: 0
  },
  {
    id: "lit027",
    question: "The leading poet of the Metaphysical school was:",
    options: ["Robert Herrick", "Edmund Waller", "John Donne", "John Dryden"],
    correctIndex: 2
  },
  {
    id: "lit028",
    question: "\"Gather ye rosebuds while ye may\" was written by:",
    options: ["Robert Herrick", "Andrew Marvell", "George Herbert", "Richard Crashaw"],
    correctIndex: 0
  },
  {
    id: "lit029",
    question: "The Temple, a collection of religious metaphysical poetry, was written by:",
    options: ["Henry Vaughan", "George Herbert", "John Donne", "Richard Crashaw"],
    correctIndex: 1
  },
  {
    id: "lit030",
    question: "To His Coy Mistress, a celebrated carpe diem poem, was written by:",
    options: ["John Donne", "Robert Herrick", "Andrew Marvell", "Abraham Cowley"],
    correctIndex: 2
  },
  {
    id: "lit031",
    question: "The Pilgrim's Progress by John Bunyan is a famous example of:",
    options: ["Satire", "Allegory", "Picaresque fiction", "Mock-epic"],
    correctIndex: 1
  },
  {
    id: "lit032",
    question: "Oroonoko was written by Aphra Behn, who is remembered as:",
    options: ["The first English woman poet", "The first female Poet Laureate", "The first professional woman writer in English", "The first woman to publish a sonnet sequence"],
    correctIndex: 2
  },

  // ===== Restoration & Eighteenth Century =====
  {
    id: "lit033",
    question: "Absalom and Achitophel, a political verse satire, was written by:",
    options: ["Alexander Pope", "John Dryden", "Jonathan Swift", "Samuel Butler"],
    correctIndex: 1
  },
  {
    id: "lit034",
    question: "Dryden's All for Love retells the story of:",
    options: ["Antony and Cleopatra", "Julius Caesar", "Troilus and Cressida", "Dido and Aeneas"],
    correctIndex: 0
  },
  {
    id: "lit035",
    question: "The Way of the World by William Congreve is a masterpiece of:",
    options: ["Revenge tragedy", "Sentimental drama", "Heroic tragedy", "The Comedy of Manners"],
    correctIndex: 3
  },
  {
    id: "lit036",
    question: "Pope's The Rape of the Lock treats a trivial quarrel in a grand epic style, making it the classic English example of:",
    options: ["Pastoral elegy", "Mock-epic", "Heroic tragedy", "Allegory"],
    correctIndex: 1
  },
  {
    id: "lit037",
    question: "\"Fools rush in where angels fear to tread\" comes from:",
    options: ["The Rape of the Lock", "The Dunciad", "An Essay on Criticism", "An Essay on Man"],
    correctIndex: 2
  },
  {
    id: "lit038",
    question: "Who compiled the first great Dictionary of the English Language (1755)?",
    options: ["Samuel Johnson", "Noah Webster", "Joseph Addison", "Jonathan Swift"],
    correctIndex: 0
  },
  {
    id: "lit039",
    question: "Pamela by Samuel Richardson is often regarded as:",
    options: ["The first Gothic novel", "The first historical novel", "The first English novel", "The first picaresque novel"],
    correctIndex: 2
  },
  {
    id: "lit040",
    question: "The longest novel in the English language is generally said to be:",
    options: ["Tom Jones", "Clarissa", "Tristram Shandy", "Middlemarch"],
    correctIndex: 1
  },
  {
    id: "lit041",
    question: "Henry Fielding's Joseph Andrews began as a parody of:",
    options: ["Robinson Crusoe", "Gulliver's Travels", "Moll Flanders", "Pamela"],
    correctIndex: 3
  },
  {
    id: "lit042",
    question: "The most formally experimental novel of the eighteenth century, playing with typography and narrative order, is:",
    options: ["Tristram Shandy", "Humphry Clinker", "Evelina", "Rasselas"],
    correctIndex: 0
  },
  {
    id: "lit043",
    question: "The Castle of Otranto by Horace Walpole is considered:",
    options: ["The first epistolary novel", "The first Gothic novel", "The first detective novel", "The first novel of manners"],
    correctIndex: 1
  },
  {
    id: "lit044",
    question: "\"The paths of glory lead but to the grave\" appears in:",
    options: ["Gray's Elegy Written in a Country Churchyard", "Goldsmith's The Deserted Village", "Cowper's The Task", "Young's Night Thoughts"],
    correctIndex: 0
  },
  {
    id: "lit045",
    question: "She Stoops to Conquer was written by:",
    options: ["Richard Sheridan", "William Congreve", "Oliver Goldsmith", "George Farquhar"],
    correctIndex: 2
  },

  // ===== The Romantics =====
  {
    id: "lit046",
    question: "Lyrical Ballads (1798), which launched English Romanticism, was jointly written by:",
    options: ["Byron and Shelley", "Wordsworth and Coleridge", "Keats and Shelley", "Blake and Wordsworth"],
    correctIndex: 1
  },
  {
    id: "lit047",
    question: "The \"Lake Poets\" are:",
    options: ["Byron, Shelley, and Keats", "Blake, Burns, and Cowper", "Wordsworth, Coleridge, and Southey", "Gray, Collins, and Goldsmith"],
    correctIndex: 2
  },
  {
    id: "lit048",
    question: "The phrase \"willing suspension of disbelief\" was coined by:",
    options: ["William Wordsworth", "S.T. Coleridge", "John Keats", "P.B. Shelley"],
    correctIndex: 1
  },
  {
    id: "lit049",
    question: "Biographia Literaria, mixing autobiography and literary theory, was written by:",
    options: ["S.T. Coleridge", "William Hazlitt", "Charles Lamb", "Thomas De Quincey"],
    correctIndex: 0
  },
  {
    id: "lit050",
    question: "Keats's \"Negative Capability\" describes the poet's power to:",
    options: ["Criticize society through irony", "Remain in uncertainties without reaching after fact and reason", "Recall emotion in tranquillity", "Deny the imagination in favor of reason"],
    correctIndex: 1
  },
  {
    id: "lit051",
    question: "\"Beauty is truth, truth beauty\" concludes which poem by Keats?",
    options: ["Ode to a Nightingale", "Ode on Melancholy", "The Eve of St. Agnes", "Ode on a Grecian Urn"],
    correctIndex: 3
  },
  {
    id: "lit052",
    question: "Adonais is Shelley's elegy on the death of:",
    options: ["John Keats", "Lord Byron", "William Wordsworth", "Edward King"],
    correctIndex: 0
  },
  {
    id: "lit053",
    question: "The Prelude, Wordsworth's long autobiographical poem, traces:",
    options: ["The fall of the French monarchy", "The growth of the poet's mind", "The history of English poetry", "The life of Coleridge"],
    correctIndex: 1
  },
  {
    id: "lit054",
    question: "\"Tyger! Tyger! burning bright\" was written by:",
    options: ["Robert Burns", "William Wordsworth", "William Blake", "S.T. Coleridge"],
    correctIndex: 2
  },
  {
    id: "lit055",
    question: "Frankenstein was written by:",
    options: ["Ann Radcliffe", "Mary Shelley", "Mary Wollstonecraft", "Emily Brontë"],
    correctIndex: 1
  },
  {
    id: "lit056",
    question: "Walter Scott, author of Ivanhoe and Waverley, is known as the father of:",
    options: ["The Gothic novel", "The detective novel", "The epistolary novel", "The historical novel"],
    correctIndex: 3
  },
  {
    id: "lit057",
    question: "Confessions of an English Opium-Eater was written by:",
    options: ["Thomas De Quincey", "Charles Lamb", "William Hazlitt", "S.T. Coleridge"],
    correctIndex: 0
  },
  {
    id: "lit058",
    question: "The National Bard of Scotland is:",
    options: ["Walter Scott", "Robert Burns", "James Hogg", "William Dunbar"],
    correctIndex: 1
  },
  {
    id: "lit059",
    question: "A Vindication of the Rights of Woman (1792) was written by:",
    options: ["Mary Shelley", "Jane Austen", "Mary Wollstonecraft", "Fanny Burney"],
    correctIndex: 2
  },

  // ===== The Victorians =====
  {
    id: "lit060",
    question: "\"George Eliot\" was the pen name of:",
    options: ["Mary Ann Evans", "Charlotte Brontë", "Elizabeth Gaskell", "Christina Rossetti"],
    correctIndex: 0
  },
  {
    id: "lit061",
    question: "Thomas Hardy set most of his novels in a semi-fictional region called:",
    options: ["Barsetshire", "Wessex", "Middlemarch", "Cranford"],
    correctIndex: 1
  },
  {
    id: "lit062",
    question: "Tennyson's In Memoriam is an elegy for:",
    options: ["Edward King", "John Keats", "Prince Albert", "Arthur Hallam"],
    correctIndex: 3
  },
  {
    id: "lit063",
    question: "My Last Duchess is a famous example of which form, mastered by Robert Browning?",
    options: ["The dramatic monologue", "The Petrarchan sonnet", "The verse epistle", "The pastoral elegy"],
    correctIndex: 0
  },
  {
    id: "lit064",
    question: "The \"Touchstone Method\" of judging poetry by comparing it with lines of the great masters was proposed by:",
    options: ["John Ruskin", "Walter Pater", "Matthew Arnold", "T.S. Eliot"],
    correctIndex: 2
  },
  {
    id: "lit065",
    question: "The leader of the Pre-Raphaelite Brotherhood was:",
    options: ["Christina Rossetti", "D.G. Rossetti", "William Morris", "A.C. Swinburne"],
    correctIndex: 1
  },
  {
    id: "lit066",
    question: "The doctrine of \"Art for art's sake\" in Victorian England is chiefly associated with:",
    options: ["Matthew Arnold", "Thomas Carlyle", "John Ruskin", "Walter Pater"],
    correctIndex: 3
  },
  {
    id: "lit067",
    question: "Goblin Market was written by:",
    options: ["Christina Rossetti", "Elizabeth Barrett Browning", "Emily Brontë", "D.G. Rossetti"],
    correctIndex: 0
  },
  {
    id: "lit068",
    question: "The poet who developed the concepts of \"Inscape\" and \"Instress\" and wrote The Windhover is:",
    options: ["Alfred Tennyson", "Gerard Manley Hopkins", "Robert Browning", "Matthew Arnold"],
    correctIndex: 1
  },
  {
    id: "lit069",
    question: "Jude the Obscure and Tess of the d'Urbervilles were written by:",
    options: ["George Eliot", "Charles Dickens", "Thomas Hardy", "George Meredith"],
    correctIndex: 2
  },
  {
    id: "lit070",
    question: "The Picture of Dorian Gray was written by:",
    options: ["Oscar Wilde", "Walter Pater", "Robert Louis Stevenson", "Henry James"],
    correctIndex: 0
  },

  // ===== Modern British Literature =====
  {
    id: "lit071",
    question: "The pioneer of the \"stream of consciousness\" technique, author of Ulysses, is:",
    options: ["Virginia Woolf", "James Joyce", "D.H. Lawrence", "William Faulkner"],
    correctIndex: 1
  },
  {
    id: "lit072",
    question: "The literary use of the word \"Epiphany\" — a sudden moment of revelation — was coined by:",
    options: ["T.S. Eliot", "Virginia Woolf", "James Joyce", "W.B. Yeats"],
    correctIndex: 2
  },
  {
    id: "lit073",
    question: "T.S. Eliot dedicated The Waste Land to Ezra Pound with the phrase \"il miglior fabbro\", meaning:",
    options: ["The better craftsman", "The dearest friend", "The greater poet", "The wisest critic"],
    correctIndex: 0
  },
  {
    id: "lit074",
    question: "The theory of the \"Objective Correlative\" — a set of objects or events that evoke a specific emotion — belongs to:",
    options: ["I.A. Richards", "Ezra Pound", "F.R. Leavis", "T.S. Eliot"],
    correctIndex: 3
  },
  {
    id: "lit075",
    question: "According to T.S. Eliot, the \"Dissociation of Sensibility\" refers to:",
    options: ["The reader's detachment from the text", "The separation of thought from feeling in poetry after the seventeenth century", "The poet's escape from personality", "The decline of religious belief among poets"],
    correctIndex: 1
  },
  {
    id: "lit076",
    question: "The Four Quartets consists of Burnt Norton, East Coker, Little Gidding, and:",
    options: ["Ash Wednesday", "The Hollow Men", "The Dry Salvages", "Prufrock"],
    correctIndex: 2
  },
  {
    id: "lit077",
    question: "The Bloomsbury Group is most closely associated with which novelist?",
    options: ["Virginia Woolf", "D.H. Lawrence", "E.M. Forster", "Katherine Mansfield"],
    correctIndex: 0
  },
  {
    id: "lit078",
    question: "A Room of One's Own, a founding text of feminist criticism, argues mainly that:",
    options: ["Women should write only about domestic life", "A woman needs money and a room of her own to write fiction", "Women's writing is superior to men's", "The novel is a feminine genre by nature"],
    correctIndex: 1
  },
  {
    id: "lit079",
    question: "In a Station of the Metro by Ezra Pound is the most famous poem of which movement?",
    options: ["Symbolism", "Vorticism", "Surrealism", "Imagism"],
    correctIndex: 3
  },
  {
    id: "lit080",
    question: "Look Back in Anger by John Osborne gave rise to which label for post-war British writers?",
    options: ["The Angry Young Men", "The Lost Generation", "The Beat Generation", "The Movement"],
    correctIndex: 0
  },
  {
    id: "lit081",
    question: "The term \"Theatre of the Absurd\" was coined by:",
    options: ["Samuel Beckett", "Martin Esslin", "Eugène Ionesco", "Harold Pinter"],
    correctIndex: 1
  },
  {
    id: "lit082",
    question: "The two tramps who wait endlessly in Waiting for Godot are:",
    options: ["Hamm and Clov", "Rosencrantz and Guildenstern", "Vladimir and Estragon", "Pozzo and Lucky"],
    correctIndex: 2
  },
  {
    id: "lit083",
    question: "Philip Larkin, author of The Whitsun Weddings and Church Going, was the leading poet of:",
    options: ["The Georgians", "The Imagists", "The Beats", "The Movement"],
    correctIndex: 3
  },
  {
    id: "lit084",
    question: "The Irish Nobel laureate who wrote Digging and Death of a Naturalist is:",
    options: ["Seamus Heaney", "W.B. Yeats", "Patrick Kavanagh", "Derek Walcott"],
    correctIndex: 0
  },
  {
    id: "lit085",
    question: "Sylvia Plath, author of Daddy and Lady Lazarus, belongs to which school of poetry?",
    options: ["Imagist poetry", "Confessional poetry", "Metaphysical poetry", "Language poetry"],
    correctIndex: 1
  },
  {
    id: "lit086",
    question: "Do not go gentle into that good night by Dylan Thomas is a famous example of the:",
    options: ["Sestina", "Sonnet", "Villanelle", "Ballad"],
    correctIndex: 2
  },
  {
    id: "lit087",
    question: "\"Poetry makes nothing happen\" appears in W.H. Auden's elegy for:",
    options: ["Sigmund Freud", "T.S. Eliot", "Dylan Thomas", "W.B. Yeats"],
    correctIndex: 3
  },
  {
    id: "lit088",
    question: "The term \"Big Brother\" for an all-seeing authoritarian state comes from:",
    options: ["Nineteen Eighty-Four", "Brave New World", "Animal Farm", "Fahrenheit 451"],
    correctIndex: 0
  },
  {
    id: "lit089",
    question: "Rosencrantz and Guildenstern Are Dead, which retells Hamlet from the viewpoint of two minor characters, was written by:",
    options: ["Harold Pinter", "Tom Stoppard", "Edward Albee", "Caryl Churchill"],
    correctIndex: 1
  },

  // ===== American Literature =====
  {
    id: "lit090",
    question: "In The Scarlet Letter, Hester Prynne is forced to wear:",
    options: ["A black veil", "A crown of thorns", "The letter A", "A white cap"],
    correctIndex: 2
  },
  {
    id: "lit091",
    question: "Walden and Civil Disobedience were written by:",
    options: ["Ralph Waldo Emerson", "Walt Whitman", "Nathaniel Hawthorne", "Henry David Thoreau"],
    correctIndex: 3
  },
  {
    id: "lit092",
    question: "\"I would prefer not to\" is the famous refrain of which Melville character?",
    options: ["Bartleby", "Ishmael", "Captain Ahab", "Billy Budd"],
    correctIndex: 0
  },
  {
    id: "lit093",
    question: "Leaves of Grass, celebrating democracy and the self in free verse, was written by:",
    options: ["Emily Dickinson", "Walt Whitman", "Edgar Allan Poe", "Robert Frost"],
    correctIndex: 1
  },
  {
    id: "lit094",
    question: "The reclusive nineteenth-century poet of Amherst who wrote \"Because I could not stop for Death\" is:",
    options: ["Christina Rossetti", "Sylvia Plath", "Emily Dickinson", "Elizabeth Bishop"],
    correctIndex: 2
  },
  {
    id: "lit095",
    question: "\"Mark Twain\" was the pen name of:",
    options: ["Samuel Clemens", "William Sydney Porter", "Theodore Dreiser", "Stephen Crane"],
    correctIndex: 0
  },
  {
    id: "lit096",
    question: "Edgar Allan Poe is considered the father of:",
    options: ["The historical novel", "Science fiction", "The essay", "The detective story"],
    correctIndex: 3
  },
  {
    id: "lit097",
    question: "Hemingway's \"Iceberg Theory\" of writing holds that:",
    options: ["A story should state every detail explicitly", "The deeper meaning should lie beneath the surface, implied rather than stated", "Stories must be set in cold climates", "Long descriptions strengthen a story's effect"],
    correctIndex: 1
  },
  {
    id: "lit098",
    question: "William Faulkner set most of his novels in the fictional county of:",
    options: ["Maycomb", "Yoknapatawpha", "Winesburg", "Jefferson Falls"],
    correctIndex: 1
  },
  {
    id: "lit099",
    question: "The term \"The Lost Generation\" for the post-WWI American writers was coined by:",
    options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Gertrude Stein", "Ezra Pound"],
    correctIndex: 2
  },
  {
    id: "lit100",
    question: "The leading poet of the Harlem Renaissance, author of The Weary Blues, is:",
    options: ["Langston Hughes", "Richard Wright", "Ralph Ellison", "James Baldwin"],
    correctIndex: 0
  },
  {
    id: "lit101",
    question: "Arthur Miller's The Crucible dramatizes:",
    options: ["The Great Depression", "The American Revolution", "The McCarthy hearings directly", "The Salem witch trials"],
    correctIndex: 3
  },
  {
    id: "lit102",
    question: "The protagonist of Death of a Salesman is:",
    options: ["Biff Loman", "Willy Loman", "Charley", "Happy Loman"],
    correctIndex: 1
  },
  {
    id: "lit103",
    question: "The central conflict of A Streetcar Named Desire is between:",
    options: ["Willy and Biff", "George and Martha", "Blanche and Stanley", "Amanda and Tom"],
    correctIndex: 2
  },
  {
    id: "lit104",
    question: "Howl, the defining poem of the Beat Generation, was written by:",
    options: ["Allen Ginsberg", "Jack Kerouac", "William S. Burroughs", "Lawrence Ferlinghetti"],
    correctIndex: 0
  },
  {
    id: "lit105",
    question: "\"Good fences make good neighbors\" appears in Robert Frost's:",
    options: ["The Road Not Taken", "Birches", "Stopping by Woods on a Snowy Evening", "Mending Wall"],
    correctIndex: 3
  },
  {
    id: "lit106",
    question: "Beloved and The Bluest Eye were written by:",
    options: ["Alice Walker", "Toni Morrison", "Zora Neale Hurston", "Maya Angelou"],
    correctIndex: 1
  },

  // ===== World Literature =====
  {
    id: "lit107",
    question: "In Kafka's The Metamorphosis, the man who wakes up transformed into an insect is:",
    options: ["Josef K.", "Gregor Samsa", "Meursault", "Hans Castorp"],
    correctIndex: 1
  },
  {
    id: "lit108",
    question: "The protagonist of Camus's The Stranger is:",
    options: ["Meursault", "Roquentin", "Sisyphus", "Clamence"],
    correctIndex: 0
  },
  {
    id: "lit109",
    question: "\"Hell is other people\" is a line from:",
    options: ["The Flies", "The Plague", "No Exit", "The Myth of Sisyphus"],
    correctIndex: 2
  },
  {
    id: "lit110",
    question: "Macondo is the fictional town at the heart of:",
    options: ["The House of the Spirits", "Love in the Time of Cholera", "Ficciones", "One Hundred Years of Solitude"],
    correctIndex: 3
  },
  {
    id: "lit111",
    question: "Things Fall Apart, a foundational African novel, was written by:",
    options: ["Chinua Achebe", "Wole Soyinka", "Ngũgĩ wa Thiong'o", "Ben Okri"],
    correctIndex: 0
  },
  {
    id: "lit112",
    question: "Decolonising the Mind, which argues for writing in African languages, was written by:",
    options: ["Chinua Achebe", "Frantz Fanon", "Ngũgĩ wa Thiong'o", "Edward Said"],
    correctIndex: 2
  },
  {
    id: "lit113",
    question: "The Handmaid's Tale, a dystopia about a theocratic state, was written by:",
    options: ["Doris Lessing", "Margaret Atwood", "Ursula K. Le Guin", "Kazuo Ishiguro"],
    correctIndex: 1
  },
  {
    id: "lit114",
    question: "The Remains of the Day and Never Let Me Go were written by:",
    options: ["Ian McEwan", "Julian Barnes", "Salman Rushdie", "Kazuo Ishiguro"],
    correctIndex: 3
  },
  {
    id: "lit115",
    question: "Midnight's Children and The Satanic Verses were written by:",
    options: ["Salman Rushdie", "V.S. Naipaul", "Amitav Ghosh", "Vikram Seth"],
    correctIndex: 0
  },
  {
    id: "lit116",
    question: "The Nobel Prize in Literature 2020 was awarded to the poet:",
    options: ["Bob Dylan", "Louise Glück", "Seamus Heaney", "Derek Walcott"],
    correctIndex: 1
  },

  // ===== Literary Terms: Drama & Fiction =====
  {
    id: "lit117",
    question: "\"Catharsis\" in Aristotle's theory of tragedy means:",
    options: ["The hero's fatal error", "The purging of the emotions of pity and fear", "The recognition of the truth", "The reversal of fortune"],
    correctIndex: 1
  },
  {
    id: "lit118",
    question: "The tragic hero's fatal flaw or error of judgement is called:",
    options: ["Hubris", "Anagnorisis", "Hamartia", "Peripeteia"],
    correctIndex: 2
  },
  {
    id: "lit119",
    question: "In tragedy, \"Peripeteia\" refers to:",
    options: ["A sudden reversal of fortune", "The hero's excessive pride", "The moment of recognition", "The final resolution"],
    correctIndex: 0
  },
  {
    id: "lit120",
    question: "\"Anagnorisis\" is the moment in which the tragic hero:",
    options: ["Dies on stage", "Moves from ignorance to knowledge or recognition", "Defies the gods through pride", "Delivers his final soliloquy"],
    correctIndex: 1
  },
  {
    id: "lit121",
    question: "What distinguishes a soliloquy from an ordinary monologue?",
    options: ["A soliloquy is always in verse", "A soliloquy is spoken by the villain only", "A soliloquy must open the play", "In a soliloquy the character speaks his private thoughts alone, unheard by other characters"],
    correctIndex: 3
  },
  {
    id: "lit122",
    question: "A \"deus ex machina\" ending is one in which:",
    options: ["The hero dies unexpectedly", "The conflict is resolved by an improbable, external intervention", "The story ends where it began", "The narrator addresses the reader directly"],
    correctIndex: 1
  },
  {
    id: "lit123",
    question: "A narrative that begins \"in medias res\" begins:",
    options: ["With the hero's birth", "With a prologue spoken by the author", "In the middle of the action", "At the end and moves backwards"],
    correctIndex: 2
  },
  {
    id: "lit124",
    question: "The distinction between \"round\" and \"flat\" characters was introduced by:",
    options: ["E.M. Forster", "Henry James", "Wayne C. Booth", "Virginia Woolf"],
    correctIndex: 0
  },
  {
    id: "lit125",
    question: "A \"foil\" is a character who:",
    options: ["Narrates the story from outside", "Contrasts with another character to highlight his qualities", "Opposes the hero as the main villain", "Provides comic relief only"],
    correctIndex: 1
  },
  {
    id: "lit126",
    question: "An \"unreliable narrator\" is one:",
    options: ["Who tells the story in the third person", "Who knows the thoughts of all characters", "Who appears only at the beginning of the story", "Whose account of events cannot be fully trusted by the reader"],
    correctIndex: 3
  },
  {
    id: "lit127",
    question: "The Canterbury Tales is a classic example of:",
    options: ["A frame narrative", "An epistolary novel", "A dramatic monologue", "A mock-epic"],
    correctIndex: 0
  },
  {
    id: "lit128",
    question: "A \"Bildungsroman\" is a novel that:",
    options: ["Is written entirely in letters", "Traces the growth and education of a young protagonist", "Follows a roguish hero through episodic adventures", "Describes an oppressive future society"],
    correctIndex: 1
  },
  {
    id: "lit129",
    question: "A \"picaresque\" novel typically presents:",
    options: ["A perfect imaginary society", "The inner life of an artist", "The episodic adventures of a rogue hero", "A crime investigated by a detective"],
    correctIndex: 2
  },
  {
    id: "lit130",
    question: "The word \"malapropism\" — the comic misuse of words — derives from Mrs. Malaprop, a character created by:",
    options: ["Oliver Goldsmith", "William Congreve", "Ben Jonson", "Richard Sheridan"],
    correctIndex: 3
  },
  {
    id: "lit131",
    question: "Which pair correctly matches the term with its meaning?",
    options: ["Utopia — an oppressive future society", "Dystopia — an oppressive imagined society", "Fable — a long heroic poem", "Parody — a lament for the dead"],
    correctIndex: 1
  },
  {
    id: "lit132",
    question: "\"Verisimilitude\" in fiction refers to:",
    options: ["The appearance of truth or lifelikeness", "The use of supernatural events", "The moral lesson of the story", "The repetition of key images"],
    correctIndex: 0
  },
  {
    id: "lit133",
    question: "Naturalism differs from Realism mainly in that Naturalism:",
    options: ["Avoids unpleasant subjects", "Idealizes rural life", "Presents characters as determined by environment and heredity", "Rejects detailed description"],
    correctIndex: 2
  },
  {
    id: "lit134",
    question: "\"Magic realism\" is best defined as:",
    options: ["Fantasy set in an entirely imaginary world", "Fiction about magicians and wizards", "Realistic fiction that excludes all supernatural elements", "The matter-of-fact blending of magical events into a realistic setting"],
    correctIndex: 3
  },
  {
    id: "lit135",
    question: "\"Metafiction\" is:",
    options: ["Fiction that is self-conscious about its own status as fiction", "Fiction longer than one thousand pages", "Fiction based on historical documents", "Fiction narrated by several characters"],
    correctIndex: 0
  },
  {
    id: "lit136",
    question: "\"Intertextuality\" refers to:",
    options: ["The division of a novel into chapters", "The relationship between texts and their echoes of one another", "The author's private notes on a text", "The printing history of a text"],
    correctIndex: 1
  },

  // ===== Literary Terms: Poetry & Figures of Speech =====
  {
    id: "lit137",
    question: "Blank verse is:",
    options: ["Rhymed iambic pentameter", "Verse with no fixed meter or rhyme", "Unrhymed iambic pentameter", "A nine-line rhymed stanza"],
    correctIndex: 2
  },
  {
    id: "lit138",
    question: "A heroic couplet is:",
    options: ["Two rhymed lines of iambic pentameter", "Two unrhymed lines of blank verse", "A four-line stanza with alternating rhyme", "The closing lines of a Petrarchan sonnet"],
    correctIndex: 0
  },
  {
    id: "lit139",
    question: "The Spenserian stanza consists of:",
    options: ["Eight lines", "Nine lines", "Seven lines", "Fourteen lines"],
    correctIndex: 1
  },
  {
    id: "lit140",
    question: "Terza rima is a rhyme scheme running:",
    options: ["ABAB CDCD", "AABB CCDD", "ABBA ABBA", "ABA BCB CDC"],
    correctIndex: 3
  },
  {
    id: "lit141",
    question: "The \"volta\" of a sonnet is:",
    options: ["The turn in thought or argument", "The final rhyming couplet", "The first quatrain", "The metrical pattern"],
    correctIndex: 0
  },
  {
    id: "lit142",
    question: "An iamb is a metrical foot consisting of:",
    options: ["Two stressed syllables", "An unstressed syllable followed by a stressed one", "A stressed syllable followed by an unstressed one", "Two unstressed syllables followed by a stressed one"],
    correctIndex: 1
  },
  {
    id: "lit143",
    question: "A metrical foot of one stressed syllable followed by two unstressed syllables is:",
    options: ["An anapest", "A spondee", "A dactyl", "A trochee"],
    correctIndex: 2
  },
  {
    id: "lit144",
    question: "An \"Alexandrine\" is a line of:",
    options: ["Iambic pentameter", "Trochaic tetrameter", "Free verse", "Iambic hexameter"],
    correctIndex: 3
  },
  {
    id: "lit145",
    question: "\"Enjambment\" occurs when:",
    options: ["A sentence runs over from one line of verse into the next without pause", "A strong pause falls in the middle of a line", "Two lines end with the same word", "A stanza repeats as a refrain"],
    correctIndex: 0
  },
  {
    id: "lit146",
    question: "A strong pause within a line of verse is called:",
    options: ["Volta", "Caesura", "Enjambment", "Elision"],
    correctIndex: 1
  },
  {
    id: "lit147",
    question: "\"Scansion\" is the practice of:",
    options: ["Correcting a poet's spelling", "Translating poetry into prose", "Analyzing the meter of a poem", "Reading a poem aloud in public"],
    correctIndex: 2
  },
  {
    id: "lit148",
    question: "Which figure substitutes the name of one thing with something closely associated with it (e.g. \"the crown\" for the monarchy)?",
    options: ["Synecdoche", "Simile", "Personification", "Metonymy"],
    correctIndex: 3
  },
  {
    id: "lit149",
    question: "\"Synecdoche\" is the figure in which:",
    options: ["A part stands for the whole", "Human traits are given to objects", "Opposite ideas are juxtaposed", "A statement contradicts itself"],
    correctIndex: 0
  },
  {
    id: "lit150",
    question: "\"Litotes\" is:",
    options: ["Deliberate exaggeration", "Understatement, often through a double negative", "Addressing an absent person or thing", "The repetition of vowel sounds"],
    correctIndex: 1
  },
  {
    id: "lit151",
    question: "Addressing an absent person, a dead person, or an abstract idea directly in a poem is called:",
    options: ["Allusion", "Paradox", "Apostrophe", "Euphemism"],
    correctIndex: 2
  },
  {
    id: "lit152",
    question: "\"Anaphora\" and \"epistrophe\" differ in that:",
    options: ["Anaphora repeats sounds; epistrophe repeats images", "Anaphora belongs to prose; epistrophe belongs to verse", "Anaphora uses many conjunctions; epistrophe omits them", "Anaphora repeats words at the beginnings of clauses; epistrophe repeats them at the ends"],
    correctIndex: 3
  },
  {
    id: "lit153",
    question: "The omission of conjunctions between clauses (e.g. \"I came, I saw, I conquered\") is called:",
    options: ["Asyndeton", "Polysyndeton", "Zeugma", "Chiasmus"],
    correctIndex: 0
  },
  {
    id: "lit154",
    question: "\"Onomatopoeia\" refers to words that:",
    options: ["Have double meanings", "Imitate the sounds they describe", "Begin with the same consonant", "Contradict each other"],
    correctIndex: 1
  },
  {
    id: "lit155",
    question: "An \"oxymoron\" is:",
    options: ["An indirect reference to history or literature", "A comparison using 'like' or 'as'", "A combination of contradictory terms (e.g. 'bitter sweet')", "An exaggeration for effect"],
    correctIndex: 2
  },
  {
    id: "lit156",
    question: "A villanelle is a poem of:",
    options: ["Fourteen lines with a final couplet", "Three unrhymed lines", "Eight-line stanzas in ottava rima", "Nineteen lines built on two repeating refrain lines"],
    correctIndex: 3
  },

  // ===== Classical & Modern Criticism =====
  {
    id: "lit157",
    question: "The Poetics, the founding text of Western literary criticism, was written by:",
    options: ["Aristotle", "Plato", "Horace", "Longinus"],
    correctIndex: 0
  },
  {
    id: "lit158",
    question: "\"Mimesis\", the key concept of classical criticism, means:",
    options: ["Inspiration", "Imitation", "Purification", "Elevation"],
    correctIndex: 1
  },
  {
    id: "lit159",
    question: "The classical treatise On the Sublime is attributed to:",
    options: ["Horace", "Aristotle", "Longinus", "Quintilian"],
    correctIndex: 2
  },
  {
    id: "lit160",
    question: "New Criticism is chiefly characterized by:",
    options: ["Studying the author's biography", "Reading texts as reflections of class struggle", "Tracing the reader's emotional responses", "Close reading of the text itself, apart from external context"],
    correctIndex: 3
  },
  {
    id: "lit161",
    question: "The \"Heresy of Paraphrase\" — the claim that a poem's meaning cannot be restated in prose — was formulated by:",
    options: ["Cleanth Brooks", "T.S. Eliot", "William Empson", "John Crowe Ransom"],
    correctIndex: 0
  },
  {
    id: "lit162",
    question: "The \"Intentional Fallacy\", the error of judging a work by its author's intention, was named by:",
    options: ["Richards and Ogden", "Wimsatt and Beardsley", "Brooks and Warren", "Leavis and Empson"],
    correctIndex: 1
  },
  {
    id: "lit163",
    question: "The \"Affective Fallacy\" is the error of judging a literary work by:",
    options: ["Its author's stated purpose", "Its historical accuracy", "Its emotional effect on the reader", "Its political usefulness"],
    correctIndex: 2
  },
  {
    id: "lit164",
    question: "Seven Types of Ambiguity, a landmark of close reading, was written by:",
    options: ["F.R. Leavis", "I.A. Richards", "Cleanth Brooks", "William Empson"],
    correctIndex: 3
  },
  {
    id: "lit165",
    question: "In I.A. Richards's analysis of metaphor, the \"tenor\" is:",
    options: ["The subject the metaphor is actually about", "The image used to describe the subject", "The rhythm of the metaphorical line", "The emotional tone of the poem"],
    correctIndex: 0
  },
  {
    id: "lit166",
    question: "The Great Tradition, which singled out a small canon of great English novelists, was written by:",
    options: ["T.S. Eliot", "F.R. Leavis", "Matthew Arnold", "Raymond Williams"],
    correctIndex: 1
  },
  {
    id: "lit167",
    question: "\"Defamiliarization\" (ostranenie) — art making the familiar strange — is a concept of:",
    options: ["Roland Barthes", "Mikhail Bakhtin", "Viktor Shklovsky", "Roman Jakobson"],
    correctIndex: 2
  },
  {
    id: "lit168",
    question: "In Russian Formalist narratology, the distinction between \"fabula\" and \"syuzhet\" is the distinction between:",
    options: ["Poetry and prose", "The hero and the narrator", "Dialogue and description", "The raw chronological events and their artistic arrangement in the text"],
    correctIndex: 3
  },
  {
    id: "lit169",
    question: "Vladimir Propp's Morphology of the Folktale identified how many recurring narrative functions?",
    options: ["31", "12", "50", "24"],
    correctIndex: 0
  },
  {
    id: "lit170",
    question: "The concepts of \"polyphony\" and the \"carnivalesque\" belong to:",
    options: ["Vladimir Propp", "Mikhail Bakhtin", "Tzvetan Todorov", "Gérard Genette"],
    correctIndex: 1
  },
  {
    id: "lit171",
    question: "Bakhtin's \"heteroglossia\" refers to:",
    options: ["The silence of minor characters", "The single authoritative voice of the epic", "The coexistence of multiple varieties of language within a text", "The rhyming of two languages in one poem"],
    correctIndex: 2
  },
  {
    id: "lit172",
    question: "The term \"narratology\" was coined by:",
    options: ["Gérard Genette", "Roland Barthes", "Wayne C. Booth", "Tzvetan Todorov"],
    correctIndex: 3
  },
  {
    id: "lit173",
    question: "A \"homodiegetic\" narrator is one who:",
    options: ["Is a character inside the story he narrates", "Stands entirely outside the story", "Knows the thoughts of every character", "Never uses the first person"],
    correctIndex: 0
  },
  {
    id: "lit174",
    question: "The concept of \"focalization\" — the perspective through which a story is seen — was developed by:",
    options: ["Wolfgang Iser", "Gérard Genette", "Stanley Fish", "Umberto Eco"],
    correctIndex: 1
  },
  {
    id: "lit175",
    question: "The notion of the \"Implied Author\" was introduced by Wayne C. Booth in:",
    options: ["The Act of Reading", "S/Z", "The Rhetoric of Fiction", "The Role of the Reader"],
    correctIndex: 2
  },
  {
    id: "lit176",
    question: "Wolfgang Iser argued that literary texts contain \"gaps\" which:",
    options: ["Prove the author's carelessness", "Should be corrected by editors", "Make translation impossible", "The reader must actively fill in to create meaning"],
    correctIndex: 3
  },
  {
    id: "lit177",
    question: "The idea of \"Interpretive Communities\" — groups sharing reading strategies — belongs to:",
    options: ["Stanley Fish", "Wolfgang Iser", "I.A. Richards", "Harold Bloom"],
    correctIndex: 0
  },
  {
    id: "lit178",
    question: "M.H. Abrams's title The Mirror and the Lamp contrasts:",
    options: ["Tragedy and comedy", "Art as imitation and art as expression of the imagination", "The novel and the poem", "Classical and medieval criticism"],
    correctIndex: 1
  },
  {
    id: "lit179",
    question: "The Anxiety of Influence, describing poets' struggle with their great predecessors, was written by:",
    options: ["Paul de Man", "J. Hillis Miller", "Harold Bloom", "Northrop Frye"],
    correctIndex: 2
  },
  {
    id: "lit180",
    question: "The \"monomyth\" or universal hero's journey was described in The Hero with a Thousand Faces by:",
    options: ["Carl Jung", "Northrop Frye", "Vladimir Propp", "Joseph Campbell"],
    correctIndex: 3
  },
  {
    id: "lit181",
    question: "The Rise of the Novel, linking the novel's birth to the middle class, was written by:",
    options: ["Ian Watt", "György Lukács", "E.M. Forster", "F.R. Leavis"],
    correctIndex: 0
  },

  // ===== Structuralism, Poststructuralism & Theory =====
  {
    id: "lit182",
    question: "In Saussure's linguistics, \"langue\" and \"parole\" refer respectively to:",
    options: ["Written and spoken language", "The abstract system of language rules and individual acts of speech", "The mother tongue and foreign languages", "Old and modern forms of a language"],
    correctIndex: 1
  },
  {
    id: "lit183",
    question: "In Saussure's model of the sign, the \"signified\" is:",
    options: ["The sound or written image", "The person who speaks", "The concept the sign refers to", "The grammar of the sentence"],
    correctIndex: 2
  },
  {
    id: "lit184",
    question: "A \"synchronic\" study of language examines it:",
    options: ["Through its historical development", "In comparison with other languages", "Through its greatest literary works", "As a system at a single point in time"],
    correctIndex: 3
  },
  {
    id: "lit185",
    question: "In Chomsky's linguistics, \"competence\" refers to:",
    options: ["The speaker's inherent knowledge of the language system", "The actual use of language in real situations", "The ability to learn foreign languages", "The correctness of written grammar"],
    correctIndex: 0
  },
  {
    id: "lit186",
    question: "The strong version of the Sapir-Whorf hypothesis, holding that language determines thought, is called:",
    options: ["Universal grammar", "Linguistic determinism", "Linguistic relativity", "Behaviorism"],
    correctIndex: 1
  },
  {
    id: "lit187",
    question: "\"The Death of the Author\", arguing that the author's intention should not limit a text's meaning, was written by:",
    options: ["Michel Foucault", "Jacques Derrida", "Roland Barthes", "Julia Kristeva"],
    correctIndex: 2
  },
  {
    id: "lit188",
    question: "In Barthes's Mythologies, \"myth\" is defined as:",
    options: ["An ancient story about gods", "A deliberate political lie", "A universal symbol of the unconscious", "A second-order semiotic system"],
    correctIndex: 3
  },
  {
    id: "lit189",
    question: "The term \"différance\", combining difference and deferral of meaning, was coined by:",
    options: ["Jacques Derrida", "Jacques Lacan", "Roland Barthes", "Jean Baudrillard"],
    correctIndex: 0
  },
  {
    id: "lit190",
    question: "\"Logocentrism\", the target of Derrida's critique, is:",
    options: ["The worship of literary classics", "The belief in a stable center of truth anchored in the word", "The dominance of logic over emotion in criticism", "The focus on the author's biography"],
    correctIndex: 1
  },
  {
    id: "lit191",
    question: "In deconstruction, an \"aporia\" is:",
    options: ["The moral lesson of a text", "The final resolution of the plot", "An unresolvable internal contradiction in a text", "A hidden autobiographical reference"],
    correctIndex: 2
  },
  {
    id: "lit192",
    question: "Discipline and Punish, which analyzes the Panopticon as a model of modern surveillance, was written by:",
    options: ["Louis Althusser", "Antonio Gramsci", "Jean Baudrillard", "Michel Foucault"],
    correctIndex: 3
  },
  {
    id: "lit193",
    question: "The concept of \"hegemony\" — the dominance of one group secured through consent rather than force — is associated with:",
    options: ["Antonio Gramsci", "Karl Marx", "Theodor Adorno", "Raymond Williams"],
    correctIndex: 0
  },
  {
    id: "lit194",
    question: "The Frankfurt School term \"Culture Industry\" describes:",
    options: ["Government funding of the arts", "Mass-produced, standardized culture that pacifies its consumers", "The rise of museums in the nineteenth century", "The printing industry of early modern Europe"],
    correctIndex: 1
  },
  {
    id: "lit195",
    question: "Walter Benjamin argued that mechanical reproduction causes the work of art to lose its:",
    options: ["Market value", "Political relevance", "Aura", "Beauty"],
    correctIndex: 2
  },
  {
    id: "lit196",
    question: "Lyotard famously defined the postmodern condition as:",
    options: ["Nostalgia for lost origins", "The triumph of science over art", "The return of religious belief", "Incredulity towards metanarratives"],
    correctIndex: 3
  },
  {
    id: "lit197",
    question: "Fredric Jameson defined \"pastiche\" in postmodern culture as:",
    options: ["Blank parody — imitation without satiric intent", "A collage of press clippings", "A revival of classical forms", "Direct political satire"],
    correctIndex: 0
  },
  {
    id: "lit198",
    question: "Baudrillard's \"hyperreal\" describes a condition in which:",
    options: ["Art depicts reality with perfect accuracy", "The copy or simulation becomes more real than reality itself", "Dreams are indistinguishable from nightmares", "Novels replace historical records"],
    correctIndex: 1
  },
  {
    id: "lit199",
    question: "The \"Uncanny\" — the strange that is disturbingly familiar — is a concept elaborated by:",
    options: ["Carl Jung", "Jacques Lacan", "Sigmund Freud", "Julia Kristeva"],
    correctIndex: 2
  },
  {
    id: "lit200",
    question: "The \"Collective Unconscious\" and its archetypes are the theory of:",
    options: ["Sigmund Freud", "Northrop Frye", "Joseph Campbell", "Carl Jung"],
    correctIndex: 3
  },
  {
    id: "lit201",
    question: "New Historicism, which reads literature as a cultural document among other documents, was founded by:",
    options: ["Stephen Greenblatt", "Raymond Williams", "Clifford Geertz", "Hayden White"],
    correctIndex: 0
  },
  {
    id: "lit202",
    question: "The method of \"Thick Description\" adopted by New Historicists comes from the anthropologist:",
    options: ["Claude Lévi-Strauss", "Clifford Geertz", "Marcel Mauss", "Franz Boas"],
    correctIndex: 1
  },

  // ===== Postcolonial & Feminist Theory =====
  {
    id: "lit203",
    question: "Orientalism by Edward Said argues that \"the Orient\" is essentially:",
    options: ["An accurate geographic category", "A lost classical civilization", "A construct produced by Western discourse to dominate the East", "A literary genre invented in the eighteenth century"],
    correctIndex: 2
  },
  {
    id: "lit204",
    question: "\"Can the Subaltern Speak?\" was written by:",
    options: ["Homi Bhabha", "Frantz Fanon", "Edward Said", "Gayatri Spivak"],
    correctIndex: 3
  },
  {
    id: "lit205",
    question: "In postcolonial theory, \"mimicry\" — the colonized imitating the colonizer — is a concept developed by:",
    options: ["Homi Bhabha", "Ngũgĩ wa Thiong'o", "Albert Memmi", "Chinua Achebe"],
    correctIndex: 0
  },
  {
    id: "lit206",
    question: "\"Hybridity\" in postcolonial studies refers to:",
    options: ["The translation of texts between languages", "Mixed cultural identity produced by the colonial encounter", "The biological metaphors of racial science", "The combination of prose and verse in one text"],
    correctIndex: 1
  },
  {
    id: "lit207",
    question: "The Wretched of the Earth and Black Skin, White Masks were written by:",
    options: ["Edward Said", "Albert Memmi", "Frantz Fanon", "Aimé Césaire"],
    correctIndex: 2
  },
  {
    id: "lit208",
    question: "Said's \"contrapuntal reading\" asks readers to:",
    options: ["Read a novel aloud with musical accompaniment", "Read only postcolonial authors", "Compare a novel with its film adaptations", "Read canonical texts with awareness of their suppressed colonial context"],
    correctIndex: 3
  },
  {
    id: "lit209",
    question: "\"One is not born, but rather becomes, a woman\" is the famous thesis of:",
    options: ["Simone de Beauvoir", "Virginia Woolf", "Kate Millett", "Judith Butler"],
    correctIndex: 0
  },
  {
    id: "lit210",
    question: "The term \"Gynocriticism\" — the study of women as writers — was coined by:",
    options: ["Hélène Cixous", "Elaine Showalter", "Luce Irigaray", "Sandra Gilbert"],
    correctIndex: 1
  },
  {
    id: "lit211",
    question: "\"Écriture féminine\" and The Laugh of the Medusa are associated with:",
    options: ["Julia Kristeva", "Simone de Beauvoir", "Hélène Cixous", "Elaine Showalter"],
    correctIndex: 2
  },
  {
    id: "lit212",
    question: "In Gender Trouble, Judith Butler argues that gender is:",
    options: ["Determined entirely by biology", "Fixed in early childhood", "An illusion with no social effects", "Performative — constituted by repeated acts"],
    correctIndex: 3
  },
  {
    id: "lit213",
    question: "The Madwoman in the Attic, a landmark of feminist criticism on nineteenth-century women writers, was written by:",
    options: ["Gilbert and Gubar", "Wimsatt and Beardsley", "Adorno and Horkheimer", "Brooks and Warren"],
    correctIndex: 0
  },
  {
    id: "lit214",
    question: "The foundational text that inspired Ecocriticism is generally taken to be:",
    options: ["Walden", "Silent Spring by Rachel Carson", "The Machine in the Garden", "Nature by Emerson"],
    correctIndex: 1
  },
  {
    id: "lit215",
    question: "\"Anthropocentrism\", which Ecocriticism challenges, means:",
    options: ["The study of ancient humanity", "The belief that machines will replace humans", "A view that places human beings at the center of value", "The worship of nature"],
    correctIndex: 2
  }
];
