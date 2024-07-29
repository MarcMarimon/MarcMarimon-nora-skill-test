import sequelize from '../db/sequelize';
import Centro from './Centro';
import Encuesta from './Encuesta';
import GrupoDePreguntas from './GrupoDePreguntas';
import Pregunta from './Pregunta';
import Paciente from './Paciente';
import Terapeuta from './Terapeuta';

GrupoDePreguntas.belongsTo(Encuesta, { foreignKey: 'encuestaId' });
GrupoDePreguntas.hasMany(Pregunta, {sourceKey: 'id', foreignKey: 'grupoId', as: 'preguntas'});
Pregunta.belongsTo(GrupoDePreguntas, { foreignKey: 'grupoId', as: 'grupo' });
Paciente.belongsTo(Terapeuta, { foreignKey: 'terapeutaId' });
Paciente.belongsTo(Centro, { foreignKey: 'codigoCentro' });
Terapeuta.belongsTo(Centro, { foreignKey: 'codigoCentro' });

export { sequelize, Centro, Encuesta, GrupoDePreguntas, Pregunta, Paciente, Terapeuta };
