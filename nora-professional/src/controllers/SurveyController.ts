import { Request, Response } from 'express';
import Encuesta from '../models/Encuesta';
import GrupoDePreguntas from '../models/GrupoDePreguntas';
import Pregunta from '../models/Pregunta';

export const createSurvey = async (req: Request, res: Response) => {
  try {
    const { nombre, codigoCentro, preguntas } = req.body;

    if (!nombre || !codigoCentro || !preguntas || !Array.isArray(preguntas)) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const encuesta = await Encuesta.create({ codigoCentro });

    for (const grupoData of preguntas) {
      const grupo = await GrupoDePreguntas.create({
        nombre: grupoData.nombre,
        encuestaId: encuesta.id,
      });

      for (const pregunta of grupoData.preguntas) {
        await Pregunta.create({
          tipo: pregunta.tipo,
          contenido: pregunta.contenido,
          respuesta: pregunta.respuesta || '',
          grupoId: grupo.id,
        });
      }
    }

    res.status(201).json(encuesta);
  } catch (error) {
    console.error('Error creating survey:', error);
    res.status(500).json({ error: 'Failed to create survey' });
  }
};

export const calculateSurveyValue = async (req: Request, res: Response) => {
  try {
    const { encuestaId } = req.params;

    if (!encuestaId) {
      return res.status(400).json({ error: 'Invalid survey ID' });
    }

    const grupos = await GrupoDePreguntas.findAll({
      where: { encuestaId },
      include: [{
        model: Pregunta,
        as: 'preguntas',
      }],
    });

    console.log('Grupos:', grupos);

    let totalValue = 0;
    for (const grupo of grupos) {
      console.log('Grupo:', grupo);
      if (grupo.preguntas) { 
        for (const pregunta of grupo.preguntas) {
          console.log('Pregunta:', pregunta);
          if (pregunta.tipo !== 'Open') {
            totalValue += parseFloat(pregunta.respuesta || '0');
          }
        }
      }
    }

    res.status(200).json({ totalValue });
  } catch (error) {
    console.error('Error calculating survey value:', error);
    res.status(500).json({ error: 'Failed to calculate survey value' });
  }
};
