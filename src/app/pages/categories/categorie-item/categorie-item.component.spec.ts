import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieItemComponent } from './categorie-item.component';

describe('CategorieItemComponent', () => {
  let component: CategorieItemComponent;
  let fixture: ComponentFixture<CategorieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
