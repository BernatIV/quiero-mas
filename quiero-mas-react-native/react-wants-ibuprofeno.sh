
# This ibuprofeno cleans cache and react modules, and restarts the app.

rm -rf node_modules
yarn install
yarn start --reset-cache &
rm -rf /tmp/metro-* &
react-native run-android &