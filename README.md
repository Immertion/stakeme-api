# Техническое задание stakeme

## API

### Установка

```bash
$ npm install
```

### Запуск

```bash
$ npm run start
```

### api

1. http://localhost:8080/api/block/:block ( GET ) 
2. http://localhost:8080/api/transactions/:hash ( GET )

## SQL

https://onecompiler.com/postgresql/42hzwyhjk

Минимизировать решил cost решил с помощью индексов(b-tree)