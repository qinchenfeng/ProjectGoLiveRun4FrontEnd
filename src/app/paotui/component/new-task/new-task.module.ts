import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'app/shared/shared.module';
import {FormsWizardsComponent} from './new-task.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {PaotuiCommonModule} from '../../paotui.module';
import {ChangeExpectedRateDialogComponent} from './change-expected-rate-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export const routes: Route[] = [
    {
        path     : '',
        component: FormsWizardsComponent
    }
];

@NgModule({
    declarations: [
        FormsWizardsComponent,
        ChangeExpectedRateDialogComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        SharedModule,
        MatTabsModule,
        MatExpansionModule,
        MatDividerModule,
        MatListModule,
        PaotuiCommonModule,
        MatDialogModule,
        MatSnackBarModule,
    ]
})
export class FormsWizardsModule
{
}
