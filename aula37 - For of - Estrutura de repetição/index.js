const nomes = ['dan', 'lex', 'tiv']

//for Classico
for(let i = 0; i < nomes.length; i++){
  console.log(nomes[i])
}
console.log('###########')

//for in
for(let i in nomes){
  console.log(nomes[i])
}
console.log('###########')

//for of
for(let i of nomes){
  console.log(i)
}
console.log('###########')

nomes.forEach(function(el){
  console.log(el)
});