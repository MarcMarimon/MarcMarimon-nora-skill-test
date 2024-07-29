import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Encuesta extends Model {
  public id!: number;
  public codigoCentro!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Encuesta.init(
  {
    codigoCentro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Encuesta',
    tableName: 'encuestas',
  }
);

export default Encuesta;
