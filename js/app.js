$(function(){
    function loadSectionData(url){
        var section = $('div.section');
        section.load( url + ' div.section section');
        return null;
    }
    function clickHandle(event){
        event.preventDefault();
            var url = $(event.target).attr('href');
            loadSectionData(url);
            return false;
    }
    $('.menu li').click(clickHandle);
});
