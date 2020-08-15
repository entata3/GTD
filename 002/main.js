jQuery(function ($) {

$(document).on('click', '#button', function() {
    console.log($('#inputKeyword').val());
   
    $('#resultContent').empty();

    var url ='https://itunes.apple.com/search?term=' + $('#inputKeyword').val() +
        '&country=jp&media=music&attribute=' + $('input:radio[name="attr"]:checked').val();

    $.getJSON(url, function(json){
        console.log(json);

        $.each(json.results, function(key, value) {
            //console.log(key + ":" + value.trackName);
            var dom = $('<div/>');
            dom.html(
                '<img src=' + value.artworkUrl100 + '>' +
                '<div class="track-name">' + key + ":" + value.trackName + '</div>' +
                '<div class="artist-name">' + value.artistName + '</div>'
            )
            dom.addClass('result-item');
            dom.on('click', function() {
                window.open(value.trackViewUrl, 'trackView', 'width=800, height=600');
            })
            $('#resultContent').append(dom);
        })

    })

})

})