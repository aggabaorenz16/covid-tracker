const fetch = () => {
    let result = axios({
         /* URL */
            url: 'https://coronavirus-19-api.herokuapp.com/countries/Philippines',
             /* Method GET */
            method: 'GET',
             /* Success */
        }).then((Response) => {
            return Response
             /* Rejected */
        }).catch((Reject) => {
            return Reject
        })
         /* Result */
        return result
    }
    fetch().then((Response) => {
        document.querySelector("#totalCases").innerHTML = Response.data.cases.toLocaleString();
        document.querySelector("#todayCases").innerHTML = Response.data.critical.toLocaleString();
        document.querySelector("#todayDeath").innerHTML = Response.data.deaths.toLocaleString();
        document.querySelector("#todayRecovered").innerHTML = Response.data.recovered.toLocaleString();
        document.querySelector("#todayActive").innerText = Response.data.active.toLocaleString();
    })