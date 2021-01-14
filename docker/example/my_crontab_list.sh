#必须要的默认定时任务请勿删除
52 */1 * * * sh /scripts/docker/default_task.sh | ts >> /scripts/logs/default_task.log 2>&1
# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

##############Docker只负责执行短期活动##############
# 秒杀红包雨(2020.12.31活动过期)
40 8 1-31 12 * node /scripts/jd_ms_redrain.js | ts >> /scripts/logs/jd_ms_redrain.log 2>&1
# 健康抽奖机(2020.12.31活动过期)
10 0 1-31 12 * node /scripts/jd_health.js | ts >> /scripts/logs/jd_health.log 2>&1
# 直播红包雨(2020.12.31活动过期)
1 0,20,9-23/2 15-31 12 * node /scripts/jd_live_redrain.js | ts >> /scripts/logs/jd_live_redrain.log 2>&1
# 京东金融打卡领年终奖(2020.12.31活动过期)
10 6 1-31 12 * node /scripts/jr_sign.js | ts >> /scripts/logs/jr_sign.log 2>&1
# 京东健康APP集汪汪卡瓜分百万红包(2021.1.6活动过期)
10 8 * * * node /scripts/jd_jdh.js | ts >> /scripts/logs/jd_jdh.log 2>&1

##############长期活动##############
