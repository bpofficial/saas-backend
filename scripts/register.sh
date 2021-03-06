#!/bin/bash
# shellcheck disable=SC2207

PROJECTS=$(jq -r '.projects[] | select(.type == "application") | .root' ./nest-cli.json)
BOOTSTRAP_PATH=src/bootstrap-development.yaml
CONFIG_PATH=config.yml

echo "Service Registration system started"

for PROJECT_DIR in ${PROJECTS}; do
  if [ ! -f "./${PROJECT_DIR}/${BOOTSTRAP_PATH}" ]; then
    echo "./${PROJECT_DIR}/${BOOTSTRAP_PATH} not found, skipping service"
    continue
  fi

  echo ${PROJECT_DIR}/${BOOTSTRAP_PATH}
  SVC_NAME=$(yq e '.service.name' ./"${PROJECT_DIR}"/${BOOTSTRAP_PATH})
  echo "Registering ${SVC_NAME}"

  if [ ! -f "./${PROJECT_DIR}/${CONFIG_PATH}" ]; then
    echo "./${PROJECT_DIR}/${CONFIG_PATH} not found, skipping service"
    continue
  fi

  echo "**** ${PROJECT_DIR}"

  consul kv put server/config/"${SVC_NAME}" \@./"${PROJECT_DIR}"/${CONFIG_PATH}
done

echo "Service Registration system completed"
