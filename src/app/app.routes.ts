import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { IfComponent } from './components/control/if/if.component';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [

    {
        path:'add-employee',
        component:AddEmployeeComponent
    },
    {
        path:'employee-list',
        component:EmployeeListComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'structural-directive',
        component:StructuralDirectiveComponent
    },
    {
        path:'attribute-directive',
        component:AttributeDirectiveComponent
    },
    {
        path:'if-statement',
        component:IfComponent
    },
    {
        path:'pipe',
        component: PipeComponent
    }


];
