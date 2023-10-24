import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {SnackbarService} from "./snackbar.service";

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
    protected show:boolean = false;
    protected message: string = '';
    protected type: string = 'success';
    private snackbarSubscription: Subscription;

    constructor(private snackbarService: SnackbarService) {
    }

    ngOnInit() {
        this.snackbarSubscription = this.snackbarService.snackbarState
            .subscribe(
                (state) => {
                    if (state.type) {
                        this.type = state.type;
                    } else {
                        this.type = 'success';
                    }
                    this.message = state.message;
                    this.show = state.show;
                    setTimeout(() => {
                        this.show = false;
                    }, 3000);
                });
    }

    ngOnDestroy() {
        this.snackbarSubscription.unsubscribe();
    }

}
