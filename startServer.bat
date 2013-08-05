@echo off
start mongod.exe --dbpath data/ --nssize 2 --smallfiles --noprealloc
start node.exe server-mongo/server-mongo.js
start node.exe server-http.js
start "Sublime text editor" "C:\Program Files\Sublime Text 3\sublime_text.exe" "C:\Repos\Pong"
start http://localhost:1337/
start compass watch app