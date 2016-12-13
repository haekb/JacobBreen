/**
 * Created by haek on 2016-12-12.
 */
function filter(type, checkbox) {
    if(!type || !checkbox) return;

    var checkState = checkbox.checked;
    var selector = $("div[data-type='" + type + "'");

    if(!checkState) {
        selector.addClass("hide");
        return;
    }

    selector.removeClass("hide");
}

function contentWarning(url) {
    if(!url) return false;
    var choice = confirm("Warning. This content may not be suitable for some work settings/audiences.");

    if(choice) {
        location.href = url;
    }
    return false;
}