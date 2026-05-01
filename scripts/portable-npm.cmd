@echo off
setlocal

set "ROOT=%~dp0.."
set "NODEDIR="

for /d %%D in ("%ROOT%\.tools\node-*-win-x64") do set "NODEDIR=%%~fD"

if not defined NODEDIR (
  echo Portable Node was not found under .tools.
  echo Install Node normally or restore the .tools Node runtime.
  exit /b 1
)

set "PATH=%NODEDIR%;%PATH%"
"%NODEDIR%\node.exe" "%NODEDIR%\node_modules\npm\bin\npm-cli.js" %*
exit /b %ERRORLEVEL%

