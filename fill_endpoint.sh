#!/bin/bash
set -e
if [ -z "$1" ]; then echo "Usage: ./fill_endpoint.sh <api_endpoint>"; exit 1; fi
EP="$1"
if [ ! -f "index.html" ]; then echo "index.html not found"; exit 1; fi
perl -0777 -pe "s/__CONTACT_API_ENDPOINT__/\"${EP}/g" -i index.html
echo "Replaced placeholder with $EP"