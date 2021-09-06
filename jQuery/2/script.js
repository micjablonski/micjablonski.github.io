$(function () {

    let buttonLast = $('#last-first');
    let buttonFirst = $('#first-last');
    
    $(buttonLast).click(function () {
        
        let paragraphs = $("p.paragraph");    
        let lastElement = paragraphs.last();
        
        paragraphs.eq(0).before(lastElement);
    
    });

    $(buttonFirst).click(function () {
        
        let paragraphs = $("p.paragraph");    
        let firstElement = paragraphs.first();
        
        paragraphs.eq(4).after(firstElement);
    
    });

});


// $(function(){
    
//     $('#first-move-last').click(function(){
//         let paragraphs = $('p.paragraph');
//         let first = paragraphs.first();

//         // console.log(first);

//         first.parent().append(first);

//     });

//     $('#last-move-first').click(function(){
//         let paragraphs = $('p.paragraph');
//         let last = paragraphs.last();

//         // console.log(last);

//         last.parent().prepend(last);
//     });
    
// });