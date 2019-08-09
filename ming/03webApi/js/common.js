//通过id获取对象
function my$(id) {
    return document.getElementById(id);
}

//设置任意文本内容
function setInnerText(element, text) {
    //判断浏览器是否支持这个属性
    if (typeof element.textContent == 'undefined') {
        element.innerText = text;
    } else { //支持这个属性
        element.textContent = text;
    }
}

//获取任意文本
function getInnerText(element) {
    if (typeof element.textContent == 'undefined') {
        //不支持
        return element.innerText;
    } else {
        //支持
        return element.textContent;
    }
}

function getFirstElementChild(element) {
    //如何这个元素支持 firstElementChild====>   一定不是ie8
    //此时我要获取第一个元素，是不是直接使用firstElementChild就行了。
    if (element.firstElementChild) { //true---->说明支持，如果返回undefined 则是false 说明不支持
        return element.firstElementChild;
    } else {
        //return element.firstChild;//此时是ie8
        //有没有这么一种情况，我的浏览器不是ie8，但是也不支持firstElementChild ,同时，firstChild返回的第一个节点是文本几点
        var node = element.firstChild; //第一个节点
        //如何去找到这个元素节点
        while (node && node.nodeType != 1) {
            //进来证明是文本节点
            node = node.nexSibling;
        }
        return node;
    }
}

function getLastElementChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

function getPreviousSibling(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * [getNextSibling description]
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
function getNextSibling(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * [添加事件监听兼容代码]
 * @param {[Dom]}   ele  [dom对象]
 * @param {[type]}   type [事件类型]
 * @param {Function} fn   [事件处理函数]
 */
function addEventListener(ele, type, fn) {
    //该判断浏览器是否支持这个方法
    if (ele.addEventListener) {
        ele.addEventListener(type, fn, false);
    } else if (ele.attachEvent) {
        ele.attachEvent('on' + type, fn);
    } else {
        ele['on' + type] = fn;
    }
}

/**
 * [解除事件监听兼容代码]
 * @param {[Dom]}   ele  [dom对象]
 * @param {[type]}   type [事件类型]
 * @param {Function} fn   [事件处理函数]
 */
function removeEventListener(ele, type, fn) {
    //该判断浏览器是否支持这个方法
    if (ele.removeEventListener) {
        ele.removeEventListener(type, fn, false);
    } else if (ele.detachEvent) {
        ele.detachEvent('on' + type, fn);
    } else {
        ele['on' + type] = fn;
    }
}

/**
 * 变速动画改变某个元素的任意多个属性
 * @param  {[type]} ele    [元素对象]
 * @param  {[type]} json  [表示多个属性值的键值对]
 * @param  {[tyoe]} fn    [回调函数]
 * @return {[type]}      [无返回值]
 */
function animation(ele, json, fn) {
    // console.log(fn);
    //清除上一个定时器
    clearInterval(ele.timeId);
    ele.timeId = setInterval(function() {
        //默认情况下，这些属性都已经设置好了
        var flag = true;
        for (var attr in json) {
            //判断这个属性是不是opactiy
            if (attr == 'opacity') {
                //获取当前元素的透明度，并且放大100倍
                var current = getStyle(ele, attr) * 100;
                //目标值也放大100倍
                var target = json[attr] * 100;
                //每一步移动的步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //设置改变之后的透明度
                ele.style[attr] = current / 100;
            } else if (attr == 'zIndex') {
                ele.style[attr] = json[attr];
            } else {
                //获取当前元素的属性值
                var current = parseInt(getStyle(ele, attr)) || 0;
                var target = json[attr];
                // console.log(getStyle(ele, attr));
                //每一步移动的步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //设置改变之后的属性值
                ele.style[attr] = current + 'px';
            }
            // debugger;
            if (current != target) {
                flag = false;
            }
        }
        // console.log(flag);
        if (flag) {
            //清除定时器
            clearInterval(ele.timeId);
            //所有的属性都达到目标之后，才能使用这个函数，
            //而且前提是，用户传入这个参数
            if (fn) {
                fn();
            }
        }
    }, 20);
}

/**
 * [getScroll 获取页面向下或者向右滚动的距离]
 * @return {[type]} [一个对象,left top值]
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 * 获取任意元素的任意属性的值
 * @param  {[type]} ele  [元素对象]
 * @param  {[type]} attr [属性名]
 * @return {[type]}      [返回属性值]
 */
function getStyle(ele, attr) {
    //判断浏览器是否支持这个方法
    return window.getComputedStyle ? window.getComputedStyle(ele, null)[attr] : ele.currentStyle[attr];
}

var evt = {
    /*my$:function(id){
        return document.getELementById(id);
    },*/
    //window.event和事件参数对象的兼容
    getEvt: function(e) {
        return window.event || e;
    },
    //可视区域横坐标兼容代码
    getClientX: function(e) {
        return this.getEvt().clientX;
    },
    //可视区域纵坐标兼容代码
    getClientY: function(e) {
        return this.getEvt().clientY;
    },
    //页面向左滚出去的距离
    getScrollLeft: function() {
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    //页面向上滚出去的距离
    getScrollTop: function() {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
    getPageX: function(e) {
        return this.getEvt(e).pageX ? this.getEvt(e).pageX : this.getClientX(e) + this.getScrollLeft();
    },
    //相对于页面的纵坐标（pageY或者是clientY+scrollTop）
    getPageY: function(e) {
        return this.getEvt(e).pageY ? this.getEvt(e).pageY : this.getClientY(e) + this.getScrollTop();
    }
};