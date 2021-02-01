#!/bin/bash
VERSION=0.1.4
REGISTRY=registry.cn-shanghai.aliyuncs.com
NAME=gcdd1993/jd_scripts
docker build . -t ${REGISTRY}/${NAME}:${VERSION}
docker push ${REGISTRY}/${NAME}:${VERSION}
