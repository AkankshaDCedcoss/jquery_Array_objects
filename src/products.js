var products = [
  {
    id: 101,
    name: "Basket Ball",
    image: "basketball.png",
    price: 150,
    count: 1,
    totalprice: 150,
  },
  {
    id: 102,
    name: "Football",
    image: "football.png",
    price: 120,
    count: 1,
    totalprice: 120,
  },
  {
    id: 103,
    name: "Soccer",
    image: "soccer.png",
    price: 110,
    count: 1,
    totalprice: 110,
  },
  {
    id: 104,
    name: "Table Tennis",
    image: "table-tennis.png",
    price: 130,
    count: 1,
    totalprice: 130,
  },
  {
    id: 105,
    name: "Tennis",
    image: "tennis.png",
    price: 100,
    count: 1,
    totalprice: 100,
  },
];
var addToCarts = [];

$(document).ready(function () {
  $("#cart1").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 101) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 101) {
            var quant = addToCarts[m].count++;
            var pr = addToCarts[m].price * addToCarts[m].count;
            addToCarts[m].totalprice = pr;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }
    display();
  });
  $("#cart2").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 102) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 102) {
            var quant = addToCarts[m].count++;
            var pr = addToCarts[m].price * addToCarts[m].count;
            addToCarts[m].totalprice = pr;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }
    display();
  });
  $("#cart3").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 103) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 103) {
            var quant = addToCarts[m].count++;
            var pr = addToCarts[m].price * addToCarts[m].count;
            addToCarts[m].totalprice = pr;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }

    display();
  });
  $("#cart4").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 104) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 104) {
            var quant = addToCarts[m].count++;
            var pr = addToCarts[m].price * addToCarts[m].count;
            addToCarts[m].totalprice = pr;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }

    display();
  });
  $("#cart5").click(function () {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == 105) {
        var flag = 0;
        for (var m = 0; m < addToCarts.length; m++) {
          if (addToCarts[m].id == 105) {
            var quant = addToCarts[m].count++;
            var pr = addToCarts[m].price * addToCarts[m].count;
            addToCarts[m].totalprice = pr;
            flag = 1;
            break;
          }
        }
        if (flag != 1) {
          console.log("Inside Flag");
          addToCarts.push(products[i]);
        }
      }
    }

    display();
  });
});
function add(addToCarts) {
  html =
    "<table><tr><th>Id</th><th>Name</th><th>Image</th><th>price</th><th>quantity</th><th>Totalprice</th></tr>";
  for (var i = 0; i < addToCarts.length; i++) {
    var count = 1;
    if (addToCarts[i].id == 101) {
      console.log(count);
    }
    html +=
      "<tr><td>" +
      addToCarts[i].id +
      "</td><td>" +
      addToCarts[i].name +
      "</td><td>" +
      addToCarts[i].image +
      "</td><td>" +
      addToCarts[i].price +
      "</td><td>" +
      addToCarts[i].count +
      "<button id='increase' onclick='increase(" +
      addToCarts[i].id +
      ")'>+</button><button id='decrease'  onclick='decrease(" +
      addToCarts[i].id +
      ")'>-</button>" +
      "</td><td>" +
      addToCarts[i].totalprice +
      "</td></tr>";
  }
  html += "</table>";
  document.getElementById("output").innerHTML = html;
  console.log(html);
}
function display() {
  html =
    "<table><tr><th>Id</th><th>Name</th><th>Image</th><th>price</th><th>quantity</th><th>Totalprice</th></tr>";
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
      "</td><td>" +
      addToCarts[i].count +
      "<button id='increase' onclick='increase(" +
      addToCarts[i].id +
      ")'>+</button><button id='decrease'  onclick='decrease(" +
      addToCarts[i].id +
      ")'>-</button>" +
      "</td><td>" +
      addToCarts[i].totalprice +
      "</td></tr>";
  }
  html += "</table>";
  document.getElementById("output").innerHTML = html;
}
function increase(x) {
  console.log("Inside Increase");
  for (var m = 0; m < addToCarts.length; m++) {
    if (addToCarts[m].id == x) {
      var quant = addToCarts[m].count++;
      var pr = addToCarts[m].price * addToCarts[m].count;

      console.log(pr);

      addToCarts[m].totalprice = pr;
    }
  }

  display();
}
function decrease(y) {
  console.log("Inside Decrease");
  for (var m = 0; m < addToCarts.length; m++) {
    if (addToCarts[m].id == y) {
      var quant = addToCarts[m].count--;
      console.log(quant);
      var pr = addToCarts[m].price * addToCarts[m].count;

      console.log(pr);

      addToCarts[m].totalprice = pr;
    }
  }

  display();
}
