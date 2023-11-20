const { Router } = require('express');
const router = Router();

const usuario = require('../ensa.json');

//Crear Usuario a la base de datos de mongodb atlas.

router.get('/',(req,res)=>{
    res.send("OK");
})

router.post('/',(req,res)=>{
    console.log("recibido: \n"+JSON.stringify(req.body));
    //console.log("Me está llegando algo");
    const {user, pass} = req.body;
    //Validar si los datos están llegando completos
    if (user && pass){ 
        const id = usuario.length +1;
        const newUsuario = {...req.body,id}
        usuario.push(newUsuario);
        // console.log(newPeli);
        res.json("LLegó algo");
    }else{
        res.status(500).send("Error de procesado Peticion errónea")
    }
    
})
//Eliminar Usuario por el ID
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    console.log(req.params);
    res.send("eliminado")
})

module.exports = router;