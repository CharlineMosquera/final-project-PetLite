//Crear la clase que manejará los productos
class ProductsController {
    constructor(currentId = 0) { 
        this.items = []
        this.currentId = currentId //Inicializar currentId
        this.loadProducts() //Método para cargar productos desde JSON
    } 

    //Agregar productos desde el JSON
    loadProducts() {
        const listProducts = [
            {
                "id": this.currentId++, 
                "name": "Br For Dog - Pure Puppy Lamb",
                "description": "Alimento balanceado que tiene como ingredientes cordero, harina de arroz integral, hojuelas de papas secas, semilla de linaza, pulpa de remolacha, harina de algarrobo, vitaminas, minerales, frutas y extractos de plantas",
                "price": 30.940,
                "img": "../img/productos/br-for-dogs-puppy.png",
                "category": "Comida",
                "subcategory": "Seco"
            },
            {
                "id": this.currentId++,
                "name": "Arquivet Fresh Free Run Turkey",
                "description": "Alimento completo semihúmedo para todo tipo de perros adultos, con un 55% de pavo fresco, un 20% de pescado fresco y un 25% de vegetales, frutas y hierbas medicinales. Prensado en frío, no extruido, procesamiento mínimo. Sin gluten, sin harinas cárnicas, sin colorantes ni aromatizantes artificiales. Cocinado lentamente y a baja temperatura.",
                "price": 204.736,
                "img": "../img/productos/arquivet-fresh-pavo.webp",                  
                "category": "Comida",
                "subcategory": "Semi-humedo"
            },
            {
                "id": this.currentId++,
                "name": "Hill’s Science Diet Adult 7+",
                "description": "Alimento específicamente formulado para ayudar a los perros de 7 años o más a mantenerse sanos a medida que envejecen. Desarrollado por científicos y nutriólogos de Hill’s, este alimento para perros de 7 años o más está hecho con ingredientes naturales más vitaminas, minerales y aminoácidos, y no contiene colores, sabores o conservadores artificiales. También proporciona una mezcla de antioxidantes clínicamente comprobada para favorecer un sistema inmunológico sano.",
                "price": 95.900,
                "img": "../img/productos/hills.png",
                "category": "Comida",
                "subcategory": "Seco"
            },
            {
                "id": this.currentId++,
                "name": "Alimento Húmedo en Lata para Perros Royal Canin Gastro Intestinal",
                "description": "Alimento especialmente formulado para perros con dificultades al digerir grasa. Has probado de todo para ayudar a tu perro con sus problemas gastrointestinales, sean vomito, diarrea, o falta de apetito. Y aunque las dietas caseras blandas son utilizadas frecuentemente para trastornos digestivos, tu peludo puede estar perdiendo algunos nutrientes fundamentales para su total recuperación.",
                "price": 28.600,
                "img": "../img/productos/Royal-canin.jpg",                  
                "category": "Comida",
                "subcategory": "Enlatado"
            },
            {
                "id": this.currentId++,
                "name": "Oven Baked Tradition Semi Humedo Adulto All Breed Chicken",
                "description": "Alimento semi húmedo para perros adultos de todas las razas en base a pollo.",
                "price": 25.990,
                "img": "../img/productos/oven-baked-tradition.jpg",
                "category": "Comida",
                "subcategory": "Semi-humedo"
            },
            {
                "id": this.currentId++,
                "name": "",
                "img": "",
                "description": "",
                "price": 0,
                "category": "Higiene",
                "subcategory": ""
            },
            {
                "id": this.currentId++,
                "name": "",
                "img": "",
                "description": "",
                "price": 0,
                "category": "Higiene",
                "subcategory": ""
            },
            {
                "id": this.currentId++,
                "name": "",
                "img": "",
                "description": "",
                "price": 0,
                "category": "Higiene",
                "subcategory": ""
            },
            {
                "id": this.currentId++,
                "name": "",
                "img": "",
                "description": "",
                "price": 0,
                "category": "Suplementos",
                "subcategory": ""
            },
            {
                "id": this.currentId++,
                "name": "",
                "img": "",
                "description": "",
                "price": 0,
                "category": "Suplementos",
                "subcategory": ""
            },
            {
                "id": this.currentId++,
                "name": "",
                "img": "",
                "description": "",
                "price": 0,
                "category": "Suplementos",
                "subcategory": ""
            },
            {
                "id": this.currentId++,
                "name": "Caja Junior Saludable",
                "img": "../img/productos/Caja-cachorro.png",
                "description": "Caja personalizada para cachorros en crecimiento, que incluye alimentos ricos en nutrientes para apoyar el desarrollo, suplementos vitamínicos para fortalecer el sistema inmunológico y productos de aseo para pieles delicadas.",
                "price": 170000,
                "category": "Caja de subscripción",
                "subcategory": "Cachorros"
            },
            {
                "id": this.currentId++,
                "name": "Caja Senior Vitalidad",
                "img": "../img/productos/Caja-senior.png",
                "description": "Esta caja está diseñada para perros mayores. Contiene alimentos altos en fibra, suplementos para las articulaciones, y productos de bienestar como cepillos suaves para pelajes maduros.",
                "price": 200000,
                "category": "Caja de subscripción",
                "subcategory": "Perros Mayores"
            },  
            {
                "id": this.currentId++,
                "name": "Caja Perrito Sensible",
                "img": "../img/productos/Caja-perro-sensible.png",
                "description": "Productos especializados para el cuidado del pelaje, incluyendo cepillos suaves, toallitas antibacteriales, y shampoo especializado para problemas de piel sensibles",
                "price": 130000,
                "category": "Caja de subscripción",
                "subcategory": "Cuidado Especial"
            }, 
            {
                "id": this.currentId++,
                "name": "Caja Energía Activa",
                "img": "../img/productos/Caja-energia.png",
                "description": "Esta caja es ideal para perros enérgicos. Contiene alimentos ricos en proteínas y grasas saludables, además de suplementos para mantener la energía y productos de aseo para un pelaje brillante.",
                "price": 190000,
                "category": "Caja de subscripción",
                "subcategory": "Energía"
            }
        ]

        //Llenar this.items con los datos JSON
        this.items = listProducts 
    }

    // Método para agregar un producto 
    addProducts(name, description, img, price, category, subcategory) {
        const newProduct = {
            id: this.currentId++,
            name: name,
            description: description,
            img: img,
            price: price,
            category: category,
            subcategory: subcategory
        }
        this.items.push(newProduct)
    }  
}

// Test: Inicializa una nueva instancia de ProductsController
const productsController = new ProductsController();

// Test: Agregar un nuevo producto
productsController.addProducts(
    "Producto de Prueba",
    "Descripción del producto de prueba",
    "../img/productos/prueba.png",
    100.00,
    "Comida",
    "Seco"
);

console.log(productsController.items); 