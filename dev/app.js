
var input = document.getElementById('search_input');
var section = document.getElementById('section_search');

var close = document.getElementById('close_search');

input.addEventListener('click', function(){

        input.classList.add('is-big');
        section.classList.add('is-visible');
        setTimeout(function(){
            close.classList.add('is-visible');
        }, 400);

});

close.addEventListener('click', function(){
    if (this.classList.contains('is-visible')) {
        this.classList.remove('is-visible');
        input.classList.remove('is-big');
        section.classList.remove('is-visible');

        setTimeout(function(){
            input.value = '';
        }, 500);
    }
});
