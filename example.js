const svcBadWord = require('./BadWords'),
      testStrs = ['Hello there   ', 'you motherfuckin', 'cabron', 'mc douche', 'Fuck,AssHole, cunt,rabbits,  legendary.mothafucker, carrots, hi.there', 'Cabrón', 'no A$$hole$ allowed']

for (var i = testStrs.length - 1; i >= 0; i--) {
  if ( svcBadWord.isProfane(testStrs[i]) ) console.log (`"${testStrs[i]}" is profane!!!\n\n`)
  else console.log (`"${testStrs[i]}" is clean!!!\n\n`)
}
