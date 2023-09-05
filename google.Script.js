}
 var TO_ADDRESS = "rathanaphon29@gmail.com"; // where to send form data

function doPost(e) {
  
     try {
        Logger.log(e); // the Google Script version of console.log see: Class Logger.   
               JSON.stringify(e. parameters)); 
      // return json success results return ContentService 
              .createTextOutput( JSON.stringify("result": "success".
                  "data": JSON.stringify(e.parameters) })) 
            .setMimeType (ContentService.MimeType.JSON):"
            
} catch(error) { // if error return this
       Logger.log(error); 
       return Content Service
      .createTextOutput (JSON.stringify(("result":"error", "error": e}))
          .setMimeType (ContentService.MimeType.JSON);
     }
}
