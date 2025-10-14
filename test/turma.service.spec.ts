import { TurmaService } from '@/school/services/turma.service';

function makeRepo() {
  return {
    updateTurma: jest.fn().mockResolvedValue({ _id: '1', name: 'ok' }),
    getAllTurmas: jest.fn().mockResolvedValue([]),
    getTurmaById: jest.fn().mockResolvedValue(null),
    createTurma: jest.fn().mockResolvedValue({ _id: '2', name: 'nova' }),
    deleteTurma: jest.fn().mockResolvedValue(undefined),
    addDocente: jest.fn().mockResolvedValue(undefined),
    addAluno: jest.fn().mockResolvedValue(undefined),
  } as any;
}

describe('TurmaService', () => {
  it('update deve chamar o repository com os parâmetros', async () => {
    const repo = makeRepo();
    const svc = new TurmaService(repo);
    const res = await svc.update('1', { name: 'ok' } as any);
    expect(repo.updateTurma).toHaveBeenCalledWith('1', { name: 'ok' });
    expect(res).toEqual({ _id: '1', name: 'ok' });
  });

  it('create deve retornar turma criada', async () => {
    const repo = makeRepo();
    const svc = new TurmaService(repo);
    const res = await svc.create({ name: 'nova' } as any);
    expect(repo.createTurma).toHaveBeenCalledWith({ name: 'nova' });
    expect(res).toEqual({ _id: '2', name: 'nova' });
  });
});
