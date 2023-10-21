import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './components/tabs/tabs.component';
import {TabComponent} from './components/tab/tab.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
    declarations: [
        TabsComponent,
        TabComponent,
        TestComponent,
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
