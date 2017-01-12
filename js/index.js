//canvas 背景
(function() {
    //画布 的大小设置
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    //要输出的信息
    var str = "01";
    str = str.split("");
    var fontSize = 20; //输出字体的大小

    //每列显示多少个信息
    var cols = canvas.width / fontSize;
    //数组，统计下落的位置
    var drops = [];
    for (var i = 0; i < cols; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "green";
        ctx.font = fontSize + "px arial";
        for (var i = 0; i < cols; i++) {
            var text = str[Math.floor(Math.random() * (str.length))];
            // console.info("x-"+i*fontSize);
            // console.info("y-"+drops[i]*fontSize);
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height || Math.random() > 0.95)
                drops[i] = 0; //把位置恢复到最上面
            //控制下落的位置
            drops[i]++;
        }
    }
    setInterval(draw, 33);
})();