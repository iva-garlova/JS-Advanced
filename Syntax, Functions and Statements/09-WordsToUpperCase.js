function wordsToUpperCase(text){
 return text.split(/[^a-zA-Z0-9]+/)
.join(' ')
.trim()
.split(' ')
.map(x => x.toUpperCase())
.join(', ')
}
console.log(wordsToUpperCase('Hi, how are you?'));
