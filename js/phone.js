// Tel validetion
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const phoneInputField1 = document.querySelector("#contact-phone");
const contactPhone = window.intlTelInput(phoneInputField1, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");
const error = document.querySelector(".alert-error");

exports.handler = function (context, event, callback) {
    const response = new Twilio.Response();
    response.appendHeader("Content-Type", "application/json");
    response.appendHeader('Access-Control-Allow-Origin', '*');
    response.appendHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (typeof event.phone === "undefined") {
        response.setBody({
            success: false,
            error: "Missing parameter; please provides a phone number.",
        });
        response.setStatusCode(400);
        return callback(null, response);
    }

    if (typeof event.contact-phone === "undefined") {
        response.setBody({
            success: false,
            error: "Missing parameter; please provides a phone number.",
        });
        response.setStatusCode(400);
        return callback(null, response);
    }

    const client = context.getTwilioClient();

    client.lookups
        .phoneNumbers(event.phone)
        .fetch()
        .then((resp) => {
            response.setStatusCode(200);
            response.setBody({
                success: true,
            });
            callback(null, response);
        })
        .catch((error) => {
            console.log(error);
            response.setStatusCode(error.status);
            response.setBody({
                success: false,
                error: error.message,
            });
            callback(null, response);
        });

        client.lookups
        .phoneNumbers(event.contact-phone)
        .fetch()
        .then((resp) => {
            response.setStatusCode(200);
            response.setBody({
                success: true,
            });
            callback(null, response);
        })
        .catch((error) => {
            console.log(error);
            response.setStatusCode(error.status);
            response.setBody({
                success: false,
                error: error.message,
            });
            callback(null, response);
        });
};

function process(token) {

    $("#contactNameError").hide()
    $("#telError").hide()
    $("#contactEmailError").hide()

    const phoneNumber = phoneInput.getNumber();

    // info.style.display = "none";
    // error.style.display = "none";

    if ($("#contactName").val() == "") {
        $("#contactNameError").html("Invalid Name")
        $("#contactNameError").show()
    }

    if (phoneInput.isValidNumber()) {
        // if ($("#contactName").val() != "" || $("#contactEmail").val() != "") {
        //      $("#letstalk_form").submit();
        // }
    }

    else {
        $("#telError").html("Invalid phone number");
        $("#telError").show();
    }

    if ($("#contactEmail").val() == "") {
        $("#contactEmailError").html("Invalid Email")
        $("#contactEmailError").show()
    }
    else {
        $("#letstalk_form").submit();
    }

}

function onSubmit(token) {
    document.getElementById("lead-form").submit();
}

