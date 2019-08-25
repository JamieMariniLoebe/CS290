window.addEventListener('load', function () {
    generate_table()
});

var activeElement;

function generate_table() {
    var body = document.getElementsByTagName("body")[0];
    var tab = document.createElement("table");
    var taBody = document.createElement("tbody");
    var header = document.createElement("thead");
    var headerRow = document.createElement("tr");

    var headCell1 = document.createElement("td");
    var headText1 = document.createTextNode("Header 1");
    headCell1.appendChild(headText1);
    headerRow.appendChild(headCell1);

    var headCell2 = document.createElement("td");
    var headText2 = document.createTextNode("Header 2");
    headCell2.appendChild(headText2);
    headerRow.appendChild(headCell2);

    var headCell3 = document.createElement("td");
    var headText3 = document.createTextNode("Header 3");
    headCell3.appendChild(headText3);
    headerRow.appendChild(headCell3);

    var headCell4 = document.createElement("td");
    var headText4 = document.createTextNode("Header 4");
    headCell4.appendChild(headText4);
    headerRow.appendChild(headCell4);
    taBody.appendChild(headerRow);

    // create all cells
    for (var i = 1; i < 5; i++) {
        // create table row
        var row = document.createElement("tr");
        for (var j = 1; j < 5; j++) {
            var cell = document.createElement("td");

            var cellData = i + "," + j;

            var inputField = document.createElement("input")

            inputField.setAttribute("id", "i" + i + "j" + j);
            inputField.setAttribute("value", cellData);

            inputField.addEventListener("click", function (event) {
                var id = event.target.id;
                activeElement = document.getElementById(id);
            });

            cell.appendChild(inputField);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        taBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tab.appendChild(taBody);
    // append <table> into <body>
    body.appendChild(tab);
    // set the border attribute of tab to 2;
    tab.setAttribute("border", "2");

    var button = document.createElement("button");
    var buttonText = document.createTextNode("Up");
    button.setAttribute("onclick", "up()");
    var button2 = document.createElement("button");
    var buttonText2 = document.createTextNode("Down");
    button2.setAttribute("onclick", "down()");
    var button3 = document.createElement("button");
    var buttonText3 = document.createTextNode("Left");
    button3.setAttribute("onclick", "left()");
    var button4 = document.createElement("button");
    var buttonText4 = document.createTextNode("Right");
    button4.setAttribute("onclick", "right()");
    var button5 = document.createElement("button");
    var buttonText5 = document.createTextNode("Mark Cell");
    button5.setAttribute("onclick", "mark_cell()");

    button.appendChild(buttonText);
    button2.appendChild(buttonText2);
    button3.appendChild(buttonText3);
    button4.appendChild(buttonText4);
    button5.appendChild(buttonText5);

    body.appendChild(button);
    body.appendChild(button2);
    body.appendChild(button3);
    body.appendChild(button4);
    body.appendChild(button5);

    activeElement = document.getElementById('i1j1');
    document.getElementById("i1j1").focus();
}

function mark_cell() {
    activeElement.style.backgroundColor = "yellow";
}


function left() {
    var x = activeElement.id;
    var i = parseInt(x.charAt(1));
    var j = parseInt(x.charAt(3));
    if (j == 1) {
        alert("You can't move out of the box!!")
    }

    j = j - 1;
    var id = "i" + i + "j" + j
    activeElement = document.getElementById(id);
    activeElement.focus();
}



function right() {
    var x = activeElement.id;
    var i = parseInt(x.charAt(1));
    var j = parseInt(x.charAt(3));
    if (j==4){
        alert("You can't move out of the box!!")
    }
    j = j + 1;
    var id = "i" + i + "j" + j
    activeElement = document.getElementById(id);
    activeElement.focus();

}



function up() {
    var x = activeElement.id;
    var i = parseInt(x.charAt(1));
    if (i == 1) {
        alert("You can't move out of the box!!");

    }
    else {
        var j = parseInt(x.charAt(3));
        i = i - 1;
        var id = "i" + i + "j" + j;
        activeElement = document.getElementById(id);
        activeElement.focus();
    }
}


function down() {
    var x = activeElement.id;
    var i = parseInt(x.charAt(1));
    if (i == 4) {
        alert("You can't move out of the box!!")
    }

    var j = parseInt(x.charAt(3));
    i = i + 1;
    var id = "i" + i + "j" + j;
    activeElement = document.getElementById(id);
    activeElement.focus();
}