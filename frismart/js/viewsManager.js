/**
 * Created by Alexandre on 12/3/2015.
 */
function ajaxTreatment(idStore, viewType){
    var jqxhr = $.ajax({
        type: "GET",
        url: "http://dev.frismart.com/app/webroot/ajax.treatment.php",
        data: {
            viewType_id: viewType,
            id_store: idStore,
            search_what: $('#search_what').val(),
            search_where:$('#search_where').val(),
            website_origine: document.referrer
        }
    });
    /*jqxhr.done(function(){
        $('#notifications').prepend('<div class="notif">Store: '+idStore+' '+jqxhr.responseText+'</div>');
    });*/
}
$('h1.viewTrigger.search_titre.arcon').each(function () {
//alert($('h1').attr('store'));
    var store = $(this),
        id_store = store.attr('store'),
        viewType = store.attr('viewType');
    $(this).bind('inview', function (event, visible, topOrBottomOrBoth) {
        if (visible == true) {
            // element is now visible in the viewport
            if (topOrBottomOrBoth == 'top') {}
            else if (topOrBottomOrBoth == 'bottom') {}
            else {
                store.removeClass('normal').addClass('visible');
                ajaxTreatment(id_store, viewType);
            }
        } else {
            // element has gone out of viewport
            store.removeClass('visible').addClass('normal');
        }
    });
});
$('.clickTrigger').each(function () {
    var button = $(this),
        storeId = button.attr('store'),
        viewType = button.attr('viewType'),
        href = button.attr('href');
    button.click(function () {
        ajaxTreatment(storeId, viewType);
    })
})