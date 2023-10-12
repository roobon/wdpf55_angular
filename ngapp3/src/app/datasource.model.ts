import { Product } from "./product.model";

export class DataSource {
        private data:Product[]; 
        
        constructor(){
            this.data = new Array <Product>(
               new Product( 1, "White Shirt", "Shirt", 200),
               new Product( 2, "Blue Shirt", "Shirt", 250),
               new Product( 3, "Blue Shirt", "Shirt", 350),
               new Product( 4, "Black Blue Shirt", "Shirt", 450),
               new Product( 5, "Light Blue Shirt", "Shirt", 550),
               new Product( 6, "Navy Blue Shirt", "Shirt", 350),
               new Product( 7, "Green Shirt", "Shirt", 150),

            )
        }
        getData(): Product[]{
           return this.data;
        }
}