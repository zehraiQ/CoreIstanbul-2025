import { AbstractControl } from "@angular/forms";

export function PasswordValidation(control: AbstractControl){
    let form = control.value;
    let password = form.password;
    let confirmPassword = form.confirmPassword;

    if(password && confirmPassword && password !== confirmPassword){
        return { passwordMismatch: true };
    }
    return null;
}