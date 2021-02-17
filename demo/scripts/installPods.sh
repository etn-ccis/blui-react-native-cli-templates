#!/bin/bash
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Installing Pods${NC}"
cd ios && pod install

echo -e "${GRAY}Complete${NC}\r\n"