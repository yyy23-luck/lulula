@echo off
setlocal
cd /d "%~dp0"
set "LIBRARY_NODE=node"
where node >nul 2>nul
if errorlevel 1 set "LIBRARY_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
"%LIBRARY_NODE%" quartz/bootstrap-cli.mjs build
pause
