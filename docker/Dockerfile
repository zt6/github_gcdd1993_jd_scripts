FROM node:lts-alpine3.13

LABEL AUTHOR="gcdd1993" \
      VERSION=0.1.6

ENV DEFAULT_LIST_FILE=crontab_list.sh \
    CUSTOM_LIST_MERGE_TYPE=append \
    COOKIES_LIST=/scripts/logs/cookies.list \
    REPO_URL=https://gitee.com/qq1398371419/left1.git \
    REPO_BRANCH=master

RUN set -ex \
  && sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
  && apk update \
  && apk upgrade \
  && apk add --no-cache bash tzdata git moreutils curl jq openssh-client \
  && rm -rf /var/cache/apk/* \
  && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo "Asia/Shanghai" > /etc/timezone \
  && git clone -b $REPO_BRANCH $REPO_URL /scripts \
  && cd /scripts \
  && mkdir logs \
  && npm config set registry https://registry.npm.taobao.org \
  && npm install -g npm \
  && npm install \
  && cp /scripts/docker/docker_entrypoint.sh /usr/local/bin \
  && chmod +x /usr/local/bin/docker_entrypoint.sh

WORKDIR /scripts

ENTRYPOINT ["docker_entrypoint.sh"]

CMD ["crond"]
