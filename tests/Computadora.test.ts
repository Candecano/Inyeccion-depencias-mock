import { Computadora } from '../src/Computadora';
import { Icomponente } from '../src/componentes/Icomponente';



describe('Computadora', () => {
    it('debe instalar todos los componentes', () => {
      const mockComponente1: Icomponente = {
        nombre: 'Componente1',
        agregar: jest.fn(),
      };
  
      const mockComponente2: Icomponente = {
        nombre: 'Componente2',
        agregar: jest.fn(),
      };
  
      const builder = new Computadora([mockComponente1, mockComponente2]);
      builder.armar();
  
      expect(mockComponente1.agregar).toHaveBeenCalled();
      expect(mockComponente2.agregar).toHaveBeenCalled();
    });
  });