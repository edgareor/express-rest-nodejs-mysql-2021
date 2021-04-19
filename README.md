# Base para *Rest Server para MySQL*, tambien puede servir para BD Postgres, MariaDB, SQLite y Microsoft SQL Server, ya que ocupamos SEQUELIZE.

Recuerden ejecutar el comando `npm install` para obtener los modulos de node necesarios.

Luego ejecutar `node main.js` or `nodemon main.js`

```
El puerto configurado en el archivo .env es el 8182. 

Se trabajo sobre una base de datos local MySQL. En caso de ocupar una BD MySQL distinta debe proporcionar sus credenciales y modificar el modelo del objeto.

Modelo Actual:

{
    "id": INT
    "nombre": VARCHAR,
    "correo": VARCHAR,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
}
```

## Metodos de API:

### GET ALL - http://localhost:8182/api
### GET BY ID - http://localhost:8182/api/id
### POST - http://localhost:8182/api

{
    "nombre":"Nombre",
    "correo": "correo@gmail.com"
}

### PUT - http://localhost:8182/api/id

{
    "nombre":"Nombre",
    "correo": "correo@gmail.com"
}

### DELETE - http://localhost:8182/api/id

