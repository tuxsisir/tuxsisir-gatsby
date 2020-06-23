---
slug: "/cheatsheet/basic-postgres-commands"
date: "2018-02-08"
title: "Basic Postgresql Commands"
---


#### Create user, database and grant roles

- Drop database
```
$ drop database john_db;
```

- Create database
```
$ create database john_db;
```
- Create User
```
$ create user john;
```
or,
```
$ create user john with encrypted password 'john@password';
```

- Alter User
```
$ alter user john with encrypted password 'john@password';
```

- Grant Privileges
```
$ grant all privileges on database john_db to john;
```

---

#### Postgres Dumps


```sql
-- Export database

$ pg_dump -U {{db_user}} {{db_name}} > `date +%Y-%m-%d-%H:%M:%S`.pgsql

-- Import database

$ psql -U {{db_user}} {{db_name}} < db_backup_to_be_imported.pgsql
```
