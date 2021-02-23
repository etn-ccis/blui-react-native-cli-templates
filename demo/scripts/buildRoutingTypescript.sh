#!/bin/bash
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Removing Old App Files${NC}"
if [ -f ./App.js ];
    then rm App.js;
fi;

if [ -f ./App.tsx ];
    then rm App.tsx;
fi;

if [ -d ./pages ];
    then rm -rf pages;
fi;

if [ -d ./router ];
    then rm -rf router;
fi;

echo -e "${BLUE}Copying Project Files${NC}"
cp ../routing-typescript/template/App.tsx ./
cp -r ../routing-typescript/template/pages ./
cp -r ../routing-typescript/template/router ./

if [ ! -d ./assets ];
    then mkdir assets;
fi;

if [ ! -d ./assets/images ];
    then cd ./assets && mkdir images;
fi;

cp ../routing-typescript/images/Logo.svg ./assets/images
echo -e "${GRAY}Complete${NC}\r\n"