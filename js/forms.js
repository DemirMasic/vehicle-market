var users = [];
$("#register_form").validate({
    rules:{
        username:{
            required: true,
            minlength: 3,
        },
        password:{
            required: true,
            minlength: 5,
        },
    },
    submitHandler: function(form, event){
        event.preventDefault();
        blockUi("#register_form")
        let data = serializeForm(form);
        
        users.push(data);
        $("#register_form")[0].reset();
        console.log(users);

        unblock("#register_form")
    },
});

blockUi = (element) => {
    $(element).block({
      message: '<div class="spinner-border text-primary" role="status"></div>',
      css: {
        backgroundColor: "transparent",
        border: "0",
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: 0.25,
      },
    });
  };
  
  unblockUi = (element) => {
    $(element).unblock({});
  };

  serializeForm = (form) => {
    let jsonResult = {};
    $.each($(form).serializeArray(), function () {
      jsonResult[this.name] = this.value;
    });
    return jsonResult;
  };