import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-strings', () => { 
    
    test('getSaludo should return Hola <name>', () => { 
        
        const name = 'Rodrigo';

        const result = getSaludo(name);

        expect(result).toBe(`Hola ${name}`);
    });

});

