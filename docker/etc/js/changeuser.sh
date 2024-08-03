if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then
    userdel -f node
    if [getent group node]; then
        groupdel node;
    fi
    groupadd -g ${GROUP_ID} node
    useradd -l -u ${USER_ID} -g node node
    install -d -m 0755 -o node -g node /home/node

    chown --changes --no-dereference --recursive --from=33:33 ${USER_ID}:${GROUP_ID} /app /home/node
