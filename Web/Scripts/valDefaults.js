$(function () {
    //the default settings can be overriden before apply the validation
    $.validator.setDefaults({
        errorElement: "small", // contain the error msg in a small tag
        wrapper: "div", // wrap the error message and small tag in a div
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error'); // add the Bootstrap has-error class to the parent div
        },
        success: function (element) {
            $(element).closest('.form-group').removeClass('has-error'); // remove the Boostrap has-error class from the parent div
        }
    });
});