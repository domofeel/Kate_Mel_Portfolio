@echo off
cd /d "%~dp0"

set "NODE=C:\Users\domof\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE%" set "NODE=node"

"%NODE%" "scripts\static-server.mjs" --open

if errorlevel 1 (
  echo.
  echo Could not start the site. Keep this window open and send a screenshot.
  pause
)
