function setDrag(obj) {
    var deltaX = 0;
    var deltaY = 0;

    function start(event) {
        deltaX = event.clientX - obj.position().left;
        deltaY = event.clientY - obj.position().top;

        $(document).bind('mousemove', move);
        $(document).bind('mouseup', stop);

        // 防止拖动图片
        return false;
    }

    function move(event) {
        obj.css({
            'left': event.clientX - deltaX + 'px',
            'top': event.clientY - deltaY + 'px'
        });

        // return false;
    }

    function stop() {
        $(document).unbind('mousemove', move);
        $(document).unbind('mouseup', stop);
    }

    obj.bind('mousedown', start);

}