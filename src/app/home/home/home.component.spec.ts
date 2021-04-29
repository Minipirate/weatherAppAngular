import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/layout/footer/footer.component.spec.ts
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
=======
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
>>>>>>> 4c2fec8f7313160bd126b080bf12af9afa2d27f2:src/app/home/home/home.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/layout/footer/footer.component.spec.ts
    fixture = TestBed.createComponent(FooterComponent);
=======
    fixture = TestBed.createComponent(HomeComponent);
>>>>>>> 4c2fec8f7313160bd126b080bf12af9afa2d27f2:src/app/home/home/home.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
