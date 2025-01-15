// data/stories.ts
export interface Story {
  id: number;
  name: string;
  prodCode: string;
  doctor: string;
  era: string;
}

export const stories: Story[] = [
  { id: 1, name: "An Unearthly Child", prodCode: "A", doctor: "First", era: "1963 - 1989"},
  { id: 2, name: "The Daleks", prodCode: "B", doctor: "First", era: "1963 - 1989" },
  { id: 3, name: "The Edge of Destruction", prodCode: "C", doctor: "First", era: "1963 - 1989" },
  { id: 4, name: "Marco Polo", prodCode: "D", doctor: "First", era: "1963 - 1989" },
  { id: 5, name: "The Keys of Marinus", prodCode: "E", doctor: "First" , era: "1963 - 1989"},
  { id: 6, name: "The Aztecs", prodCode: "F", doctor: "First", era: "1963 - 1989" },
  { id: 7, name: "The Sensorites", prodCode: "G", doctor: "First", era: "1963 - 1989" },
  { id: 8, name: "The Reign of Terror", prodCode: "H", doctor: "First", era: "1963 - 1989" },
  { id: 9, name: "Planet of Giants", prodCode: "J", doctor: "First", era: "1963 - 1989" },
  { id: 10, name: "The Dalek Invasion of Earth", prodCode: "K", doctor: "First", era: "1963 - 1989" },
  { id: 11, name: "The Rescue", prodCode: "L", doctor: "First", era: "1963 - 1989" },
  { id: 12, name: "The Romans", prodCode: "M", doctor: "First", era: "1963 - 1989" },
  { id: 13, name: "The Web Planet", prodCode: "N", doctor: "First", era: "1963 - 1989" },
  { id: 14, name: "The Crusade", prodCode: "P", doctor: "First", era: "1963 - 1989" },
  { id: 15, name: "The Space Museum", prodCode: "Q", doctor: "First", era: "1963 - 1989" },
  { id: 16, name: "The Chase", prodCode: "R", doctor: "First", era: "1963 - 1989" },
  { id: 17, name: "The Time Meddler", prodCode: "S", doctor: "First", era: "1963 - 1989"" },
  { id: 18, name: "Galaxy 4", prodCode: "T", doctor: "First", era: "1963 - 1989" },
  { id: 19, name: "Mission to the Unknown", prodCode: "T/A", doctor: "First", era: "1963 - 1989" },
  { id: 20, name: "The Myth Makers", prodCode: "U", doctor: "First", era: "1963 - 1989" },
  { id: 21, name: "The Daleks' Master Plan", prodCode: "V", doctor: "First", era: "1963 - 1989" },
  { id: 22, name: "The Massacre", prodCode: "W", doctor: "First" , era: "1963 - 1989"},
  { id: 23, name: "The Ark", prodCode: "X", doctor: "First", era: "1963 - 1989" },
  { id: 24, name: "The Celestial Toymaker", prodCode: "Y", doctor: "First", era: "1963 - 1989" },
  { id: 25, name: "The Gunfighters", prodCode: "Z", doctor: "First", era: "1963 - 1989" },
  { id: 26, name: "The Savages", prodCode: "AA", doctor: "First", era: "1963 - 1989" },
  { id: 27, name: "The War Machines", prodCode: "BB", doctor: "First", era: "1963 - 1989" },
  { id: 28, name: "The Smugglers", prodCode: "CC", doctor: "First", era: "1963 - 1989" },
  { id: 29, name: "The Tenth Planet", prodCode: "DD", doctor: "First", era: "1963 - 1989" },
  { id: 30, name: "The Power of the Daleks", prodCode: "EE", doctor: "Second", era: "1963 - 1989" },
  { id: 31, name: "The Highlanders", prodCode: "FF", doctor: "Second", era: "1963 - 1989" },
  { id: 32, name: "The Underwater Menace", prodCode: "GG", doctor: "Second" , era: "1963 - 1989"},
  { id: 33, name: "The Moonbase", prodCode: "HH", doctor: "Second" , era: "1963 - 1989"},
  { id: 34, name: "The Macra Terror", prodCode: "JJ", doctor: "Second", era: "1963 - 1989" },
  { id: 35, name: "The Faceless Ones", prodCode: "KK", doctor: "Second", era: "1963 - 1989" },
  { id: 36, name: "The Evil of the Daleks", prodCode: "LL", doctor: "Second" , era: "1963 - 1989"},
  { id: 37, name: "The Tomb of the Cybermen", prodCode: "MM", doctor: "Second" , era: "1963 - 1989"},
  { id: 38, name: "The Abominable Snowmen", prodCode: "NN", doctor: "Second", era: "1963 - 1989" },
  { id: 39, name: "The Ice Warriors", prodCode: "OO", doctor: "Second" , era: "1963 - 1989"},
  { id: 40, name: "The Enemy of the World", prodCode: "PP", doctor: "Second", era: "1963 - 1989" },
  { id: 41, name: "Fury from the Deep", prodCode: "RR", doctor: "Second" , era: "1963 - 1989"},
  { id: 43, name: "The Wheel in Space", prodCode: "SS", doctor: "Second" , era: "1963 - 1989"},
  { id: 44, name: "The Dominators", prodCode: "TT", doctor: "Second", era: "1963 - 1989" },
  { id: 45, name: "The Mind Robber", prodCode: "UU", doctor: "Second", era: "1963 - 1989" },
  { id: 46, name: "The Invasion", prodCode: "VV", doctor: "Second" , era: "1963 - 1989"},
  { id: 47, name: "The Krotons", prodCode: "WW", doctor: "Second", era: "1963 - 1989" },
  { id: 48, name: "The Seeds of Death", prodCode: "XX", doctor: "Second", era: "1963 - 1989"},
  { id: 49, name: "The Space Pirates", prodCode: "YY", doctor: "Second", era: "1963 - 1989" },
  { id: 50, name: "The War Games", prodCode: "ZZ", doctor: "Second", era: "1963 - 1989" },
  { id: 51, name: "Spearhead from Space", prodCode: "AAA", doctor: "Third" , era: "1963 - 1989"},
  { id: 52, name: "Doctor Who and the Silurians", prodCode: "BBB", doctor: "Third" , era: "1963 - 1989"},
  { id: 53, name: "The Ambassadors of Death", prodCode: "CCC", doctor: "Third", era: "1963 - 1989" },
  { id: 54, name: "Inferno", prodCode: "DDD", doctor: "Third", era: "1963 - 1989" },
  { id: 55, name: "Terror of the Autons", prodCode: "EEE", doctor: "Third" , era: "1963 - 1989"},
  { id: 56, name: "The Mind of Evil", prodCode: "FFF", doctor: "Third", era: "1963 - 1989" },
  { id: 57, name: "The Claws of Axos", prodCode: "GGG", doctor: "Third" , era: "1963 - 1989"},
  { id: 58, name: "Colony in Space", prodCode: "HHH", doctor: "Third" , era: "1963 - 1989"},
  { id: 59, name: "The Dæmons", prodCode: "JJJ", doctor: "Third", era: "1963 - 1989" },
  { id: 60, name: "Day of the Daleks", prodCode: "KKK", doctor: "Third", era: "1963 - 1989" },
  { id: 61, name: "The Curse of Peladon", prodCode: "MMM", doctor: "Third" , era: "1963 - 1989"},
  { id: 62, name: "The Sea Devils", prodCode: "LLL", doctor: "Third" , era: "1963 - 1989"},
  { id: 63, name: "The Mutants", prodCode: "NNN", doctor: "Third" , era: "1963 - 1989"},
  { id: 64, name: "The Time Monster", prodCode: "OOO", doctor: "Third" , era: "1963 - 1989"},
  { id: 65, name: "The Three Doctors", prodCode: "RRR", doctor: "Third" , era: "1963 - 1989"},
  { id: 66, name: "Carnival of Monsters", prodCode: "PPP", doctor: "Third" , era: "1963 - 1989"},
  { id: 67, name: "Frontier in Space", prodCode: "QQQ", doctor: "Third" , era: "1963 - 1989"},
  { id: 68, name: "Planet of the Daleks", prodCode: "SSS", doctor: "Third" , era: "1963 - 1989"},
  { id: 69, name: "The Green Death", prodCode: "TTT", doctor: "Third" , era: "1963 - 1989"},
  { id: 70, name: "The Time Warrior", prodCode: "UUU", doctor: "Third" , era: "1963 - 1989"},
  { id: 71, name: "Invasion of the Dinosaurs", prodCode: "WWW", doctor: "Third", era: "1963 - 1989" },
  { id: 72, name: "Death to the Daleks", prodCode: "XXX", doctor: "Third" , era: "1963 - 1989"},
  { id: 73, name: "The Monster of Peladon", prodCode: "YYY", doctor: "Third", era: "1963 - 1989" },
  { id: 74, name: "Planet of the Spiders", prodCode: "ZZZ", doctor: "Third", era: "1963 - 1989" },
  { id: 75, name: "Robot", prodCode: "4A", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 76, name: "The Ark in Space", prodCode: "4C", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 77, name: "The Sontaran Experiment", prodCode: "4B", doctor: "Fourth", era: "1963 - 1989" },
  { id: 78, name: "Genesis of the Daleks", prodCode: "4E", doctor: "Fourth", era: "1963 - 1989" },
  { id: 79, name: "Revenge of the Cybermen", prodCode: "4D", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 80, name: "Terror of the Zygons", prodCode: "4F", doctor: "Fourth", era: "1963 - 1989" },
  { id: 81, name: "Planet of Evil", prodCode: "4H", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 82, name: "Pyramids of Mars", prodCode: "4G", doctor: "Fourth", era: "1963 - 1989" },
  { id: 83, name: "The Android Invasion", prodCode: "4J", doctor: "Fourth", era: "1963 - 1989" },
  { id: 84, name: "The Brain of Morbius", prodCode: "4K", doctor: "Fourth", era: "1963 - 1989" },
  { id: 85, name: "The Seeds of Doom", prodCode: "4L", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 86, name: "The Masque of Mandragora", prodCode: "4M", doctor: "Fourth", era: "1963 - 1989" },
  { id: 87, name: "The Hand of Fear", prodCode: "4N", doctor: "Fourth", era: "1963 - 1989" },
  { id: 88, name: "The Deadly Assassin", prodCode: "4P", doctor: "Fourth", era: "1963 - 1989" },
  { id: 89, name: "The Face of Evil", prodCode: "4Q", doctor: "Fourth", era: "1963 - 1989" },
  { id: 90, name: "The Robots of Death", prodCode: "4R", doctor: "Fourth", era: "1963 - 1989" },
  { id: 91, name: "The Talons of Weng-Chiang", prodCode: "4S", doctor: "Fourth", era: "1963 - 1989" },
  { id: 92, name: "Horror of Fang Rock", prodCode: "4V", doctor: "Fourth", era: "1963 - 1989" },
  { id: 93, name: "The Invisible Enemy", prodCode: "4T", doctor: "Fourth", era: "1963 - 1989" },
  { id: 94, name: "Image of the Fendahl", prodCode: "4X", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 95, name: "The Sun Makers", prodCode: "4W", doctor: "Fourth", era: "1963 - 1989" },
  { id: 96, name: "Underworld", prodCode: "4Y", doctor: "Fourth", era: "1963 - 1989" },
  { id: 97, name: "The Invasion of Time", prodCode: "4Z", doctor: "Fourth", era: "1963 - 1989" },
  { id: 98, name: "The Ribos Operation", prodCode: "5A", doctor: "Fourth", era: "1963 - 1989" },
  { id: 99, name: "The Pirate Planet", prodCode: "5B", doctor: "Fourth", era: "1963 - 1989" },
  { id: 100, name: "The Stones of Blood", prodCode: "5C", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 101, name: "The Androids of Tara", prodCode: "5D", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 102, name: "The Power of Kroll", prodCode: "5E", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 103, name: "The Armageddon Factor", prodCode: "5F", doctor: "Fourth", era: "1963 - 1989" },
  { id: 104, name: "Destiny of the Daleks", prodCode: "5J", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 105, name: "City of Death", prodCode: "5H", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 106, name: "The Creature from the Pit", prodCode: "5G", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 107, name: "Nightmare of Eden", prodCode: "5K", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 108, name: "The Horns of Nimon", prodCode: "5L", doctor: "Fourth", era: "1963 - 1989" },
  { id: 109, name: "The Leisure Hive", prodCode: "5N", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 110, name: "Meglos", prodCode: "5Q", doctor: "Fourth", era: "1963 - 1989" },
  { id: 111, name: "Full Circle", prodCode: "5R", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 112, name: "State of Decay", prodCode: "5P", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 113, name: "Warriors' Gate", prodCode: "5S", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 114, name: "The Keeper of Traken", prodCode: "5T", doctor: "Fourth", era: "1963 - 1989" },
  { id: 115, name: "Logopolis", prodCode: "5V", doctor: "Fourth" , era: "1963 - 1989"},
  { id: 116, name: "Castrovalva", prodCode: "5Z", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 117, name: "Four to Doomsday", prodCode: "5W", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 118, name: "Kinda", prodCode: "5Y", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 119, name: "The Visitation", prodCode: "5X", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 120, name: "Black Orchid", prodCode: "6A", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 121, name: "Earthshock", prodCode: "6B", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 122, name: "Time-Flight", prodCode: "6C", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 123, name: "Arc of Infinity", prodCode: "6E", doctor: "Fifth", era: "1963 - 1989" },
  { id: 124, name: "Snakedance", prodCode: "6D", doctor: "Fifth", era: "1963 - 1989" },
  { id: 125, name: "Mawdryn Undead", prodCode: "6F", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 126, name: "Terminus", prodCode: "6G", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 127, name: "Enlightenment", prodCode: "6H", doctor: "Fifth", era: "1963 - 1989" },
  { id: 128, name: "The King's Demons", prodCode: "6D", doctor: "Fifth", era: "1963 - 1989" },
  { id: 129, name: "The Five Doctors", prodCode: "6K", doctor: "Fifth", era: "1963 - 1989" },
  { id: 130, name: "Warriors of the Deep", prodCode: "6K", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 131, name: "The Awakening", prodCode: "6K", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 132, name: "Frontios", prodCode: "6K", doctor: "Fifth", era: "1963 - 1989" },
  { id: 133, name: "Resurrection of the Daleks", prodCode: "6K", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 134, name: "Planet of Fire", prodCode: "6K", doctor: "Fifth", era: "1963 - 1989" },
  { id: 135, name: "The Caves of Androzani", prodCode: "6K", doctor: "Fifth" , era: "1963 - 1989"},
  { id: 136, name: "The Twin Dilemma", prodCode: "6S", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 137, name: "Attack of the Cybermen", prodCode: "6T", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 138, name: "Vengeance on Varos", prodCode: "6V", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 139, name: "The Mark of the Rani", prodCode: "6X", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 140, name: "The Two Doctors", prodCode: "6W", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 141, name: "Timelash", prodCode: "6Y", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 142, name: "Revelation of the Daleks", prodCode: "6Z", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 143, name: "The Trial of a Time Lord", prodCode: "7A/7B/7C", doctor: "Sixth" , era: "1963 - 1989"},
  { id: 144, name: "Time and the Rani", prodCode: "7D", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 145, name: "Paradise Towers", prodCode: "7E", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 146, name: "Delta and the Bannermen", prodCode: "7F", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 147, name: "Dragonfire", prodCode: "7G", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 148, name: "Remembrance of the Daleks", prodCode: "7H", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 149, name: "The Happiness Patrol", prodCode: "7L", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 150, name: "Silver Nemesis", prodCode: "7K", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 151, name: "The Greatest Show in the Galaxy", prodCode: "7J", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 152, name: "Battlefield", prodCode: "7N", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 153, name: "Ghost Light", prodCode: "7Q", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 154, name: "The Curse of Fenric", prodCode: "7M", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 155, name: "Survival", prodCode: "7P", doctor: "Seventh" , era: "1963 - 1989"},
  { id: 156, name: "The TV Movie", prodCode: "50/LDX071Y/01X", doctor: "Eighth" , era: "1996"},
  { id: 157, name: "Rose", prodCode: "1.1", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 158, name: "The End of the World", prodCode: "1.2", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 159, name: "The Unquiet Dead", prodCode: "1.3", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 160, name: "Aliens of London", prodCode: "1.4", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 161, name: "World War Three", prodCode: "1.5", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 162, name: "Dalek", prodCode: "1.6", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 163, name: "The Long Game", prodCode: "1.7", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 164, name: "Father's Day", prodCode: "1.8", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 165, name: "The Empty Child", prodCode: "1.9", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 166, name: "The Doctor Dances", prodCode: "1.10", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 167, name: "Boom Town", prodCode: "1.11", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 168, name: "Bad Wolf", prodCode: "1.12", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 169, name: "The Parting of the Ways", prodCode: "1.13", doctor: "Ninth" , era: "2005 - Present Day"},
  { id: 170, name: "The Christmas Invasion", prodCode: "2X", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 171, name: "New Earth", prodCode: "2.1", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 172, name: "Tooth and Claw", prodCode: "2.2", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 173, name: "School Reunion", prodCode: "2.3", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 174, name: "The Girl in the Fireplace", prodCode: "2.4", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 175, name: "Rise of the Cybermen", prodCode: "2.5", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 176, name: "The Age of Steel", prodCode: "2.6", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 177, name: "The Idiot's Lantern", prodCode: "2.7", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 178, name: "The Impossible Planet", prodCode: "2.8", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 179, name: "The Satan Pit", prodCode: "2.9", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 180, name: "Love & Monsters", prodCode: "2.10", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 181, name: "Fear Her", prodCode: "2.11", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 181, name: "Army of Ghosts", prodCode: "2.12", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 182, name: "Doomsday", prodCode: "2.13", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 183, name: "The Runaway Bride", prodCode: "3X", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 184, name: "Smith and Jones", prodCode: "3.1", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 185, name: "The Shakespeare Code", prodCode: "3.2", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 186, name: "Gridlock", prodCode: "3.3", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 187, name: "Daleks in Manhattan", prodCode: "3.4", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 188, name: "Evolution of the Daleks", prodCode: "3.5", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 189, name: "The Lazarus Experiment", prodCode: "3.6", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 190, name: "42", prodCode: "3.7", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 191, name: "Human Nature", prodCode: "3.8", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 192, name: "The Family of Blood", prodCode: "3.9", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 193, name: "Blink", prodCode: "3.10", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 194, name: "Utopia", prodCode: "3.11", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 195, name: "The Sound of Drums", prodCode: "3.12", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 196, name: "Last of the Time Lords", prodCode: "3.13", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 197, name: "Voyage of the Damned", prodCode: "4X", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 198, name: "Partners in Crime", prodCode: "4.1", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 199, name: "The Fires of Pompeii", prodCode: "4.2", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 200, name: "Planet of the Ood", prodCode: "4.3", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 201, name: "The Sontaran Strategem", prodCode: "4.4", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 202, name: "The Poison Sky", prodCode: "4.5", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 203, name: "The Doctor's Daughter", prodCode: "4.6", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 204, name: "The Unicorn and the Wasp", prodCode: "4.7", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 205, name: "Silence in the Library", prodCode: "4.8", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 206, name: "Forest of the Dead", prodCode: "4.9", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 207, name: "Midnight", prodCode: "4.10", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 208, name: "Turn Left", prodCode: "4.11", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 209, name: "The Stolen Earth", prodCode: "4.12", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 210, name: "Journey's End", prodCode: "4.13", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 211, name: "The Next Doctor", prodCode: "4.14", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 212, name: "Planet of the Dead", prodCode: "4.15", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 213, name: "The Waters of Mars", prodCode: "4.16", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 214, name: "The End of Time", prodCode: "4.17 - 4.18", doctor: "Tenth" , era: "2005 - Present Day"},
  { id: 215, name: "The Eleventh Hour", prodCode: "1.1", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 216, name: "The Beast Below", prodCode: "1.2", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 217, name: "Victory of the Daleks", prodCode: "1.3", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 218, name: "The Time of Angels", prodCode: "1.4", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 219, name: "Flesh and Stone", prodCode: "1.5", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 220, name: "The Vampires of Venice", prodCode: "1.6", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 221, name: "Amy's Choice", prodCode: "1.7", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 222, name: "The Hungry Earth", prodCode: "1.8", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 223, name: "Cold Blood", prodCode: "1.9", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 224, name: "Vincent and the Doctor", prodCode: "1.10", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 225, name: "The Lodger", prodCode: "1.11", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 226, name: "The Pandorica Opens", prodCode: "1.12", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 227, name: "The Big Bang", prodCode: "1.13", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 228, name: "A Christmas Carol", prodCode: "2.X", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 229, name: "The Impossible Astronaut", prodCode: "2.1", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 230, name: "Day of the Moon", prodCode: "2.2", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 231, name: "The Curse of the Black Spot", prodCode: "2.9", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 232, name: "The Doctor's Wife", prodCode: "2.3", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 233, name: "The Rebel Flesh", prodCode: "2.5", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 234, name: "The Almost People", prodCode: "2.6", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 235, name: "A Good Man Goes to War", prodCode: "2.7", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 236, name: "Let's Kill Hitler", prodCode: "2.8", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 237, name: "Night Terrors", prodCode: "2.4", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 238, name: "The Girl Who Waited", prodCode: "2.10", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 239, name: "The God Complex", prodCode: "2.11", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 240, name: "Closing Time", prodCode: "2.12", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 241, name: "The Wedding of River Song", prodCode: "2.13", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 242, name: "The Doctor, the Widow and the Wardrobe", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 243, name: "Asylum of the Daleks", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 244, name: "Dinosaurs on a Spaceship", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 245, name: "A Town Called Mercy", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 246, name: "The Power of Three", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 247, name: "The Angels Take Manhattan", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 248, name: "The Snowman", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 249, name: "The Bells of Saint John", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 250, name: "The Rings of Akhaten", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 251, name: "Cold War", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 252, name: "Hide", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 253, name: "Journey to the Centre of the TARDIS", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 254, name: "The Crimson Horror", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 255, name: "Nightmare in Silver", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 256, name: "The Name of the Doctor", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 257, name: "The Day of the Doctor", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 258, name: "The Time of the Doctor", prodCode: "", doctor: "Eleventh" , era: "2005 - Present Day"},
  { id: 259, name: "Deep Breath", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 260, name: "Into the Dalek", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 261, name: "Robot of Sherwood", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 262, name: "Listen", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 263, name: "Time Heist", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 264, name: "The Caretaker", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 265, name: "Kill the Moon", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 266, name: "Mummy on the Orient Express", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 267, name: "Flatline", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 268, name: "In the Forest of the Night", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 269, name: "Dark Water", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 270, name: "Death in Heaven", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 271, name: "Last Christmas", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 272, name: "The Magician's Apprentice", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 273, name: "The Witch's Familiar", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 274, name: "Under the Lake", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 275, name: "Before the Flood", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 276, name: "The Girl Who Died", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 277, name: "The Woman Who Lived", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 278, name: "The Zygon Invasion", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 279, name: "The Zygon Inversion", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 280, name: "Sleep No More", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 281, name: "Face the Raven", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 282, name: "Heaven Sent", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 283, name: "Hell Bent", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 284, name: "The Husbands of River Song", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 285, name: "The Return of Doctor Mysterio", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 286, name: "The Pilot", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 287, name: "Smile", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 288, name: "Thin Ice", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 289, name: "Knock Knock", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 290, name: "Oxygen", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 291, name: "Extremis", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 292, name: "The Pyramid at the End of the World", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 293, name: "The Lie of the Land", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 294, name: "Empress of Mars", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 295, name: "The Eaters of Light", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 296, name: "World Enough and Time", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 297, name: "The Doctor Falls", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 298, name: "Twice Upon a Time", prodCode: "", doctor: "Twelfth" , era: "2005 - Present Day"},
  { id: 299, name: "The Woman Who Fell to Earth", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 300, name: "The Woman Who Fell to Earth", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 301, name: "The Ghost Monument", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 302, name: "Rosa", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 303, name: "Arachnids in the UK", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 304, name: "The Tsuranga Conundrum", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 305, name: "Demons of the Punjab", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 306, name: "Kerblam!", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 307, name: "The Witchfinders", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 308, name: "It Takes You Away", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 309, name: "The Battle of Ranskoor Av Kolos", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 310, name: "Resolution", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 311, name: "Spyfall", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 312, name: "Orphan 55", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 313, name: "Nikola Tesla's Night of Terror", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 314, name: "Fugitive of the Judoon", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 315, name: "Praxeus", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 316, name: "Can You Hear Me?", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 317, name: "The Haunting of Villa Diodati", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 318, name: "Ascenscion of the Cybermen", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 319, name: "The Timeless Children", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 320, name: "Revolution of the Daleks", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 321, name: "The Halloween Apocalypse", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 322, name: "War of the Sontarans", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 323, name: "Once, Upon Time", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 324, name: "Village of the Angels", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 325, name: "Survivors of the Flux", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 326, name: "The Vanquishers", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 327, name: "Eve of the Daleks", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 328, name: "Legend of the Sea Devils", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 329, name: "The Power of the Doctor", prodCode: "", doctor: "Thirteenth" , era: "2005 - Present Day"},
  { id: 330, name: "The Star Beast", prodCode: "", doctor: "Fourteenth" , era: "2005 - Present Day"},
  { id: 331, name: "Wild Blue Yonder", prodCode: "", doctor: "Fourteenth" , era: "2005 - Present Day"},
  { id: 332, name: "The Giggle", prodCode: "", doctor: "Fourteenth" , era: "2005 - Present Day"},
  { id: 333, name: "The Church on Ruby Road", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 334, name: "Space Babies", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 335, name: "The Devil's Chord", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 336, name: "Boom", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 337, name: "73 Yards", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 338, name: "Dot and Bubble", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 339, name: "Rogue", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 340, name: "The Legend of Ruby Sunday", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 341, name: "Empire of Death", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
  { id: 342, name: "Joy to the World", prodCode: "", doctor: "Fifteenth" , era: "2005 - Present Day"},
];
 