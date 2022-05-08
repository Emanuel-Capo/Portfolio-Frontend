import { NgModule } from '@angular/core';

import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {KnobModule} from 'primeng/knob';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {TimelineModule} from 'primeng/timeline';



@NgModule({
  exports:[
    AvatarModule,
    ButtonModule, 
    CardModule,
    FieldsetModule,
    KnobModule,
    MenubarModule,
    PanelModule,
    TabViewModule, 
    TimelineModule,
  ]
})
export class PrimengModule { }
