import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../models/base-response.class';
import {ApiService} from './api-service.abstract';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService{
  private categoryUrl = 'category';
  constructor(protected http: HttpClient) {
    super(http);
  }

  GetCategories(): Promise<BaseResponse<Category>>{
    return this.get<Category>(`${this.categoryUrl}/GetCategories`);
  }
}
