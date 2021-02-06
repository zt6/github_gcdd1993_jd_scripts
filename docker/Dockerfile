FROM alpine:3.12
LABEL AUTHOR="Akira <e.akimoto.akira@gmail.com>" \
        VERSION=0.1.2 \
        UPDATE_CONTENT="更新内容较多，重新阅读仓库[Readme](https://github.com/lxk0301/jd_scripts/tree/master/docker)，更新镜像并更新配置后使用。"

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
        && apk update -f \
        && apk upgrade \
        && set -ex \
        && apk add --no-cache tzdata moreutils git nodejs npm curl jq\
        && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
        && echo "Asia/Shanghai" > /etc/timezone

RUN git clone https://gitee.com/qq1398371419/left1 /scripts \
        && cd /scripts \
        && git checkout master \
        && mkdir logs \
        && npm config set registry https://registry.npm.taobao.org \
        && npm install \
        && cd /tmp \
        && npm install request

ENV BUILD_VERSION=0.1.3 \
    DEFAULT_LIST_FILE=crontab_list.sh \
    CUSTOM_LIST_MERGE_TYPE=append

# github action 构建
COPY docker_entrypoint.sh /usr/local/bin
# 本地构建
# COPY ./docker_entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/docker_entrypoint.sh

WORKDIR /scripts

ENTRYPOINT ["docker_entrypoint.sh"]
