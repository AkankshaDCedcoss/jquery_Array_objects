var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];
var addToCarts = [];
$(document).ready(function () {
  $("#cart1").click(function () {
    

    for(var i=0;i<products.length;i++)
    { var count=0;
      if(products[i].id==101)
      {count++;
    addToCarts.push(products[i]);
      }
    }

    display();
  });
  $("#cart2").click(function () {

    for(var i=0;i<products.length;i++)
    {
      if(products[i].id==102){
    addToCarts.push(products[i]);
    }
  }

    display();
  });
  $("#cart3").click(function () {

    for(var i=0;i<products.length;i++)
    { 
      if(products[i].id==103){
      addToCarts.push(products[i]);
      }
    }

    display();
  });
  $("#cart4").click(function () {

    for(var i=0;i<products.length;i++)
    {
      if(products[i].id==104){
      addToCarts.push(products[i]);
      }
    }

    display();
  });
  $("#cart5").click(function () {

    for(var i=0;i<products.length;i++)
    { 
      if(products[i].id==105){
      addToCarts.push(products[i]);
      }
    }

    display();
  });
  
});
function add(addToCarts) {
 var count=1;
  html =
    "<table><tr><th>Id</th><th>Name</th><th>Image</th><th>price</th><th>quantity</th></tr>";
  for (var i = 0; i < addToCarts.length; i++) {
    html +=
      "<tr><td>" +
      addToCarts[i].id +
      "</td><td>" +
      addToCarts[i].name +
      "</td><td>" +
      addToCarts[i].image +
      "</td><td>" +
      addToCarts[i].price +
      "</td><td>"+count+"<button id='increase'>+</button><button id='decrease'>-</button>";
  }
  html += "</table>";
  document.getElementById("output").innerHTML = html;
  console.log(html);
}
function display()
{
  var count=1;
  html =
    "<table><tr><th>Id</th><th>Name</th><th>Image</th><th>price</th><th>quantity</th></tr>";
  for (var i = 0; i < addToCarts.length; i++) {
    html +=
      "<tr><td>" +
      addToCarts[i].id +
      "</td><td>" +
      addToCarts[i].name +
      "</td><td>" +
      addToCarts[i].image +
      "</td><td>" +
      addToCarts[i].price +
      "</td><td>"+count+"<button id='increase'>+</button><button id='decrease'>-</button>";
  }
  html += "</table>";
  document.getElementById("output").innerHTML = html;
}
