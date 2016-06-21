#!/bin/bash
for dir in `find . -name "js-*" -type d -maxdepth 1`
do
  if [ -d "${dir}" ]; then
      cd "${dir}"
      npm install -s 
      grunt check
      npm test
      cd ..
  fi
done
