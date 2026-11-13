#!/bin/sh
# The `build` check: installs the locked dependencies and makes the production bundle with the `build` script
# (vite build, into dist/). The game has no tests. Nothing is deployed: the point is that it still builds.
# yggdrasil.yml runs it in the pinned Node image (Alpine: no bash, so this is POSIX sh) from the repository's root.
# By hand, from anywhere in the checkout:
#   docker run --rm -v "$PWD:/src" -w /src <image> sh ci/build.sh
set -eu

# The repository's root, wherever this is run from.
cd "$(dirname "$0")/.."

npm ci --no-audit --no-fund
npm run build
