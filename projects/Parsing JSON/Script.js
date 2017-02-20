document.getElementById("button").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    console.log("My script has loaded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var strData = xhr.responseText;
            var data = JSON.parse(strData);
            var value=parseInt(document.getElementById("number").value);
            console.log(data["objects"][0]["pokemon"][1].name);
            var pokemon = data["objects"][0]["pokemon"][value].name;
           
            document.getElementById("output").innerHTML= pokemon;
        }
        else if (xhr.readyState == 4 && xhr.status != 200) {
            console.log(xhr.status);
        }
    };
    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
    xhr.send();
});