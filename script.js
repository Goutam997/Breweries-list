'use strict';
document.body.innerHTML = "";
document.body.innerHTML += `<div class="heading-container onload="createTabs()">
<h1>Brewery Class</h1>
<img class="icon" src="https://previews.123rf.com/images/volff/volff1803/volff180300057/97123664-glasses-of-beer-and-ale-barrel-on-the-wooden-table-craft-brewery-.jpg" width="200px" height="120px" lt="Brewery image">
<br><br>
<div  id="display-type" class="btn-group" role="group" aria-label="Display Type">
  <button type="button" id="tab_btn" class="btn btn-dark"><a href="index.html">Tab</a></button>
  <button type="button" id="table_btn" class="btn btn-outline-light"><a href="tables_index.html">Table</a></button>
</div>
</div>`;
function createTabs(){
    console.log("rendering Tabs");
    document.body.innerHTML += `<div id="mainContainer" class="main-container"></div>`;
    getAPI();
};

const getAPI = async () => {
    try{
        const data = await fetch("https://61c41903f1af4a0017d992f0.mockapi.io/users")
        let breweries = await data.json();
        console.log(breweries);
        mainContainer.innerHTML="";
        breweries.forEach(x => {
          displayAPIdata_Tab(x);   
        });
    }
    catch(error){
        console.log("error", error);
    }
};

//add event listeners to the buttons of display type
tab_btn.addEventListener("click", createTabs());


let displayAPIdata_Tab = (obj) => {
    let display = `<div class="container">
    <h3>${obj.id} Brewery Name: ${obj.Name}</h3>
    <p>Type: ${obj.type}</p>
    <p>Website: ${obj.website}</p>
    <p>Address of ${obj.Name} is: ${obj.address}, ${obj.city}</p>
    <p>Pin-Code : ${obj.zip}</p>
    </div>`;
    mainContainer.innerHTML += display;
};

