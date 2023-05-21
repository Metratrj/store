import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRouteComponent } from './cart-route/cart-route.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@store/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartRouteComponent,
      },
    ]),
  ],
  declarations: [CartRouteComponent],
})
export class CartModule {}
