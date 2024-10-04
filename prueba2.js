const query = ['Google', 'search'];
const pages = [
  { url: 'https://www.google.com', content: 'Google search is a web search engine.' },
  { url: 'https://www.wikipedia.org', content: 'Wikipedia is an online encyclopedia.' },
  { url: 'https://searchengine.com', content: 'Search engines like Google are powerful tools.' }
];


const result = searchPages(query, pages);
console.log(result);



function searchPages(query, pages){


    let coincidencias=[];

for(let i=0 ;  i < query.length; i++){
    
     let q = query[i].toLowerCase();

     for (let j = 0; j < pages.length; j++) {

        let boolean = pages[j].content.toLowerCase().includes(q);

        if(boolean){
            
            let exists = coincidencias.some(page => areEqual(page, pages[j]));

            if (!exists) {
                coincidencias.push(pages[j]);
            }

            
        }
        
    }

}

return coincidencias;

}


function areEqual(page1, page2) {
    return page1.url === page2.url && page1.content === page2.content;
}