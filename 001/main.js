jQuery(function ($) {

$(document).on('click', '#button', function() {
    //console.log("#button_click");
    //if (confirm($('#inputTask').val() + "を追加しますか？")) {
        $chk = '<input type="checkbox" name="chk" id="chkbox">';
        $('ul').append($("<li/>"));
        $('li').last().append($("<label/>"));
        $('label').last().html($chk + $('#inputTask').val());
        $('li').last().append($("<button/>"));
        $('button').last().html("delete");
        $('button').last().attr("id", "del-btn");
    //}
    taskInfo();
})

$(document).on('click', '#chkbox', function(){
    //console.log("#chkbox_click");
    if ($(this).prop("checked")) {
        $(this).parent().addClass('done-task');
    } else {
        $(this).parent().removeClass('done-task');
    }
    taskInfo();
})

$(document).on('click', '#del-btn', function(){
    console.log("del-btn_click");
    $(this).parent().remove();
    taskInfo();
})

var taskInfo = function() {
    $('#taskInfo').html($('input:checkbox:checked').length + " / " + $("li").length);
}

})