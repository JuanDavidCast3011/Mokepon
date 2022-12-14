//Creando clase
class Mokepon{
    constructor (nombre, vida, ancho, alto, x = .5, y = .1){
        this.nombre = nombre; 
        this.foto = "Styles/Assets/mokepons_mokepon_"+nombre+"_attack.webp"; 
        this.vida = vida; 
        this.ataques = []; 
        this.x = x;
        this.y = y; 
        this.alto = alto/2;
        this.ancho = ancho/2; 
        this.mapaFoto = new Image();
        this.mapaFoto.src = "Styles/Assets/"+nombre+".webp"; 
    }
}
//Creando mokepones
let Hipodoge = new Mokepon('Hipodoge', 3, 202,197, .2, .7);
let Capipepo = new Mokepon('Capipepo', 3,179, 216, .1);
let Ratigueya = new Mokepon('Ratigueya', 3, 188, 210, .3);
let Charmander = new Mokepon('Charmander', 3, 420/2, 360/2, .3);
//AΓ±adiendo ataques
Hipodoge.ataques.push(
    {
        nombre: "Agua π§",
        id: "Agua"
    },
    {
        nombre: "Agua π§",
        id: "Agua"
    },
    {
        nombre: "Agua π§",
        id: "Agua"
    },
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Tierra π",
        id: "Tierra"
    }
);
Capipepo.ataques.push(
    {
        nombre: "Tierra π",
        id: "Tierra"
    },
    {
        nombre: "Tierra π",
        id: "Tierra"
    },
    {
        nombre: "Tierra π",
        id: "Tierra"
    },
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Agua π§",
        id: "Agua"
    }
);
Ratigueya.ataques.push(
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Tierra π",
        id: "Tierra"
    },
    {
        nombre: "Agua π§",
        id: "Agua"
    }
);
Charmander.ataques.push(
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Fuego π₯",
        id: "Fuego"
    },
    {
        nombre: "Tierra π",
        id: "Tierra"
    },
    {
        nombre: "Agua π§",
        id: "Agua"
    }
);
//Exportando los mokepones 
let mokepones = [];
mokepones.push(Hipodoge, Capipepo, Ratigueya, Charmander);
export {mokepones};