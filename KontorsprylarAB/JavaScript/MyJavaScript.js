$(document).ready(function () {
    $("#loadButton").click(function () {

        $.getJSON("/services/articleLiteral.aspx").done(function (theContacts) { 

            $("#myTableBody").empty();
            console.log(theContacts);

            for (var i = 0; i < theContacts.length; i++) {

                var tableRow = "<tr>";
                tableRow += "<td>" + theContacts[i].ID1 + "</td>";
                tableRow += "<td>" + theContacts[i].ArticleName + "</td>";
                tableRow += "<td>" + theContacts[i].Description + "</td>";
                tableRow += "<td>" + theContacts[i].Price + "</td>";
                
                //tableRow += "<td><input type=\"button\" value=\"Delete contact\" onclick=\"DeleteContact(" + theContacts[i].ID + ");\" /></td>";
                tableRow += "</tr>";

                $("#myTableBody").append(tableRow);
            }
        });

    });
});

