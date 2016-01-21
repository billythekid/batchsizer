var myDropzone = new Dropzone("#filezone", {
    dictDefaultMessage: "Drop images here, max 20 at a time.",
    paramName: "picture",
    maxFilesize: 5,
    uploadMultiple: true,
    maxFiles: 20,
    parallelUploads: 20,
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
    init: function () {
        this.on("successmultiple", function (file, response) {
            window.location = response.url;
            setTimeout(function () {
                myDropzone.removeAllFiles();
            }, 2000);
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