import { FormEvent, JSX, RefObject, useRef, useState } from "react";
import { Switcher } from "./Switcher";
import { AccessMethod, LoginResult } from "@/domain/entities";
import { authRepository, userRepository } from "@/data/repositories";
import { AxiosError } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface FieldInterface {
    label: string;
    type?: string;
    reference?: RefObject<HTMLInputElement | null>;
}

interface RememberCheckboxInterface {
    label: string;
}

interface FormInterface {
    defaultAcessMethod: AccessMethod;
}

interface LoginButtonInterface {
    text: string;
}

interface RegisterButtonInterface {
    text: string;
}

const getSafeId = (label: string): string => label.toLowerCase().replace(/\s+/g, '-');

function Form({ defaultAcessMethod }: FormInterface): JSX.Element {
    const getInitialAccessMethod = (): AccessMethod => {
        const hash = window.location.hash.toLowerCase();
        if (hash === '#sign-up' || hash === '#register') {
            return AccessMethod.SIGN_UP;
        }
        if (hash === '#sign-in' || hash === '#login') {
            return AccessMethod.LOGIN;
        }
        return defaultAcessMethod;
    };

    const [accessMethod, setAccessMethod] = useState(getInitialAccessMethod);

    function handlerChangeAccessMethod(accessMethod: AccessMethod): void {
        setAccessMethod(accessMethod);
    }

    return (
        <>
            <Switcher accessMethod={accessMethod} onChangeAccessMethod={handlerChangeAccessMethod} />

            {accessMethod == AccessMethod.LOGIN && <LoginForm />}
            {accessMethod == AccessMethod.SIGN_UP && <RegisterForm />}
        </>
    );
}

function LoginForm(): JSX.Element {
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handlerOnSubmit = (e: FormEvent) => {
        authRepository.getCSRFToken()
            .then(() => {
                const username = loginRef.current?.value;
                const password = passwordRef.current?.value;

                if (username == undefined || password == undefined) {
                    return;
                }

                return authRepository.login(username, password);
            })
            .then((data: LoginResult | undefined) => {
                if (data == undefined) {
                    return;
                }

                if (data.redirect != undefined) {
                    location.replace(data.redirect);
                }
            })

        e.preventDefault();
    };

    return (
        <form method="post" action="/auth/login" className="mt-7" onSubmit={handlerOnSubmit}>
            <fieldset>
                <InputField label="Username" reference={loginRef} />
                <PasswordField label="Password" reference={passwordRef} />
                <RememberCheckbox label="Remember me" />
                <LoginButton text="Sign In" />

                <a className="block text-blue-500 text-center mt-5 text-[17px] font-[Montserrat]" href="https://google.com">Did you forget your password?</a>
            </fieldset>
        </form>
    );
}

function RegisterForm(): JSX.Element {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
    const [passwordMatchError, setPasswordMatchError] = useState<string>('');

    const handleInputChange = (field: string) => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[field];
            return newErrors;
        });
        if (field === 'confirm-password') {
            setPasswordMatchError('');
        }
    };

    const handlerOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        setErrors({});
        setPasswordMatchError('');

        const username = usernameRef.current?.value?.trim();
        const email = emailRef.current?.value?.trim();
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        const newErrors: { [key: string]: string[] } = {};

        if (!username) {
            newErrors.username = ['Username is required'];
        }
        if (!email) {
            newErrors.email = ['Email is required'];
        }
        if (!password) {
            newErrors.password = ['Password is required'];
        }
        if (!confirmPassword) {
            setPasswordMatchError('Confirm password is required');
        }

        if (Object.keys(newErrors).length > 0 || !confirmPassword) {
            setErrors(newErrors);
            return;
        }

        if (password !== confirmPassword) {
            setPasswordMatchError('Passwords do not match');
            return;
        }

        authRepository.getCSRFToken()
            .then(() => userRepository.createUser(username as string, email as string, password as string))
            .then((data) => {
                location.replace('/home');
            })
            .catch((error: AxiosError<{ errors?: { [key: string]: string[] } }>) => {
                if (error.response?.data?.errors) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    return (
        <form method="POST" className="" onSubmit={handlerOnSubmit}>
            <fieldset>
                <InputFieldWithError 
                    label="Username" 
                    reference={usernameRef} 
                    errors={errors.username}
                    onChange={() => handleInputChange('username')}
                />
                <InputFieldWithError 
                    label="Email" 
                    reference={emailRef} 
                    errors={errors.email}
                    onChange={() => handleInputChange('email')}
                />
                <PasswordFieldWithError 
                    label="Password" 
                    reference={passwordRef} 
                    errors={errors.password}
                    onChange={() => handleInputChange('password')}
                />
                <PasswordFieldWithError 
                    label="Confirm password" 
                    reference={confirmPasswordRef} 
                    errors={passwordMatchError ? [passwordMatchError] : undefined}
                    onChange={() => handleInputChange('confirm-password')}
                />
                <RegisterButton text="Register" />
            </fieldset>
        </form>
    );
}

function InputField({ label, reference }: FieldInterface): JSX.Element {
    const inputId = getSafeId(label);

    return (
        <div>
            <label htmlFor={inputId} className="block text-2xl font-[Montserrat]">
                {label}
            </label>
            <input
                className="block border-solid border-stone-300 border w-full p-2 text-2xl"
                type="text"
                id={inputId}
                name={inputId}
                ref={reference}
                autoComplete="off"
            />
        </div>
    );
}

function PasswordField({ label, reference }: FieldInterface): JSX.Element {
    const inputId = getSafeId(label);

    return (
        <div className="mt-4">
            <label htmlFor={inputId} className="block text-2xl font-[Montserrat]">
                {label}
            </label>
            <input
                className="block border-solid border-stone-300 border w-full p-2 text-2xl"
                type="password"
                id={inputId}
                name={inputId}
                ref={reference}
            />
        </div>
    );
}

function RememberCheckbox({ label }: RememberCheckboxInterface): JSX.Element {
    const inputId = getSafeId(label);

    return (
        <div>
            <input
                className="mr-2 relative top-1 size-5 mt-5"
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

function LoginButton({ text }: LoginButtonInterface): JSX.Element {
    return (
        <input type="submit" value={text} className="rounded-2xl bg-black text-center flex align-middle text-white p-3 text-2xl font-[Montserrat] mt-5 m-auto w-[15rem] " />
    );
}

function RegisterButton({ text }: RegisterButtonInterface): JSX.Element {
    return (
        <input type="submit" value={text} className="rounded-2xl bg-black text-center flex align-middle text-white p-3 text-2xl font-[Montserrat] mt-5 m-auto w-[15rem] " />
    );
}

function InputFieldWithError({ label, reference, errors, onChange }: FieldInterface & { errors?: string[]; onChange?: () => void }): JSX.Element {
    const inputId = getSafeId(label);

    return (
        <div className="mt-4">
            <label htmlFor={inputId} className="block text-2xl font-[Montserrat]">
                {label}
            </label>
            <input
                className={`block border-solid border w-full p-2 text-2xl ${
                    errors && errors.length > 0 ? 'border-red-500' : 'border-stone-300'
                }`}
                type="text"
                id={inputId}
                name={inputId}
                ref={reference}
                autoComplete="off"
                onChange={onChange}
            />
            {errors && errors.length > 0 && (
                <div className="mt-2">
                    {errors.map((error, index) => (
                        <p key={index} className="text-red-500 text-base flex items-center gap-2">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

function PasswordFieldWithError({ label, reference, errors, onChange }: FieldInterface & { errors?: string[]; onChange?: () => void }): JSX.Element {
    const inputId = getSafeId(label);

    return (
        <div className="mt-4">
            <label htmlFor={inputId} className="block text-2xl font-[Montserrat]">
                {label}
            </label>
            <input
                className={`block border-solid border w-full p-2 text-2xl ${
                    errors && errors.length > 0 ? 'border-red-500' : 'border-stone-300'
                }`}
                type="password"
                id={inputId}
                name={inputId}
                ref={reference}
                onChange={onChange}
            />
            {errors && errors.length > 0 && (
                <div className="mt-2">
                    {errors.map((error, index) => (
                        <p key={index} className="text-red-500 text-base flex items-center gap-2">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export { Form };
