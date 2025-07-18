import { AbstractControl } from "@angular/forms";

export function UsernameValidation(control: AbstractControl){
    let username = control.value;
    // Example validation: username should not contain 'john'
    // Adjust the logic as per your requirements
    if (username && typeof username === 'string' && username.toLowerCase().includes('john')) {
        return { invalidUsername: true };
    }
    return null;
}