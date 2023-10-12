import { Product } from "./product.model";
import { DataSource } from "./datasource.model";

export class Model {
    private dataSource: DataSource;
    private products: Product[];
    private locator = (p: Product, id: number | any) => p.id == id;
    
    constructor() {
        this.dataSource = new DataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }
    
    getProducts(): Product[] {
        return this.products;
    }

   
}          
