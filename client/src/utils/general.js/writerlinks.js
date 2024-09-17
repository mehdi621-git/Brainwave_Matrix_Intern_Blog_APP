


const Links =({link})=>{
    let newLinks=[];
         for (let index = 0; index < link.length; index+=3) {
            
            const linksdiv =  link.slice(index,index+3)
            newLinks.push(linksdiv)
         }
         return newLinks;
}
export default Links;