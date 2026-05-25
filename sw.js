function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Agrega una nueva fila con los datos exactos que envía el HTML
    sheet.appendRow([
      data.fecha,
      data.nombre,
      data.semestre, // <- Aquí está la corrección clave para que coincida
      data.grupo,
      data.ansiedad,
      data.estres,
      data.bullying
    ]);
    
    // Responde a la página web que todo se guardó correctamente
    return ContentService.createTextOutput("Éxito").setMimeType(ContentService.MimeType.TEXT);
    
  } catch(error) {
    // Si ocurre un error, lo reporta
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}