#!/bin/sh

CERTBOT_WORK_DIR_PATH=.certs
CERTBOT_WORK_DIR="--work-dir $CERTBOT_WORK_DIR_PATH --logs-dir $CERTBOT_WORK_DIR_PATH --config-dir $CERTBOT_WORK_DIR_PATH"

case "$1" in
    gen)
        certbot certonly -a manual -d matthieuharle.com $CERTBOT_WORK_DIR
        ;;
    renew)
        certbot renew $CERTBOT_WORK_DIR
        ;;
    *)
        echo "Use './certs gen' or './certs renew'" 1>&2;
        ;;
esac
