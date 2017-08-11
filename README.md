# Community Salons

Backend development guide:

Technology used:
- express server
- node.js
- mongodb
- mongoose

Run `npm update` before testing the project.

Use `node server` to start testing the project.

Use `mongo` to access database.

To initialize mongodb: `mongod --dbpath app/data/db`

For mongodb on AWS EC2:

- log in to root admin: `sudo mongo admin --username root --password kRjYBDx1m56a`
- log in to general admin(used for website maintainence): `sudo mongo admin --username Bingxu --password community_salons`
- log in to remote admin: `mongo ec2-52-37-52-144.us-west-2.compute.amazonaws.com/testDB -u remote -p password`
- create new db collection: `show dbs` then `use dbname`

Close open DB access permission:
> go to /stack/mogodb/ set auth=true, comment out noauth=true in mongodb.conf
then do `sudo bash ctlscript.sh restart mongodb`