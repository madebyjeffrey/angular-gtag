import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Gtag } from './gtag.service';
import { GtagConfig } from './interfaces';
import { GtagEventDirective } from './gtag-event.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GtagEventDirective],
  exports: [GtagEventDirective]
})
export class GtagModule {
  public static forRoot(config: GtagConfig): ModuleWithProviders<GtagModule> {
    return {
      ngModule: GtagModule,
      providers: [Gtag, { provide: 'config', useValue: config }]
    };
  }
}
