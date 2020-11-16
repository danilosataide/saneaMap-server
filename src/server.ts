import express from 'express';

const app = express();

app.use(express.json());

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros Opcionais na rota
// Request Body: Parâmetros para criação/atualização de informações de entidades

const users = ['Daniel', 'José', 'Marcos'];

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];
    return response.json(user)
});

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    
    response.send(filteredUsers);
});

app.post('/users',  (request, response) => {
    const data = request.body;
    
    const user = {
        name: 'Danilo',
        email: 'danilo@gmail.com'
        
    };

    return response.json(user);
});

app.listen(3333);