console.log("AJAX - Warsztat - (jQuery) Pobierz dane po kliknięciu przycisku");

$(function(){

        //wariant 1
        /* $('#get-data').click(function (){
            
            $.get('https://akademia108.pl/api/ajax/get-post.php')
                .done(function(data) {
                    //console.log(data);

                    let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                    let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                    let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                    let pBody = $('<p></p>').text(`Body: ${data.body}`);
                    let hr = $('<hr />');

                    let jqBody = $('body');
                    
                    jqBody.append(pId);
                    jqBody.append(pUserId);
                    jqBody.append(pTitle);
                    jqBody.append(pBody);
                    jqBody.append(hr);
                                              
                })
                .fail(function(error) {
                    //console.error(error); */

        //wariant 2
        $('#get-data').click(function (){
            
            $.getJSON('https://akademia108.pl/api/ajax/get-post.php') //Pobieranie danych za pomocą metody Get protokołu HTTP
                .done(function(data) {
                    //console.log(data);

                    let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                    let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                    let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                    let pBody = $('<p></p>').text(`Body: ${data.body}`);
                    let hr = $('<hr />');

                    let jqBody = $('body');
                    
                    jqBody.append(pId);
                    jqBody.append(pUserId);
                    jqBody.append(pTitle);
                    jqBody.append(pBody);
                    jqBody.append(hr);
                                              
                })
                .fail(function(error) {
                    //console.error(error);


                });
        });
});