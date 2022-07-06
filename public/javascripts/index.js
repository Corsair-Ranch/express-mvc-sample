$("#myButton").on('click', function () {
    let word = $("#myBox").val();
    $.ajax({
        url: '/reverse',
        type: 'POST',
        data: {"myData": word},
        success: function (result) {
            console.log(result);
        },
        error: function (err) {
            console.log(err);
        }
   });
});