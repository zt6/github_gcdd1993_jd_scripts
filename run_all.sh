#!/bin/bash

##############短期活动##############
# 年货节(活动时间：2021年1月9日-2021年2月9日)
node /scripts/jd_nh.js
# 京东炸年兽集爆竹(活动时间:2021-1-18至2021-2-11)怕有遗漏故多运行几次
node /scripts/jd_nian.js
# 专门收集每秒产生的爆竹(1小时运行一次)
node /scripts/jd_nianCollect.js
# 京东炸年兽签到任务🧨
node /scripts/jd_nian_sign.js
# 京东炸年兽AR
node /scripts/jd_nian_ar.js
# 京东炸年兽小程序
node /scripts/jd_nian_wechat.js
# 京东神仙书院(活动时间:2021-1-20至2021-2-5)
node /scripts/jd_immortal.js
# 京东神仙书院答题(活动时间:2021-1-20至2021-2-5)
node /scripts/jd_immortal_answer.js
# 5G狂欢城
node /scripts/jd_5g.js
node /scripts/jd_818.js
# 小鸽有礼2
node /scripts/jd_xgyl.js

##############长期活动##############
# 签到
node jd_bean_sign.js
# 东东超市兑换奖品
node /scripts/jd_blueCoin.js
# 摇京豆
node /scripts/jd_club_lottery.js
# 东东农场
node /scripts/jd_fruit.js
# 宠汪汪
node /scripts/jd_joy.js
# 宠汪汪喂食
node /scripts/jd_joy_feedPets.js
# 宠汪汪积分兑换奖品
node /scripts/jd_joy_reward.js
# 宠汪汪偷好友积分与狗粮
node /scripts/jd_joy_steal.js
# 摇钱树
node /scripts/jd_moneyTree.js
# 东东萌宠
node /scripts/jd_pet.js
# 京东种豆得豆
node /scripts/jd_plantBean.js
# 京东全民开红包
node /scripts/jd_redPacket.js
# 进店领豆
node /scripts/jd_shop.js
# 京东天天加速
node /scripts/jd_speed.js
# 东东超市
node /scripts/jd_superMarket.js
# 取关京东店铺商品
node /scripts/jd_unsubscribe.js
# 京豆变动通知
node /scripts/jd_bean_change.js
# 京东抽奖机
node /scripts/jd_lotteryMachine.js
# 京东排行榜
node /scripts/jd_rankingList.js
# 天天提鹅
node /scripts/jd_daily_egg.js
# 金融养猪
node /scripts/jd_pigPet.js
# 点点券
node /scripts/jd_necklace.js
# 京喜工厂
node /scripts/jd_dreamFactory.js
# 东东小窝
node /scripts/jd_small_home.js
# 东东工厂
node /scripts/jd_jdfactory.js
# 十元街
node /scripts/jd_syj.js
# 京东快递签到
node /scripts/jd_kd.js
# 京东汽车(签到满500赛点可兑换500京豆)
node /scripts/jd_car.js
# 领京豆额外奖励(每日可获得3京豆)
node /scripts/jd_bean_home.js
# 京东直播(每日18豆)
node /scripts/jd_live.js
# 微信小程序京东赚赚
node /scripts/jd_jdzz.js
# 宠汪汪邀请助力
node /scripts/jd_joy_run.js
# 注销京东已开的店铺会员，不是注销京东plus会员，个别店铺无法注销
node /scripts/jd_unbind.js
# crazyJoy自动每日任务
node /scripts/jd_crazy_joy.js
# 京东汽车旅程赛点兑换金豆
node /scripts/jd_car_exchange.js
# 导到所有互助码
node /scripts/jd_get_share_code.js
# 口袋书店
node /scripts/jd_bookshop.js
# 京喜农场
node /scripts/jd_jxnc.js
# 签到领现金
node /scripts/jd_cash.js
# 京喜app签到
node /scripts/jx_sign.js
# 京东家庭号(暂不知最佳cron)
node /scripts/jd_family.js
# 闪购盲盒
node /scripts/jd_sgmh.js
# 源头好物红包
node /scripts/jd_coupon.js
# 京东手机年终奖
node /scripts/jd_festival.js
# 盲盒抽京豆
node /scripts/jd_mh.js
# 京东秒秒币
node /scripts/jd_ms.js
# 小鸽有礼
node /scripts/jd_xg.js
# 京东超级盒子
node /scripts/jd_super_box.js
