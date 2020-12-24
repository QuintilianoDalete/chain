import { v4 as uuidv4 } from 'uuid';

export default {
  auth: {
    usersList: [
      {
        name: 'admin',
        email: 'admin@gmail.com',
        password: '123456'
      }
    ],
    currentUser: {
      name: 'admin',
      email: 'admin@gmail.com',
      password: '123456'
    },
    isLogged: true
  },
  tasks: [
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: uuidv4(),
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    },
    {
      id: 8,
      title: "Testando um titilo",
      subtitle: "testando um subtitulo",
      description:
        "essa é a descrição de uma task de teste para usarmos como mock"
    }
  ]

};