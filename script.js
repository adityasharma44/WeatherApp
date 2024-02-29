const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7430141d4dmsh63332d493cca69dp112a8fjsnf32f627aecb8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getweather=(city)=>{
    cityname.innerHTML=city.toUpperCase();
    const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options);
    response.then((value)=>{
    return value.json()
    }).then((value)=>{
        console.log(value)
        cloud_pct.innerHTML = value.cloud_pct
        feels_like.innerHTML = value.feels_like
        humidity.innerHTML = value.humidity
        humidity2.innerHTML = value.humidity
        max_temp.innerHTML = value.max_temp
        min_temp.innerHTML = value.min_temp
        sunrise.innerHTML = value.sunrise
        sunset.innerHTML = value.sunset
        temp.innerHTML = value.temp
        temp2.innerHTML = value.temp
        // wind_degrees.innerHTML = value.wind_degrees
        wind_speed.innerHTML = value.wind_speed
        wind2.innerHTML=value.wind_speed
    }
    ).catch ((error)=>{
    console.error(error);}
    )
}

submit.addEventListener("click",function(e){
    e.preventDefault()
    getweather(input.value);
})

getweather("Delhi")

// for Delhi

let del1=document.getElementById("del1");
console.log(del1)

const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options);
    response.then((value)=>{
    return value.json()
    }).then((delhi)=>{
        console.log(delhi)
        ihtml=''
        for(i in delhi){
            ihtml = ihtml + `<td><span>${delhi[i]}</span></td>`       
        }

        del1.innerHTML= "<th>Delhi</th>" + ihtml 
    }
    ).catch ((error)=>{
    console.error(error);}
    )

// for London

let lon=document.getElementById("lon");
console.log(lon)

const value = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options);
    value.then((value)=>{
    return value.json()
    }).then((london)=>{
        console.log(london)
        ihtml=''
        for(i in london){
            ihtml = ihtml + `<td><span>${london[i]}</span></td>`       
        }

        lon.innerHTML= "<th>London</th>" + ihtml 
     }
    ).catch ((error)=>{
    console.error(error);}
    )

// for Dubai

let dubai=document.getElementById("dubai");
console.log(dubai)

const value1 = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options);
    value1.then((value)=>{
    return value.json()
    }).then((Dubai)=>{
        console.log(Dubai)
        ihtml=''
        for(i in Dubai){
            ihtml = ihtml + `<td><span>${Dubai[i]}</span></td>`       
        }

        dubai.innerHTML= "<th>Dubai</th>" + ihtml 
     }
    ).catch ((error)=>{
    console.error(error);}
    )
