
    var canSubmit = false;
    function textonly(input, warning) {
        var charvalue = /^([a-zA-Z ])+$/;
        if (!charvalue.test(document.getElementById(input).value)) {
            document.getElementById(warning).innerHTML = "Enter characters only";
            document.getElementById(input).focus;
            canSubmit = false;
            return false;
        }
        else {
            canSubmit = true;
            document.getElementById(warning).innerHTML = "";
            return true;
        }
    }

    function alphanumeric(input, warning) {
        var charvalue = /^([\d])+,+([a-zA-Z])+$/;
        if (!charvalue.test(document.getElementById(input).value)) {
            document.getElementById(warning).innerHTML = "Enter in House No,Name";
            document.getElementById(input).focus;
            canSubmit = false;
            return false;
        }
        else {
            document.getElementById(warning).innerHTML = "";
            canSubmit = true;
            return true;
        }
    }
    $(document).ready(function () {
        var age = "";
        $('#sDOB').datepicker({
            onSelect: function (value, ui) {
                var today = new Date();
                age = today.getFullYear() - ui.selectedYear;
                $('#jAge').val(age);
            },
            changeMonth: true,
            changeYear: true
        })
    })
    function frmno1(input) {
        var no = /^([0-9])+$/;
        if (!no.test(input.value)) {
            document.getElementById('ph1').innerHTML = "Enter numbers only";
            input.focus;
            canSubmit = false;
            return false;
        }
        else {
            document.getElementById('ph1').innerHTML = "";
            canSubmit = true;
            return true;
        }
    }
    function frmno2(input) {
        var no = /^([0-9])+$/;
        if (!no.test(input.value)) {
            document.getElementById('ph2').innerHTML = "Enter numbers only";
            input.focus;

            return false;
        }
        else {
            document.getElementById('ph2').innerHTML = "";
            return true;
        }
    }
    function emailval1() {
        var email1 = document.getElementById('sEmail1');
        var filter1 = /^([a-zA-Z0-9._\.])+\@+([a-zA-Z0-9_\.])+([a-zA-Z0-9]{2,4})+$/;
        if (!filter1.test(email1.value)) {
            document.getElementById('Message1').innerHTML = "Invalid email address";
            email1.focus;
            canSubmit = false;
            return false;
        }
        else {
            document.getElementById('Message1').innerHTML = "";
            canSubmit = true;
            return true;
        }
    }

    function emailval2() {
        var email2 = document.getElementById('sEmail2');
        var filter2 = /^([a-zA-Z0-9._\.])+\@+([a-zA-Z0-9_\.])+([a-zA-Z0-9]{2,4})+$/;
        if (!filter2.test(email2.value)) {
            document.getElementById('Message2').innerHTML = "Invalid email address";
            email2.focus;
            canSubmit = false;
            return false;
        }
        else {
            document.getElementById('Message2').innerHTML = "";
            canSubmit = true;
            return true;
        }
    }

