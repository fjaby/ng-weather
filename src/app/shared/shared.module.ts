import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './tabs/tabs/tabs.component';
import {TabComponent} from './tabs/tab/tab.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TabHeaderComponent } from './tabs/tab-header/tab-header.component';


@NgModule({
    declarations: [
        TabsComponent,
        TabComponent,
        SnackbarComponent,
        TabHeaderComponent,
    ],
    exports: [
        TabsComponent,
        TabComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
