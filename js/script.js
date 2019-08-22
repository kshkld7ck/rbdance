$(document).ready(function(){
    $('.contacts__list p ').click(function(){
        $('.contacts__list p').removeClass('active');
        $(this).addClass('active');
        let data = $(this).attr('data-frame');
        $('.contacts__map').html(data);
    })

if (window.innerWidth > 1080) {
    $(window).on('scroll', function(){
        var topMenu = $("nav"),
          topMenuHeight = topMenu.outerHeight()+15,
          menuItems = topMenu.find("a.nav__a"),
          scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
          });
          var fromTop = $(this).scrollTop()+70+topMenuHeight;     
          var cur = scrollItems.map(function(){
          if ($(this).offset().top < fromTop)
              return this;
          });
          cur = cur[cur.length-1];
          var id = cur && cur.length ? cur[0].id : "";
          menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
      })

    }

      $('#send').click(function () {
        let name = $('input[name="name"]').val();
        let phone = $('input[name="mobile"]').val();
        let mail = $('input[name="email"]').val();
        let message = $('textarea').val();
       if ((name.length) && (phone.length) && (mail.length))  {
        $.ajax({
                type: "POST", //Метод отправки
                url: "mail.php?name=" + name + "&phone=" + phone + "&mail=" + mail + "&message="+message+"&usermail=r.bulychev@yandex.ru",
                processData: false,
                contentType: false,
                success: function (res) {
                   
                    let name = $('input[name="name"]').val();
                    let phone = $('input[name="mobile"]').val();
                    let mail = $('input[name="email"]').val();
                    let message = $('textarea').val();
                    $.ajax({
                            type: "POST", //Метод отправки
                            url: "mail.php?name=" + name + "&phone=" + phone + "&mail=" + mail + "&message="+message+"&usermail=mailrbdance@yandex.ru",
                            processData: false,
                            contentType: false,
                            success: function (res) {
                                Swal.fire({
                                    title: 'Спасибо!',
                                    text: 'Ваша заявка принята',
                                    type: 'success',
                                    confirmButtonText: 'Продолжить'
                                  })
                                  $('input, textarea').val('')
                            }
                            })
                }
                })
            }



        
        }) 
$('.instruction').click(() => {
    Swal.fire({
        title: '<strong>Реквизиты для оплаты</strong>',
        type: 'info',
        html:
          '<p>ИП <b>ИП Булычев Роман Юрьевич</b></p>  <p>Номер счета: <b>40802810500850000175</b></p><p>ИНН: <b>773126481541</b></p><p>БИК: <b>044525503</b></p><p>Кор. счет: <b>30101810545250000503</b></p>',
        showCloseButton: true
      })
})




})