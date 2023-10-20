import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './components/tabs/tabs.component';
import {TabComponent} from './components/tab/tab.component';


@NgModule({
    declarations: [
        TabsComponent,
        TabComponent,
    ],
    exports: [
        TabsComponent,
        TabComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
