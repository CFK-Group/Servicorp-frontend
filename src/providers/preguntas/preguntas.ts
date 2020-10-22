import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Pregunta } from '../../models/preguntas.interface'

/*
  Generated class for the PreguntasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PreguntasProvider {

  constructor() {
    console.log('Hello PreguntasProvider Provider');
  }

  getPreguntasFibraEntel(): Observable<Pregunta[]> {
    return of([
      { obligatoria: true, necesitaFoto: false, formControlName: 'ot_servicorp', estado: 'activo', id: 684, glosa: 'OT ENTEL', orden: 1, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'folio_servicio', estado: 'activo', id: 683, glosa: 'FOLIO DE SERVICIO', orden: 2, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_1', estado: 'activo', id: 685, glosa: '¿Quién responde la encuesta es la misma persona que estuvo presente durante la instalación de los servicios?', orden: 3, tipo: 'si/no' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_2', estado: 'activo', id: 686, glosa: '¿Técnico se presentó con Mascarilla, Antiparra?', orden: 4, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_3', estado: 'activo', id: 687, glosa: '¿El Técnico respetó las recomendaciones de COVID (distanciamiento, etc.)?', orden: 5, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_4', estado: 'activo', id: 688, glosa: 'Al presentarse el Técnico. ¿Éste se identificó con su Nombre, RUT y Credencial?', orden: 6, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_5', estado: 'activo', id: 689, glosa: '¿El Técnico le solicitó permiso para Ingresar al domicilio?', orden: 7, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_6', estado: 'activo', id: 690, glosa: '¿El Técnico le informó los productos que usted contrató?', orden: 8, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_7', estado: 'activo', id: 691, glosa: 'Durante el proceso de instalación. ¿El Técnico fue amable, cordial y respetuoso?', orden: 9, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_8', estado: 'activo', id: 692, glosa: '¿El Técnico le informó los pasos a seguir para el cableado interior y exterior y los tiempos estimados?', orden: 10, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_9', estado: 'activo', id: 693, glosa: '¿El Técnico le informó el trabajo a realizar, le aconsejó y acordó el lugar donde se instalaría la Fibra Óptica y la ubicación de los equipos? ', orden: 11, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_10', estado: 'activo', id: 694, glosa: '¿El Técnico lo capacitó en el uso del (los) servicio(s)? (Control Remoto, Deco Android, Teléfono, Bandas 2,4 y 5 GHz).', orden: 12, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_11', estado: 'activo', id: 695, glosa: '¿El Técnico le respondió sus dudas y consultas?', orden: 13, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_12', estado: 'activo', id: 696, glosa: 'Posterior a la instalación del servicio ¿Le hicieron encuesta telefónica de Satisfacción del Servicio?', orden: 14, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_13', estado: 'activo', id: 697, glosa: '¿El Técnico dejó todo limpio y ordenado al finalizar la instalación?', orden: 15, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_14', estado: 'activo', id: 698, glosa: 'Al final de la instalación ¿El Técnico le dejó copia del formulario con los equipos instalados?', orden: 16, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_15', estado: 'activo', id: 699, glosa: '¿El Técnico le informó el número telefónico asignado?', orden: 17, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_16', estado: 'activo', id: 700, glosa: '¿El Técnico se presentó a realizar la instalación en el horario comprometido previamente?', orden: 18, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_17', estado: 'activo', id: 701, glosa: 'Se verifica que Fibra Óptica exterior Instalada es FTTH Norma G657.', orden: 19, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_18', estado: 'activo', id: 702, glosa: 'Se verifica que el trazado de la Fibra Óptica exterior es el acordado entre el cliente y el técnico.', orden: 20, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_19', estado: 'activo', id: 703, glosa: 'Se verifica que la Fibra Óptica en la parte exterior está libre de obstáculos (árbol, ramas, etc.)', orden: 21, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_20', estado: 'activo', id: 704, glosa: 'Se verifica el Uso pasamuros exterior.', orden: 22, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_21', estado: 'activo', id: 705, glosa: 'Se verifica que el ruteo y la fijación de la Fibra Óptica en la fachada se encuentra en Norma.', orden: 23, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_22', estado: 'activo', id: 706, glosa: 'Se verifica que la Roseta de Fibra Óptica instalada está de acuerdo a norma.', orden: 24, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_23', estado: 'activo', id: 707, glosa: 'Se verifica que en Roseta de Fibra Óptica, el Técnico dejó la reserva técnica de Fibra Óptica correctamente.', orden: 25, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_24', estado: 'activo', id: 708, glosa: 'Se verifica que el equipo telefónico quedó instalado y funcionando donde el Cliente lo solicitó o acordó.', orden: 26, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_25', estado: 'activo', id: 709, glosa: '¿El Técnico provocó daño en la vivienda?', orden: 27, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_26', estado: 'activo', id: 710, glosa: '¿Fue grave el daño?', orden: 28, tipo: 'texto' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_27', estado: 'activo', id: 711, glosa: 'Se verifica el uso Cable UTP Categoría 5e o superior color blanco para instalar los decodificadores Android interiores (todos).', orden: 29, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_28', estado: 'activo', id: 712, glosa: 'Se verifica que el recorrido del cable de Fibra Óptica se apega a las normas de instalación entregadas por Entel.', orden: 30, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_29', estado: 'activo', id: 713, glosa: 'Se verifica que la fijación o pegado de cable de Fibra Óptica es el correcto.', orden: 31, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_30', estado: 'activo', id: 714, glosa: 'Se verifica que los Conectores RJ45 están prensados correctamente.', orden: 32, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_31', estado: 'activo', id: 715, glosa: 'Se verifica el Uso de Pasamuros interior.', orden: 33, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_32', estado: 'activo', id: 716, glosa: 'Se configuró el nombre y la contraseña de la red según lo acordado con cliente.', orden: 34, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_33', estado: 'activo', id: 717, glosa: 'Se verifica que el Técnico realizó prueba de WIFI en el domicilio (al menos en 3 Zonas).', orden: 35, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_34', estado: 'activo', id: 718, glosa: 'Se verifica que si hubo problemas de cobertura WIFI el Técnico sugirio la instalación de Extensor de WIFI.', orden: 36, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_35', estado: 'activo', id: 719, glosa: 'El Técnico verificó que el servicio televisión quedó activo (con los canales contratados)?', orden: 37, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_36', estado: 'activo', id: 720, glosa: 'Se verifica que el Técnico configuró la red WIFI en ambas Bandas (2,4 y 5 GHz)?', orden: 38, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_37', estado: 'activo', id: 721, glosa: '¿El Técnico cumplió con los tiempos de instalación informados inicialmente?', orden: 39, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_38', estado: 'activo', id: 722, glosa: ' Valor de atenuación (Presupuesto Óptico) del acceso de Fibra Óptica. ', orden: 40, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_39', estado: 'activo', id: 723, glosa: ' Valor de voltaje Fase-Neutro ', orden: 41, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_40', estado: 'activo', id: 724, glosa: ' Valor de voltaje Fase-Tierra ', orden: 42, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_41', estado: 'activo', id: 725, glosa: 'Valor de voltaje Neutro-Tierra', orden: 43, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_42', estado: 'activo', id: 726, glosa: 'Decodificador Android 1 Velocidad de Descarga y Carga ', orden: 44, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: true, formControlName: 'resp_43', estado: 'activo', id: 727, glosa: 'Decodificador 1  "Para el tipo de transmisión de video " están todos los parámetros ok?', orden: 45, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_44', estado: 'activo', id: 728, glosa: 'Decodificador Android 2 Velocidad de Descarga y Carga ', orden: 46, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: true, formControlName: 'resp_45', estado: 'activo', id: 729, glosa: 'Decodificador 2  "Para el tipo de transmisión de video " están todos los parámetros ok?', orden: 47, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_46', estado: 'activo', id: 730, glosa: 'Decodificador Android 3 Velocidad de Descarga y Carga ', orden: 48, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: true, formControlName: 'resp_47', estado: 'activo', id: 731, glosa: 'Decodificador 3  "Para el tipo de transmisión de video " están todos los parámetros ok?', orden: 49, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_48', estado: 'activo', id: 732, glosa: 'Decodificador Android 4 Velocidad de Descarga y Carga ', orden: 50, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: true, formControlName: 'resp_49', estado: 'activo', id: 733, glosa: 'Decodificador 4  "Para el tipo de transmisión de video " están todos los parámetros ok?', orden: 51, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_50', estado: 'activo', id: 734, glosa: 'Velocidad  de internet de Subida', orden: 52, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_51', estado: 'activo', id: 735, glosa: 'Velocidad  de internet de Bajada', orden: 53, tipo: 'numero' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_52', estado: 'activo', id: 736, glosa: 'Auditor solicita Visita Técnica', orden: 54, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_53', estado: 'activo', id: 737, glosa: 'Motivo de la baja', orden: 55, tipo: 'combo-box', opciones: ['Velocidad de Internet', 'Telefonía', 'Canales Premium', 'Internet', 'N/A'] },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_54', estado: 'activo', id: 738, glosa: 'Serie de un equipo en el domicilio (ONT)', orden: 56, tipo: 'si/no' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_55', estado: 'activo', id: 739, glosa: 'Observación del auditor', orden: 57, tipo: 'texto' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_56', estado: 'activo', id: 740, glosa: 'Desde que se le instaló el servicio ¿ha tenido algún problema grave con el servicio?', orden: 58, tipo: 'si/no' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_57', estado: 'activo', id: 741, glosa: 'Si tuvo un problema ¿lo solucionaron rápidamente?', orden: 59, tipo: 'si/no' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_58', estado: 'activo', id: 742, glosa: '¿Cuál fue el problema?', orden: 60, tipo: 'combo-box', opciones: ['Velocidad de Internet', 'Portabilidad', 'Canales Premium', 'Intermitencia', 'Otra', 'N/A'] },
      { obligatoria: true, necesitaFoto: false, formControlName: 'resp_59', estado: 'activo', id: 743, glosa: 'Se escaló a plataforma', orden: 61, tipo: 'si/no/no aplica' },
      { obligatoria: true, necesitaFoto: false, formControlName: 'cod_decodificador', estado: 'activo', id: 744, glosa: 'Código Decodificador', orden: 62, tipo: 'cod_decodificador' },
    ])
  }

}
