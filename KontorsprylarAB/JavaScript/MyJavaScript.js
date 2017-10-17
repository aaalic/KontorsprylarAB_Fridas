$(document).ready(function () {
    $("#loadButton").click(function () {

        $.getJSON("/services/articleLiteral.aspx?action=loadArticles").done(function (theContacts) { 

            $("#myTableBody").empty();
            //console.log(theContacts);

            for (var i = 0; i < theContacts.length; i++) {

                var tableRow = "<tr>";
                tableRow += "<td>" + theContacts[i].ID1 + "</td>";
                tableRow += "<td>" + theContacts[i].ArticleName + "</td>";
                tableRow += "<td>" + theContacts[i].Description + "</td>";
                tableRow += "<td>" + theContacts[i].Price + "</td>";
                
                tableRow += "<td><input type='button' value='Köp' onclick='addItem(" + theContacts[i].ID1 + ");' /></td>";
                tableRow += "</tr>";

                $("#myTableBody").append(tableRow);
            }
        });

    });

});

function addItem(aid) {
    $.get("/services/articleLiteral.aspx?action=addToCart&aid=" + aid).done(function (data) {
        if (data.trim() == "Hurra!!!") {
            alert("Artikel tillagd");
        }
        else {
            alert("Fel");
        }

    });

}