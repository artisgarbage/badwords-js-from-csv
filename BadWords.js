/*========================================
=            Required Modules            =
========================================*/
const fs = require('fs'),
      _  = require('lodash')



/*=======================================
=            Private Methods            =
=======================================*/
const init = function init() {

  // Set directory containing badword files
  BadWords.corporaDir = (process.env.CORPORA_DIR) ? process.env.CORPORA_DIR : `${__dirname}/corpora`

  // Setup split characters for input strings
  if (process.env.SPLIT_CHARS) {
    BadWords.splitCharsArr = process.env.SPLIT_CHARS.split(' ')
    if (process.env.SPLIT_CHARS_INCLUDE_SPACE) BadWords.splitCharsArr.push(' ')
  }

  // Read  corpora docs and build a master corpus of bad words
  fs.readdirSync(BadWords.corporaDir).forEach(file => {
    const fileTxt = fs.readFileSync(`${BadWords.corporaDir}/${file}`).toString(),
          badWordsArr = fileTxt.split(',\n')
    BadWords.masterCorpusArr = _.union(BadWords.masterCorpusArr, badWordsArr)
  })
}



/*==============================
=            Module            =
==============================*/
const BadWords = {
  corporaDir: '',
  masterCorpusArr: [],
  splitCharsArr: ['=', ',', ':', ' ', '.'],
  splitMulti(str, delimiters) {
    const tmpChar = delimiters[0]
    for (let i = delimiters.length - 1; i >= 0; i--) {
      str = str.split(delimiters[i]).join(tmpChar)
    }
    str = str.split(tmpChar)
    return str
  },
  isProfane(inputStr) {
    // Split into wordds based on custom delimiters
    const words = this.splitMulti(inputStr, this.splitCharsArr)

    // Loop through the words in the inputStr checking returning true if any are profane exiting the loop
    for (let i = words.length - 1; i >= 0; i--) {
      if (words[i] !== '' && words[i] !== ' ' && this.masterCorpusArr.includes(words[i].toLowerCase())) return true
    }
    return false
  }
}


// Self initialize upon import/require
init()


module.exports = BadWords
