#!/bin/bash
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

bash ./scripts/cleanup.sh

echo -e "${BLUE}Copying Project Files${NC}"
cp ../routing/template/App.js ./
cp -r ../routing/template/pages ./
cp -r ../routing/template/router ./

if [ ! -d ./assets ];
    then mkdir assets;
fi;

if [ ! -d ./assets/images ];
    then cd ./assets && mkdir images;
fi;

cp ../routing/images/Logo.svg ./assets/images
echo -e "${GRAY}Complete${NC}\r\n"