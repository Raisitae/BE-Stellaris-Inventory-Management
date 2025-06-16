import { SaleItem } from "./saleItem.entity";

export class Sale {
    id: String;
    date: Date;
    total: number;
    clientName: string;
    products: SaleItem[];
}
