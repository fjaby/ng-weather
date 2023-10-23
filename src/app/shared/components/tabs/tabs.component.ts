import {
    AfterContentInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    ContentChildren,
    OnDestroy,
    QueryList
} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {identity, Subscription} from "rxjs";

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit, OnDestroy {
    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>;
    private _tabsSubscription = Subscription.EMPTY;

    constructor(private cdRef: ChangeDetectorRef) {
    }

    ngAfterContentInit(): void {
        let activeTabs: TabComponent[] = this.tabs.filter((tab) => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0 && this.tabs.length !== 0) {
            this.selectTab(this.tabs.first);
        }
        this._tabsSubscription = this.tabs.changes.subscribe(() => {
            if (this.tabs.length !== 0) {
                this.selectTab(this.tabs.last)
            }
        })
    }

    selectTab(tab: TabComponent) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => {
            tab.active = false
        });

        // activate the tab the user has clicked on.
        tab.active = true;
        this.cdRef.detectChanges();
    }

    ngOnDestroy(): void {
        if (this._tabsSubscription) {
            this._tabsSubscription.unsubscribe();
            this._tabsSubscription = null;
        }
    }

    closeTab(tab: TabComponent) {
        tab.close();
    }

    trackbyTitle(index: number, item: TabComponent) {
        return item.title
    };
}
