#! /bin/bash

declare -A environments;

ROOT="./.vscode"
desired_environment=$1;

environments["production"]="prod"
environments["development"]="dev"

if [ "${environments[$desired_environment]}" ]; then
    echo "${environments[$desired_environment]}";

    cp "$ROOT/tasks-${environments[$desired_environment]}.json" "$ROOT/tasks.json"

    exit 0;
fi

exit 1;