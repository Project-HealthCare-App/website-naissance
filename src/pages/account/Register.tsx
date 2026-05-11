import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const REQUIRED_FIELD = "Ce champ est requis";

type RegisterCredentials = {
    firstName: string;
    lastName: string;
    civility: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    street: string;
    zip: string;
    city: string;
    country: string;
};

const schema = yup
    .object({
        firstName: yup.string().required(REQUIRED_FIELD),

        lastName: yup.string().required(REQUIRED_FIELD),

        civility: yup.string().required(REQUIRED_FIELD),

        email: yup
            .string()
            .email("Email invalide")
            .required(REQUIRED_FIELD),

        phone: yup.string().required(REQUIRED_FIELD),

        password: yup
            .string()
            .min(6, "Minimum 6 caractères")
            .required(REQUIRED_FIELD),

        confirmPassword: yup
            .string()
            .required(REQUIRED_FIELD)
            .oneOf(
                [yup.ref("password")],
                "Les mots de passe ne correspondent pas"
            ),

        street: yup.string().required(REQUIRED_FIELD),

        zip: yup.string().required(REQUIRED_FIELD),

        city: yup.string().required(REQUIRED_FIELD),

        country: yup.string().required(REQUIRED_FIELD),
    })
    .required();

function Register() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterCredentials>({
        resolver: yupResolver(schema),
    });

    const mutation = useMutation({
        mutationFn: (data: RegisterCredentials) =>
            create({
                url: "sign-up",
                body: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    civility: data.civility,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    role: "PUBLIC",
                    address: {
                        street: data.street,
                        zip: data.zip,
                        city: data.city,
                        country: data.country,
                    },
                },
            }),

        onSuccess: () => {
            reset();
            navigate("/activate");
        },
    });

    const onSubmit: SubmitHandler<RegisterCredentials> = async (data) => {
        mutation.mutate(data);
    };

    return (
        <div className="flex flex-col justify-center min-h-screen py-10">
            <div className="w-4/5 md:w-3/4 mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
                    Création de compte
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <div className="form-field">
                        <label>Civilité</label>

                        <select {...register("civility")}>
                            <option value="">Choisir</option>
                            <option value="MR">Monsieur</option>
                            <option value="MME">Madame</option>
                            <option value="MLLE">Mademoiselle</option>
                        </select>

                        <p className="text-red-600">
                            {errors.civility?.message}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-field">
                            <label>Prénom</label>

                            <input
                                type="text"
                                placeholder="Votre prénom"
                                {...register("firstName")}
                            />

                            <p className="text-red-600">
                                {errors.firstName?.message}
                            </p>
                        </div>

                        <div className="form-field">
                            <label>Nom</label>

                            <input
                                type="text"
                                placeholder="Votre nom"
                                {...register("lastName")}
                            />

                            <p className="text-red-600">
                                {errors.lastName?.message}
                            </p>
                        </div>
                    </div>



                    <div className="form-field">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Votre email"
                            {...register("email")}
                        />

                        <p className="text-red-600">
                            {errors.email?.message}
                        </p>
                    </div>

                    <div className="form-field">
                        <label>Téléphone</label>

                        <input
                            type="text"
                            placeholder="+33 ..."
                            {...register("phone")}
                        />

                        <p className="text-red-600">
                            {errors.phone?.message}
                        </p>
                    </div>


                    <div className="form-field">
                        <label>Mot de passe</label>

                        <div className="flex gap-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Votre mot de passe"
                                className="w-full"
                                {...register("password")}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="px-4 bg-gray-200 rounded-lg"
                            >
                                {showPassword ? "Masquer" : "Voir"}
                            </button>
                        </div>

                        <p className="text-red-600">
                            {errors.password?.message}
                        </p>
                    </div>


                    <div className="form-field">
                        <label>Confirmer le mot de passe</label>
                        <div className="flex gap-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirmer le mot de passe"
                                {...register("confirmPassword")}
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="px-4 bg-gray-200 rounded-lg"
                            >
                                {showPassword ? "Masquer" : "Voir"}
                            </button>
                        </div>

                        <p className="text-red-600">
                            {errors.confirmPassword?.message}
                        </p>
                    </div>

                    <h2 className="text-xl font-semibold mt-6">Adresse</h2>

                    <div className="form-field">
                        <label>Rue</label>

                        <input
                            type="text"
                            placeholder="Rue"
                            {...register("street")}
                        />

                        <p className="text-red-600">
                            {errors.street?.message}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="form-field">
                            <label>Code postal</label>

                            <input
                                type="text"
                                placeholder="Code postal"
                                {...register("zip")}
                            />

                            <p className="text-red-600">
                                {errors.zip?.message}
                            </p>
                        </div>

                        <div className="form-field">
                            <label>Ville</label>

                            <input
                                type="text"
                                placeholder="Ville"
                                {...register("city")}
                            />

                            <p className="text-red-600">
                                {errors.city?.message}
                            </p>
                        </div>

                        <div className="form-field">
                            <label>Pays</label>

                            <input
                                type="text"
                                placeholder="Pays"
                                {...register("country")}
                            />

                            <p className="text-red-600">
                                {errors.country?.message}
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-3 rounded-lg"
                    >
                        Créer mon compte
                    </button>
                </form>

                <p className="text-center mt-4">
                    Déjà un compte ?{" "}
                    <Link to="/connexion" className="text-blue-700 font-bold">
                        Connexion
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;