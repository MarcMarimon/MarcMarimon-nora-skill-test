import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/sequelize';

class Paciente extends Model {
  public id!: number;
  public codigoPaciente!: string;
  public telefono?: string;
  public email!: string;
  public nombre!: string;
  public terapeutaId!: number;
  public codigoCentro!: string;
}

Paciente.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codigoPaciente: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  terapeutaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'terapeutas', 
      key: 'id',
    },
  },
  codigoCentro: {
    type: DataTypes.STRING(5),
    allowNull: false,
    references: {
      model: 'centros', 
      key: 'codigo',
    },
  },
}, {
  sequelize,
  modelName: 'Paciente',
  tableName: 'pacientes',
  timestamps: false,
});

export default Paciente;
