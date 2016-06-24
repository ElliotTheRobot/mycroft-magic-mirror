#!/bin/bash

StopProcess() {
  local pid="$1"
  local and_self="${2:-false}"
  if children="$(pgrep -P "$pid")"; then
      for child in $children; do
          StopProcess "$child" true
      done
  fi
  if [[ "$and_self" == true ]]; then
      kill -9 "$pid"
  fi
}

StopProcess $1
