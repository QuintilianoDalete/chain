import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: {
    usersList: [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "admin123"
      }
    ],
    currentUser: {},
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
