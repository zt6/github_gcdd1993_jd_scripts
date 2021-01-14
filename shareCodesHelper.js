// // 同一个京东账号的好友互助码用@隔开,不同京东账号互助码用&或者换行隔开
// const { shareCodes } = require('./ShareCode')
// const generate = (type) => {
//   let str = ''
//   shareCodes.forEach(shareCode => {
//     const username = shareCode.username
//     shareCodes.forEach((it, index1) => {
//       if (it[type]) {
//         // 不能助力自己
//         if (it.username !== username) {
//           str += it[type]
//           if (index1 < shareCodes.length - 1) {
//             str += '@'
//           }
//         }
//       }
//     })
//     // 去除尾部@
//     while (str.charAt(str.length - 1) === '@') {
//       str = str.substring(0, str.length - 1)
//     }
//     str += '&'
//   })
//   // 去除尾部&
//   while (str.charAt(str.length - 1) === '&') {
//     str = str.substring(0, str.length - 1)
//   }
//   return str
// }
//
// // 东东农场互助码
// console.log('=============================================FRUITSHARECODES=================================================')
// console.log(generate('fruits'))
// console.log()
// console.log('=============================================PETSHARECODES=================================================')
// console.log(generate('pet'))
// console.log()
// console.log('=============================================PLANT_BEAN_SHARECODES=================================================')
// console.log(generate('plantBean'))
