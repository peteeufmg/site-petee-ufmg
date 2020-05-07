let resizeObserver = new ResizeObserver(() => { 
    if($(window).height() > $('html').height()+$('#rodape').height()){
        // console.log('Mudou de tamanho e ta pequeno')
        $('#rodape')
            .removeClass('my-footer')
            .addClass('my-footer-smallcontent')
    }
    else{
        // console.log('mudou de tamanho mas esta ok')
        $('#rodape')
            .removeClass('my-footer-smallcontent')
            .addClass('my-footer')
    }
}); 
my_html = document.querySelector('html');
resizeObserver.observe(my_html); 