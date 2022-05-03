import { LikeWidgetModule } from './like-widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {

  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);

  });

  it('should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

});
