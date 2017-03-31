var accordion = document.querySelector('.accordion');
accordion.addEventListener('click', function (event) {
    var item = event.target;
    var length = 0;
    var body = event.target.nextElementSibling;
    var parent = item.parentNode.parentNode;
    var bodyHeight = event.target.nextElementSibling.firstElementChild.clientHeight;
    for (var i = 0; i < parent.childElementCount; i++) {
        parent.children[i].children[1].style.transition = '0.5s ease-out';
        parent.children[i].children[1].style.height = 0;
    }
    body.style.height = bodyHeight + 50 +'px';

});