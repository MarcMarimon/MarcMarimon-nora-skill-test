import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/sequelize';

class Centro extends Model {
  public codigo!: string;
  public direccion!: string;
}

Centro.init({
  codigo: {
    type: DataTypes.STRING(5),
    primaryKey: true,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Centro',
  tableName: 'centros',
  timestamps: false,
});

export default Centro;
