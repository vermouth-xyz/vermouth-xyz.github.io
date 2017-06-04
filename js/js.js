/**
 * Created by Administer on 2017/04/13.
 */

    window.onload = function () {

        //顶部导航下拉框效果
        var erweima1 = my$("chat").children[1];
        my$("chat").onmouseover = function () {
            this.className = "show";
            erweima1.style.display = "block";
        };
        my$("chat").onmouseout = function () {
            this.className = "";
            erweima1.style.display = "none";
        };

        var erweima2 = my$("shouji").children[1];
        my$("shouji").onmouseover = function () {
            this.className = "show";
            erweima2.style.display = "block";
        };
        my$("shouji").onmouseout = function () {
            this.className = "";
            erweima2.style.display = "none";
        };

        var service = my$("ser").children[1];
        my$("ser").onmouseover = function () {
            this.className = "show";
            service.style.display = "block";
        };
        my$("ser").onmouseout = function () {
            this.className = "";
            service.style.display = "";
        };

        var cartInfo = my$("cart111").children[1];
        my$("cart111").onmouseover = function () {
            this.className = "show";
            cartInfo.style.display = "block";
        };
        my$("cart111").onmouseout = function () {
            this.className = "";
            cartInfo.style.display = "";
        };


        my$("form").onmouseover = function () {
            my$("left-form").style.display = "block";
            my$("people").style.backgroundColor = "#FF6600";
        };
        my$("form").onmouseout = function () {
            my$("left-form").style.display = "none";
            my$("people").style.backgroundColor = "";
        };


        my$("search").onfocus = function () {
            if (getStyle(this, "color") == "rgb(174, 174, 174)") {
                this.value = "";
                this.style.color = "#7E7E80";
            }
        };

        my$("search").onblur = function () {
            if (this.value == 0) {
                this.value = "商品关键词";
                this.style.color = "rgb(174, 174, 174)";
            }
        };
}