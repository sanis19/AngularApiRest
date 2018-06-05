export class ProductModel {
    constructor(
        public version:number,
        public productId:string, 
        public description:string,
        public imageUrl:string,
        public price:number
    ){}
}