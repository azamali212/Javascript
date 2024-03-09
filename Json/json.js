let cards = document.querySelectorAll(".card ul")
//  console.log(cards)

//Create Function of Data fetch 
async function fetchData() {

    try {
        let response = await fetch('data.json')
        let data = await response.json();
        //Loop Run on cards 
        cards.forEach((card, index) => {
            //loop Run on list itms 
            for (const key in data[index]) {
                let li = document.createElement("li");
                li.innerText = `${key}: ${data[index][key]}`;
                card.appendChild(li);
            }
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

console.log(fetchData())
