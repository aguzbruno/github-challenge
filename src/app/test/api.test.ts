import { getUsers } from '../api';

// Simulamos la respuesta de la API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, login: 'user1' }, { id: 2, login: 'user2' }]),
  })
) as jest.Mock;

describe('API functions', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada prueba
  });

  test('getUsers fetches a list of users', async () => {
    const users = await getUsers(0);

    // Verificamos que se haya hecho la llamada correcta
    expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_BASE_URL}/users?since=0&per_page=10`);
    expect(users).toHaveLength(2); // Verificamos que recibimos 2 usuarios
    expect(users[0].login).toBe('user1'); // Verificamos los datos
  });

  test('getUsers throws an error on failure', async () => {
    // Simulamos un error en la llamada a la API
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );

    await expect(getUsers(0)).rejects.toThrow('Error fetching users');
  });
});
