
Zepto(function ($) {
    FastClick.attach(document.body);
    FastClick.prototype.focus = function (targetElement) {
        var length;
        if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
        length = targetElement.value.length;
        targetElement.focus();
        targetElement.setSelectionRange(length, length);
        } else {
        targetElement.focus();
        }
    };
})
