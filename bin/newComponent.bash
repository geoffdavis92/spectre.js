#!/usr/bin/env bash

if hash create-react-component 2>/dev/null; then 
	create-react-component $1 --scope spectre.js
else 
	if [ ! -d "node_modules" ]; then
		printf "\nPlease install devDependencies by running\n";
		printf "    npm install\n";
		printf "  ...or...\n";
		printf "    yarn install\n";
		printf "...to install dependencies needed to run this script.\n\n"
		exit 1;
	else
		node node_modules/\@fuglu/create-react-component/index.js $1 --scope spectre.js
	fi
fi
