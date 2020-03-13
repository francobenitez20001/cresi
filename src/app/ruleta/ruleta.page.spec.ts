import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RuletaPage } from './ruleta.page';

describe('RuletaPage', () => {
  let component: RuletaPage;
  let fixture: ComponentFixture<RuletaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuletaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RuletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
