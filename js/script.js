const firstInfoDiv = document.querySelector('.firstInfoDiv')
const firstInfo = document.querySelector('.js-firstInfo')
const firstInfoLi = document.querySelectorAll('.js-firstInfoli')
const catalogoInfo = document.querySelector('.catalogoInfo')
const selectCatalog = document.querySelectorAll(".catalogoSelection")
const moreInfo = document.querySelector(".js-more-info")

let next = 1
const fetchSwapi = async (info) => {
    const apiResponse = await fetch (`https://swapi.dev/api/${info}`)
    if(apiResponse.status == 200){
        const data = await apiResponse.json()
        return data
    }
    
}

const showInfo = async (info) =>{
    firstInfo.innerHTML = 'Carregando'
    firstInfoDiv.style.padding = '4rem 2.5rem 4rem 2.5rem  '
    moreInfo.style.padding = '4rem 2.5rem'
    catalogoInfo.style.borderTop = '0.3rem solid #ffc107'
    
    

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
                    case `people/?page=${next}`:
                        mainLi.innerHTML = resultado.name
                        
                        break
                    case `planets/?page=${next}`:
                        mainLi.innerHTML = resultado.name
                        break
                    case `species/?page=${next}`:
                        mainLi.innerHTML = resultado.name
                        break
                    case `starships/?page=${next}`:
                        mainLi.innerHTML = resultado.name
                        break
                    case `vehicles/?page=${next}`:
                        mainLi.innerHTML = resultado.name
                        break
                   }
               }
               await shoW()
              
               
               
               
               
               
            });
            
            
        }
/*
        const showMore = function(){
            const buttonMore = document.createElement('button')
            firstInfoDiv.appendChild(buttonMore)
            buttonMore.innerText = 'Mostra mais'
            buttonMore.addEventListener('click', ()=>{
                next = next + 1
                showCatalogInfo()

            })
        }
        
        
        if(info !== 'films'){

            showMore()
        }
*/
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
                showInfo(`people/?page=${next}`)//teste
                
                break
            case 2:
                showInfo(`planets/?page=${next}`)//teste
                break
            case 3:
                showInfo(`species/?page=${next}`)//teste
                break
            case 4:
                showInfo(`starships/?page=${next}`)//teste
                break
            case 5:
                showInfo(`vehicles/?page=${next}`)//teste
                break
        }
      
        
    })
    
})

