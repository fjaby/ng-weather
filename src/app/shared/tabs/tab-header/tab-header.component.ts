import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {TabsComponent} from "../tabs/tabs.component";

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent {
  @Output()
  select: EventEmitter<TabComponent> = new EventEmitter<TabComponent>()
  @Output()
  close: EventEmitter<TabComponent> = new EventEmitter<TabComponent>()
  @Input()
  tabs: QueryList<TabComponent>;

  selectTab(tab: TabComponent) {
    this.select.emit(tab)
  }

  closeTab(tab: TabComponent) {
    this.close.emit(tab)
  }

  trackbyTitle(index: number, item: TabComponent) {
    return item.title
  };
}
