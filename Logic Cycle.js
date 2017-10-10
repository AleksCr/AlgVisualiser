function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "#B451A9";
        var i;
        for (i = 0; i < arr.length; i++) {
            ctx.fillRect(i*15,500,10,-arr[i].rnd*50);
        }
        //ctx.fillRect(10,500,10,-50);
        //ctx.fillRect(25,500,10,-150);
    }
}

function getRandomArbitary(min, max)
{
    var ret;
    ret = Math.random() * (max - min) + min;
    ret = Math.round(ret);
    return ret;
}

//25 штук будет каеф
function sequence() {
    this.rnd = getRandomArbitary(1,9)
}
var str = "";
var arr =[];
function init_gen() {
    for (var i = 0; i < 25; i++) {
        var element = new sequence();
        str += element.rnd + " ";
        arr.push(element);
    }
}

var strtest = " ";
function arrtest2() {
    var i;
    for (i = 0; i < arr.length; i++) {
        strtest+= arr[i].rnd;
    }
}

/*Работа с экраном:
колорПродакшн
-> получает номер элемента в массиве, цвет в который надо красить, и позицию (опять же в массиве) куда надо красить
*/
function colorProducion(pos, color, newPos) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#fbfbff";
    ctx.fillRect(pos*15,500,10,-500);
    if(color == "green"){ctx.fillStyle = "#0a7923";}
    else if(color == "orange"){ctx.fillStyle = "#f29c17";}//{ctx.fillStyle = "#f29c17";}
    else if(color == "pink") {ctx.fillStyle = "#B451A9";}
    ctx.fillRect(newPos*15,500,10,-arr[newPos].rnd*50);
}

var alg = "bubbleSort";
init_gen();
arrtest2();
alert(strtest);
alert(str);
$(document).ready(function(){
    $("#msgid").html("This is Hello World by JQuery" + str);
});

function sleep(i) {
    setTimeout(function() {}, 1000);
}

function visualising(alg) {
    if(alg == "stupidSort" ){
        var i = 0;
        myLoop();
        function myLoop () {
            setTimeout(function () {
                i++;
                if (i < arr.length) {
                    colorProducion(i-1,"orange",i-1);
                    colorProducion(i,"orange",i);
                    if(arr[i-1].rnd > arr[i].rnd){
                        var tmp = arr[i-1].rnd;
                        arr[i-1].rnd = arr[i].rnd;
                        arr[i].rnd = tmp;
                        colorProducion(i-1,"pink",i-1);
                        colorProducion(i,"pink",i);
                        i=0;
                        myLoop();
                    }
                    else {setTimeout(function () {
                        colorProducion(i-1,"pink",i-1);
                        colorProducion(i,"pink",i);
                    },500);
                    myLoop();}
                }
            }, 500);
        }
        //myLoop();
    } else if(alg == "bubbleSort"){
        var i = 0;
        var remain = arr.length;
        myLoop();
        function myLoop () {
            setTimeout(function () {
                i++;
                if (i < remain) {
                    colorProducion(i-1,"orange",i-1);
                    colorProducion(i,"orange",i);
                    if(arr[i-1].rnd > arr[i].rnd){
                        var tmp = arr[i-1].rnd;
                        arr[i-1].rnd = arr[i].rnd;
                        arr[i].rnd = tmp;
                        colorProducion(i-1,"pink",i-1);
                        colorProducion(i,"pink",i);
                        myLoop();
                    }
                    else {setTimeout(function () {
                        colorProducion(i-1,"pink",i-1);
                        colorProducion(i,"pink",i);
                    },500);
                        myLoop();}
                } else {
                    remain--;
                    i=0;
                    if(remain<1) return;
                    myLoop();
                }
            }, 500);
        }
    }

}
setTimeout(function() {visualising(alg)}, 500);