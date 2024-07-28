import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/sequelize';

class Terapeuta extends Model {
  public id!: number;
  public nombre!: string;
  public telefono?: string;
  public email!: string;
  public codigoCentro!: string;
}

Terapeuta.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
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
  modelName: 'Terapeuta',
  tableName: 'terapeutas',
  timestamps: false,
});

export default Terapeuta;
