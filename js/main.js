//variable declaration
    var output = document.getElementById('output');
    var input = document.getElementById('input');
    var range = document.getElementById('range');

    //persist data after page reload
    (function() {
        get();
        output.innerHTML = get("inputText");
        input.value = get("inputText");
        range.value = get("rangeValue");
    })();

    //save save
    function set(varName, value) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(varName, value);
         } 
    }
    //retrieve value
    function get(varName) {
        if (typeof(Storage) !== "undefined") {
            return localStorage.getItem(varName);
        }
    }
    //set div width according to the range value
    output.style.width = range.value + 'px';

    input.addEventListener('keyup', function() {
        set("inputText", input.value);
        output.innerHTML = get("inputText");
    });
    range.addEventListener('input',function() {
            set("rangeValue", range.value);
            output.style.width = get("rangeValue")+'px';
    });