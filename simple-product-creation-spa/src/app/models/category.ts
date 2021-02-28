import { Product } from './Product';

export class Category {
    id: string | undefined;
    name: string | undefined;
    products: Product[];
}
