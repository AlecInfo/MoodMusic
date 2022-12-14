$containerName="CordovaSmartPhone"
$pathDocker="/tmp/MoodMusicV2"
$pathLocal="C:\Users\Alec.ptt\Documents\AttProgrammationSmartphone\MoodMusicV2\platforms\android\app\build\outputs\apk\debug"

$Host.UI.RawUI.ForegroundColor="green"
echo ">>>>>> Build Android Code ... `n"
$Host.UI.RawUI.ForegroundColor="white"
docker exec --workdir $pathDocker $containerName cordova run android
$Host.UI.RawUI.ForegroundColor="green"
echo ">>>>>> Install on Android Device ... `n"
$Host.UI.RawUI.ForegroundColor="white"
cd $pathLocal
adb install -r app-debug.apk
$Host.UI.RawUI.ForegroundColor="green"
echo "`n>>>>>> END `n"
$Host.UI.RawUI.ForegroundColor="white"
    