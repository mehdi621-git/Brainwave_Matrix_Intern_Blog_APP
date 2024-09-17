

 const Terms = [
    'Home' , 'Blogs' ,'About' ,'Contact'
]

 let newTerm=[]

for (let index = 0; index < Terms.length; index+=2) {

    const alphs = Terms.slice(index,index+2);
    newTerm.push(alphs)
    
}
console.log(newTerm)
export default newTerm
