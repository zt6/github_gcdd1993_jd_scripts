// // 助力码辅助生成
// class ShareCode {
//     constructor(username,
//                 fruits,
//                 pet,
//                 plantBean,
//                 ddfactory,
//                 jxfactory,
//                 jxStory,
//                 jdSplit,
//                 jdHealth) {
//         this._username = username
//         // 东东农场互助码
//         this._fruits = fruits
//         // 东东萌宠互助码
//         this._pet = pet
//         // 种豆得豆互助码
//         this._plantBean = plantBean
//         // 东东工厂互助码
//         this._ddfactory = ddfactory
//         // 京喜工厂互助码
//         this._jxfactory = jxfactory
//         // 京喜故事互助码
//         this._jxStory = jxStory
//         // 京榜年终奖
//         this._jdSplit = jdSplit
//         // 京东健康抽奖机
//         this._jdHealth = jdHealth
//     }
//
//     get username() {
//         return this._username
//     }
//
//     get fruits() {
//         return this._fruits
//     }
//
//     get pet() {
//         return this._pet
//     }
//
//     get plantBean() {
//         return this._plantBean
//     }
//
//     get ddfactory() {
//         return this._ddfactory
//     }
//
//     get jxfactory() {
//         return this._jxfactory
//     }
//
//     get jxStory() {
//         return this._jxStory
//     }
//
//     get jdSplit() {
//         return this._jdSplit
//     }
//
//     get jdHealth() {
//         return this._jdHealth
//     }
// }
//
// const shareCodes = [
//     // new ShareCode(
//     //     '小绵羊酱酱',
//     //     'f8df73267c104df2acba96d9378f06c5',
//     //     'MTE1NDAxNzYwMDAwMDAwMzkxNzczMTE=',
//     //     'e7lhibzb3zek2oioxerjozsro55orxh2yys4ula',
//     //     'P04z54XCjVWnYaS5m9cZ2T62ypPnY82rvc-CJA',
//     //     'n3AaXZttXXmX6mIJenJWjw==',
//     //     'JRurIu4XYSB8NPOzdUPImYR0f2tbnAd5ETR1tM90sak=',
//     //     'P04z54XCjVUnIaW5m9cZ2T62ypPnccHcyh7TME',
//     //     'P04z54XCjVUnoaW5m9cZ2T62ypPnXW_Ekpbj-M'
//     // ),
//     // new ShareCode(
//     //     '大咪酱噢噢噢',
//     //     '987ee04888b64f0597b13049853caca4',
//     //     'MTE1NDAxNzgwMDAwMDAwNDAwMzg2Mjk=',
//     //     'bknudbr7e4sqwbhh4kxjg7vthwtj3ctybaw66uy',
//     //     'P04z54XCjVWnYaS5m9cZxa_rCUbw1uYn51X5g',
//     //     'cgw1XF89J-1IWzDQICxWcg==',
//     //     '40OKfEi2PzjgCMVnZzl2ttDXOc-iAXtDDXDdaNFqu9o=',
//     //     'P04z54XCjVUnIaW5m9cZxa_rCUbw2Ezcr-scg',
//     //     'P04z54XCjVUnoaW5m9cZxa_rCUbwwORFGOwdw'
//     // ),
//     // new ShareCode(
//     //     '高敏',
//     //     '32b5348df6374239964194e187fa187c',
//     //     'MTE1NDUwMTI0MDAwMDAwMDQwNDcxOTYx',
//     //     'mv3riww4sqy5f53abjy63rud3qz6gsx6f7h3czq',
//     //     undefined,
//     //     undefined,
//     //     undefined,
//     //     undefined,
//     //     undefined,
//     // ),
//     // new ShareCode(
//     //     '大咪嗷嗷2',
//     //     '97d2efe84bd74bf8aacacb9b9bac20fd',
//     //     'MTEzMzI0OTE0NTAwMDAwMDA0MTU3ODg3OQ==',
//     //     'gou7sxm3hztwosdrlp4mnrat6ypjtw3b5ukpqpq',
//     //     'P04z54XCjVWnYaS5m9cZyaNjzQOxlCuj5XW6w',
//     //     'tvUf4vUpkLF9KyitjqKI3A==',
//     //     '95ba6vtMsw_CzaGe49Rk7eZlyZqI_Oe8aDyu7sEj1No=',
//     //     'P04z54XCjVUnIaW5m9cZyaNjzQOxvMEV4J98A',
//     // ),
//     // new ShareCode(
//     //     '大咪嗷嗷3',
//     //     undefined,
//     //     undefined,
//     //     'gcdr655xfdjq7ptqbtglgnitygjn3dbfj4m423a',
//     // ),
//     // new ShareCode(
//     //     '查钧译',
//     //     '9a07bef4e7ad49ae8fdaf113de817a1b',
//     //     'MTE1NDUyMjEwMDAwMDAwNDAwMTQ1NjM=',
//     //     'mlrdw3aw26j3xhxesrqelkqhmqott5jmflm63ha'
//     // ),
//     // new ShareCode(
//     //     '刘奕',
//     //     '800d1ec39dbd473bbcf2f35667b78b02',
//     //     'MTAxODc2NTEzNTAwMDAwMDAyOTAxMTkwMQ==',
//     //     'q74cnfebbilqdntxbtix6cx5a4'
//     // ),
//     // new ShareCode(
//     //     '查钧译的老婆',
//     //     'c168e10ee28248e79defbf76bd098e35',
//     //     'MTE1NDQ5OTIwMDAwMDAwNDAxNjc4MzU=',
//     //     'mlrdw3aw26j3wscxylsmq7u37f2s7oeysmjexxa'
//     // ),
//     // new ShareCode(
//     //     '刘奕1',
//     //     'd241a66537244934ba66d40701231a82',
//     //     'MTE1NDAxNzgwMDAwMDAwNDAzMDE1Mzk=',
//     //     '4npkonnsy7xi3utpy37pb3qc2vwdg4im4ts6rfa'
//     // ),
//     new ShareCode(
//         'hema3210',
//         '4cbf9b4070b14efa853ee3e3ea0a97db',
//         'MTE1NDUyMjEwMDAwMDAwNDAwMzgwOTU=',
//         'lqvulo4mnacvkub4mrvr2u3qba'
//     ),
//     new ShareCode(
//         '王瑶',
//         '6831e59df38e40468b099ff48e6a1a0f',
//         'MTE1NDAxNzgwMDAwMDAwNDIwMDE0Mjk=',
//         'olmijoxgmjutyz727n3ma37f7r26bdvt7squrmy',
//         'P04z54XCjVWnYaS5m9cZ2auj3RKl5j19_GLmPw',
//         undefined,
//         'VWMrbTBkk8qIziGYchoa0eOx3qbAGiY_nnoY1OgvLP8=',
//         'P04z54XCjVUnIaW5m9cZ2auj3RKl--KfJRZ8z8',
//         'P04z54XCjVUnoaW5m9cZ2auj3RKl9xtmYsZHqU'
//     )
// ]
//
// module.exports = {
//     ShareCode,
//     shareCodes
// }
