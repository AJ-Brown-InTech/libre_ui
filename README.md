# libre_ui

brew uninstall watchman
brew install watchman
watchman shutdown-server 
watchman watch-del-all
yarn start --reset-cache


rm -rf /tmp/metro-* worked for me.

This is the last suggestion of the message to try these things:

Clear watchman watches: watchman watch-del-all
Delete node_modules: rm -rf node_modules and run yarn install
Reset Metro's cache: yarn start --reset-cache
Remove the cache: rm -rf /tmp/metro-*
arthurparaschiv and chris-hatton reacted with thumbs up emoji

npx pod-install ios

