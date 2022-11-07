import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./pages/login/login.component";
import { RegistrationComponent } from "./pages/registration/registration.component";
import { AuthRoutingModule } from "./auth-routing.module";


@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})

export class AuthComponent {}