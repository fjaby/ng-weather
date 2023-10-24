import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
    @Input('tabTitle') title: string;
    @Output()
    closeTabEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(private cdRef: ChangeDetectorRef) {
    }

    private _active = false;

    get active(): boolean {
        return this._active;
    }

    @Input()
    set active(value: boolean) {
        this._active = value;
        this.cdRef.detectChanges();
    }

    close() {
        this.closeTabEvent.emit();
    }
}
