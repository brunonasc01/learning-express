const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

// module.exports = function Product(){

// }

const readProductsFromFile = (callback) => {
    const p = path.join(rootDir, 'data', 'products.json'); //le o arquivo na pasta ./data
    fs.readFile(p, (error, data) => {

        if(error) {
            callback ([]);
        } else if(data) { //se nao colocar o else, ele chama os dois callbacks...
            callback(JSON.parse(data));
        }
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        this.id = Math.random().toString()
        //versao refatorada
        readProductsFromFile(products => {
            const p = path.join(rootDir, 'data', 'products.json');
            products.push(this); //this refere-se ao proprio objeto
            fs.writeFile(p, JSON.stringify(products), (err) => { //transforma o json em texto e grava no arquivo
                console.log(err)
            });
        });

        //versao original
        // const p = path.join(rootDir, 'data', 'products.json'); //le o arquivo na pasta ./data

        // fs.readFile(p, (error, data) => { //le o conteudo do arquivo definido em p
        //     let products = []

        //     console.log(error)

        //     if(!error){
        //         products = JSON.parse(data); //transform um objeto em json
        //     }
        //     products.push(this); //this refere-se ao proprio objeto
        //     fs.writeFile(p, JSON.stringify(products), (err) => { //transforma o json em texto e grava no arquivo
        //         console.log(err)
        //     });
        // });
    }

    static fetchAll(callback){
        readProductsFromFile(callback);      
    }

    static findById(id, cb){
        readProductsFromFile(products => {
            const product = products.find(p => p.id === id );
            cb(product);
        });
    }
}