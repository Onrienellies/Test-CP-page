this.paySample3 = function () {
    var widget = new cp.CloudPayments();

    var amount = parseFloat($('#amount').val());
    var accountId = $('#email').val();

    var data = {
        name: $('#User_name').val(),
        textarea: $('#textarea_field').val(),
        lastName: $('#User_Lastname').val(),
        phone: $('#phone').val()
        };
    var auto = $('#check').is(':checked'); //проверка

    if (auto) { //включаем подписку

        var date = new Date(); //текущая дата
        date.setMonth(date.getMonth() + 1); //следующий месяц
        date.setDate(date.getDate() - 1); //минус один день

        var recurrent = { interval: 'Month', period: 1, startDate: date }; //один раз в месяц начиная со следующего месяца за минусом одного дня
        data.CloudPayments = {
            recurrent: recurrent
        }
    }

    widget.charge({ // options
        publicId: 'pk_df0628b305a3f4107bda1e8cbe79b', //id из личного кабинета
        description: 'Пополнение счета абонента ' + accountId, //назначение
        amount: amount, //сумма
        currency: 'RUB', //валюта
        accountId: accountId, //идентификатор плательщика (обязательно для создания подписки)
        email: accountId,
        data: data
    },
    function (options) { // success
        //действие при успешной оплате
    },
    function (reason, options) { // fail
        //действие при неуспешной оплате
    });
};

$('#payButton').click(paySample3);