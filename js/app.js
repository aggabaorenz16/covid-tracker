const mediaquery = window.matchMedia('(max-width: 1081px)')
const mouth = () => {
    const modal = document.querySelector("#demo");
    const background = document.querySelector("#body");
    const change = document.querySelector("#touchCover");
    modal.style.display = "flex"
    modal.style.fontSize = "20px"
    modal.style.textAlign = "center"
    modal.style.color = "white"
    modal.style.backgroundColor = "#FF392E"
    modal.style.width = "600px"
    modal.style.padding = "1rem"
    modal.style.marginLeft = "30.5%"
    modal.style.marginTop = "2%"
    modal.style.borderRadius = "8px"
    modal.style.boxShadow = "2px 2px 5px 5px #42404038"
    body.style.backgroundColor = "rgba(0, 0, 2, 0.582)"
    change  .innerText = "Close"
    change.onclick = () => {
        if (event.target == modal) {
            modal.style.display = "block";
          } else {
              change.innerText = "Touch"
              modal.style.display = "none"
              body.style.backgroundColor = "white"
               }
               location.reload()
    }
    if(mediaquery.matches) {
        modal.style.display = 'none'
        body.style.backgroundColor = "white";
        const modallang = `Cover your mouth if you cough because if you don't cover it it can infect other people who are older than you.`
        alert(`${modallang}`)
    }
}

const res = () => {
    const avoid = document.querySelector("#demo2");
    const background = document.querySelector("#body");
    const resc = document.querySelector("#touchAvoid");
    avoid.style.display = "flex"
    avoid.style.fontSize = "20px"
    avoid.style.textAlign = "center"
    avoid.style.color = "white"
    avoid.style.backgroundColor = "#FF392E"
    avoid.style.width = "600px"
    avoid.style.padding = "1rem"
    avoid.style.marginLeft = "30.5%"
    avoid.style.marginTop = "2%"
    avoid.style.borderRadius = "8px"
    body.style.backgroundColor = "rgba(0, 0, 2, 0.582)"
    resc.innerText = "Close"
    resc.onclick = () => {
        if (event.target == avoid) {
            avoid.style.display = "block";
          } else {
              resc.innerText = "Touch"
              avoid.style.display = "none"
              body.style.backgroundColor = "white"
               }
               location.reload()
    }
    if(mediaquery.matches) {
        avoid.style.display = 'none'
        body.style.backgroundColor = "white";
        const avoidlang = `Avoid many people or associate with people who are sick because you are more likely to be infected and infect you so it is better not to associate with people with symptoms`
        alert(`${avoidlang}`)
    }
}
const alcohol = () => {
    const alco = document.querySelector("#demo3");
    const background = document.querySelector("#body");
    const resc = document.querySelector("#touchAlco");
    alco.style.display = "flex"
    alco.style.fontSize = "20px"
    alco.style.textAlign = "center"
    alco.style.color = "white"
    alco.style.backgroundColor = "#FF392E"
    alco.style.width = "600px"
    alco.style.padding = "1rem"
    alco.style.marginLeft = "30.5%"
    alco.style.marginTop = "2%"
    alco.style.borderRadius = "8px"
    body.style.backgroundColor = "rgba(0, 0, 2, 0.582)"
    resc.innerText = "Close"
    resc.onclick = () => {
        if (event.target == alco) {
            alco.style.display = "block";
          } else {
              resc.innerText = "Touch"
              alco.style.display = "none"
              body.style.backgroundColor = "white"
               }
               location.reload()
    }
    if(mediaquery.matches) {
        alco.style.display = 'none'
        body.style.backgroundColor = "white";
        const alcolang = `Use Alcohol for Disinfect your hands, Because if you dont use an alcohol you are very vulnerable to COVID-19.`
        alert(`${alcolang}`)
    }
}
const touched = () => {
    const touch = document.querySelector("#demo1");
    const background = document.querySelector("#body");
    const change = document.querySelector("#touchTouching");
    touch.style.display = "flex"
    touch.style.fontSize = "20px"
    touch.style.textAlign = "center"
    touch.style.color = "white"
    touch.style.backgroundColor = "#FF392E"
    touch.style.width = "600px"
    touch.style.padding = "1rem"
    touch.style.marginLeft = "30.5%"
    touch.style.marginTop = "2%"
    touch.style.borderRadius = "8px"
    touch.style.boxShadow = "2px 2px 5px 5px #42404038"
    res.disabled = true;
    body.style.backgroundColor = "rgba(0, 0, 2, 0.582)"
    change.innerText = "Close"
    change.onclick = () => {
        if (event.target == touch) {
            touch.style.display = "block";
          } else {
              change.innerText = "Touch"
              touch.style.display = "none"
              body.style.backgroundColor = "white"
               }
               location.reload()
    } 
    if(mediaquery.matches) {
        touch.style.display = 'none'
        body.style.backgroundColor = "white";
        const touchlang = `Avoid touching your mouth if you touch dirty objects such as walls, etc. because bacteria can multiply in your laughter and cause illness.`
        alert(`${touchlang}`)
    }
}
const wash = () => {
    const washed = document.querySelector("#demo4");
    const background = document.querySelector("#body");
    const washs = document.querySelector("#touchedWash");
    washed.style.display = "flex"
    washed.style.fontSize = "20px"
    washed.style.textAlign = "center"
    washed.style.color = "white"
    washed.style.backgroundColor = "#FF392E"
    washed.style.width = "600px"
    washed.style.padding = "1rem"
    washed.style.marginLeft = "30.5%"
    washed.style.marginTop = "2%"
    washed.style.borderRadius = "8px"
    body.style.backgroundColor = "rgba(0, 0, 2, 0.582)"
    washs.innerText = "Close"
    washs.onclick = () => {
        if (event.target == washed) {
            washed.style.display = "block";
          } else {
              washs.innerText = "Touch"
              washed.style.display = "none"
              body.style.backgroundColor = "white"
               }
               location.reload()    
    }
     if(mediaquery.matches) {
        washed.style.display = 'none'
        const washlang = `Wash our hands so that we are away from covid-19 because it is difficult to get sick especially nowadays so we always wash our hands no matter what body parts we have!`
       body.style.backgroundColor = "white";
       alert(`${washlang}`)
    }
const stay = () => {
    const stayAt = document.querySelector("#demo5");
    const background = document.querySelector("#body");
    const stayHome = document.querySelector("#touchedStay");
    stayAt.style.display = "flex"
    stayAt.style.fontSize = "20px"
    stayAt.style.textAlign = "center"
    stayAt.style.color = "white"
    stayAt.style.backgroundColor = "#FF392E"
    stayAt.style.width = "600px"
    stayAt.style.padding = "1rem"
    stayAt.style.marginLeft = "30.5%"
    stayAt.style.marginTop = "2%"
    stayAt.style.borderRadius = "8px"
    body.style.backgroundColor = "rgba(0, 0, 2, 0.582)"
    stayHome.innerText = "Close"
    stayHome.onclick = () => {
        if (event.target == stayAt) {
            stayAt.style.display = "block";
          } else {
              stayHome.innerText = "Touch"
              stayAt.style.display = "none"
              body.style.backgroundColor = "white"
               }
               location.reload()
    }
   if(mediaquery.matches) {
       stayAt.style.display = 'none'
       const staylang = `Just stay at her house and enjoy being with your loved ones. Don't go out so as not to be infected with the so -called disease because when you get sick, there is a good chance that your loved ones will be affected.`
       body.style.backgroundColor = "white";
       alert(`${staylang}`)
    }}
const fetch = () => {
    let result = axios({
         /* URL */
            url: 'https://coronavirus-19-api.herokuapp.com/countries/world',
             /* Method GET */
            method: 'GET',
             /* Success */
        }).then((data) => {
            return data
             /* Rejected */
        }).catch((Reject) => {
            return Reject
        })
         /* Result */
        return result
    }
    fetch().then((data) => {
        document.querySelector("#totalCases").innerHTML = data.data.cases.toLocaleString();
        document.querySelector("#todayCases").innerHTML = data.data.todayCases.toLocaleString();
        document.querySelector("#todayDeath").innerHTML = data.data.todayDeaths.toLocaleString();
        document.querySelector("#todayRecovered").innerHTML = data.data.recovered.toLocaleString();
        document.querySelector("#todayActive").innerText = data.data.active.toLocaleString();
    })
