import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieItemComponent } from './categorie-item.component';

describe('CategorieItemComponent', () => {
  let component: CategorieItemComponent;
  let fixture: ComponentFixture<CategorieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
