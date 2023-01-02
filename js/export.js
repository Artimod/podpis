$(
    (function () {
            $(".form").submit(function (event) {
                event.preventDefault();
        let appLink =
          "https://script.google.com/macros/s/AKfycbyC_s-GpNTmJQA8ll43zlC7stqGuzcKWK0Tc5ZjRRotyhjOL-Bb8oVuqD6gWmPL-SrCQg/exec";
        let form = $("#" + $(this).attr("id"))[0];
        let fd = new FormData(form);
        $.ajax({
          url: appLink,
          type: "POST",
          data: fd,
          processData: false,
          contentType: false,
        });      
        });
    })(jQuery)
  );
