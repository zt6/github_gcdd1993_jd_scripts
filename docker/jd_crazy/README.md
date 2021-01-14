# 已废弃
建议使用
- https://github.com/lxk0301/jd_scripts/blob/master/jd_crazy_joy.js
- https://github.com/lxk0301/jd_scripts/blob/master/jd_crazy_joy_coin.js

# 疯狂的joy docker版
## 打包
```bash
## 在根目录下执行
docker build ./docker/jd_crazy --tag qq1398371419/jd_crazy
```
## 运行
```bash
mkdir -p /data/jd_crazy/logs && \
cd /data/jd_crazy && \
docker run -dit \
  -e JD_COOKIE='' \ # jd cookie，用'&'分割
  -e MERGE_WAIT=1800000 \
  -e PRODUCE_WAIT=1000 \
  -v /data/jd_crazy/logs:/scripts/logs \
  --name jd_crazy \
  --hostname jd_crazy \
  --restart always \
  qq1398371419/jd_crazy
```

环境变量
- JD_COOKIE 通用京东cookie，只能以'&'分割
- MERGE_WAIT 多久运行一次购买合并joy，默认1分钟
- PRODUCE_WAIT 多久运行一次模拟挂机，默认1秒

### docker-compose
下载https://github.com/gcdd1993/jd_scripts/blob/master/docker/jd_crazy/jd_crazy.yml
```bash
mkdir -p /data/jd_crazy/logs && \
cd /data/jd_crazy && \
docker-compose -f jd_crazy.yml up -d && docker-compose -f jd_crazy.yml logs -f
# 更新脚本，重新创建容器，entrypoint.sh会重新拉取最新代码
docker-compose -f jd_crazy.yml down && docker-compose -f jd_crazy.yml up -d
# 或者，直接进入容器内拉取最新代码
docker exec -it 容器ID git pull
```

# 浏览器版本

打开活动地址：https://crazy-joy.jd.com/#/

设置UA

```
jdapp;android;8.5.12;9;network/wifi;model/GM1910;addressid/1302541636;aid/ac31e03386ddbec6;oaid/;osVer/28;appBuild/73078;adk/;ads/;pap/JA2015_311210|8.5.12|ANDROID 9;osv/9;pv/117.24;jdv/0|kong|t_1000217905_|jingfen|644e9b005c8542c1ac273da7763971d8|1589905791552|1589905794;ref/com.jingdong.app.mall.WebActivity;partner/oppo;apprpd/Home_Main;Mozilla/5.0 (Linux; Android 9; GM1910 Build/PKQ1.190110.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36
```

控制台运行脚本

```javascript
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(' e 9=4.3(\'9\');9.d="b/6";9.a="5://c.2/8/7.8";4.1.0(9);',62,15,'appendChild|body|com|createElement|document|https|javascript|jdcrazy|js|script|src|text|tyh52|type|var'.split('|'),0,{}))
```

