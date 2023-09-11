# Xepelin-1

La url de la página de login es: https://xepelin-p1-unlkwyrvra-rj.a.run.app/

las credenciales son user: 'Test' y password: '1234'.

link de google sheets: https://docs.google.com/spreadsheets/d/1zmIYWU05rbd7frSJ19F3LyODemOA_5_F9by9poNXyV0

Incluí el código de Google Apps Script, el cual utilicé para generar el Trigger y darle formato al post que requiere el webhook.

Hice varias requests al webhook entregado, sin embargo, pese a que entregó mensaje de 'successful', no recibí el correo esperado. Por ello, adicionalmente al webhook que me dieron, puse también uno mío para ver si funcionaba, se pueden ver las solicitudes de post en https://webhook.site/#!/59ca89b2-a43b-47a9-8333-49fe37a40691/09c65760-17ec-4224-8250-60b99ad77aa3/1, que cumplen el formato solicitado y solo se triggerea con cambios en una única celda en la columna de tasa a la vez, no con otras columnas ni con cambios de múltiples celdas simultáneamente.

Como última acotación, no es necesario iniciar sesión de google para editar el embeded spreadsheet.