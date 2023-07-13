import Express from "express"
import Morgan from "morgan"

//* Initializing database *\\

let users = []

/* types

*   Usuario = {
*       alias: string,
*       nombre: string,
*       contactos: string []
*   }    

*   Mensaje = {
*       alias_origen: string,
*       alias_destino: string,
*       fecha: string,
*       texto: string
*   } 

*/

let mensajes = []

//* Initializing database *\\

//* Configuration *\\

const app = Express();
app.use(Morgan("dev"));

//* Configuration *\\

//* Routes *\\



//* Routes *\\

const PORT = 8000;
console.log(`Server running on port ${PORT}`);
