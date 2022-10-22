// Array to hold the aiport objects from fetch
let aiport = {}

// Function to get the airports data

let url = "https://api.aviationapi.com/v1/airports?apt=KACY"
async function getAirports(url) {

    const request = await fetch(url)

    if (request.ok) {
        const data = await request.json()
        console.log(data)
    }
}

getAirports(url)

//Function to render the table
function renderTable(airport) {
    const table = document.querySelector("table")
    const row = document.createElement("tr")
    const td = `${airport.name}`
}