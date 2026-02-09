// SmartSelective Vocabulary Database
// WEEK 1: Levels 17-20 (80 words)
// Update this file every week with new vocabulary

const CURRENT_WEEK = 1;
const vocabularyData = [
    { id: 1, word: "account for sth", type: "v [T]", level: "25", definition: "to give a reason for something" },
    { id: 2, word: "all the more", type: "advp", level: "18", definition: "even more" },
    { id: 3, word: "anathema", type: "n [C, usually singular]", level: "19", definition: "something which is strongly disliked or disapproved of" },
    { id: 4, word: "at sth's last gasp", type: "pp", level: "18", definition: "informal going to soon disappear completely" },
    { id: 5, word: "be a touch aggrieved", type: "np", level: "19", definition: "slightly upset or angry at an unfair situation" },
    { id: 6, word: "be completely thrown", type: "vp", level: "RS", definition: "to feel completely shocked or confused" },
    { id: 7, word: "be up to scratch", type: "vp", level: "RS", definition: "informal to be of good enough quality" },
    { id: 8, word: "bilingual", type: "adj", level: "17", definition: "using or able to speak two languages" },
    { id: 9, word: "brutally", type: "adv", level: "19", definition: "in an extreme way, showing no consideration or pity for others" },
    { id: 10, word: "buckle", type: "n [C]", level: "18", definition: "a metal object used to fasten the ends of a belt or strap" },
    { id: 11, word: "byways", type: "n [C]", level: "19", definition: "facts about a subject that are known only by a few people" },
    { id: 12, word: "come across sth/sb", type: "v [T]", level: "RS", definition: "to discover something or someone by chance" },
    { id: 13, word: "consumerism", type: "n [U]", level: "25", definition: "buying and selling things, especially when this is an important part of a society's activities" },
    { id: 14, word: "converse", type: "v [I]", level: "18", definition: "formal to talk with someone" },
    { id: 15, word: "crucial", type: "adj", level: "RS", definition: "extremely important or necessary" },
    { id: 16, word: "die out", type: "v [I]", level: "19", definition: "to become more and more rare and then disappear completely" },
    { id: 17, word: "do business", type: "vp", level: "20", definition: "to buy or sell goods or services for someone" },
    { id: 18, word: "equate sth with sth", type: "v [T]", level: "RS", definition: "to consider one thing to be the same as or equal to another thing" },
    { id: 19, word: "exaggerate", type: "v [I or T]", level: "RS", definition: "to make something seem larger, better, worse, etc. than it really is" },
    { id: 20, word: "frankly absurd", type: "adv+adj", level: "RS", definition: "ridiculous or unreasonable" },
    { id: 21, word: "fringe", type: "n [C]", level: "19", definition: "the outer part of an area, group or activity" },
    { id: 22, word: "get attuned to sth", type: "vp", level: "20", definition: "to start to recognise or be able to understand something" },
    { id: 23, word: "get behind the scenes", type: "vp", level: "RS", definition: "to get beyond appearances and see things which most people don't usually see" },
    { id: 24, word: "get down to sth", type: "v [T]", level: "18", definition: "to start doing something seriously and with a lot of attention and effort" },
    { id: 25, word: "get stuck into sth", type: "vp", level: "RS", definition: "informal to start doing something with energy and determination" },
    { id: 26, word: "get to thinking about sth", type: "vp", level: "RS", definition: "to start thinking about something" },
    { id: 27, word: "go about doing sth", type: "v", level: "18", definition: "to start to do something in a purposeful way" },
    { id: 28, word: "handicap", type: "n [C or U]", level: "RS", definition: "something that makes it more difficult for you to do something" },
    { id: 29, word: "have a reliance on sth", type: "vp", level: "25", definition: "to be in a situation when someone or something depends on someone or something else" },
    { id: 30, word: "have an excellent command of sth", type: "vp", level: "17", definition: "to have an excellent knowledge of a subject, especially a language" },
    { id: 31, word: "have sth in common", type: "vp", level: "18", definition: "to share features, interests or experiences with someone or something else" },
    { id: 32, word: "highly articulate", type: "adv+adj", level: "17", definition: "able to express ideas and feelings in words very clearly" },
    { id: 33, word: "hold your own", type: "vp", level: "RS", definition: "to be as successful as other people in a situation" },
    { id: 34, word: "immerse yourself in sth", type: "v [T]", level: "23", definition: "to become completely involved in something" },
    { id: 35, word: "indignant", type: "adj", level: "18", definition: "angry because something is unfair" },
    { id: 36, word: "innate capacity", type: "adj+n", level: "18", definition: "an ability that you were born with and not one that you have learnt" },
    { id: 37, word: "in other respects", type: "pp", level: "18", definition: "in other ways" },
    { id: 38, word: "intuitive", type: "adj", level: "19", definition: "based on feelings rather than facts or proof" },
    { id: 39, word: "irreparable", type: "adj", level: "20", definition: "irreparable damage, harm, injury, etc. is so bad that it can never be repaired" },
    { id: 40, word: "little chance of sth", type: "np", level: "18", definition: "not much possibility of something" },
    { id: 41, word: "loanword", type: "n [C]", level: "17", definition: "a word taken from one language and used in another" },
    { id: 42, word: "major factor", type: "adj+n [C]", level: "RS", definition: "one of the main things that has an effect on a situation" },
    { id: 43, word: "make a fool of yourself", type: "vp", level: "RS", definition: "to behave in a way which is embarrassing and makes you look silly" },
    { id: 44, word: "make ends meet", type: "vp", level: "RS", definition: "to have just enough money for the things that you need to live on" },
    { id: 45, word: "make yourself understood", type: "vp", level: "18", definition: "to say something to someone in a way that they understand" },
    { id: 46, word: "mother tongue", type: "n [C]", level: "17", definition: "the first language that you learn when you are a child" },
    { id: 47, word: "native speaker", type: "n [C]", level: "18", definition: "someone who speaks a language as their first language" },
    { id: 48, word: "naturally gifted", type: "adv+adj", level: "RS", definition: "able to do something very well because you were born with that ability" },
    { id: 49, word: "not get very far", type: "vp", level: "RS", definition: "to not make progress" },
    { id: 50, word: "nuisance", type: "n [C or U]", level: "18", definition: "a person, thing, or situation that annoys you or causes problems for you" },
    { id: 51, word: "pick up sth", type: "v [T]", level: "17", definition: "to start learning something or doing something regularly without intending to" },
    { id: 52, word: "press sb for sth", type: "vp", level: "18", definition: "to try to persuade someone to do something" },
    { id: 53, word: "quite by chance", type: "advp", level: "RS", definition: "completely by accident" },
    { id: 54, word: "ranch", type: "n [C]", level: "18", definition: "a large farm where animals are kept" },
    { id: 55, word: "remarkable", type: "adj", level: "RS", definition: "very unusual or noticeable in a way that you admire" },
    { id: 56, word: "revitalization", type: "n [U]", level: "18", definition: "when something is given new life or energy or becomes successful again" },
    { id: 57, word: "rudimentary", type: "adj", level: "18", definition: "very basic" },
    { id: 58, word: "rusty", type: "adj", level: "17", definition: "if a skill is rusty, you are no longer so good at it because you have forgotten it" },
    { id: 59, word: "say", type: "v [I]", level: "17", definition: "used in conversation to introduce an example" },
    { id: 60, word: "setback", type: "n [C]", level: "18", definition: "a problem that makes something happen later or more slowly than it should" },
    { id: 61, word: "settle into sth", type: "v [T]", level: "RS", definition: "to start to feel relaxed and comfortable in a new situation" },
    { id: 62, word: "stand sb in good stead", type: "vp", level: "RS", definition: "to be useful to someone" },
    { id: 63, word: "study under sb", type: "v [I or T]", level: "18", definition: "formal to be taught by someone" },
    { id: 64, word: "subsidise sb/sth", type: "v [T]", level: "25", definition: "if a government or other organization subsidises something, it pays part of the cost of it" },
    { id: 65, word: "sweep sth aside", type: "v [T]", level: "19", definition: "to replace or destroy something" },
    { id: 66, word: "switch between languages", type: "vp", level: "17", definition: "to repeatedly change the language that you are speaking in" },
    { id: 67, word: "tactics", type: "n [C, usually plural]", level: "RS", definition: "a planned way of doing something in order to achieve what you want" },
    { id: 68, word: "take sb by surprise", type: "vp [T]", level: "23", definition: "to surprise someone" },
    { id: 69, word: "thereabouts", type: "adv", level: "RS", definition: "near the number, amount, or time that has just been given" },
    { id: 70, word: "uninhibited", type: "adj", level: "RS", definition: "feeling free to behave in any way that you want without worrying about other people's opinions" },
    { id: 71, word: "weird", type: "adj", level: "19", definition: "very strange" },
    { id: 72, word: "word-for-word", type: "adv", level: "19", definition: "taking each word separately and in the same order" },
    { id: 73, word: "work tirelessly", type: "v+adv", level: "18", definition: "to work very hard and with great energy over a long period" },
    { id: 74, word: "absolutely perfect", type: "adv+adj", level: "RS", definition: "of the best quality and without any faults at all" },
    { id: 75, word: "act on sb's advice", type: "v [T]", level: "11", definition: "to do something because someone has said that you should" },
    { id: 76, word: "add insult to injury", type: "vp", level: "12", definition: "to make someone's bad situation worse by doing something else to upset them" },
    { id: 77, word: "affliction", type: "n [C]", level: "RS", definition: "formal something that makes you suffer" },
    { id: 78, word: "anticipate", type: "v [T]", level: "9", definition: "to expect something and to prepare for it before it happens" },
    { id: 79, word: "archaeologist", type: "n [C]", level: "9", definition: "someone who studies very old cultures by examining their buildings, tools, and other objects" },
    { id: 80, word: "assertion", type: "n [C + that]", level: "12", definition: "something that you say is certainly true" }
];

// Utility functions
const VOCAB_STORAGE_KEY = 'smartselective_vocab_progress';

function getAllWords() {
    return vocabularyData;
}

function getRandomWords(count) {
    const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, vocabularyData.length));
}

function getWordsByLevel(level) {
    return vocabularyData.filter(w => w.level === level);
}

function getCurrentWeek() {
    return CURRENT_WEEK;
}

function getTotalWords() {
    return vocabularyData.length;
}
