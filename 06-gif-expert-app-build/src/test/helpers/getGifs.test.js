import { getGifs } from '../../helpers/getGifs.js'

describe('pruebas con getGifs Fetch', () => {

    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('Debe de traer no traer elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });


})