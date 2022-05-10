new Vue({
    el: '#app',
    data: {
        message: '坐在井口的呱呱',
        data: [],
        tools: [{
                id: 1,
                name: "图片压缩",
                url: "https://tinypng.com/",
                logo: "https://tinypng.com/images/panda-chewing-2x.png"
            },
            {
                id: 2,
                name: "图片放大",
                url: "https://bigjpg.com/",
                logo: "https://bigjpg.com/static/css/touch-icon-ipad-retina.png"
            },
            {
                id: 3,
                name: "谷歌翻译",
                url: "https://translate.google.cn/",
                logo: "https://ssl.gstatic.com/translate/favicon.ico"
            },
            {
                id: 4,
                name: "百度脑图",
                url: "https://naotu.baidu.com",
                logo: "https://naotu.baidu.com/favicon.ico"
            },
            {
                id: 5,
                name: "鸠摩搜书",
                url: "https://www.jiumodiary.com/",
                logo: "https://www.jiumodiary.com/images/apple/apple-144.png"
            },
            {
                id: 6,
                name: "数据结构可视化",
                url: "https://www.cs.usfca.edu/~galles/visualization/",
                logo: "https://www.cs.usfca.edu/~galles/visualization/favicon.ico"
            },
            {
                id: 7,
                name: "二维码生成",
                url: "https://cli.im/mob",
                logo: "http://static.clewm.net/static/images/favicon.ico"
            },
        ]

    },
    methods: {
        addPre: function(p, s) {
            return p + s
        }

    },
    meta: {
        keepAlive: true
    },

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