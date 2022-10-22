// Array to hold the aiport objects from fetch
let airport = {
    "site_number": "16517.5*A",
    "type": "AIRPORT",
    "facility_name": "ASHEVILLE RGNL",
    "faa_ident": "AVL",
    "icao_ident": "KAVL",
    "district_office": "MEM",
    "state": "NC",
    "state_full": "NORTH CAROLINA",
    "county": "BUNCOMBE",
    "city": "ASHEVILLE",
    "ownership": "PU",
    "use": "PU",
    "manager": "LEW S. BLEIWEIS, A.A.E.",
    "manager_phone": "828-684-2226",
    "latitude": "35-26-04.0000N",
    "latitude_sec": "127564.0000N",
    "longitude": "082-32-33.8240W",
    "longitude_sec": "297153.8240W",
    "elevation": "2162",
    "magnetic_variation": "07W",
    "tpa": "3162",
    "vfr_sectional": "ATLANTA",
    "boundary_artcc": "ZTL",
    "boundary_artcc_name": "ATLANTA",
    "responsible_artcc": "ZTL",
    "responsible_artcc_name": "ATLANTA",
    "fss_phone_number": "1-828-WX-BRIEF",
    "fss_phone_numer_tollfree": "1-800-WX-BRIEF",
    "notam_facility_ident": "AVL",
    "status": "O",
    "certification_typedate": "I B S 05/1973",
    "customs_airport_of_entry": "N",
    "military_joint_use": "N",
    "military_landing": "Y",
    "lighting_schedule": "SEE RMK",
    "beacon_schedule": "SS-SR",
    "control_tower": "Y",
    "unicom": "122.950",
    "ctaf": "121.100",
    "effective_date": "01/03/2019"
}

// Function to get the airports data

// let url = "https://api.aviationapi.com/v1/airports?apt=KACY"
// async function getAirports(url) {

//     const request = await fetch(url)

//     if (request.ok) {
//         const data = await request.json()
//         console.log(data)
//     }
// }

// getAirports(url)

const airportInformation = {"facility_name": "1", "state": "2", "city": "3", "faa_ident": "4", "icao_ident": "5", "manager": "6", "certification_typedate": "7"}

//Function to render the table
function renderTable() {
    const table = document.querySelector("table")
    const row = document.createElement("tr")
    
    for (const data of Object.keys(airport)) {

        if (data in airportInformation) {
            const td = document.createElement("td")
            td.textContent =  airport[data]
            row.appendChild(td)
            table.appendChild(row)
        }
    }
}

const submit = document.querySelector("#submit")
submit.addEventListener("click", renderTable)