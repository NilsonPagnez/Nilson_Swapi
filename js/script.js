
const firstInfo = document.querySelector('.js-firstInfo')
const firstInfoLi = document.querySelectorAll('.js-firstInfoli')
const selectCatalog = document.querySelectorAll(".catalogoSelection")
const moreInfo = document.querySelector(".js-more-info")
const fetchSwapi = async (info) => {
    const apiResponse = await fetch (`https://swapi.dev/api/${info}`)
    if(apiResponse.status == 200){
        const data = await apiResponse.json()
        return data
    }
    
}

const showInfo = async (info) =>{
   
    const data = await fetchSwapi(info)
    if(data){
        
        result = data.results
        const showCatalogInfo =function() {
            firstInfo.innerHTML =''
            result.forEach( async(resultado, index)=> {
                
               const mainLi = document.createElement('li')
               mainLi.classList.add('js-firstInfoli')
               firstInfo.appendChild(mainLi)
               
                function shoW(){

                   switch(info){
                    case 'films':
                        mainLi.innerHTML = resultado.title
                        break
                    case 'people':
                        mainLi.innerHTML = resultado.name
                        break
                    case 'planets':
                        mainLi.innerHTML = resultado.name
                        break
                    case 'species':
                        mainLi.innerHTML = resultado.name
                        break
                    case 'starships':
                        mainLi.innerHTML = resultado.name
                        break
                    case 'vehicles':
                        mainLi.innerHTML = resultado.name
                        break
                   }
               }
               await shoW()
              
               
               
               
               
               
            });
            
            
            
            
            
        }
       
        showCatalogInfo()
    }else{
        
    }
    const allLi = firstInfo.childNodes
            allLi.forEach((element,index) => {
            
                
                element.addEventListener('click', () =>{

                    resultado = result[index]
                    
                    moreInfo.innerHTML = " "
                    for(const entry of Object.entries(resultado)){

                        
                        const moreInfoLi = document.createElement('li')
                        moreInfo.appendChild(moreInfoLi)
                        moreInfoLi.innerHTML = `${entry[0]}: ${entry[1]}`
                        
                        
                    }
                    
                })

            });


}
selectCatalog.forEach((catalogo, index) => {
    catalogo.addEventListener('click', ()=>{
        firstInfo.innerHTML = ' '
        moreInfo.innerHTML = ' '
        switch(index){
            case 0:
                showInfo('films')
                break
            case 1:
                showInfo('people')//teste
                break
            case 2:
                showInfo('planets')//teste
                break
            case 3:
                showInfo('species')//teste
                break
            case 4:
                showInfo('starships')//teste
                break
            case 5:
                showInfo('vehicles')//teste
                break
        }
      
        
    })
    
})

