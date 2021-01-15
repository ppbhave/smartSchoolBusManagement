$(function () {

    $('#getList').click(function () {
        var table = document.getElementById('dtable');
        var defaultDisplay = table.rows[0].style.display;
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].style.display = defaultDisplay;
        }
        var classF = document.getElementById("sClass");
        var divF = document.getElementById("sDiv");
        classF.value = "";
        divF.value = "";
        return;
    });

    $('#getfilteredList').click(function () {
        var table = document.getElementById('dtable');
        var tableRows = table.getElementsByTagName('tr');
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].style.display = "";
        }
        var classF = document.getElementById("sClass").value;
        var divF = document.getElementById("sDiv").value;
        if (classF == "" && divF == "") {
            alert("Select Class and Div first");
            return;
        }
        else {
            var classFilter = classF + " " + divF;
            for (var i = 1; i < tableRows.length; i++) {
                if (table.rows[i].cells[4].innerHTML + "" != classFilter) {
                    table.rows[i].style.display = "none";
                }
            }
            return;
        }
    });
    });
