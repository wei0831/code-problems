#!/bin/bash
found_error=0

for dir in `find . -maxdepth 1 -name "js-*" -type d `
do
  if [ -d "${dir}" ]; then
      cd ${dir}

      echo "Testing...[" ${dir} "]"
      npm install -s > /dev/null

      grunt check &> grunt-output.log
      if cat grunt-output.log | grep -q 'Aborted'; then
        found_error=1
      fi
      cat grunt-output.log
      rm grunt-output.log

      npm test &> npmtest-output.log
      if cat npmtest-output.log | grep -q 'ERR!'; then
        found_error=1
      fi
      cat npmtest-output.log
      rm npmtest-output.log

      cd ..
  fi
done

exit ${found_error}
