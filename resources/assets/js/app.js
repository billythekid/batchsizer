Dropzone.autoDiscover = false;

$('#filezone').dropzone({
    dictDefaultMessage: "Drop images here, max 10 at a time.",
    paramName: "picture",
    maxFilesize: 10,
    uploadMultiple: true,
    maxFiles: 10,
    parallelUploads: 10,
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
    init: function () {
        this.on("successmultiple", function (file, response) {
            window.location = response.url;
            this.removeAllFiles()
        });
        this.on("drop", function (file) {
            document.getElementsByClassName("progress")[0].classList.remove('hidden');
        });
    }
});

function showFeedbackForm() {
    swal({
        title: "Feedback",
        text: "Please send me your feedback:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false
        }
        swal({
            title: "Please wait.",
            text: "Sending your feedback...",
            type: 'info',
            showConfirmButton: false
        });
        var feedbackForm = document.getElementById('feedback-form');
        var feedbackField = document.getElementById('feedback');
        feedbackField.value = inputValue;
        feedbackForm.submit();
    });
}