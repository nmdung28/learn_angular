import { Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { Categories } from '../../untils/draft_data/categories';
import { BlogItems } from '../../untils/draft_data/blog_list';
import { NgFor, NgIf } from '@angular/common';
import { convertCategories, forbiddenNameValidator } from '../../untils/convert_data';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, FormsModule, NzAutocompleteModule,NgFor,NgIf],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent  {
  imageSrc!: string | ArrayBuffer | null;
  profileForm = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(4)]),
    summary: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    image: new FormControl(''),
    categories: new FormControl('', Validators.required),
    author: new FormControl(''),
  });
  inputValue?: string;
  options: any[] = [];
  initOptions: any[] = [];
  blogList=BlogItems
  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value) {
      this.options = this.initOptions;
    } else {
      this.options = this.initOptions.filter(i => i.label.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const defaultOptions = Categories.map((item) => { return { ...item, label: item?.name, value: item?.id } })
    this.options = defaultOptions
    this.initOptions = defaultOptions
  }
 
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
     
  }
  onSubmit() {
    if (this.profileForm.valid) {
      
    }
  }
  get titleValid() {
    return this.profileForm.get('title');
  }
  onUploadImage(event: Event) {
    const targetFile = event.target as HTMLInputElement
    if (targetFile.files && targetFile.files[0]) {
      const file = targetFile.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }
  onEditBlog(event:any){
    const categories= convertCategories(event.categories)
    this.profileForm.patchValue({
      title: event.title,
      summary: event.summary,
      content: event.content,
      // image: event.image,
      categories: categories.label,
      author:event.author
    })
    this.imageSrc = event.image
  }
  onReset(){
    console.log("submitted",this.profileForm.value);
  }
}
