var url = "http://hq.sinajs.cn/list=";

function getZT(date) {
    var url1 = url + generateList();
    // reference to iframe with id 'ifrm'
    var ifrm = document.getElementById('stock');
    ifrm.src = url1; // set src to new url
    // using reference to iframe (ifrm) obtained above
    var win = ifrm.contentWindow; // reference to iframe's window
    // reference to document in iframe
    setTimeout(function () {
        var doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
        console.log(doc);
    }, 2000);

    //         url: url1,
    //         type: 'GET'
    //     })
    //     .done(function (data) {
    //         console.log(data);
    //         $('.zt').text(data);
    //         console.log("success");
    //     })
    //     .fail(function (err) {
    //         console.log(err);
    //         console.log("error");
    //     })
    //     .always(function () {
    //         console.log("complete");
    //     });
}

function generateList() {
    return 'sh601001,sh601002,sh601003,sh601004,sh601005'
}

getZT();
