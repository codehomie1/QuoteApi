const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

// returns an array of authors with authorName
const getQuotesByAuthor = (arr, authorName) => {
  const res =  [];
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i].person == authorName) {
      res.push(arr[i]);
    }
  }
  return res;
}

module.exports = {
  getRandomElement,
  getQuotesByAuthor
};
