# Mongo Cheat Sheet

## mongod - database server
    $ mongod // cloud 9
    $ sudo service mongod start // localhost:27017

    // Additional daemon commands on localhost
    $ sudo service mongod stop
    $ sudo service mongod restart
    $ sudo service mongod status

## mongo - shell
    $ mongo

## Inside MongoDB session
##### Four most often used commands:
* insert
* find
* update
* delete

##### Examples:
    > help
    > show dbs
    > use [database]
    > db.[collection].insert({field: value, ...})
    > db.[collection].find({field: value})
    > db.[collection].update({field: value}, $set{key: value, ...})
    > db.[collection].remove({field: value})
    > db.[collection].drop() // drops [collection]
    > db.[collection].count() // number of documents
    > db.getCollectionNames()
    > db.dropDatabase()

    Optional remove command method
    > db.remove.<collection>({field: value}).limit(n)

    where n is the limit of documents to be removed

## Glossary

### _id
> A field required in every MongoDB document. The id field must have a unique value. You can think of the id field as the document’s **primary key**. If you create a new document without an id field, MongoDB automatically creates the field and assigns a unique BSON ObjectId.

### collection
> A grouping of MongoDB documents. A collection is the equivalent of an RDBMS **table**.

### document
> A **record** in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON. See Documents.

### field
> A name-value pair in a document. A document has zero or more fields. Fields are analogous to **columns** in relational databases.
