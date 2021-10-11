// Question 1A
const mcuShows = ["loki", "What If...?" ]

// Question 1B
const starWarsShows = ["The Mandalorian", "The Bad Batch"]

// Question 1C
const disneyPlusShows = ["Monsters At Work", ...mcuShows, ...starWarsShows];

// Question 1D
console.log(disneyPlusShows)

// Question 2A
const netflixMovies = {action:"Extraction", crime:"The Irishman"}

// Question 2B
const amazonPrimeMovies = {action:"The Tomorrow war", drama:"One Night In Miami"}

// Question 2C
const streamingMovies = {musical:"Hamilton", ...amazonPrimeMovies, ...netflixMovies}

// Question 2D
console.log(streamingMovies)

// Question 3A
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"]

// Question 3B
const [mickey, spidey] = disneyJunior

// Question 3C
console.log(mickey, spidey)

// Question 4A
const avengers = {warMachine:"James Rhodes", theHulk:"Bruce Banner"}

// Question 4B
const {warMachine, theHulk} = avengers

// Question 4C
console.log(warMachine, theHulk)

// Question 4D
const moreAvengers = {blackWidow:"Natasha Romanoff", hawkeye:"Clint Barton", ironMan:"Tony Stark"}

// Question 4E
const {blackWidow: Nat, ...others} = moreAvengers

// Question 4F
console.log(Nat, others)

// BONUS 
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

// Question 5A
const all = [...bonus.first, ...bonus.second, ...bonus.third]

// Question 5B
const [one, two, three] = bonus.first
const [four, five, six] = bonus.second
const [seven, eight, nine] = bonus.third

// const [one, two, three, four, five, six, seven, eight, nine] = all

console.log(five)

