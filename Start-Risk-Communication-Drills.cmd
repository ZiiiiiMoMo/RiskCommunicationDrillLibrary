@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to start the local server.
  echo Install Node.js, then run this launcher again.
  pause
  exit /b 1
)
start "" "http://127.0.0.1:8080/"
node server.mjs
endlocal
