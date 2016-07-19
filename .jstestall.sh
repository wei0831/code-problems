#!/bin/bash
found_error=0

for dir in `find . -maxdepth 1 -name "js-*" -type d `
do
  if [ -d "${dir}" ]; then
      cd ${dir}

      echo "[Testing]...[" ${dir} "]...[Start]"

      echo "[npm install]..."
      npm install -s > /dev/null

      echo "[grunt check]..."
      grunt check &> grunt-output.log
      if cat grunt-output.log | grep -q 'Aborted'; then
        cat grunt-output.log
        found_error=1
      fi
      rm grunt-output.log

      echo "[npm test]..."
      npm test &> npmtest-output.log
      if cat npmtest-output.log | grep -q 'ERR!'; then
        cat npmtest-output.log
        found_error=1
      fi
      rm npmtest-output.log

      echo "[Testing]...[" ${dir} "]...[End]"

      cd ..
  fi
done

exit ${found_error}
