import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Daniel',
      sobrenome: 'Fernandez',
      email: 'danielvtfs@gmail.com',
      idade: '33',
      peso: 84,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
