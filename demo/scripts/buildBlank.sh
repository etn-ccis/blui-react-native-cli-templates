#!/bin/bash
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

bash ./scripts/cleanup.sh

echo -e "${BLUE}Copying Project Files${NC}"
cp ../blank/template/App.js ./

if [ ! -d ./assets ];
    then mkdir assets;
fi;

if [ ! -d ./assets/images ];
    then cd ./assets && mkdir images;
fi;

cp ../blank/images/Logo.svg ./assets/images
echo -e "${GRAY}Complete${NC}\r\n"
