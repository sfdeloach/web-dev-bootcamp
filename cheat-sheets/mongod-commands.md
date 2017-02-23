# MongoD Bash Commands

## Start MongoDB

Issue the following command to start mongod:

    sudo service mongod start	

## Verify that MongoDB has started successfully

Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading

    [initandlisten] waiting for connections on port <port>

where <port> is the port configured in /etc/mongod.conf, 27017 by default.

## Stop MongoDB

As needed, you can stop the mongod process by issuing the following command:

    sudo service mongod stop

## Restart MongoDB

Issue the following command to restart mongod:

    sudo service mongod restart
  
## Find out the status of MongoDB

Find out if mongo is inactive or active:

    sudo service mongod status

