#!/bin/bash
VERSION=0.1.5
REGISTRY=registry.cn-shanghai.aliyuncs.com
NAME=halmawork/jd_scripts
docker build . -t ${REGISTRY}/${NAME}:${VERSION}
docker push ${REGISTRY}/${NAME}:${VERSION}
