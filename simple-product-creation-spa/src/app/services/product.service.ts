import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../models/base-response.class';
import {ApiService} from './api-service.abstract';
import { Product } from '../models/Product';
import { CreateProduct } from '../models/create-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService {
  private productUrl = 'product';
  constructor(protected http: HttpClient) {
    super(http);
   }

   CreateProduct(product: CreateProduct): Promise<BaseResponse<Product>>{
     return this.post<Product>(`${this.productUrl}/CreateProduct`, product);
   }
   GetCategoryProductList(categoryId: string): Promise<BaseResponse<Product>>{
     return this.get<Product>(`${this.productUrl}/GetCategoryProductList`, {categoryId});
   }
}
