import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [UniqueIdService]
})

export class LikeWidgetModule {

}
