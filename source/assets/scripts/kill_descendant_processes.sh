#!/bin/bash

kill_descendant_processes() {
  local pid="$1"
  local and_self="${2:-false}"
  if children="$(pgrep -P "$pid")"; then
      for child in $children; do
          kill_descendant_processes "$child" true
      done
  fi
  if [[ "$and_self" == true ]]; then
      kill -15 "$pid"
  fi
}

kill_descendant_processes $1
