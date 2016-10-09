//logs.js
var util = require('../../utils/util.js')
Page({
  data: {  
    "status": "OK",  
    "count": 3,  
    "reviews": [  
      {  
        "review_id": 49302627,  
        "user_nickname": "HcjTT1314",  
        "created_time": "2013-11-27 23:56",  
        "text_excerpt": "外婆家的性价比和味道，吃过的都知道没什么好说的，平时都要排队排很久，今天运气很好，过去了直接开吃。",  
        "review_rating": 5,  
        "rating_img_url": "http://i3.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i2.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 3,  
        "decoration_rating": 4,  
        "service_rating": 3,  
        "review_url": "http://dpurl.cn/p/tn-RH4CDWq"  
      },  
      {  
        "review_id": 49302262,  
        "user_nickname": "附庸风雅之人",  
        "created_time": "2013-11-27 23:45",  
        "text_excerpt": "非常不错的一家店 平时来基本不用怎么排队 奥义就是便宜。 现在这种物价",  
        "review_rating": 5,  
        "rating_img_url": "http://i3.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i1.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 4,  
        "decoration_rating": 4,  
        "service_rating": 4,  
        "review_url": "http://dpurl.cn/p/8SyN1cZJKf"  
      },  
      {  
        "review_id": 49301850,  
        "user_nickname": "joyboa",  
        "created_time": "2013-11-27 23:34",  
        "text_excerpt": "酒酿圆子不是很甜〜还行〜中午生意真是好啊〜人一多，略感有点吵…",  
        "review_rating": 5,  
        "rating_img_url": "http://i1.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i1.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 4,  
        "decoration_rating": 4,  
        "service_rating": 4,  
        "review_url": "http://dpurl.cn/p/9s7WHMznvm"  
      },
      {  
        "review_id": 49352265,  
        "user_nickname": "风雅之人",  
        "created_time": "2013-10-27 23:45",  
        "text_excerpt": "现在这种物价，非常不错的一家店 平时来基本不用怎么排队 奥义就是便宜",  
        "review_rating": 5,  
        "rating_img_url": "http://i3.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i1.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 4,  
        "decoration_rating": 4,  
        "service_rating": 4,  
        "review_url": "http://dpurl.cn/p/8SyN1cZJKf"  
      },
      {  
        "review_id": 49301850,  
        "user_nickname": "joyboa",  
        "created_time": "2013-11-27 23:34",  
        "text_excerpt": "酒酿圆子不是很甜〜还行〜中午生意真是好啊〜人一多，略感有点吵…",  
        "review_rating": 5,  
        "rating_img_url": "http://i1.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i1.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 4,  
        "decoration_rating": 4,  
        "service_rating": 4,  
        "review_url": "http://dpurl.cn/p/9s7WHMznvm"  
      },
      {  
        "review_id": 49352265,  
        "user_nickname": "风雅之人",  
        "created_time": "2013-10-27 23:45",  
        "text_excerpt": "现在这种物价，非常不错的一家店 平时来基本不用怎么排队 奥义就是便宜",  
        "review_rating": 5,  
        "rating_img_url": "http://i3.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i1.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 4,  
        "decoration_rating": 4,  
        "service_rating": 4,  
        "review_url": "http://dpurl.cn/p/8SyN1cZJKf"  
      },  
      {  
        "review_id": 49301850,  
        "user_nickname": "joyboa",  
        "created_time": "2013-11-27 23:34",  
        "text_excerpt": "酒酿圆子不是很甜〜还行〜中午生意真是好啊〜人一多，略感有点吵…",  
        "review_rating": 5,  
        "rating_img_url": "http://i1.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i1.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 4,  
        "decoration_rating": 4,  
        "service_rating": 4,  
        "review_url": "http://dpurl.cn/p/9s7WHMznvm"  
      },
      {  
        "review_id": 49352265,  
        "user_nickname": "风雅之人",  
        "created_time": "2013-10-27 23:45",  
        "text_excerpt": "现在这种物价，非常不错的一家店 平时来基本不用怎么排队 奥义就是便宜",  
        "review_rating": 5,  
        "rating_img_url": "http://i3.dpfile.com/s/i/app/api/32_5star.png",  
        "rating_s_img_url": "http://i1.dpfile.com/s/i/app/api/16_5star.png",  
        "product_rating": 4,  
        "decoration_rating": 4,  
        "service_rating": 4,  
        "review_url": "http://dpurl.cn/p/8SyN1cZJKf"  
      }
    ],  
    "additional_info": {  
      "more_reviews_url": "http://dpurl.cn/p/84VMxE5Ots"  
    }  
  }
})
