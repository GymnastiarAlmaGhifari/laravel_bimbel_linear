import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePasswordToggle = () => {
        setPasswordVisible(!passwordVisible);
    };

    const passwordType = passwordVisible ? "text" : "password";

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="text-center mb-7">
                <h1 className="text-3xl font-bold">Login</h1>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="font-bold"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Masukkan Email"
                        className="mt-1 block w-full placeholder-Neutral-80/75 placeholder:font-thin "
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Kata Sandi" />

                    <div className="relative">
                        <TextInput
                            id="password"
                            type={passwordType}
                            name="password"
                            value={data.password}
                            placeholder="Masukkan kata sandi"
                            className="mt-1 block w-full placeholder-Neutral-80/75 placeholder:font-thin"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3 top-1"
                            onClick={handlePasswordToggle}
                        >
                            {passwordVisible ? (
                                <img
                                    src="/img/visibility=on.svg"
                                    alt="Hide password"
                                />
                            ) : (
                                <img
                                    src="/img/visibility=off.svg"
                                    alt="Show password"
                                />
                            )}
                        </button>
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            onChange={handleOnChange}
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </div>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-Primary-40 hover:text-gray-600"
                        >
                            Lupa Password?
                        </Link>
                    )}
                </div>

                <div className="flex items-center justify-end mt-8">
                    <PrimaryButton
                        className={`w-full rounded-xl bg-Primary-40 justify-center capitalize${
                            processing ? "opacity-25" : ""
                        }`}
                        disabled={processing}
                    >
                        Masuk
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
