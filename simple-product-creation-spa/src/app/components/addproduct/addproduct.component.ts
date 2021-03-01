import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CreateProduct } from 'src/app/models/create-product';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  registerProduct: CreateProduct = new CreateProduct();
  newProduct: Product = new Product();
  categories: Category[] = [];
  error = '';
  products: Product[] = [];
  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ResetProducts(){
    this.newProduct = new Product();
    this.products = [];
  }
  CreateProduct(){
    if (this.registerProduct.categoryId !== '-1') {
      this.productService.CreateProduct(this.registerProduct).then((res) => {
        if (res.status){
          this.newProduct = res.data;
          this.products = [...this.products, this.newProduct];
        }
        else{
          console.error('Bir Hata Oluştu', res.errorMessage);
          this.error = 'Ürün Oluşturulamadı';
        }
      }).catch((err) => {
        console.error('Server a ulaşılamadı');
        this.error = 'Ürün Oluşturulamadı';
      });
    } else {
      this.error = 'Kategori Seçmelisiniz';
    }
  }

  CategoryChange(){
    if (this.registerProduct.categoryId !== '-1'){
      this.ResetProducts();
      this.productService.GetCategoryProductList(this.registerProduct.categoryId).then((res) => {
        if (res.status){
         this.products = res.dataList;
        }
        else{
          console.error('Bir Hata Oluştu', res.errorMessage);
          this.error = 'Ürünler Getirelemedi';
        }
      }).catch((err) => {
        console.error('Server a ulaşılamadı');
        this.error = 'Ürünler Getirelemedi';
      });
    }
    else{
      this.ResetProducts();
    }
  }

  getCategories(){
    this.categoryService.GetCategories().then(res => {
      if (res.status){
        this.categories = res.dataList;
      }
      else{
        console.error('Bir Hata Oluştu', res.errorMessage);
        this.error = 'Kategoriler Getirelemedi';
      }
    }).catch((err) => {
      console.error('Server a ulaşılamadı');
      this.error = 'Kategoriler Getirelemedi';
    });
  }

  ngOnInit() {
    this.getCategories();
  }
}
