export async function fetchCars() {
    const headers = {
      "X-RapidAPI-Key": "2902866bfbmsh0948223ceb98752p1f27efjsn7bf55a294cc2",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {headers: headers,
    });

    const result = await response.json();

    return result
}