---
title: Tomar notas
tags:
  - workflowy
  - todoist
  - notion
  - notas
  - second brain
date: Sat Apr 02 2022 15:43:37 GMT+0200
---

Tengo una memoria de mierda.

Por eso me gusta apuntar cada web que me resulta interesante, las ideas que se me ocurren, la lista de la compra, etc.

Pero, ¿dónde puedo apuntar toda esta basura? pues os cuento mi historia:

## Telegram

Por si no lo conoces, [Telegram](https://telegram.org/) es una aplicación de mensajería MUY famosa. En Telegram uno tiene acceso a una conversación especial llamada _Mensajes guardados_ en la que puedes mandar cualquier mensaje (como una conversación cualquiera) y leer tus propios mensajes, pero nadie te contestará (como una conversación cualquiera).

Esa conversación, junto al [uso de tags](https://telegram.org/blog/replies-mentions-hashtags#hashtags) permite tener un sistema rudimentario de almacenar cualquier cosa que soporte Telegram: texto, imagenes, videos, audios, archivos en general, etc.

Usé este sistema para guardar información durante mucho tiempo, pero tenía varias limitaciones importantes:

- No se pueden poner recordatorios
- No se pueden agrupar los elementos a varios niveles
- No se pueden hacer listas con checkboxes
- La búsqueda no funciona muy bien

La principal ventaja de este sistema es que ya tengo instalada la aplicación y la uso a diario, así que era muy natural para mí poner ahí las cosas que quería recordar. Otra ventaja importante es que los mensajes se sincronizan automáticamente en la nube.

Para mi, lo de que no se puedan hacer listas con checkbox era un problema importante, por ejemplo, para la lista de la compra.

Hice un bot de telegram ([FileY](https://github.com/victor141516/FileY)) que permitía (porque ya no está online)

## Todoist

La siguiente herramienta que usé fue [Todoist](https://todoist.com/). Esta la conocí buscando en google "best task manager apps".

La verdad es que la aplicación está bastante bien. Desde el primer día que la usé ya me suscribí al plan de pago (por un año, porque no dejan muy claro que el pago es anual).

No tengo muchas quejas con respecto de esta app. Tiene sincronización en la nube, se pueden poner recordatorios, se pueden agrupar elementos (aunque no a varios niveles), la búsqueda funciona muy bien, y por supuesto, se pueden hacer listas con checkboxes.

Esto obviamente es una mejora importante con respecto a Telegram, y durante un tiempo la estuve usando para casi todo, pero había ciertas cosas para las que se me quedaba corta.

Por ejemplo, me gusta apuntar las ideas de apps/webs/negocios que se me ocurren, y me gusta poder detallar todos los detalles en los que pienso. Bien, pues con Todoist esto se vuelve un poco complicado: al no poder agrupar elementos a varios niveles hay cosas que no puedo detallar como me gustaría.

Entiendo que esta no es la utilidad de Todoist, pero sí es lo que yo quiero. Así que siguiente app.

## Notion

Un compañero de trabajo me había hablado de Notion hacía un tiempo, así que me era familiar. Cuando me descargué la app pensé que era justo lo que estaba buscando: tiene todo lo que puedas necesitar en cuanto al formato que quieras escribir, cantidad de widgets para dar forma a los pensamientos, y entre esas cosas está el tener listas de checkbox. Ah, y se pueden agrupar los elementos a varios niveles (!!!).

Al principio todo fue bastante bien, pero después de no mucho tiempo me empezó a molestar lo lenta que era tanto la web como la app de Android (la de iOS no la he usado así que no sé como funcionará). No era mucho, pero lo justo como para echarme para atrás cuando quería apuntar algo no muy importante.

También echaba en falta recordatorios en forma de notificaciones. La app soporta elementos con fechas, pero no te manda notificaciones, si no que tienes que ir a un menú dentro de la app.

Aún con todo, pensé que podría acabar acostumbrándome a que la app fuera un poco lenta, y a abrirla de vez en cuando para ver los próximos eventos.

Pero entonces se me ocurrió una idea, que aún tengo apuntada, y que me hubiera gustado implementar en Notion (ya que tiene soporte para algo parecido a custom widgets).

Mi idea era una app de notas que pudieras grabar con la voz, y que después con voice recognition te pasara las notas de voz a texto y te permitiera usar búsqueda de texto. Esto me permitiría grabar notas de audio con el móvil y así no tener que escribir.

Esta idea se me ocurrió porque hace no mucho tiempo empecé a grabar notas de voz en las que me explicaba a mí mismo el pensamiento que quisiera transcribir. Usaba esas notas de voz para aclarar las ideas y para que no se me olvidaran los detalles de lo que estaba pensando. Luego refinaba la idea y al final la transcribía en la app de turno (Notion en este caso).

Viendo Reddit descubrí una app que hacía justo esto, pero estaba bastante verde y ya no recuerdo cómo se llamaba.

## taskimo

Entramos en la recta final.

Os resumo mis necesidades porque creo que con tanto texto no acaba de estar claro:

- Quiero algo donde pueda plasmar mis pensamientos
- Para ello necesito que pueda estructurarlo agrupando elementos
- Los elementos deben poder marcarse como hechos
- Los elementos deben poder tener fechas para hacer recordatorios
- Sincroniación en la nube
- Las apps deberían funcionar rápido

Después de buscar y ver que todo el mundo recomendaba Notion, Todoist y otras de las más conocidas me dí por vencido. Pensé que la app que buscaba no existía. Así que me puse a hacerla yo.

Era una app donde cada elemento podía tener subelementos, con subelementos, con subelementos... en una especie de estructura de carpetas, te podías mover por la app usando sólo el teclado, y algunas cosas más que planeaba hacer.

Si queréis podéis ver el repo aquí: [https://github.com/victor141516/taskimo](https://github.com/victor141516/taskimo)

Pero entonces me topé con Workflowy.

## Workflowy

Workflowy es básicamente la app que yo estaba construyendo pero mucho mejor hecha y con más recorrido.

Cumple con todos los requisitos excepto con el de los recordatorios, que espero que añadan pronto.

De momento es la app que uso en mi día a día para apuntar las cosas que tengo que hacer, las ideas que quiero recordar, la lista de la compra, etc.

Para el tema de los recordatorios uso Google Calendar, que tiene un sistema de notificaciones bastante completo. Hasta que Workflowy en algún momento implemente un sistema de notificaciones.

También espero hagan una API pública, porque creo que es justo lo que necesitan para poder automatizar tareas y que la utilidad de la app se multiplique.

Y bueno, si en algún momento encuentro algún nuevo reemplazo ya actualizaré el post.
