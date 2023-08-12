{
  /* <div class="card-container">
<div class="row-1">
  <div class="auction-status">
    <h3 class="status-id-approved">APPROVED</h3>
    <span class="status-code">1fdwew</span>
  </div>
  <div class="date">
   wed 25,2018,1:0:2:pm
  </div>
</div>
<div class="line"></div>
<div class="row-2">
  <h4 class="location">Bengaluru Internation Airport</h4>
  <div class="para-holder">
    <p class="address">Lorem ipsum dolor sit.</p>
  </div>
  <p class="price">	&#8377 400</p>
</div>
</div>                        */
}

//Getting the parent-container
let parentContainer = document.getElementById("parent-container");

async function fetchData() {
  let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
  let response = await fetch(url);

  let data = await response.json();
  console.log(data);
  printData(data);
}



function printData(data) {
  data.forEach((obj, index) => {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardContainer.innerHTML = `<div class="row-1">
    <div class="auction-status">
      <h3 class="status-id-${obj.status.toLowerCase()}">${obj.status}</h3>
      <span class="status-code">${obj.caseNumber}</span>
    </div>
    <div class="date">
    ${obj.date}
    </div>
    </div>
    <div class="line"></div>
    <div class="row-2">
    <h4 class="location">${obj.fromLocation}</h4>
    <div class="para-holder">
      <p class="address">${obj.toLocation}</p>
    </div>
    <p class="price">${obj.fare}</p>
    </div>`;
    parentContainer.appendChild(cardContainer);
  });
}

fetchData();
