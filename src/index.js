const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
// endpoints/recursos
app.get("/", (req, res) => {
  console.log("req", req);
  res.send("hi from express........");
});

// serrvidor
app.listen(port, () => {
  console.log(`La aplicación esta activa en http://localhost:${port}`);
});

// productos
const productos = [
  { id: 1, barra: "barr01", dep: "hogar" },
  { id: 2, barra: "barr02", dep: "dispositivos" },
  { id: 3, barra: "barr03", dep: "bienestar" },
];

// metodo get
app.get("/h", (req, res) => {
  res.json(productos);
});

// metodo post
app.post("/h", (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.status(201).json({message: "creado" });
});

// metodo patch 
app.patch('/h/:id', (req,res)=>{
  const idToModify=req.params.id;
  const nuevoProducto = req.body;
  const posicion = productos.findIndex(producto => producto.id === parseInt(idToModify));
  productos[posicion]={...productos[posicion], ...nuevoProducto};
  res.status(200).json({message:'todo bien', id:idToModify})
});

// metodo delete 

app.delete('/h/:id', (req, res) => {
  const idToDelete=req.params.id;
  const posicion = productos.findIndex(producto => producto.id === parseInt(idToDelete));
  productos.splice(posicion,1)
  res.status(200).json({message:'murio', id:idToDelete})
})