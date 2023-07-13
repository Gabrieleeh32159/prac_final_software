import Express from "express"
import Morgan from "morgan"

//* Initializing database *\\

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

let users = [
    {
        alias: "cpaz",
        nombre: "Christian",
        contactos: [
            "lmunoz",
            "mgrau"
        ]
    },
    {
        alias: "lmunoz",
        nombre: "Luisa",
        contactos: [
            "mgrau"
        ]
    },
    {
        alias: "mgrau",
        nombre: "Miguel",
        contactos: [
            "cpaz"
        ]
    }
]

let mensajes = []

//* Initializing database *\\

//* Configuration *\\

const app = Express();
app.use(Morgan("dev"));

//* Configuration *\\

//* Routes *\\

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.get("/contactos", (req, res) => {
    myalias = req.query.params["mialias"];
    user = users.find(user => user.alias == myalias);
    req.json({
        status: 200,
        contactos: user.contactos
    })
})

//* Routes *\\

const PORT = 8000;
console.log(`Server running on port ${PORT}`);
