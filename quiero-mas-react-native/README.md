# quiero-mas-repo
## Installation instructions:
There's no need in keeping node_modules directory. 
If we have *package-log.json*, **npm install** will generate all dependecies in node_modules directory for us. 


## Troubleshooting
* If icons are not seen on Android, add this line to app/build.gradle:
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

* Permissions to user camera on Android. Add this lines to Manifest. 
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* To user camera, add this line to app/build.gradle, inside defaultConfig:
	missingDimensionStrategy 'react-native-camera', 'general'

	source: 
	https://www.toptal.com/react-native/react-native-camera-tutorial

* react-wants-ibuprofeno.sh is a file I created for fixing problems during compilations that occurs when you have compiled too many times. 

* react-wants-coffee.sh runs the app in a single terminal. 