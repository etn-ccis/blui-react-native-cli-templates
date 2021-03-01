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

if [ -d ./actions ];
    then rm -rf actions;
fi;

if [ -d ./constants ];
    then rm -rf constants;
fi;

if [ -d ./store ];
    then rm -rf store;
fi;