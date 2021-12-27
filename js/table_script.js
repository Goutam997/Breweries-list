'use strict';
document.body.innerHTML = `<div class="heading-container onload="createTable()">
<h1>Brewery Class</h1>
<img class="icon" src="https://previews.123rf.com/images/volff/volff1803/volff180300057/97123664-glasses-of-beer-and-ale-barrel-on-the-wooden-table-craft-brewery-.jpg" width="200px" height="120px" lt="Brewery image">
<br><br>
<div  id="display-type" class="btn-group" role="group" aria-label="Display Type">
  <button type="button" id="tab_btn" class="btn btn-outline-light"><a href="index.html">Tab</a></button>
  <button type="button" id="table_btn" class="btn btn-dark"><a href="html/tables_index.html">Table</a></button>
</div>
</div>`;

const getAPI = async () => {
    try{
        const data = await fetch("https://61c41903f1af4a0017d992f0.mockapi.io/users")
        let breweries = await data.json();
        console.log(breweries);
        table_body.innerHTML="";
        breweries.forEach(x => {
          displayAPIdata_Table(x);   
        })
    }
    catch(error){
        console.log("error", error);
    }
};

table_btn.addEventListener("click", createTable());

let displayAPIdata_Table = (obj) => {
    console.log("display table is invoked");
    let tableRow =`<tr>
     <td>${obj.id}</td>
     <td>${obj.Name}</td>
     <td>${obj.address}, ${obj.city}</td>
     <td>${obj.website}</td>
     <td>${obj.zip}</td> 
     <td>${obj.type}</td> 
     </tr>`;
     table_body.innerHTML += tableRow;
};
function createTable() {
    console.log("rendering tables");
    document.body.innerHTML +=`<table class="table table-stripped table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Website</th>
        <th>Zip</th>
        <th>Type</th>
      </tr>
    </thead>

    <tbody id="table_body"></tbody>
  </table>`;
  getAPI();
};
