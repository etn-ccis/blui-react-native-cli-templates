#!/bin/bash
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

bash ./scripts/cleanup.sh

echo -e "${BLUE}Copying Project Files${NC}"
cp ../authentication/template/App.js ./
cp -r ../authentication/template/src ./


if [ ! -d ./assets ];
    then mkdir assets;
fi;

if [ ! -d ./assets/images ];
    then cd ./assets && mkdir images;
fi;

cp ../authentication/images/Logo.svg ./assets/images
echo -e "${GRAY}Complete${NC}\r\n"