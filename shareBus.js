const $ = new Env('助力码随机上车🚗')
const jsname = "助力码随机上车🚗";
const notify = $.isNode() ? require('./sendNotify') : '';
let message = '';
if ($.isNode()) {
  message += `脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()} \n\n`;
  console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
  console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}=============\n`)
}
/**
 * zd 种豆
 * nc 农场
 * mc 萌宠
 * dd 东东工厂
 * jx 京喜工厂
 */
const shareCodes = [
  // 小绵羊酱酱
  {
    zd: 'e7lhibzb3zek2oioxerjozsro55orxh2yys4ula',
    nc: 'f8df73267c104df2acba96d9378f06c5',
    mc: 'MTE1NDAxNzYwMDAwMDAwMzkxNzczMTE=',
    dd: 'P04z54XCjVWnYaS5m9cZ2T62ypPnY82rvc-CJA',
    jx: 'n3AaXZttXXmX6mIJenJWjw==',
    zz: 'AUWE5m6-WmzAADWH4ji0Ykw',
  },
  // 大咪酱噢噢噢
  {
    zd: 'bknudbr7e4sqwbhh4kxjg7vthwtj3ctybaw66uy',
    nc: '987ee04888b64f0597b13049853caca4',
    mc: 'MTE1NDAxNzgwMDAwMDAwNDAwMzg2Mjk=',
    dd: 'P04z54XCjVWnYaS5m9cZxa_rCUbw1uYn51X5g',
    jx: 'cgw1XF89J-1IWzDQICxWcg==',
    zz: 'AUWE56erhlGReVT-llAgU'
  },
  // 高敏
  {
    zd: 'mv3riww4sqy5f53abjy63rud3qz6gsx6f7h3czq',
    nc: '32b5348df6374239964194e187fa187c',
    mc: 'MTE1NDUwMTI0MDAwMDAwMDQwNDcxOTYx',
    dd: 'P04z54XCjVWnYaS5jYOCmn62HpIneLH1W1XKeQ',
    jx: '9gNb-Twou-jh2oAkZ3UcXw==',
    zz: 'ACDNUlq-VyzcAFWPx23lClw'
  },
  // 大咪嗷嗷2
  {
    zd: 'gou7sxm3hztwosdrlp4mnrat6ypjtw3b5ukpqpq',
    nc: '97d2efe84bd74bf8aacacb9b9bac20fd',
    mc: 'MTEzMzI0OTE0NTAwMDAwMDA0MTU3ODg3OQ==',
    dd: 'P04z54XCjVWnYaS5m9cZyaNjzQOxlCuj5XW6w',
    jx: 'tvUf4vUpkLF9KyitjqKI3A==',
    zz: 'AUWE52djChXFbcCKRnjg2'
  },
  // 大咪嗷嗷3
  {
    zd: 'gcdr655xfdjq7ptqbtglgnitygjn3dbfj4m423a',
    nc: '0b51c67459b74f288e39b5ee091ffe1a',
    dd: 'P04z54XCjVWnYaS5m9cZxufhR0z0MZ3VFXmQw',
    zz: 'AUWE55MrIrExNbCShlR0w'
  },
  // 查钧译
  {
    zd: 'mlrdw3aw26j3xhxesrqelkqhmqott5jmflm63ha',
    nc: '9a07bef4e7ad49ae8fdaf113de817a1b',
    mc: 'MTE1NDUyMjEwMDAwMDAwNDAwMTQ1NjM=',
    dd: 'P04z54XCjVWnYaS5m9cZ2X71HlKx99ztPCEQnk',
    jx: '5B1DFiNPLJNgrpvwANR-ew==',
    zz: 'AUWE55MrIrExNbCShlR0w'
  },
  // 刘奕
  {
    zd: 'q74cnfebbilqdntxbtix6cx5a4',
    nc: '800d1ec39dbd473bbcf2f35667b78b02',
    mc: 'MTAxODc2NTEzNTAwMDAwMDAyOTAxMTkwMQ==',
    dd: 'P04z54XCjVWnYaS5uKMtbd5Tg',
    jx: 'gXRQATVGJXE9dwO1eH2tuw==',
    zz: 'AUWE5mq6ZyDVaC2b8iy0YwQ'
  },
  // 查钧译的老婆
  {
    zd: 'mlrdw3aw26j3wscxylsmq7u37f2s7oeysmjexxa',
    nc: 'c168e10ee28248e79defbf76bd098e35',
    mc: 'MTE1NDQ5OTIwMDAwMDAwNDAxNjc4MzU=',
    dd: 'P04z54XCjVWnYaS5m9cZ2X-2HRMkWggY86fz0Q',
    zz: 'AUWE5mquVxTMMDTOqji5Iww'
  },
  // 刘奕1
  {
    zd: '4npkonnsy7xi3utpy37pb3qc2vwdg4im4ts6rfa',
    nc: 'd241a66537244934ba66d40701231a82',
    mc: 'MTE1NDAxNzgwMDAwMDAwNDAzMDE1Mzk=',
    zz: 'AUWE5mK3EzTQJAGD73y5Mww'
  },
  // hema3210
  {
    zd: 'lqvulo4mnacvkub4mrvr2u3qba',
    nc: '4cbf9b4070b14efa853ee3e3ea0a97db',
    mc: 'MTE1NDUyMjEwMDAwMDAwNDAwMzgwOTU=',
    zz: 'AU2ALzq6SzDU'
  },
  // 王瑶
  {
    zd: 'olmijoxgmjutyz727n3ma37f7r26bdvt7squrmy',
    nc: '6831e59df38e40468b099ff48e6a1a0f',
    mc: 'MTE1NDAxNzgwMDAwMDAwNDIwMDE0Mjk=',
    dd: 'P04z54XCjVWnYaS5m9cZ2auj3RKl5j19_GLmPw',
    jx: 'zYIEDEHCXJFDBsg_WN9Ptg==',
    zz: 'AUWE5mfvCxTUKADWp3SlIwA'
  },
  // 王林杰
  {
    zd: '7uza6dcinwl3v7l4ryj4jiyyzgmtpbnifrhnfzi',
    nc: '1f54af63767247c8bee99a03d287aff3',
    jx: 'N7aAxrVHMz38sT_S5h_rhQ==',
    zz: 'Svfp1Qxce9l3ePRnzkfYNdQ'
  }
];
$.result = []

!(async () => {
  for (let i = 0; i < shareCodes.length; i++) {
    const {zd, nc, mc, dd, jx, zz} = shareCodes[i];
    zd && await createZd(`http://api.turinglabs.net/api/v1/jd/bean/create/${zd}/`)
    nc && await createNc(`http://api.turinglabs.net/api/v1/jd/farm/create/${nc}/`)
    mc && await createMc(`http://api.turinglabs.net/api/v1/jd/pet/create/${mc}/`)
    dd && await createDd(`http://api.turinglabs.net/api/v1/jd/ddfactory/create/${dd}/`)
    jx && await createJx(`http://api.turinglabs.net/api/v1/jd/jxfactory/create/${jx}/`)
    zz && await createZz(`https://code.chiang.fun/api/v1/jd/jdzz/create/${zz}/`)
  }
  await showMsg()
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())

// 种豆得豆
function createZd(zdUrl) {
  return new Promise((resolve) => {
    const url = {url: zdUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data) {
          if (_data.message.indexOf("existe") !== -1) {
            message += `种豆得豆：已在车上` + '\n'
          } else {
            message += `种豆得豆：完美上车` + '\n'
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

// 京东农场
function createNc(ncUrl) {
  return new Promise((resolve) => {
    const url = {url: ncUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `京东农场：已在车上` + '\n'
        } else {
          message += `京东农场：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

// 京东萌宠
function createMc(mcUrl) {
  return new Promise((resolve) => {
    const url = {url: mcUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `京东萌宠：已在车上` + '\n'
        } else {
          message += `京东萌宠：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function createDd(ddUrl) {
  return new Promise((resolve) => {
    const url = {url: ddUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `东东工厂：已在车上` + '\n'
        } else {
          message += `东东工厂：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function createJx(jxUrl) {
  return new Promise((resolve) => {
    const url = {url: jxUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.message.indexOf("existe") !== -1) {
          message += `京喜工厂：已在车上` + '\n'
        } else {
          message += `京喜工厂：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

function createZz(jxUrl) {
  return new Promise((resolve) => {
    const url = {url: jxUrl}
    $.get(url, (err, resp, data) => {
      try {
        const _data = JSON.parse(data)
        if (_data.msg.indexOf("Exists") !== -1) {
          message += `京东赚赚：已在车上` + '\n'
        } else {
          message += `京东赚赚：完美上车` + '\n'
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

async function showMsg() {
  if ($.isNode()) {
    $.log(jsname + '\n' + message)
    await notify.sendNotify(jsname, "", message)
  } else {
    $.log(message)
    $.msg(jsname, "", message)
  }

}

// prettier-ignore
function Env(t, s) {
  return new class {
    constructor(t, s) {
      this.name = t, this.data = null, this.dataFile = "box.dat", this.logs = [], this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, s), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports
    }

    isQuanX() {
      return "undefined" != typeof $task
    }

    isSurge() {
      return "undefined" != typeof $httpClient
    }

    isLoon() {
      return "undefined" != typeof $loon
    }

    loaddata() {
      if (!this.isNode) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          s = this.path.resolve(process.cwd(), this.dataFile),
          e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s);
        if (!e && !i) return {};
        {
          const i = e ? t : s;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch {
            return {}
          }
        }
      }
    }

    writedata() {
      if (this.isNode) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          s = this.path.resolve(process.cwd(), this.dataFile),
          e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s),
          o = JSON.stringify(this.data);
        e ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(s, o) : this.fs.writeFileSync(t, o)
      }
    }

    lodash_get(t, s, e) {
      const i = s.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) return e;
      return o
    }

    lodash_set(t, s, e) {
      return Object(t) !== t ? t : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []), s.slice(0, -1).reduce((t, e, i) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}, t)[s[s.length - 1]] = e, t)
    }

    getdata(t) {
      let s = this.getval(t);
      if (/^@/.test(t)) {
        const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t), o = e ? this.getval(e) : "";
        if (o) try {
          const t = JSON.parse(o);
          s = t ? this.lodash_get(t, i, "") : s
        } catch (t) {
          s = ""
        }
      }
      return s
    }

    setdata(t, s) {
      let e = !1;
      if (/^@/.test(s)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(s), h = this.getval(i),
          a = i ? "null" === h ? null : h || "{}" : "{}";
        try {
          const s = JSON.parse(a);
          this.lodash_set(s, o, t), e = this.setval(JSON.stringify(s), i), console.log(`${i}: ${JSON.stringify(s)}`)
        } catch {
          const s = {};
          this.lodash_set(s, o, t), e = this.setval(JSON.stringify(s), i), console.log(`${i}: ${JSON.stringify(s)}`)
        }
      } else e = $.setval(t, s);
      return e
    }

    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }

    setval(t, s) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, s) : this.isQuanX() ? $prefs.setValueForKey(t, s) : this.isNode() ? (this.data = this.loaddata(), this.data[s] = t, this.writedata(), !0) : this.data && this.data[s] || null
    }

    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }

    get(t, s = (() => {
    })) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, e, i) => {
        !t && e && (e.body = i, e.statusCode = e.status, s(t, e, i))
      }) : this.isQuanX() ? $task.fetch(t).then(t => {
        const {statusCode: e, statusCode: i, headers: o, body: h} = t;
        s(null, {status: e, statusCode: i, headers: o, body: h}, h)
      }, t => s(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, s) => {
        try {
          const e = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
          this.ckjar.setCookieSync(e, null), s.cookieJar = this.ckjar
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {statusCode: e, statusCode: i, headers: o, body: h} = t;
        s(null, {status: e, statusCode: i, headers: o, body: h}, h)
      }, t => s(t)))
    }

    post(t, s = (() => {
    })) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) $httpClient.post(t, (t, e, i) => {
        !t && e && (e.body = i, e.statusCode = e.status, s(t, e, i))
      }); else if (this.isQuanX()) t.method = "POST", $task.fetch(t).then(t => {
        const {statusCode: e, statusCode: i, headers: o, body: h} = t;
        s(null, {status: e, statusCode: i, headers: o, body: h}, h)
      }, t => s(t)); else if (this.isNode()) {
        this.initGotEnv(t);
        const {url: e, ...i} = t;
        this.got.post(e, i).then(t => {
          const {statusCode: e, statusCode: i, headers: o, body: h} = t;
          s(null, {status: e, statusCode: i, headers: o, body: h}, h)
        }, t => s(t))
      }
    }

    msg(s = t, e = "", i = "", o) {
      this.isSurge() || this.isLoon() ? $notification.post(s, e, i) : this.isQuanX() && $notify(s, e, i), this.logs.push("", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="), this.logs.push(s), e && this.logs.push(e), i && this.logs.push(i)
    }

    log(...t) {
      t.length > 0 ? this.logs = [...this.logs, ...t] : console.log(this.logs.join(this.logSeparator))
    }

    logErr(t, s) {
      const e = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      e ? $.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : $.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.message)
    }

    wait(t) {
      return new Promise(s => setTimeout(s, t))
    }

    done(t = null) {
      const s = (new Date).getTime(), e = (s - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, s)
}
