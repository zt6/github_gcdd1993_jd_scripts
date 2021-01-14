FROM alpine
LABEL AUTHOR="Gcdd1993 https://github.com/gcdd1993"

RUN set -ex \
        && sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
        && apk update && apk upgrade \
        && apk add --no-cache tzdata moreutils git nodejs npm curl jq \
        && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
        && echo "Asia/Shanghai" > /etc/timezone

RUN git clone https://gitee.com/qq1398371419/jd_scripts /scripts \
        && cd /scripts \
        && ls \
        && git checkout master \
        && mkdir logs \
        && npm install \
        && cd /tmp \
        && npm install request

ENV JD_COOKIE=''

COPY entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /scripts

ENTRYPOINT ["entrypoint.sh"]
