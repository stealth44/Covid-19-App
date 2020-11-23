
const countryName= document.querySelector('.country-name')
	const country= document.querySelector('.country')
	const form= document.querySelector('.form')
	const result=document.querySelector('.result-container')
	const errors=document.querySelector('.errors')
	const loading= document.querySelector('.loading')
	const cases= document.querySelector(".cases")
	const recovered= document.querySelector('.recovered')
	const deaths= document.querySelector('.deaths')
	const tests= document.querySelector('.totalTests')
	const todayCases=document.querySelector('.todayCases')
	const todayDeaths= document.querySelector('.todayDeaths')

result.style.display="none"
loading.style.display="none"
errors.textContent=""



form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const weatherdata= countryName.value
    loading.style.display='block'
    errors.textContent=""
    fetch('https://coronavirus-19-api.herokuapp.com/countries/'+ weatherdata).then((response) => {
        response.json().then((data) => {
            if(weatherdata == ""){
                errors.textContent = 'Country Name is Required!'
                result.style.display='none'
                loading.style.display='none'
            }else{
                        loading.style.display="none"
                        result.style.display="block"
                        country.textContent=data.country
                        todayCases.textContent=data.todayCases
                        todayDeaths.textContent=data.todayDeaths
                        cases.textContent=data.cases
                        recovered.textContent=data.recovered
                        deaths.textContent=data.deaths
                        tests.textContent=data.totalTests
                    }
                    })         
            .catch ((error) =>{
                errors.textContent = 'No Available Report!'
                loading.style.display="none"
                results.style.display="none"
            })
        }) 
    }) 

    function darkscreen(){
        document.querySelector('body').style.backgroundColor='black'
        document.querySelector('.header').style.color='white'
        document.querySelector('.container').style.color='white'
        document.querySelector('.darkwhite').textContent='white'
    }
       function whitescreen(){
        document.querySelector('body').style.backgroundColor='white'
        document.querySelector('.header').style.color='black'
        document.querySelector('.container').style.color='black'
        document.querySelector('.darkwhite').textContent='Dark'
       
       
       }
 
