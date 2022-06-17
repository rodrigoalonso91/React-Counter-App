import { getUser } from '../../base/05-funciones'

describe('Prueba 05-funciones', () => { 

    test('getUser should return a object', () => {
       
        const obj = {};

        const user = getUser();

        expect(typeof user).toEqual(typeof obj);

    });
});