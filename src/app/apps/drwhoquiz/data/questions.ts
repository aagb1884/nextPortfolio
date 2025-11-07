interface Image {
  url: string;
  alt: string;
}

export interface Question {
  question: string;
  options?: string[];
  answers: string[];
  image?: Image;
  audio?: string;
}

export interface plotPoint {
  id: number;
  point: string;
}

export interface CyberQuestion {
  story: string;
  plot: plotPoint[];
}

export interface CyberRound {
  name: string;
  slug: string;
  copy?: string;
  hint?: string;
  questions: CyberQuestion[];
}

export interface Round {
  name: string;
  slug: string;
  copy?: string;
  hint?: string;
  questions: Question[];
}

export const rounds: Round[] = [
  {
    name: "General Knowledge",
    slug: "general",
    copy: "Questions about Doctor Who in general.",
    questions: [
      {
        question:
          "How many episodes does Turlough appear in where he isn't wearing his school uniform?",
        answers: ["3", "Three"],
      },
      {
        question:
          "True or false: Richard Hearne lost the role of the Fourth Doctor because he wanted to play it as his other character Mr Pastry?",
        answers: ["True", "Correct", "Yes"],
      },
      {
        question:
          "True or false: Spike Milligan lost the role of the Fourth Doctor because he wanted input into the scripts?",
        answers: ["False", "No"],
      },
      {
        question:
          "Which companion started referring to the TARDIS as 'Time and Relative Dimensions in Space'?",
        answers: ["Vicki", "Vikki"],
      },
      {
        question:
          "What are the colours of the Prydonian chapter of Time Lords?",
        answers: [
          "Scarlet and orange",
          "scarlet orange",
          "Scarlet, orange",
          "Orange and scarlet",
          "Orange, scarlet",
          "orange scarlet",
        ],
      },
      { question: "What is the moon?", answers: ["An egg", "Egg"] },
      {
        question:
          "What does Rosa Parks have named after her that 'changed the universe'?",
        answers: ["An asteroid", "Asteroid"],
      },
      {
        question:
          "Which two characters in Doctor Who were voiced by David Brierley?",
        answers: [
          "K9 Drathro",
          "K9 and drathro",
          "K9, Drathro",
          "Drathro and K9",
          "Drathro K9",
          "Drathro, K9",
        ],
      },
      {
        question:
          "Which city is both Jodie Whittaker's middle name and the location of Ruby White's phony institute in The Sarah Jane Adventures?",
        answers: ["Auckland"],
      },
      {
        question:
          "In 'The Doctor, The Widow, And The Wardrobe', which planet do the harvesters come from?",
        answers: ["Androzani Major"],
      },
      {
        question: "How many words per minute can Donna type?",
        answers: ["100", "hundred", "a hundred", "one hundred"],
      },
      {
        question:
          "What brand of ice lolly had tie-in adverts featuring the Second Doctor and the Daleks?",
        answers: ["Sky Ray"],
      },
      {
        question:
          "Which jazz tune is performed by the Seventh Doctor and then Earl Sigma on harmonica throughout 'The Happiness Patrol'?",
        answers: ["As Time Goes By"],
      },
      {
        question:
          "What character from 'New Earth' do the Doctor and Rose eat in 'The End of the World'?",
        answers: ["Chip"],
      },
      {
        question:
          "Where do Benton and Yates take the Brigadier's helicopter to?",
        answers: ["Devil's End", "Devils End"],
      },
      {
        question: "What is the desert planet in 'The Chase' called?",
        answers: ["Aridius"],
      },
      {
        question: "In 'World War 3' what is the password to UNIT's website?",
        answers: ["buffalo"],
      },
      {
        question:
          "In 'Tooth and Claw' the Doctor describes 1979 as a 'hell of a year', noting 'China invades Vietnam. The Muppet Movie. Margaret Thatcher…' and what other historical event?",
        answers: ["Skylab"],
      },
      {
        question: "Is cress ever mentioned onscreen in Doctor Who?",
        answers: ["No", "It is not", "False", "Nope", "Nah"],
      },
      {
        question:
          "Name one of the two non-festive episodes that feature 'Merry Xmas Everybody' by Slade.",
        answers: ["Turn Left", "Power of Three", "The Power of Three"],
      },
      {
        question: "Name a story that features a T-Rex.",
        answers: [
          "Doctor Who and the Silurians",
          "The Silurians",
          "Invasion of the Dinosaurs",
          "Dinosaurs on a Spaceship",
          "Deep Breath",
        ],
      },
      {
        question:
          "What was the name of the event that led to a 're-negotiation of the sheep-human relationship'?",
        answers: ["Woolly Rebellion", "The Woolly Rebellion"],
      },
      {
        question: "What dance does Tegan do in 'Black Orchid'?",
        answers: ["Charleston", "The Charleston"],
      },
      {
        question: "What type of curry does Sylvia Noble make?",
        answers: ["Tuna Madras"],
      },
      {
        question:
          "What episode opens by depicting the invention of television?",
        answers: ["The Giggle", "Giggle"],
      },
      {
        question:
          "In which story does the Doctor put on a German accent and smash a clerk's head off a table? ",
        answers: ["The Highlanders", "Highlanders"],
      },
      {
        question:
          "What foodstuff is the War Doctor introduced to in 'The Day of the Doctor'? ",
        answers: ["Cup a soup", "Cup-a-soup"],
      },
      {
        question:
          "In what episode does the last surviving member of the Freedom Fifteen appear?",
        answers: ["The Long Game", "Long Game"],
      },
    ],
  },
  {
    name: "Knowledge of Generals",
    slug: "generals",
    copy: "Questions about Generals in general in Doctor Who.",
    questions: [
      {
        question:
          "What is the name of the army General from 'Invasion of the Dinosaurs'?",
        answers: ["Finch", "General Finch"],
      },
      {
        question:
          "Into which internal organ did General Sholakh plant the standard of the Empire?",
        answers: ["Heart"],
      },
      {
        question:
          "What war zone would you find General Smythe in in 'The War Games'?",
        answers: [
          "1917 War Zone",
          "World War 1",
          "World War One",
          "First World War",
          "WW1",
        ],
      },
      {
        question: "What was Sontaran General Staal's nickname?",
        answers: ["The undefeated", "undefeated"],
      },
      {
        question: "What was the leader of the Gaztak merecenaries in 'Meglos'?",
        answers: ["Grugger", "General Grugger"],
      },
      {
        question: "Name a Doctor Who character played by John Abineri.",
        answers: [
          "Van Lutyens",
          "Carrington",
          "General Carrington",
          "Railton",
          "Captain Railton",
          "Richard Railton",
          "Leader of the Swampies",
          "Ranquin",
        ],
      },
      {
        question:
          "Which Time Lord took 'The General' as not only their rank but primary name?",
        answers: ["The General"],
      },
      {
        question:
          "What was the name of the General the Slitheen killed in Downing Street?",
        answers: ["Asquith", "General Asquith"],
      },
      {
        question:
          "In 'The Tenth Planet' who told the Doctor 'I don't like your face'?",
        answers: ["Cutler", "General Cutler"],
      },
      {
        question: "Which general did the Tenth Doctor point a gun at?",
        answers: ["Cobb", "General Cobb"],
      },
      {
        question:
          "What is the name of the army General from 'The Stolen Earth'?",
        answers: ["Sanchez", "General Sanchez"],
      },
      {
        question: "What did the Master win in 'The Sound of Drums'?",
        answers: ["A General Election", "General Election", "Election"],
      },
      {
        question:
          "Which UN official was among the monks' victims in 'The Pyramid at the End of the World'?",
        answers: ["Secretary General", "The Secretary General"],
      },
      {
        question:
          "Who does Graham end up pretending to be after the intervention of King James I?",
        answers: ["Witchfinder General", "The Witchfinder General"],
      },
      {
        question: "What job did Yaz's mum have at Jack Robertson's hotel?",
        answers: ["General Manager"],
      },
      {
        question: "Who was given the job of setting up UNIT?",
        answers: ["Farquhar", "General Farquhar"],
      },
      {
        question: "Who did the Doctor suppose 'came up through the ranks'?",
        answers: ["Chellak", "General Chellak"],
      },
      {
        question:
          "What rank was General Williams when he accidentally ignited the Human-Draconian war?",
        answers: ["Lieutenant"],
      },
      {
        question:
          "Guy Siner, who played General Ravon in 'Genesis of the Daleks', later found fame in which sitcom?",
        answers: ["'Allo! 'Allo!", "Allo Allo"],
      },
    ],
  },
  {
    name: "They're good dogs",
    slug: "good-dogs",
    copy: "A round based on dogs and/or dog-like characters.",
    questions: [
      {
        question:
          "What two-word term is given to Karvanista and the Lupari's call to defend Earth from the Flux?",
        answers: ["Species Recall"],
      },
      {
        question: "In 'Rise Of The Cybermen', what breed of dog is Rose?",
        answers: ["Yorkshire Terrier"],
      },
      {
        question:
          "On the good ship Terminus, the Garm is in charge of the decontamination process for what condition?",
        answers: ["Lazar's Disease", "Lazar's", "Lazars", "Lazars Disease"],
      },
      {
        question:
          "Where does Sarah Jane Smith meet a dog and start whistling 'Daddy Wouldn't Buy Me A Bow Wow'?",
        answers: ["Aberdeen"],
      },
      {
        question: "In which village does Sarah Jane Smith first meet K9?",
        answers: ["Moreton Harwood"],
      },
      {
        question: "Which planet has got dogs with no noses?",
        answers: ["Barcelona"],
      },
      {
        question:
          "Prisoner Zero imitates Leadworth resident Barney Collins and his dog - what breed is the dog?",
        answers: ["Rottweiler"],
      },
      {
        question:
          "Very good dog Gromit featured in the BBC One Christmas idents before which David Tennant episode?",
        answers: ["The Next Doctor", "Next Doctor"],
      },
      {
        question:
          "In which story did Colin Baker inadvertently rub dog poo on his face?",
        answers: ["The Mark of the Rani", "Mark of the Rani"],
      },
      {
        question:
          "In 'The Curse Of Fatal Death', the Doctor's fiancee Emma compares the dying Doctor to Father Christmas, The Wizard Of Oz, and which fictional dog?",
        answers: ["Scooby Doo", "Scooby-Doo"],
      },
      {
        question:
          "Producer John Nathan-Turner's dog, who occasionally cameoed in the show, shared her name with which soft drink?",
        answers: ["Pepsi"],
      },
      {
        question:
          "Dog who remains unbothered when his landlord owner disappears in 'Night Terrors'. Shares his name with a unit of measurement.",
        answers: ["Bernard"],
      },
      {
        question:
          "In 'Image of the Fendahl' what does Colby's dog Leakey find?",
        answers: ["A dead body", "dead body", "dead guy", "dead man", "corpse"],
      },
      { question: "Who invented K9?", answers: ["Marius", "Professor Marius"] },
      {
        question:
          "In Victorian London, what did the Cybermen convert dogs into?",
        answers: ["Cybershades"],
      },
      {
        question:
          "What was the onomatopoeic name of the robot dog the Doctor plays with in the department store in 'Closing Time'?",
        answers: ["Yappy"],
      },
      {
        question:
          "True or false: there are dogs in the human colony on Vulcan in 'Power of the Daleks'?",
        answers: ["True", "Correct", "Yes"],
      },
    ],
  },
  {
    name: "It's all Greek to Me",
    slug: "greek",
    copy: "A round based on letters of the Greek alphabet.",
    hint: "We are looking for answers as English words, not Greek letters, i.e. 'Lambda' not 'Λλ'.",
    questions: [
      {
        question: "Which Federation diplomat was voiced by Ysanne Churchman?",
        answers: ["Alpha Centauri"],
      },
      {
        question:
          "What is the name of the Ood that reaches out to the Doctor and Donna in 'Planet Of The Ood'?",
        answers: ["Sigma", "Ood Sigma"],
      },
      {
        question:
          "Which letter of the alphabet connects 'Kinda', 'The Parting Of The Ways' and a Season 24 story?",
        answers: ["Delta"],
      },
      {
        question: "What is the name of the planet of evil in 'Planet Of Evil'?",
        answers: ["Zeta Minor"],
      },
      {
        question: "Name one of the humanised Daleks in 'Evil of the Daleks'?",
        answers: ["Alpha", "Beta", "Omega"],
      },
      {
        question:
          "In 'A Good Man Goes To War', what is the name of Lorna Bucket's pondless, river-y homeland?",
        answers: ["Gamma Forest"],
      },
      {
        question:
          "Which character is played by Jonathan Bailey in 'Time Heist'?",
        answers: ["Psi"],
      },
      {
        question: "On which human colony is it illegal to be unhappy?",
        answers: ["Terra Alpha"],
      },
      {
        question:
          "What letter connects 'The Five Doctors', 'Midnight', and 'Flatline'?",
        answers: ["Pi"],
      },
      {
        question:
          "According to Drax in 'The Armageddon Factor', what was the Doctor's nickname at the Academy?",
        answers: ["Theta Sigma"],
      },
      {
        question:
          "Which bewhiskered Gond scientist helped Jamie attack the Kroton's ship with sulphuric acid?",
        answers: ["Beta"],
      },
      {
        question:
          "Which three-time TV baddy was K9 to battle in the unproduced movie spin-off K9: Timequake?",
        answers: ["Omega"],
      },
      {
        question:
          "Where was the Dominator ship on course for before it landed on Dulkis?",
        answers: ["Epsilon 4", "Epsilon"],
      },
      {
        question:
          "Which letter of the alphabet is a Judoon most likely to say?",
        answers: ["Rho"],
      },
      {
        question: "What star system were Cessair of Diplos and the Ogri from?",
        answers: ["Tau Ceti"],
      },
      {
        question:
          "What was the name of the evil corporation in 'Torchwood: Miracle Day'?",
        answers: ["Phicorp"],
      },
      {
        question:
          "Which character from 'Vengeance on Varos' is a homonym of Ηη?",
        answers: ["Etta"],
      },
      {
        question:
          "How might the soldiers of the Ninth Legion write the number for Sarah Jane Smith and the Thirteenth Doctor's debut seasons?",
        answers: ["XI"],
      },
      {
        question:
          "Which bureaucrat was sent to investigate disappearances under Helen A's regime?",
        answers: ["Trevor Sigma"],
      },
      {
        question:
          "What sonic screwdriver setting breaks through artificial ivy?",
        answers: ["Theta Omega"],
      },
      {
        question:
          "What type of blaster did River Song threaten and destroy a Dalek with?",
        answers: ["Alpha Meson"],
      },
      {
        question:
          "What was the name of the planet of the Mentors in 'Mindwarp'? ",
        answers: ["Thoros Beta"],
      },
      {
        question:
          "What did the Tenth Doctor claim to have invented on Queen Elizabeth II's coronation day? ",
        answers: ["Betamax"],
      },
      {
        question:
          "True or false: the word 'iota' does not appear in televised Doctor Who.",
        answers: ["True", "correct", "Yes"],
      },
    ],
  },
  {
    name: "How Long...",
    slug: "how-long",
    copy: "How long, in terms of time, were the following...",
    hint: "All answers are numeric and rounded to nearest whole number, measurements specified in each question.",
    questions: [
      {
        question:
          "…does Mordred's maniacal laugh last for in 'Battlefield' (seconds)?",
        answers: ["25"],
      },
      {
        question:
          "…does the Twelfth Doctor take to bring Clara the takeaway coffee she sends him for at the end of 'Deep Breath' (weeks)?",
        answers: ["3"],
      },
      {
        question:
          "…is the panning shot on Brighton beach in 'The Leisure Hive' (seconds)?",
        answers: ["90"],
      },
      {
        question:
          "…did the United Nations Intelligence Taskforce appear on screen for (years)?",
        answers: ["37"],
      },
      {
        question:
          "…is the countdown to the detonation of the reality bomb (rels)?",
        answers: ["200"],
      },
      {
        question: "…is the fuse meant to be on Ace's Nitro-Nine (seconds)?",
        answers: ["10"],
      },
      {
        question:
          "…is the chase sequence in 'Planet of the Spiders' Part 2 (minutes)? ",
        answers: ["12"],
      },
      {
        question:
          "…does the Davison era opening title sequence last (seconds)?",
        answers: ["36"],
      },
      {
        question: "…did Terrence Dicks script edit the show for (years)?",
        answers: ["6"],
      },
      {
        question:
          "…between the guard saying he had a boyfriend and the guard getting killed in Resolution (seconds)?",
        answers: ["10"],
      },
      {
        question:
          "…between Carole Ann Ford's last two onscreen appearances as Susan? (years)?",
        answers: ["43"],
      },
      {
        question:
          "...was the Fourth Doctor's scarf when he was searching for the Key to Time (feet)?",
        answers: ["18"],
      },
      {
        question:
          "...does Kerblam employees paid leave last when operations are suspended for a month? (weeks)",
        answers: ["2"],
      },
      {
        question:
          "...is the long game we first see in 'The Long Game' (years)?",
        answers: ["100"],
      },
      {
        question:
          "…does Rose say she'll be at the end of 'World War Three' (seconds)?",
        answers: ["10"],
      },
      {
        question:
          "…between the Doctor meeting Ryan's dad and telling him off (seconds)?",
        answers: ["11"],
      },
      {
        question:
          "…between Matt Smith's announcement and David Tennant's regeneration (days)?",
        answers: ["363"],
      },
    ],
  },

  {
    name: "You Played Yourself",
    slug: "played-themselves",
    copy: "Questions about people who have played themselves in Doctor Who.",
    questions: [
      {
        question:
          "The honeyed tones of this repeated meme featured in 'The Stolen Earth'.",
        answers: ["Richard Dawkins"],
      },
      {
        question:
          "Which other 'Stolen Earth' guest previously appealed to Russell T. Davies to be in the show, saying: “I just want to wear a white coat and carry a clipboard and walk down a corridor saying 'I think it's alive, Doctor'”? ",
        answers: ["Paul O'Grady"],
      },
      {
        question:
          "This journalist was political editor of the BBC when he appeared in 'Aliens Of London'.",
        answers: ["Andrew Marr"],
      },
      {
        question:
          "Not to be confused with the Ood Elder voice actor, who appeared as himself in 'The Power Of Three'?",
        answers: ["Brian Cox"],
      },
      {
        question:
          "This Blue Peter presenter was seen making a buttercream cake shaped like a Slitheen spaceship in 'Aliens Of London' and later interviewed Minions who hijacked the TARDIS in a BBC Radio 1 skit.",
        answers: ["Matt Baker"],
      },
      {
        question:
          "This Series 5 guest-star said he “always wanted to open the door of the TARDIS” and he did, introducing Doctor Who cast members past and present on the 1985 'Children In Need' broadcast.",
        answers: ["Patrick Moore"],
      },
      {
        question:
          "Which TV medium declared that nobody needed him anymore in 'Army of Ghosts'? ",
        answers: ["Derek Acorah"],
      },
      {
        question:
          "Alongside Sian Williams, this much-missed BBC Breakfast presenter interviews Charles Dickens about his new Christmas special in 'The Wedding Of River Song'.",
        answers: ["Bill Turnbull"],
      },
      {
        question:
          "Prior to appearing on Strictly Come Dancing in 2010, which terrible human being described Mr Saxon as 'a very fine man' and 'handsome too'?",
        answers: ["Anne Widdecombe"],
      },
      {
        question:
          "Name the supporter and namesake of Mr Saxon who went on to win Strictly Come Dancing in 2011.",
        answers: ["Harry Judd"],
      },
      { question: "Killed by goblins.", answers: ["Davina McCall"] },
      {
        question:
          "Reported on a peace conference about to be invaded by Daleks.",
        answers: ["Alex McIntosh"],
      },
      {
        question:
          "Appears as a hologram informing the Doctor and Belinda that the Earth was destroyed on 24 May 2025.",
        answers: ["Graham Norton"],
      },
      {
        question: "Killed by Cybermen while presenting 'Ghostwatch'.",
        answers: ["Alastair Appleton"],
      },
      {
        question: "Jazz musician whose gig the Doctor and Ace go to.",
        answers: ["Courtney Pine"],
      },
      {
        question:
          "A newsreader across three decades, who also reported on War Machine attacks in Sixties London.",
        answers: ["Kenneth Kendall"],
      },
      {
        question:
          "Former X-Factor judge who appeared endorsing a murderous psychopath.",
        answers: ["Sharon Osborne"],
      },
      {
        question: "She interviewed Conrad Clark on 'The One Show'.",
        answers: ["Alex Jones"],
      },
      {
        question: "In 2925 he is released from cryogenic suspension.",
        answers: ["Rylan Clark", "Rylan"],
      },
      {
        question:
          "Comedian and presenter who briefly appeared in 'Lucky Day' insulting Jonathan Ross.",
        answers: ["Joel Dommett"],
      },
      {
        question:
          "He interviewed Roger ap Gwilliam, asking if he wanted to fire a nuclear weapon.",
        answers: ["Amol Rajan"],
      },
    ],
  },
  {
    name: "A Quiz of Necessity",
    slug: "episode-names",
    copy: "Going by official story names, can you name the serial in which each of these individual First Doctor episode titles belongs?",
    questions: [
      { question: "The Rescue", answers: ["The Daleks"] },
      { question: "The Dead Planet", answers: ["The Daleks"] },
      { question: "The Forest of Fear", answers: ["An Unearthly Child"] },
      { question: "The Firemaker", answers: ["An Unearthly Child"] },
      { question: "Don't Shoot the Pianist", answers: ["The Gunfighters"] },
      { question: "The O.K. Corral", answers: ["The Gunfighters"] },
      { question: "Strangers in Space", answers: ["The Sensorites"] },
      {
        question: "The Nightmare Begins",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "Devil's Planet",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "The Traitors",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "Counter Plot",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "The Feast of Steven",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "Volcano",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "Escape Switch",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "Destruction of Time",
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      { question: "The Warriors of Death", answers: ["The Aztecs"] },
      { question: "The Day of Darkness", answers: ["The Aztecs"] },
      { question: "Conspiracy", answers: ["The Romans"] },
      { question: "Inferno", answers: ["The Romans"] },
      {
        question: "Crater of Needles",
        answers: ["The Web Planet", "Web Planet"],
      },
      { question: "Invasion", answers: ["The Web Planet", "Web Planet"] },
      { question: "Flight Through Eternity", answers: ["The Chase"] },
      { question: "Journey into Terror", answers: ["The Chase"] },
      { question: "The Death of Doctor Who", answers: ["The Chase"] },
      { question: "Temple of Secrets", answers: ["The Myth Makers"] },
      { question: "Small Prophet, Quick Return", answers: ["The Myth Makers"] },
      { question: "Horse of Destruction", answers: ["The Myth Makers"] },
      {
        question: "The Brink of Disaster",
        answers: ["Edge of Destruction", "The Edge of Destruction"],
      },
      {
        question: "The Screaming Jungle",
        answers: ["The Keys of Marinus", "The Edge of Destruction"],
      },
      {
        question: "Sentence of Death",
        answers: ["The Keys of Marinus", "Keys of Marinus"],
      },
      { question: "Four Hundred Dawns", answers: ["Galaxy 4"] },
      { question: "Trap of Steel", answers: ["Galaxy 4"] },
      { question: "Air Lock", answers: ["Galaxy 4"] },
      { question: "The Exploding Planet", answers: ["Galaxy 4"] },
      { question: "The Roof of the World", answers: ["Marco Polo"] },
      { question: "Assassin at Peking", answers: ["Marco Polo"] },
      { question: "Dangerous Journey", answers: ["Planet of Giants"] },
      {
        question: "Guests of Madame Guillotine",
        answers: ["The Reign of Terror", "Reign of Terror"],
      },
      {
        question: "World's End",
        answers: ["The Dalek Invasion of Earth", "Dalek Invasion of Earth"],
      },
      {
        question: "The Daleks",
        answers: ["The Dalek Invasion of Earth", "Dalek Invasion of Earth"],
      },
      { question: "The Powerful Enemy", answers: ["The Rescue"] },
      { question: "The Wheel of Fortune", answers: ["The Crusade"] },
      { question: "The Warlords", answers: ["The Crusade"] },
      {
        question: "The Dimensions of Time",
        answers: ["The Space Museum", "Space Museum"],
      },
      {
        question: "The Final Phase",
        answers: ["The Space Museum", "Space Museum"],
      },
      {
        question: "The Watcher",
        answers: ["The Time Meddler", "Time Meddler"],
      },
      {
        question: "The Meddling Monk",
        answers: ["The Time Meddler", "Time Meddler"],
      },
      { question: "War of God", answers: ["The Massacre"] },
      { question: "Priest of Death", answers: ["The Massacre"] },
      { question: "The Steel Sky", answers: ["The Ark"] },
      { question: "The Plague", answers: ["The Ark"] },
      { question: "The Return", answers: ["The Ark"] },
      {
        question: "The Hall of Dolls",
        answers: ["The Celestial Toymaker", "Celestial Toymaker"],
      },
      {
        question: "The Dancing Floor",
        answers: ["The Celestial Toymaker", "Celestial Toymaker"],
      },
      {
        question: "The Final Test",
        answers: ["The Celestial Toymaker", "Celestial Toymaker"],
      },
    ],
  },
  {
    name: "The First Question",
    slug: "first-question",
    copy: "Name the character who says 'Doctor Who' in each of these stories where someone says 'Doctor Who'.",
    questions: [
      { question: "The Time of the Doctor", answers: ["Handles"] },
      {
        question: "An Unearthly Child",
        answers: [
          "Ian",
          "Ian Chesterton",
          "The Doctor",
          "Doctor Who",
          "First Doctor",
        ],
      },
      { question: "The Name of the Doctor", answers: ["Dr Simeon", "Simeon"] },
      { question: "The Empty Child", answers: ["Rose"] },
      {
        question: "The Wedding of River Song",
        answers: ["Dorium", "Dorium Maldovar", "Blue guy"],
      },
      { question: "The Next Doctor", answers: ["Rosita"] },
      {
        question: "The Christmas Invasion",
        answers: ["Jackie", "Jackie Tyler"],
      },
      { question: "The Snowmen", answers: ["Clara"] },
      { question: "The War Machines", answers: ["WOTAN"] },
      {
        question: "World Enough and Time",
        answers: ["Missy", "Master", "The Master"],
      },
      { question: "Silver Nemesis", answers: ["Lady Peinforte", "Peinforte"] },
      {
        question: "The Girl in the Fireplace",
        answers: [
          "Madame de Pompadour",
          "Reinette",
          "Jeanne-Antoinette Poisson",
        ],
      },
      {
        question: "The Impossible Astronaut",
        answers: [
          "Charles II",
          "Charles the Second",
          "Charles Second",
          "Charles",
          "King Charles II",
          "The King who brought back partying",
        ],
      },
      { question: "Black Orchid", answers: ["Lady Cranleigh"] },
    ],
  },
  {
    name: "The Many Cliffhanger Faces of Colin Baker",
    slug: "colin-cliffhanger",
    copy: "Simply tell us which story this Colin Baker Cliffhanger Face is from.",
    hint: "Remember: 'Time Lord' not 'Timelord'.",
    questions: [
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_1.jpeg",
          alt: "The Sixth Doctor looks upset.",
        },
        answers: [
          "The Trial of a Time Lord",
          "Mindwarp",
          "Trial of a Time Lord",
        ],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_2.jpeg",
          alt: "The Sixth Doctor holds his hands to his ears and grimaces.",
        },
        answers: ["Timelash"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_3.jpeg",
          alt: "The Sixth Doctor caught mid-sentence.",
        },
        answers: ["Revelation of the Daleks"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_4.jpeg",
          alt: "The Sixth Doctor lying, mouth open, apparently dead.",
        },
        answers: ["Vengeance on Varos"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_5.jpeg",
          alt: "The Sixth Doctor with his eyes closed, head lolling.",
        },
        answers: ["The Two Doctors", "Two Doctors"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_6.jpeg",
          alt: "The Sixth Doctor looks up, aghast, as a large white object topples towards him.",
        },
        answers: ["Revelation of the Daleks"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_7.jpeg",
          alt: "The Sixth Doctor looks haughty and defiant.",
        },
        answers: [
          "The Trial of a Time Lord",
          "The Mysterious Planet",
          "Mysterious Planet",
          "Trial of a Time Lord",
        ],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_8.jpeg",
          alt: "The Sixth Doctor despairs.",
        },
        answers: ["The Twin Dilemma", "Twin Dilemma"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_9.jpeg",
          alt: "The Sixth Doctor, lying in sand, cries for help.",
        },
        answers: [
          "The Trial of a Time Lord",
          "The Ultimate Foe",
          "Trial of a Time Lord",
        ],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_10.jpeg",
          alt: "The Sixth Doctor calmly and confidently looks into the camera.",
        },
        answers: ["The Caves of Androzani", "Caves of Androzani"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_14.jpg",
          alt: "The Sixth Doctor, bathed in blue light, looks aghast.",
        },
        answers: [
          "The Trial of a Time Lord",
          "Mindwarp",
          "Trial of a Time Lord",
        ],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_15.jpg",
          alt: "The Sixth Doctor looks defiant.",
        },
        answers: [
          "The Trial of a Time Lord",
          "Mindwarp",
          "Trial of a Time Lord",
        ],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_16.jpg",
          alt: "The Sixth Doctor, connected to some equipment, writhes and screams.",
        },
        answers: [
          "The Trial of a Time Lord",
          "Mindwarp",
          "Trial of a Time Lord",
        ],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_17.jpg",
          alt: "The Sixth Doctor looks worried.",
        },
        answers: [
          "The Trial of a Time Lord",
          "The Mysterious Planet",
          "Mysterious Planet",
          "Trial of a Time Lord",
        ],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_20.jpg",
          alt: "The Sixth Doctor, lying on his back and wearing black, looks concerned.",
        },
        answers: ["The Mark of the Rani", "Mark of the Rani"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/colin_cliffhangers/colin_cliffhanger_21.jpg",
          alt: "The Sixth Doctor looks both worried and smug.",
        },
        answers: ["The Twin Dilemma", "Twin Dilemma"],
      },
    ],
  },
  {
    name: "They're Inhuman!",
    slug: "inhuman",
    copy: "Simply tell us which story the inanimate object in the picture is from.",
    hint: "Yes, spaceships count as inanimate objects.",
    questions: [
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_1.jpeg",
          alt: "A squat, boxy ark ship",
        },
        answers: ["Four to Doomsday"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_2.jpg",
          alt: "Monochrome. Dials and lights, two buttons marked 'water.",
        },
        answers: ["The Edge of Destruction", "Edge of Destruction"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_3.jpeg",
          alt: "The Third Doctor stands in a high-tech room full of shining metal, spooling tapes and controls.",
        },
        answers: ["The Green Death", "Green Death"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_4.jpeg",
          alt: "Monochrome. A small spacecraft arrives on a landing pad on an alien planet.",
        },
        answers: ["The Dalek Master Plan", "Dalek Master Plan"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_5.png",
          alt: "A grey console with multicoloured switches and a small disc sticking out from a slot.",
        },
        answers: ["Warriors of the Deep"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_6.jpg",
          alt: "A box with a red plastic border, holding what looks like a film projector and reel.",
        },
        answers: ["Blink"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_7.jpeg",
          alt: "A spaceship with many decks, similar to a cruise liner, flying past a pale planet.",
        },
        answers: ["Nightmare of Eden"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_8.png",
          alt: "Six metal plates, with two rows of grilles on each.",
        },
        answers: ["Logopolis"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_9.jpeg",
          alt: "Wreathed in smoke, a dark domed device sits on top of a control plinth.",
        },
        answers: ["The Mind of Evil", "Mind of Evil"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_10.jpeg",
          alt: "A sleak spacecraft arrives next to a squat, dark space station.",
        },
        answers: ["Resurrection of the Daleks"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_11.png",
          alt: "Some grey triangular decorations in front of a purpley-brown velour-looking wall, all overlit.",
        },
        answers: ["Arc of Infinity"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_12.png",
          alt: "White round objects embedded in a grey wall, a cable just visible in the top left.",
        },
        answers: ["The Day of the Doctor", "Day of the Doctor"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_13.jpeg",
          alt: "A strange helmet, metallic and with what looks like computer-enhanced binoculars built into the front.",
        },
        answers: ["The War Games", "War Games"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_14.jpeg",
          alt: "A massive, brutal lump of a spacecraft.",
        },
        answers: ["Ascension of the Cybermen"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_15.jpeg",
          alt: "A very plain, dull corridor wall with a potted plant offering some respite from the monotony.",
        },
        answers: ["Timelash"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_16.jpeg",
          alt: "The Doctor stumbles out from a cylindrical base, its sides covered in dull white/grey metallic plates.",
        },
        answers: ["Carnival of Monsters"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_17.png",
          alt: "What looks life a soft domed hat covered in indents, like the underside of an egg carton.",
        },
        answers: ["The Moonbase", "Moonbase"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_18.jpeg",
          alt: "A ship in orbit, a blinding white light emitting from its centre.",
        },
        answers: ["The Ghost Monument", "Ghost Monument"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_19.png",
          alt: "A cassette inside a dark box with multicoloured buttons, with a red sun motif on top coverering a beigee grille.",
        },
        answers: ["Silver Nemesis"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_20.jpeg",
          alt: "Sheer, grey, brutal towers with plantlife overflowing from upper balconies.",
        },
        answers: ["Paradise Towers"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_21.png",
          alt: "A computer bank and grey walls with metal grilles covering a section.",
        },
        answers: ["The Horns of Nimon", "Horns of Nimon"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_22.png",
          alt: "A man in a tweed jacket holds a car wing mirror connected to a circular brass device with yellow midsection.",
        },
        answers: ["Vincent and the Doctor"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_23.png",
          alt: "A silver finger reached out to a metallic keypad with art deco borders.",
        },
        answers: ["Robots of Death"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_24.png",
          alt: "Monochrome. A record plays on a gramophone with a transistor radio next to it.",
        },
        answers: ["The Time Meddler", "Time Meddler"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_25.jpg",
          alt: "An archway covereed in cabling and circuits, emitting pale blue lightning.",
        },
        answers: ["The End of Time", "End of Time", "End of Time Part One"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_26.png",
          alt: "Monochrome. A clear plastic dome covers circuitry.",
        },
        answers: ["The Wheel in Space", "Wheel in Space"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_27.png",
          alt: "A round, cast iron cooking device.",
        },
        answers: ["War of the Sontarans"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_28.png",
          alt: "A small, turquoise, metallic device with lights on is front and top, and small whirring arms.",
        },
        answers: ["The Robot Revolution", "Robot Revolution"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_29.png",
          alt: "A large cardboard box labelled 'Masoki'",
        },
        answers: ["Resolution"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_30.png",
          alt: "A large, red blur above a dark metallic walkway.",
        },
        answers: ["The End of the World", "End of the World"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_31.png",
          alt: "A brown shoe on top of a short cylinder, with glowing green sides.",
        },
        answers: ["Boom"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_32.png",
          alt: "A metallic wing from a vehicle smashing into the face of a clock tower.",
        },
        answers: ["Aliens of London", "Aliens of London/World War Three"],
      },
      {
        question: "",
        image: {
          url: "/images/drWhoQuiz/inhuman_round/inhuman_33.png",
          alt: "An electric razor, held in front of brown shelves.",
        },
        answers: ["The Story and the Engine", "Story and the Engine"],
      },
    ],
  },
  {
    name: "Odd One Out",
    slug: "odd-one-out",
    copy: "Pick the correct answer from four options.",
    questions: [
      {
        question: "Which of these authors have not written Doctor Who books?",
        options: [
          "Alastair Reynolds",
          "Douglas Adams",
          "Stephen Baxter",
          "Malorie Blackman",
        ],
        answers: ["Douglas Adams"],
      },
      {
        question:
          "Which of these comic writers has not written a Doctor Who strip?",
        options: ["Grant Morrison", "Alan Moore", "Gail Simone", "Dan Abnett"],
        answers: ["Gail Simone"],
      },
      {
        question:
          "Which of these music acts has not had a song appear in Doctor Who?",
        options: ["Little Mix", "Joy Division", "Girls Aloud", "The Streets"],
        answers: ["Girls Aloud"],
      },
      {
        question: "Doctor Who?",
        options: [
          "Christopher Eccleston",
          "David Tennant",
          "Matt Smith",
          "Peter Capaldi",
        ],
        answers: ["Christopher Eccleston"],
      },
      {
        question:
          "Which of these is not a real line of dialogue from Earthshock?",
        options: [
          "Activate…the device.",
          "I know that object.",
          "Fire Your Weaponry",
          "Explode The Bomb",
        ],
        answers: ["Fire Your Weaponry"],
      },
      {
        question: "Which of these is not an actual plan of the Doctor's?",
        options: [
          "Overload a nuclear reactor and escape in the confusion",
          "Use some Victorians as a decoy and beat the crap out of a war criminal",
          "Bung a rock at it",
          "Terraform Skaro into a verdant pastoral idyll",
        ],
        answers: ["Terraform Skaro into a verdant pastoral idyll"],
      },
      {
        question:
          "Which of these is not the working title of an unmade Doctor Who story?",
        options: [
          "Yellow Fever and How To Cure It",
          "Terradorm of the Deep",
          "The Suicide Exhibition",
          "Children of the Erinella",
        ],
        answers: ["Children of the Erinella"],
      },
      {
        question: "Which actor has not been in a Big Finish audio play?",
        options: [
          "Hayley Atwell",
          "Duncan from Blue",
          "Michelle Gomez",
          "Gemma Chan",
        ],
        answers: ["Gemma Chan"],
      },
      {
        question:
          "Which of these Target novelisations was not written by Terrance Dicks?",
        options: [
          "The Ribos Operation",
          "The Smugglers",
          "The Mysterious Planet",
          "Kinda",
        ],
        answers: ["The Ribos Operation"],
      },
      {
        question:
          "Which of these Doctor Who actors has not voiced a character in Wallace and Gromit?",
        options: [
          "Mark Gattiss",
          "Adjoa Anjoh",
          "Sanjeev Bhaskar",
          "Anne Reid",
        ],
        answers: ["Sanjeev Bhaskar"],
      },
      {
        question: "Which of these is not a name created by Chris Chibnall?",
        options: ["Qurunx", "Feekat", "Awsok", "Ekzor"],
        answers: ["Ekzor"],
      },
      {
        question:
          "Which of these Doctor Who stories doesn't feature an actor who appeared in 'Father Ted'?",
        options: [
          "The Next Doctor",
          "The Interstellar Song Contest",
          "Ascension of the Cybermen",
          "Horror of Fang Rock",
        ],
        answers: ["Ascension of the Cybermen"],
      },
      {
        question:
          "Which of these underground stations hasn't featured in an episode of Doctor Who?",
        options: ["Canary Wharf", "Novosibirsk", "Covent Garden", "White City"],
        answers: ["Canary Wharf"],
      },
      {
        question: "Which of these stories does not feature Autons?",
        options: [
          "Spearhead from Space",
          "The Five Doctors",
          "Rose",
          "The Pandorica Opens",
        ],
        answers: ["The Five Doctors"],
      },
      {
        question: "Who has not acted in both Doctor Who and a Paddington fllm?",
        options: [
          "Kayvan Novak",
          "Alexander Armstrong",
          "Geoffrey Palmer",
          "Jessica Hynes",
        ],
        answers: ["Alexander Armstrong"],
      },
      {
        question:
          "Which of these actors played a character who survived til the end of the story?",
        options: [
          "Geoffrey Palmer",
          "Paul Darrow",
          "Janet Henfrey",
          "Michael Sheard",
        ],
        answers: ["Michael Sheard"],
      },
      {
        question:
          "Who has not appeared in both Doctor Who and The Sarah Jane Adventures?",
        options: [
          "Bradley Walsh",
          "Mina Anwar",
          "Nigel Havers",
          "Suranne Jones",
        ],
        answers: ["Nigel Havers"],
      },
    ],
  },
  {
    name: "Seize the Codes of Production",
    slug: "production-codes",
    copy: "Pick the correct answer from four options.",
    hint: "A production code is an alphanumberic designation used to uniquely identify episodes within a television series.",
    questions: [
      {
        question: "What stories' production codes spell 'MARS'?",
        options: [
          "The Romans, An Unearthly Child, The Space Museum, The Chase",
          "The Romans, An Unearthly Child, The Chase, The Time Meddler",
          "The Web Planet, An Unearthly Child, The Chase, The Time Meddler",
          "The Web Planet, An Unearthly Child, The Space Museum, The Chase",
        ],
        answers: [
          "The Romans, An Unearthly Child, The Chase, The Time Meddler",
        ],
      },
      {
        question: "What stories' production codes spell 'MOON'?",
        options: [
          "The Web Planet, The Enemy of the World, The Crusade",
          "The Romans, The Crusade, The Crusade, The Web Planet",
          "The Web Planet, The Ice Warriors, The Space Museum",
          "The Romans, The Ice Warriors, The Web Planet",
        ],
        answers: ["The Romans, The Ice Warriors, The Web Planet"],
      },
      {
        question: "What stories' production codes spell 'YAZ'?",
        options: [
          "The Celestial Toymaker, An Unearthly Child, The Gunfighters",
          "The Gunfighters, The Pilot, The Savages",
          "The Celestial Toymaker, The Pilot, The Gunfighters",
          "The Gunfighters, An Unearthly Child, The Savages",
        ],
        answers: [
          "The Celestial Toymaker, An Unearthly Child, The Gunfighters",
        ],
      },
      {
        question: "What story's production code is also a type of gun?",
        options: [
          "The War Machines",
          "The Smugglers",
          "The Tenth Planet",
          "The Power of the Daleks",
        ],
        answers: ["The War Machines"],
      },
      {
        question: "What story has the most sarcastic sounding production code?",
        options: [
          "The Curse of Peladon",
          "The Mutants",
          "The Time Monster",
          "Carnival of Monsters",
        ],
        answers: ["The Time Monster"],
      },
      {
        question: "What story's production code implies it to be hardcore?",
        options: [
          "Invasion of the Dinosaurs",
          "Death to the Daleks",
          "The Monster of Peladon",
          "Planet of the Spiders",
        ],
        answers: ["Death to the Daleks"],
      },
      {
        question: "Which story has production code 5A?",
        options: [
          "Castrovalva",
          "Logopolis",
          "The Leisure Hive",
          "The Ribos Operation",
        ],
        answers: ["The Ribos Operation"],
      },
      {
        question: "Which story has production code 6A?",
        options: [
          "Logopolis",
          "Black Orchid",
          "The Twin Dilemma",
          "Attack of the Cybermen",
        ],
        answers: ["Black Orchid"],
      },
      {
        question: "What is the last story to have a production code?",
        options: [
          "The Wedding of River Song",
          "The Husbands of River Song",
          "Twice Upon a Time",
          "The Power of the Doctor",
        ],
        answers: ["The Wedding of River Song"],
      },
      {
        question: "What stories' production codes spell 'Eric Saward'?",
        options: [
          "The Keys of Marinus, The Chase, Planet of the Giants, Edge of Destruction, The Time Meddler, An Unearthly Child, The Massacre, An Unearthly Child, The Chase, Marco Polo",
          "The Keys of Marinus, The Space Museum, The Reign of Terror, Edge of Destruction, Robot, Image of the Fendahl, An Unearthly Child, The Chase, Marco Polo",
          "The Aztecs, The Chase, Planet of the Giants, Edge of Destruction, The Time Meddler, An Unearthly Child, The Massacre, An Unearthly Child, The Chase, Marco Polo",
          "You can't spell 'Eric Saward' with production codes",
        ],
        answers: ["You can't spell 'Eric Saward' with production codes"],
      },
      {
        question:
          "Which episode's production code is also the name of an Australian beer?",
        options: [
          "Image of the Fendahl",
          "Forest of the Dead",
          "The Next Doctor",
          "The Invasion of Time",
        ],
        answers: ["Image of the Fendahl"],
      },
      {
        question: "Which story's production code is 5.6/5?",
        options: ["The Lodger", "Survival", "Army of Ghosts", "Bad Wolf"],
        answers: ["Bad Wolf"],
      },
      {
        question: "Which story's production code sounds like someone sleeping?",
        options: [
          "The Celestial Toymaker",
          "The Space Pirates",
          "Planet of the Spiders",
          "The Keeper of Traken",
        ],
        answers: ["Planet of the Spiders"],
      },
      {
        question: "Which two stories share the production code 7C?",
        options: [
          "The Awakening/Frontios",
          "Terror of the Vervoids/The Ultimate Foe",
          "Delta and the Bannermen/Dragonfire",
          "Dinosaurs on a Spaceship/A Town Called Mercy",
        ],
        answers: ["Terror of the Vervoids/The Ultimate Foe"],
      },
      {
        question:
          "Which story has the production code they ask you to say at the dentist?",
        options: [
          "The Space Pirates",
          "The War Games",
          "Spearhead from Space",
          "Doctor Who and the Silurians",
        ],
        answers: ["Spearhead from Space"],
      },
      {
        question:
          "Which two stories have production codes that spell out what's inside the moon?",
        options: [
          "The Keys of Marinus, The Highlanders",
          "The Keys of Marinus, The Underwater Menace",
          "The Aztecs, The Underwater Menace",
          "The Sensorites, The Highlanders",
        ],
        answers: ["The Keys of Marinus, The Underwater Menace"],
      },
      {
        question:
          "If H From Steps was known based on the corresponding Doctor Who story, would he be called:",
        options: [
          "The Aztecs from Steps",
          "The Sensorites from Steps",
          "The Reign of Terror from Steps",
          "The Dalek Invasion of Earth from Steps",
        ],
        answers: ["The Reign of Terror from Steps"],
      },
      {
        question: "What stories' production codes spell 'HELP'?",
        options: [
          "The Sensorites, The Keys of Marinus, The Romans, The Crusade",
          "The Reign of Terror, The Keys of Marinus, The Rescue, The Crusade",
          "Planet of Giants, The Aztecs, The Romans, The Crusade",
          "The Sensorites, The Aztecs, The Rescue, The Web Planet",
        ],
        answers: [
          "The Reign of Terror, The Keys of Marinus, The Rescue, The Crusade",
        ],
      },
      {
        question:
          "What was the production code for the first Fifith Doctor story, 'Castrovalva'?",
        options: ["5A", "5.1", "5.4", "5Z"],
        answers: ["5Z"],
      },
      {
        question: "What stories' production codes spell 'Ace'?",
        options: [
          "An Unearthly Child, The Edge of Destruction, The Keys of Marinus",
          "An Unearthly Child, Marco Polo, The Keys of Marinus",
          "An Unearthly Child, The Edge of Destruction, The Aztecs",
          "An Unearthly Child, Marco Polo, The Aztecs",
        ],
        answers: [
          "An Unearthly Child, The Edge of Destruction, The Keys of Marinus",
        ],
      },
    ],
  },
  {
    name: "Intros Round - Pop",
    slug: "intros-pop",
    copy: "Click on the play button to hear 10 seconds of a song used in an episode of Doctor Who, then name the story it is from.",
    questions: [
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_1.mp3",
        answers: ["Remembrance of the Daleks"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_2.mp3",
        answers: ["The End of the World", "End of the World"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_3.mp3",
        answers: ["Colony in Space"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_4.mp3",
        answers: ["Aliens of London", "Aliens of London/World War Three"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_5.mp3",
        answers: [
          "The Big Bang",
          "Big Bang",
          "The Pandorica Opens/The Big Bang",
        ],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_6.mp3",
        answers: ["Arachnids in the UK'"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_7.mp3",
        answers: ["Revelation of the Daleks"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_8.mp3",
        answers: ["Love & Monsters"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_9.mp3",
        answers: [
          "The Rebel Flesh",
          "Rebel Flesh",
          "The Rebel Flesh/The Almost People",
        ],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_10.mp3",
        answers: ["The Power of the Doctor", "Power of the Doctor"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_11.mp3",
        answers: ["The Power of Three", "Power of Three"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_12.mp3",
        answers: ["Love & Monsters"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_13.mp3",
        answers: ["The Giggle"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_14.mp3",
        answers: ["Cold War"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_15.mp3",
        answers: ["The Sound of Drums", "Sound of Drums"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_16.mp3",
        answers: ["The Last of the Time Lords", "Last of the Time Lords"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_17.mp3",
        answers: ["Vincent and the Doctor"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_18.mp3",
        answers: ["The Angels Take Manhattan", "Angels Take Manhattan"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_19.mp3",
        answers: ["Tooth and Claw"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_20.mp3",
        answers: ["Rise of the Cybermen"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_21.mp3",
        answers: ["Sleep No More"],
      },
      {
        question: "Which story does this song feature in?",
        audio: "/audio/DrWhoQuiz/intros_pop/pop_intro_22.mp3",
        answers: ["Rosa"],
      },
    ],
  },
  {
    name: "Intros Round - Incidental Music",
    slug: "intros-incidental",
    copy: "Click on the play button to hear roughly 10 seconds of music composed for an episode of Doctor Who, then name the story it is from.",
    hint: "If you get that one: no, it's not an error.",
    questions: [
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_1.mp3",
        answers: ["The Krotons", "Krotons"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_2.mp3",
        answers: ["A Christmas Carol", "Christmas Carol"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_3.mp3",
        answers: ["The Caves of Androzani", "Caves of Androzani"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_4.mp3",
        answers: ["The Big Bang", "Big Bang"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_5.mp3",
        answers: ["The Timeless Children", "Timeless Children"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_6.mp3",
        answers: ["Blink"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_7.mp3",
        answers: ["City of Death"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_8.mp3",
        answers: ["Death to the Daleks"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_9.mp3",
        answers: ["Delta and the Bannermen"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_10.mp3",
        answers: ["Demons of the Punjab"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_11.mp3",
        answers: ["Doomsday"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_12.mp3",
        answers: ["Earthshock"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_13.mp3",
        answers: ["Enlightenment"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_14.mp3",
        answers: ["The Curse of Fenric", "Curse of Fenric"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_15.mp3",
        answers: ["The Five Doctors", "Five Doctors"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_16.mp3",
        answers: ["Genesis of the Daleks"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_17.mp3",
        answers: ["The Gunfighters"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_18.mp3",
        answers: ["The Invasion"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_19.mp3",
        answers: ["Journey's End"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_20.mp3",
        answers: ["Logopolis"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_21.mp3",
        answers: ["The Rings of Akhaten", "Rings of Akhaten"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_22.mp3",
        answers: ["The Macra Terror", "Macra Terror"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_23.mp3",
        answers: ["The Mark of the Rani", "Mark of the Rani"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_24.mp3",
        answers: ["The Mind of Evil", "Mind of Evil"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_25.mp3",
        answers: ["Rose"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_26.mp3",
        answers: ["The Sea Devils", "Sea Devils"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_27.mp3",
        answers: ["Heaven Sent"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_28.mp3",
        answers: ["The Silurians", "Doctor Who and the Silurians"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_29.mp3",
        answers: ["The Interstellar Song Contest", "Interstellar Song Contest"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_30.mp3",
        answers: ["Survival"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_31.mp3",
        answers: ["Terror of the Zygons"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_32.mp3",
        answers: ["The Chase"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_33.mp3",
        answers: ["The Daleks"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_34.mp3",
        answers: ["Time and the Rani"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_35.mp3",
        answers: ["The TV Movie", "TV Movie", "TVM", "Doctor Who"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_36.mp3",
        answers: ["The Underwater Menace", "Underwater Menace"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_37.mp3",
        answers: ["Utopia"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_38.mp3",
        answers: ["The End of Time", "End of Time"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_39.mp3",
        answers: ["Vengeance on Varos"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_40.mp3",
        answers: ["The Visitation"],
      },
      {
        question: "Which story does this music feature in?",
        audio: "/audio/DrWhoQuiz/incidental/incidental_41.mp3",
        answers: ["The Wheel in Space", "Wheel in Space"],
      },
    ],
  },
  {
    name: "Death!",
    slug: "deaths",
    copy: "Identify the story from the described character death.",
    hint: "NB. For the sake of argument, living deaths count here.",
    questions: [
      {
        question: "Drowned in a vat of fondant surprise.",
        answers: ["The Happiness Patrol", "Happiness Patrol"],
      },
      {
        question: "Electrocuted in undersea kung fu gambit.",
        answers: ["Warriors of the Deep"],
      },
      {
        question: "Shot in face at point blank range in front of his family.",
        answers: ["Rose"],
      },
      {
        question: "Atomised by gargoyle.",
        answers: ["The Daemons", "Daemons"],
      },
      {
        question: "Pushed into giant brain.",
        answers: ["Planet of the Ood"],
      },
      {
        question: "Cannibal in nappy poisoned by plant.",
        answers: ["Vengeance on Varos"],
      },
      {
        question: "Eaten by teachers.",
        answers: ["School Reunion"],
      },
      {
        question: "Stabbed through the heart with spaceship.",
        answers: ["State of Decay"],
      },
      {
        question: "Organs harvested by clockwork robots.",
        answers: ["The Girl in the Fireplace", "Girl in the Fireplace"],
      },
      {
        question: "Thrown into centre of the Earth by giant spider.",
        answers: ["The Runaway Bride", "Runaway Bride"],
      },
      {
        question: "SatNav drove her into river.",
        answers: [
          "The Sontaran Stratagem",
          "Sontaran Stratagem",
          "The Sontaran Stratagem/The Poison Sky",
        ],
      },
      {
        question: "Eaten by the Master.",
        answers: ["The End of Time", "End of Time", "The End of Time Part One"],
      },
      {
        question: "Fell off a cloud.",
        answers: ["The Snowmen"],
      },
      {
        question: "Dissected by creature hiding in carpet.",
        answers: ["Flatline"],
      },
      {
        question: "Suffocated by snake materialising in windpipe.",
        answers: ["Survivors of the Flux"],
      },
      {
        question: "Killed by bubble wrap.",
        answers: ["Kerblam!", "Kerblam"],
      },
      {
        question: "Drained of energy by vampiric celestial body.",
        answers: ["The Tenth Planet", "Tenth Planet"],
      },
      {
        question: "Utterly disintegrated by shop window dummy.",
        answers: ["Spearhead from Space"],
      },
      {
        question: "Smothered by own chair.",
        answers: ["Terror of the Autons"],
      },
      {
        question: "Thrown off thousand metre high building.",
        answers: ["The Sun Makers", "Sun Makers", "Sunmakers", "The Sunmakers"],
      },
      {
        question: "Mauled by sacred beast.",
        answers: [
          "The Curse of Peladon",
          "The Monster of Peladon",
          "Curse of Peladon",
          "Monster of Peladon",
        ],
      },
      {
        question: "Consumed by giant space wasp grub.",
        answers: ["The Ark in Space", "Ark in Space"],
      },
      {
        question: "Bullet to the guts.",
        answers: [
          "The Brain of Morbius",
          "Brain of Morbius",
          "Resurrection of the Daleks",
        ],
      },
      {
        question: "Shot by customs officer while on drug-induced comedown.",
        answers: ["Nightmare of Eden"],
      },
      {
        question: "Decapitated by Roundheads",
        answers: ["The Awakening", "Awakening"],
      },
      {
        question: "Turned into tree by land mine.",
        answers: ["The Mark of the Rani", "Mark of the Rani"],
      },
      {
        question: "Stabbed by alien who refused to pay restaurant bill.",
        answers: ["The Two Doctors", "Two Doctors"],
      },
      {
        question: "Beaten to death with tree branch.",
        answers: ["Revelation of the Daleks"],
      },
      {
        question: "Turned into soup by angel.",
        answers: ["Ghost light", "Ghostlight"],
      },
      {
        question: "Dragged down own waste disposal unit.",
        answers: ["Paradise Towers"],
      },
    ],
  },
];

export const DeathImages: Question[] = [
  {
    question: "What story does this death scene come from?",
    answers: ["Terror of the Autons"],
    image: {
      url: "/images/drWhoQuiz/deaths/goodge_terror_autons.jpg",
      alt: "A man in a lab coat lies inside a lunch box.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Creature from the Pit", "Creature from the Pit"],
    image: {
      url: "/images/drWhoQuiz/deaths/adrasta.png",
      alt: "A woman in black lies covered in what looks like cobwebs.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The King's Demons", "King's Demons"],
    image: {
      url: "/images/drWhoQuiz/deaths/arrow.png",
      alt: "A man riding a white horse across grass throws his arms up in pain.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Sound of Drums", "Sound of Drums"],
    image: {
      url: "/images/drWhoQuiz/deaths/cabinet_deaths.png",
      alt: "A man in a dark suit lies across a shiny wooden table as gas curls around him.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Crimson Horror", "Crimson Horror"],
    image: {
      url: "/images/drWhoQuiz/deaths/crimson_horror.jpg",
      alt: "A man lies on a slab, sheet pulled down to his shoulders, with bright red skin.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Dot and Bubble"],
    image: {
      url: "/images/drWhoQuiz/deaths/dot_bubble.png",
      alt: "A big orange slug-like creature is enveloping someone wearing yellow checked trousers.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Doomsday"],
    image: {
      url: "/images/drWhoQuiz/deaths/eastenders_skull.png",
      alt: "A burnt-looking human head is gripped by two suckers.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Green Death", "Green Death"],
    image: {
      url: "/images/drWhoQuiz/deaths/green_death.webp",
      alt: "A man wearing a miner's helmet, eyes closed, his skin glowing green.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Five Doctors", "Five Doctors"],
    image: {
      url: "/images/drWhoQuiz/deaths/immortality.png",
      alt: "A frieze of a figure with an ornate collar, the face alive somehow beneath the rock.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The End of the World", "End of the World"],
    image: {
      url: "/images/drWhoQuiz/deaths/jabe.png",
      alt: "A man looks back along a walkway in a huge chamber, a figure on fire in the background.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Time and the Rani"],
    image: {
      url: "/images/drWhoQuiz/deaths/Lakertyan_skeleton.webp",
      alt: "A skeleton - mostly humanoid but with a tail and crest - lies among rocks.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Remembrance of the Daleks"],
    image: {
      url: "/images/drWhoQuiz/deaths/lightning.png",
      alt: "A man holding a glass sphere standing on metal stairs outdoors, zapped by lightning from below.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Parting of the Ways", "Parting of the Ways"],
    image: {
      url: "/images/drWhoQuiz/deaths/lynda.png",
      alt: "A woman reacts in horror as glass shatters all around her.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Logopolis"],
    image: {
      url: "/images/drWhoQuiz/deaths/monitor.png",
      alt: "A bearded man in robes gasps as parts of his body randomly dissolve.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Claws of Axos", "Claws of Axos"],
    image: {
      url: "/images/drWhoQuiz/deaths/pigbin.png",
      alt: "A man lies against gravel, wearing a scarf and dirty jacket, his hat fallen, his face white.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Pyramids of Mars"],
    image: {
      url: "/images/drWhoQuiz/deaths/pyramids_poacher.jpg",
      alt: "A man in tweed suit and cap is crushed between two large Egyptian mummies.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["It Takes You Away"],
    image: {
      url: "/images/drWhoQuiz/deaths/ribbons.png",
      alt: "A small white furry creature emerges from the skull of what looks like a half-eaten corpse.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Dalek Invasion of Earth", "Dalek Invasion of Earth"],
    image: {
      url: "/images/drWhoQuiz/deaths/roboman.png",
      alt: "Monochrome: a figure in a metal helmet lies face down in a river.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["The Deadly Assassin", "Deadly Assassin"],
    image: {
      url: "/images/drWhoQuiz/deaths/runcible.png",
      alt: "A robed figure lies splayed on the floor, a large blade sticking out of their back.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Earthshock"],
    image: {
      url: "/images/drWhoQuiz/deaths/snyder.png",
      alt: "A green, gungy smoking substance with a name badge reading 'Snyder' in the middle of it.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: [
      "The Trial of a Time Lord",
      "Terror of the Vervoids",
      "Trial of a Time Lord",
    ],
    image: {
      url: "/images/drWhoQuiz/deaths/terror_vervoids.png",
      alt: "A woman screams as a man's body glows and spasms as he is electrocuted in a dark corridor.",
    },
  },
  {
    question: "What story does this death scene come from?",
    answers: ["Time Heist"],
    image: {
      url: "/images/drWhoQuiz/deaths/time_heist.jpg",
      alt: "A brown skinned man in a suit, his head sunken as if his brain has turned to liquid.",
    },
  },
];

export const LogicalRound: CyberRound = {
  name: "You Know. Our ways.",
  slug: "logical",
  copy: "You will be given the name of a Cyberman story, and a breakdown of their plan in that story in random order.",
  hint: "Your job is to put their plan into the correct order. You have two minutes.",
  questions: [
    {
      story: "The Wheel in Space",
      plot: [
        { id: 1, point: "The Cybermen get some Bernalium, I guess." },
        {
          id: 2,
          point:
            "The Cybermen take control of a supply vessel, and set it drifting off course with a robot on board.",
        },
        {
          id: 3,
          point:
            "If anyone boards the vessel, the robot will pilot it towards the Wheel.",
        },
        {
          id: 4,
          point:
            "The robot also sends Cybermats to destroy the Wheel's Bernalium.",
        },
        {
          id: 5,
          point:
            "The Cybermen send a star nova so that the Wheel needs to fire their defensive laser.",
        },
        {
          id: 6,
          point:
            "The Wheel will realise they are out of Bernalium, which powers their laser!",
        },
        {
          id: 7,
          point:
            "The Wheel will have to try boarding the supply vessel to look for Bernalium.",
        },
        {
          id: 8,
          point:
            "Cybermen hidden on board the supply vessel will then take over the minds of whoever is sent to investigate!",
        },
        {
          id: 9,
          point:
            "The possessed crew take the Cybermen to the Wheel hidden in Bernalium crates.",
        },
        {
          id: 10,
          point:
            "The Cybermen repair the laser so that the meteors from the exploding star don't hit the Wheel.",
        },
        {
          id: 11,
          point:
            "The Cybermen use the Wheel as a homing beacon for the Cyberfleet. ",
        },
        {
          id: 12,
          point:
            "The Cybermen invade the Earth and plunder its mineral wealth!",
        },
      ],
    },
    {
      story: "The Moonbase",
      plot: [
        { id: 1, point: "The Cybermen want to kill everyone on Earth!" },
        {
          id: 2,
          point:
            "The Cybermen have broken into the Moonbase that controls the Earth's weather using a simple hole.",
        },
        {
          id: 3,
          point: "The Cybermen introduce a virus to the base's sugar supply.",
        },
        {
          id: 4,
          point:
            "The Cybermen sneak into the medical bay, remove the virus victims, and hide in their beds.",
        },
        { id: 5, point: "The Cybermen take over the base." },
        {
          id: 6,
          point:
            "The Cybermen use the virus victims to interface with the base's Gravitron and control the weather.",
        },
        {
          id: 7,
          point:
            "The Cybermen can't do this themselves because they don't like gravity.",
        },
        {
          id: 8,
          point:
            "If this somehow fails, more Cybermen will simply re-activate a virus victim from outside the base.",
        },
        {
          id: 9,
          point:
            "The Cybermen fire a big cannon at the base, sucking the oxygen out.",
        },
        { id: 10, point: "The Cybermen take over the base again." },
      ],
    },
    {
      story: "Earthshock",
      plot: [
        {
          id: 1,
          point:
            "Galactic powers will unite against the Cybermen at a peace conference on Earth.",
        },
        {
          id: 2,
          point: "The Cybermen hide a bomb on Earth, guarded by androids.",
        },
        {
          id: 3,
          point:
            "The Cybermen will find a security officer who is tired of his captain's snide remarks and bullying ways.",
        },
        {
          id: 4,
          point:
            "This officer will help smuggle 15,000 Cybermen onto a freighter bound for Earth.",
        },
        {
          id: 5,
          point:
            "When the bomb goes off the Cybermen on the freighter will mop up survivors.",
        },
        {
          id: 6,
          point:
            "If this goes wrong, the Cybermen will fly the freighter into Earth instead.",
        },
        {
          id: 7,
          point:
            "The Cybermen will lock the ship's navigation with a device that can be overridden by solving three logic codes.",
        },
        {
          id: 8,
          point:
            "Some humans will be left on board so that some Cybermen, also on board, can understand their weaknesses.",
        },
        {
          id: 9,
          point:
            "Ideally the device on the nav computer won't do anything weird like travel in time.",
        },
        {
          id: 10,
          point: "The strength and might of the Cyber race will be confirmed!",
        },
      ],
    },
    {
      story: "The Tenth Planet",
      plot: [
        {
          id: 1,
          point:
            "The Cybermen's home planet, Mondas, is rapidly losing its energy reserves",
        },
        {
          id: 2,
          point:
            "Using the last of this energy, the Cybermen will return Mondas to the Earth's orbit.",
        },
        {
          id: 3,
          point:
            "Once it is near enough, Mondas will start absorbing the Earth's energy reserves.",
        },
        { id: 4, point: "Humanity will be taken to Mondas for conversion." },
        { id: 5, point: "The Earth will be destroyed by this energy drain." },
        { id: 6, point: "No one will steal our guns." },
        {
          id: 7,
          point: "Mondas definitely won't absorb too much energy and explode.",
        },
        { id: 8, point: "Mondas is saved!" },
      ],
    },
    {
      story: "Revenge of the Cybermen",
      plot: [
        { id: 1, point: "The Cybermen are fatally vulnerable to gold dust." },
        {
          id: 2,
          point: "The Cybermen want to destroy Voga, the planet of gold.",
        },
        {
          id: 3,
          point:
            "The Cybermen promise a planetary surveyor control of the solar system.",
        },
        {
          id: 4,
          point:
            "The planetary surveyor brings Cybermats on board a space station to kill the crew.",
        },
        {
          id: 5,
          point:
            "Once the crew are dead the Cybermen arrive to use the space station as a base.",
        },
        {
          id: 6,
          point:
            "The Cybermen send people with bombs down to Voga to blow the planet up.",
        },
        {
          id: 7,
          point:
            "The Cybermen fill the space station full of bombs and fire it at Voga.",
        },
        {
          id: 8,
          point:
            "The Cybermen tie the Doctor and Sarah Jane up on the space station, where they will definitely die.",
        },
      ],
    },
    {
      story: "The Invasion",
      plot: [
        {
          id: 1,
          point:
            "Get contacted by an electronics CEO with world domination plans.",
        },
        {
          id: 2,
          point:
            "Agree to let them rule the world in return for your desired minerals.",
        },
        { id: 3, point: "Give them a partially cybernetic body." },
        {
          id: 4,
          point:
            "Share advanced technology that allows them to dominate the market.",
        },
        {
          id: 5,
          point: "Smuggle dormant Cybermen onto Earth to be reawakened.",
        },
        {
          id: 6,
          point:
            "Send signals that become hypnotic on contact with the electronics company's devices.",
        },
        {
          id: 7,
          point:
            "Emerge from the electronics factory via the sewers to kill anyone not hypnotised.",
        },
        { id: 8, point: "Send in full invasion forces from space." },
        { id: 9, point: "Have a megatron bomb on standby, just in case." },
        {
          id: 10,
          point:
            "Hope no one can de-activate the radio beam that guides the bombs to Earth.",
        },
      ],
    },
  ],
};
