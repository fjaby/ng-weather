import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter, HostListener,
    Input,
    Output,
    QueryList,
    ViewChild
} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
    selector: 'app-tab-header',
    templateUrl: './tab-header.component.html',
    styleUrls: ['./tab-header.component.css'],
    host: {
        "[style.display]": "'flex'"
    }
})
export class TabHeaderComponent implements AfterViewInit {
    @ViewChild('itemListContainer') itemListContainer: ElementRef;
    @ViewChild('itemList') itemList: ElementRef;
    @Output()
    select: EventEmitter<TabComponent> = new EventEmitter<TabComponent>()
    @Output()
    close: EventEmitter<TabComponent> = new EventEmitter<TabComponent>()
    @Input()
    tabs: QueryList<TabComponent>;
    isOverflowed = false;
    scrollPosition = 0;

    constructor(private cd: ChangeDetectorRef) {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.checkOverflow();
    }

    ngAfterViewInit() {
        this.checkOverflow();
    }

    selectTab(tab: TabComponent) {
        this.select.emit(tab)
    }

    closeTab(tab: TabComponent) {
        this.close.emit(tab)
    }

    trackbyTitle(index: number, item: TabComponent) {
        return item.title
    };

    checkOverflow() {
        const container = this.itemListContainer.nativeElement;
        const list = this.itemList.nativeElement;
        this.isOverflowed = list.scrollWidth > container.clientWidth && list.scrollWidth !== this.scrollPosition + container.clientWidth;
        this.cd.detectChanges();
    }

    scrollNext() {
        const container = this.itemListContainer.nativeElement;
        const list = this.itemList.nativeElement;
        this.scrollPosition += container.clientWidth;

        if (this.scrollPosition > list.scrollWidth - container.clientWidth) {
            this.scrollPosition = list.scrollWidth - container.clientWidth;
        }

        this.checkOverflow()
        list.style.transform = `translateX(-${this.scrollPosition}px)`;

    }


    scrollPrev() {
        this.scrollPosition -= this.itemListContainer.nativeElement.clientWidth;

        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }

        this.checkOverflow()
        this.itemList.nativeElement.style.transform = `translateX(-${this.scrollPosition}px)`;

    }
}
