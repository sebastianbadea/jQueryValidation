$(function () {
    var i = 0;
    $("#add").click(function (e) {
        e.preventDefault();
        var td = $("<td>").append("<input name='Name' id='Name" + i++ + "' />");
        var tr = $("<tr>").append(td);
        $("table tbody").append(tr);
    });

    $.validator.prototype.checkForm = function () {
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()) ; elements[i]; i++) {
            var elems = this.findByName(elements[i].name);
            if (elems.length != undefined && elems.length > 1) {
                for (var count = 0; count < elems.length; count++) {
                    this.check(elems[count]);
                }
            }
            else {
                this.check(elements[i]);
            }
        }
        return this.valid();
    };

    $("form").validate({
        rules: {
            Name: {
                required: true
            }
        }
    });
});
