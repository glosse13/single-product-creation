import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  error = 'Kategoriler Getirelemedi';
  constructor(private categoryService: CategoryService) { }

  getCategories(){
    this.categoryService.GetCategories().then(res => {
      if (res.status){
        this.categories = res.dataList;
      }
      else{
        console.error('Bir Hata Oluştu', res.errorMessage);
      }
    }).catch((err) => {
      console.error('Server a ulaşılamadı');
    });
  }

  ngOnInit() {
    this.getCategories();
  }

}
