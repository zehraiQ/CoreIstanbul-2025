import { compare, contains, email, maxLength, minLength, prop, required } from "@rxweb/reactive-form-validators";

export class UserModel{
    @required({ message: 'Username is required' })
    @minLength({ value: 3, message: 'Username must be at least 3 characters long' })
    @maxLength({ value: 20, message: 'Username cannot exceed 20 characters' })
    username: string;
    @required({ message: 'Password is required' })
    @minLength({ value: 6, message: 'Password must be at least 6 characters long' })
    @maxLength({ value: 20, message: 'Password cannot exceed 20 characters' })
    password: string;
    @required({ message: 'Confirm Password is required' })
    @compare({ fieldName: 'password', message: 'Passwords do not match' })
    confirmPassword: string;
    @required({ message: 'Email is required', conditionalExpression: (x: UserModel)=> x.subscribe })
    @email({ message: 'Invalid email format' })
    email: string;
    @prop()
    subscribe: boolean;
    @prop()
    address: {
        country: string;
        city: string;
        street: string;
    };

    constructor(user?: UserModel) {
        this.username = user?.username || '';
        this.password = user?.password || '';
        this.confirmPassword = user?.confirmPassword || '';
        this.email = user?.email || '';
        this.subscribe = user?.subscribe || false;
        this.address = user?.address || { country: '', city: '', street: '' };
    }
}