//game prompts user for login
//game saves login via server-mongo
//game prompts user to select "host" or "join"
//  if host: send "openHost" msg to server-mongo -> starts socket server and saves server info to db table openHosts
//  if join: send "getOpenHosts" msg to server-mongo -> gets list of open hosts (includes socket.io connection strings)
//after selecting a host:
//  game connects to socket, sending login session id, etc
//  socket server saves socket id to db with the given session id
//  init game message is broadcast and everything is initialized
//  once initialized, message is sent to socket server by all parties
//  start game message is broadcast and countdown is displayed
//  after countdown, ball is released and game loop starts
//    on tick: collision detections, etc. but also send updated paddle locations to socket server:
//      save state to db, broadcast positions