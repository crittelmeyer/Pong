osascript -e 'tell application "Terminal" to do script "sudo mongod --dbpath Documents/workspace/Pong/data/ --nssize 2 --smallfiles --noprealloc"'
osascript -e 'tell application "Terminal" to do script "sudo node Documents/workspace/Pong/server-mongo/server-mongo.js"'
osascript -e 'tell application "Terminal" to do script "sudo node Documents/workspace/Pong/server-http.js Documents/workspace/Pong/"'

compass watch app