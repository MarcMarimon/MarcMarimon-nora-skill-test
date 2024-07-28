import { Model, DataTypes, Association, HasManyGetAssociationsMixin } from 'sequelize';
import sequelize from '../db/sequelize';
import Pregunta from './Pregunta';

class GrupoDePreguntas extends Model {
  public id!: number;
  public nombre!: string;
  public encuestaId!: number;

  public readonly preguntas?: Pregunta[];

  public getPreguntas!: HasManyGetAssociationsMixin<Pregunta>;

  public static associations: {
    Preguntas: Association<GrupoDePreguntas, Pregunta>;
  };
}

GrupoDePreguntas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    encuestaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'encuestas', 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'grupos_de_preguntas',
  }
);

export default GrupoDePreguntas;
