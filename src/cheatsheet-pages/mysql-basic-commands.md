---
slug: "/cheatsheet/basic-mysql-commands"
date: "2020-02-18"
title: "Basic Mysql Commands"
---

#### Mysql Dumps

```sql

-- Export Database
$ mysqldump -u{{mysql_user}} -p {{db_name}} > `date +%Y-%m-%d-%H:%M:%S`.sql

-- Import Database
$ mysql -uroot -p {{db_name}} < 2018-09-01.sql

```
