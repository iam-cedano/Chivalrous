import { JSX, useState } from "react";
import { Switcher } from "./Auth.Switcher";

import AccessMethod from "../shared/AccessMethod.enum";

interface FieldInterface {
    label: string,
    type?: string
}

interface RememberCheckboxInterface {
    label: string
}

interface FormInterface {
    defaultAcessMethod: AccessMethod,
}

interface LoginButtonInterface {
    text: string
}

interface RegisterButtonInterface {
    text: string    
}

const getSafeId = (label: string): string => label.toLowerCase().replace(/\s+/g, '-');

function Form ({defaultAcessMethod}: FormInterface): JSX.Element {
    const [accessMethod, setAccessMethod] = useState(defaultAcessMethod);

    function handleChangeAccessMethod(accessMethod: AccessMethod): void {
        setAccessMethod(accessMethod);
    }

    return (
        <>
            <Switcher accessMethod={accessMethod} onChangeAccessMethod={handleChangeAccessMethod}  />
            
            {accessMethod == AccessMethod.LOGIN && <LoginForm />  }
            {accessMethod == AccessMethod.SIGN_UP && <RegisterForm />  }
        </>
    );
}

function LoginForm(): JSX.Element {
    return (
        <form method="post" action="/auth/login" className="mt-7" onSubmit={() => console.info('')}>
            <fieldset>
                <InputField label="Username"  />
                <PasswordField label="Password" />
                <RememberCheckbox label="Remember me" />
                <LoginButton text="Sign In" />
                
                <a className="block text-blue-500 text-center mt-5 text-[17px] font-[Montserrat]" href="https://google.com">Did you forget your password?</a>

                <input type="hidden" name="_token" value=""></input>
          
            </fieldset>
        </form>
    );
}

function RegisterForm(): JSX.Element {
    return (
        <form method="POST" action="/auth/register" className="mt-7">
            <fieldset>
                <InputField label="Username" />
                <InputField label="Email" />
                <PasswordField label="Password"/>
                <PasswordField label="Confirm password" />
                <RegisterButton text="Register" />
            </fieldset>
        </form> 
    );
}

function InputField({label}: FieldInterface): JSX.Element {
    const inputId = getSafeId(label);
    
    return (
        <div>
            <label htmlFor={inputId} className="block text-2xl font-[Montserrat]">
                {label}
            </label>
            <input 
                className="block border-solid border-stone-300 border-1 w-full p-2 text-2xl"
                type="text" 
                id={inputId}
                name={inputId}
                autoComplete="off"
            />
        </div>
    );
}

function PasswordField({label}: FieldInterface): JSX.Element {
    const inputId = getSafeId(label);
    
    return (
        <div className="mt-4">
            <label htmlFor={inputId} className="block text-2xl font-[Montserrat]">
                {label}
            </label>
            <input 
                className="block border-solid border-stone-300 border-1 w-full p-2 text-2xl"
                type="password" 
                id={inputId}
                name={inputId}
            />
        </div>
    );
}

function RememberCheckbox({label}: RememberCheckboxInterface): JSX.Element {
    const inputId = getSafeId(label);
    
    return (
    <div>
        <input 
            className="mr-2 relative top-[4px] size-5 mt-5"
            type="checkbox"
            id={inputId}
            name={inputId}
        />
        <label htmlFor={inputId} className="font-[Montserrat] text-[18px]">
            {label}
        </label>
    </div>
    );
}

function LoginButton({text}:LoginButtonInterface): JSX.Element {
    return (
        <input type="submit" value={text} className="rounded-2xl bg-black text-center flex align-middle text-white p-3 text-2xl font-[Montserrat] mt-5 m-auto w-[15rem] "/>
    );
}

function RegisterButton({text}:RegisterButtonInterface): JSX.Element {
    return (
        <input type="submit" value={text} className="rounded-2xl bg-black text-center flex align-middle text-white p-3 text-2xl font-[Montserrat] mt-5 m-auto w-[15rem] "/>
    );
}

export {Form};