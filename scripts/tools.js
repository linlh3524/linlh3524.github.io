new Vue({
    el: '#app',
    data: {
        message: '坐在井口的呱呱',
        data: []

    },
    methods: {
        addPre: function(p, s) {
            return p + s
        }
    },
    meta:{},

    mounted: function() {
        var _that = this

        $.ajax({
            url: 'https://api.mdnice.com/trendings?sex=2',
            dataType: 'JSON',
            type: 'GET',
            success: function(data) {
                var tmp = []
                tmp[0] = data.data[1] //微博
                tmp[1] = data.data[0] //知乎
                tmp[2] = data.data[2] //头条
                tmp[3] = data.data[9] //豆瓣
                tmp[4] = data.data[6] //B站
                tmp[5] = data.data[5] //天涯
                tmp[6] = data.data[4] //虎扑
                tmp[7] = data.data[7] //CSDN
                tmp[8] = data.data[8] //Github
                _that.data = tmp
                console.log(data.data)

            }
        });








    }
})