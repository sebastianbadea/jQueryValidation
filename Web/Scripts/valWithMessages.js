$("form").validate({
    //errorClass: 'text-danger',
    //highlight: function (element) { console.log("override from definition");},
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
            required: true
        }
    },
    //here you can define the messages you want to display for each rule
    //if you don't specify a message, the default one will be displayed
    messages: {
        Name: {
            required: "The Name must be completed"
        }
    }
});