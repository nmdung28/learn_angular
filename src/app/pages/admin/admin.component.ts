import { Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { Categories } from '../../untils/draft_data/categories';
import { BlogItems } from '../../untils/draft_data/blog_list';
import { NgFor, NgIf } from '@angular/common';
import { convertCategories, forbiddenNameValidator } from '../../untils/convert_data';
import { Observable } from 'rxjs';
import { IBlogItem } from '../../types/blog';
import { Store } from '@ngrx/store';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, FormsModule, NzAutocompleteModule, NgFor, NgIf],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [BlogsService]
})
export class AdminComponent {
  imageSrc!: string | ArrayBuffer | null;
  profileForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    summary: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    image: new FormControl(''),
    categories: new FormControl('', Validators.required),
    author: new FormControl(''),
  });
  inputValue?: string;
  options: any[] = [];
  initOptions: any[] = [];
  blogList: IBlogItem[] = []
  items$!: Observable<IBlogItem[]>;
  currentDataItem: IBlogItem;
  isEditBlog: boolean = false
  constructor(private blogService: BlogsService) {
    this.currentDataItem = { id: "" }
  }
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
    this.blogList = this.blogService.blog_List
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }
  onSubmit() {
    if (this.profileForm.valid) {
      const isChangeCate = typeof this.profileForm.value.categories === 'object';
      const cate = this.profileForm.get('categories') as any
      const newData = {
        ...this.currentDataItem, ...this.profileForm.value, image: this.currentDataItem.image,
        categories: isChangeCate ? cate?.value.id : this.currentDataItem.id
      }
      this.blogService.onUpDateBlogList(newData as IBlogItem)
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
  onEditBlog(event: any) {
    this.isEditBlog = true
    const categories = convertCategories(event.categories)
    this.profileForm.patchValue({
      title: event.title,
      summary: event.summary,
      content: event.content,
      categories: categories.label,
      author: event.author
    })
    this.imageSrc = event.image
    this.currentDataItem = { ...event }
  }
  onReset() {
    this.profileForm.setValue({
      author: "",
      categories: "",
      content: "",
      image: "",
      summary: "",
      title: ""
    })
    this.imageSrc = ""
    this.isEditBlog = false
  }
}
