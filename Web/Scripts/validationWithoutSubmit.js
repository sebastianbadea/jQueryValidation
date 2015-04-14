$.validator.addMethod("depCustomRule", function (value, element) {
    //the result of the function will be interpreted as isValid=true || false
    return !(value.length > 0 && $("#Code").val().length == 0);
}
//you can define the message in the rule
//, "If the code is empty, you cannot fill the dependent");
);
$("form").validate({
    //errorClass: 'text-danger',
    //highlight: function (element) { console.log("override from definition");},
    invalidHandler: function (event, validator) {
        var summary = "";
        $.each(validator.errorList, function (index, element) {
            summary += element.message;
            summary += "<br />";
        });
        $("#errors").html(summary);
    },
    submitHandler: function (form) {
        form.submit();
    },
    //here you can define the rules of validation
    //you can find all the built-in rules at http://jqueryvalidation.org/documentation#link-list-of-built-in-validation-methods
    //each default rule have a default message
    rules: {
        Name: {
            required: true
        },
        Code: {
            required: true,
            number: true
        },
        DependentRule: {
            required: {
                depends: function (element) {
                    //the function must return true or false. Based on the result the validation will be applied or not.
                    return $("#DependentCheck").is(":checked");
                }
            },
            depCustomRule: true
        }
    },
    //here you can define the messages you want to display for each rule
    //if you don't specify a message, the default one will be displayed
    messages: {
        Name: {
            required: "The Name must be completed"
        },
        Code: {
            required: "The Code also must be completed"
        },
        DependentRule: {
            depCustomRule: "If the code is empty, you cannot fill the dependent"
        }
    }
});
//applying suplimentary rules works only after the validate stuff
$(".other").each(function (index, element) {
    $(this).rules("add", {
        required: true,
        messages: {
            required: "The other fields are required."
        }
    });
});
$("button").click(function () {
    var message = $("#message");
    if ($("form").valid()) {
        message.html("The form is valid.").removeClass("text-warning").addClass("text-success");
        $("#errors").html("");
    }
    else {
        message.html("The form is NOT valid.").removeClass("text-success").addClass("text-warning");
    }
});