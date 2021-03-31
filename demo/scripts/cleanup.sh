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

if [ -d ./src ];
    then rm -rf src;
fi;