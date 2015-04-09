$("form").validate({
    submitHandler: function (form) {
        form.submit();
    },
    //here you can define the rules(you can find all the built-in rules at http://jqueryvalidation.org/documentation#link-list-of-built-in-validation-methods)
    rules: {
        Name: {
            required: true
        },
        Code: {
            required: true
        }
    }
});