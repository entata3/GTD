jQuery(function ($) {

var limit = 10;
var currentPage = 0;

var onSearch = function (page) {
    
    console.log($('#inputKeyword').val());
   
    $('#resultContent').empty();

    var url ='https://itunes.apple.com/search?term=' + $('#inputKeyword').val() +
        '&country=jp&media=music&attribute=' + $('input:radio[name="attr"]:checked').val() +
        '&limit=' + limit + '&offset=' + (limit * page);

    console.log(page);
    console.log(url);
    currentPage = page;

    $.getJSON(url, function(json){
        console.log(json);

        $.each(json.results, function(key, value) {
            //console.log(key + ":" + value.trackName);
            var num = key + currentPage * 10;
            var dom = $('<div/>');
            dom.html(
                '<img src=' + value.artworkUrl100 + '>' +
                '<div class="track-name">' + num + ":" + value.trackName + '</div>' +
                '<div class="artist-name">' + value.artistName + '</div>'
            )
            dom.addClass('result-item');
            dom.on('click', function() {
                window.open(value.trackViewUrl, 'trackView', 'width=800, height=600');
            })
            $('#resultContent').append(dom);
            $('#pageIndex').text(currentPage + 1);
        })

    })
}

$('#button').on('click', function() {
    console.log("button");
    onSearch(0);
})

$('#onNext').on('click', function() {
    console.log("onNext");
    onSearch(currentPage + 1);
})

$('#onPrev').on('click', function() {
    console.log("onPrev");
    onSearch(currentPage - 1);
})

})