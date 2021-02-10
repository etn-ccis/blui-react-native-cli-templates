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

echo -e "${BLUE}Copying Project Files${NC}"
cp templates/blank-typescript/template/App.tsx ./

if [ ! -d ./assets ];
    then mkdir assets;
fi;

if [ ! -d ./assets/images ];
    then cd ./assets && mkdir images;
fi;

cp templates/blank-typescript/template/pxblue-logo.png ./assets/images
cp templates/blank-typescript/template/Logo.svg ./assets/images
echo -e "${GRAY}Complete${NC}\r\n"

