import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/sequelize';
import GrupoDePreguntas from './GrupoDePreguntas';

class Pregunta extends Model {
  public id!: number;
  public tipo!: string;
  public contenido!: string;
  public respuesta!: string;
  public grupoId!: number;
}

Pregunta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    respuesta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    grupoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'grupos_de_preguntas',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'preguntas',
  }
);

export default Pregunta;
