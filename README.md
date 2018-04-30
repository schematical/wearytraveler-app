# wearytraveler-app



# Debugging List Devices:
~/Android/Sdk/platform-tools/adb devices



# Build Android:
```
ionic cordova build android --prod --release
cd platforms/android/build/outputs/apk/
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../../../../../my-release-key.jks android-release-unsigned.apk schematical
 ~/Android/Sdk/build-tools/25.0.3/zipalign -v 4 android-release-unsigned.apk WearyTraveler.apk
```
