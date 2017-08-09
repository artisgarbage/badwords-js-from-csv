# Basic Profanity Checker Node Module

This is a simple module/class that checks a string for profanity based on bad words that are defined in CSV files.  Contains a sample list of 413 bad words in addition to a list of 7 sample bad words in Spanish.  Add or customize the bad word lists as needed.





## Installation

**with NPM**
```sh
user@machine> npm i badwords-js-from-csv
```

**with Yarn**

```sh
user@machine> yarn install badwords-js-from-csv
```

**- or -**

simply include `BadWords.js` in your project and src/package/import/require it as necessary, making the necessary environmental configurations as outlined below in [ENV vars](#env-vars)




## Usage

`BadWords.js` exports a factory class as a module, `BadWords`

**Example**
```javascript
const svcBadWords = require('badwords-js-from-csv')
svcBadWords.isProfane('is this statement profane?') // returns false
svcBadWords.isProfane('no a$$hole$ allowed') // returns true

```





## ENV vars


**CORPORA_DIR**

**(Optional)**

**Default :** `./corpora`

contains the CSV files that define bad words



**SPLIT_CHARS**

**(Optional)**

**Default :** `['=', ',', ':', ' ', '.']`

a white-space delimited string of characters to use in `.split()` regular expression on the input text



**SPLIT_CHARS_INCLUDE_SPACE**

**(Optional)**

**Default :** `true`

include space character as a delimiter if custom SPLIT_CHARS env var is defined





## BadWordsSvc Module



### Public Props

**`corporaDir`** Directory containing bad word definition CSV files

**`masterCorpusArr`** Master corpus array of bad word strings

**`splitCharsArr`** Characters being used in split statements to define what is a word.



### Public Methods

**`splitMulti(inputStr, delimiters)`**

Returns an array of "words" split by the custom array of delimiters provided.  Not necessary to be public, but a useful utility method, so figured it would be worth exposing


**`isProfane(inputStr)`**

Returns a boolean, `true` if the input string is profane, `false` if not




## About the Badword CSV files
Note that currently the badwords are being parsed based on `',\n'` structure in the CSV.  Maintain the whitespace and carriage return structure defined in the two example CSV files to create your own bad words lists.
