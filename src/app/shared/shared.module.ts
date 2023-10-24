import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './tabs/tabs/tabs.component';
import {TabComponent} from './tabs/tab/tab.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TabHeaderComponent } from './tabs/tab-header/tab-header.component';
import { NumbersOnlyDirective } from './directive/numbers-only.directive';


@NgModule({
    declarations: [
        TabsComponent,
        TabComponent,
        SnackbarComponent,
        TabHeaderComponent,
        NumbersOnlyDirective,
    ],
    exports: [
        TabsComponent,
        TabComponent,
        SnackbarComponent,
        NumbersOnlyDirective
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
