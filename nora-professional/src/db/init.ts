import sequelize from './sequelize';
import Centro from '../models/Centro';
import Terapeuta from '../models/Terapeuta';
import Paciente from '../models/Paciente';

const initializeDatabase = async () => {
  await sequelize.sync({ force: true });

  const centro = await Centro.create({ codigo: 'ABC12', direccion: '123 Main St' });

  const terapeuta1 = await Terapeuta.create({
    nombre: 'Therapist One',
    telefono: '1234567890',
    email: 'therapist1@example.com',
    codigoCentro: centro.codigo,
  });

  const terapeuta2 = await Terapeuta.create({
    nombre: 'Therapist Two',
    email: 'therapist2@example.com',
    codigoCentro: centro.codigo,
  });

  const paciente1 = await Paciente.create({
    codigoPaciente: 'P123456',
    telefono: '0987654321',
    email: 'paciente1@example.com',
    nombre: 'Patient One',
    terapeutaId: terapeuta1.id,
    codigoCentro: centro.codigo,
  });

  const paciente2 = await Paciente.create({
    codigoPaciente: 'P654321',
    email: 'paciente2@example.com',
    nombre: 'Patient Two',
    terapeutaId: terapeuta2.id,
    codigoCentro: centro.codigo,
  });
};

initializeDatabase();
