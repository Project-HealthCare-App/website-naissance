import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import type { Declaration } from "@/types/Declaration"
import { create } from "@/services"
import { useState } from "react"
import { Link } from "react-router"

const REQUIRED_FIELD = "Ce champ est requis"

const schema = yup
    .object({
        picture: yup.string(),
        comment: yup.string(),
        status: yup.string().required(REQUIRED_FIELD).default("NEW"),
        registered: yup.string().required(REQUIRED_FIELD).default(`${new Date().toISOString()}`),
        company: yup.object({
            name: yup.string().required(REQUIRED_FIELD),
            address: yup.string().required(REQUIRED_FIELD),
        }),
        child: yup.object({
            gender: yup.string().required(REQUIRED_FIELD),
            firstName: yup.string().required(REQUIRED_FIELD),
            lastName: yup.string().required(REQUIRED_FIELD),
            birthDate: yup.string().required(REQUIRED_FIELD),
            birthTime: yup.string().required(REQUIRED_FIELD),
        }),
        firstParent: yup.object({
            gender: yup.string().required(REQUIRED_FIELD),
            firstName: yup.string().required(REQUIRED_FIELD),
            lastName: yup.string().required(REQUIRED_FIELD),
            email: yup.string().required(REQUIRED_FIELD),
            phone: yup.string().required(REQUIRED_FIELD),
        }),
        secondParent: yup.object({
            gender: yup.string().required(REQUIRED_FIELD),
            firstName: yup.string().required(REQUIRED_FIELD),
            lastName: yup.string().required(REQUIRED_FIELD),
            email: yup.string().required(REQUIRED_FIELD),
            phone: yup.string().required(REQUIRED_FIELD),
        }),

    })
    .required();

function DeclarationEdit() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Declaration>({
        resolver: yupResolver(schema) as any,
    });

    const [display, setDisplay] = useState("FORM");

    const onSubmit: SubmitHandler<Declaration> = async (data) => {
        const response = await create("declarations", data);
        const { status } = response;
        if (status === 201) {
            reset();
            setDisplay("SUCCESS");
        }

    }

    return (
        <article className="border border-gray-200 bg-white shadow-md rounded-md p-4 w-1/2 mx-auto" >
            {display === "FORM" ? (
                <>
                    <h1 className="text-xl font-bold mb-4">Déclaration de naissance</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* ENFANT */}
                        <h2 className="border-gray-900 border-b">Informations sur l'enfant</h2>
                        <div className="form-field">
                            <label htmlFor="child-gender">Civilité</label>
                            <select {...register("child.gender")} id="child-gender" >
                                <option value="">Sélectionner</option>
                                <option value="MR">Monsieur</option>
                                <option value="MME">Madame</option>
                                <option value="MLE">Mademoiselle</option>
                            </select>
                            <p className="text-red-600">{errors.child?.gender?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="child-Firstname">Prénom</label>
                            <input type="text"
                                id="child-Firstname"
                                placeholder="Prénom de l'enfant"
                                {...register("child.firstName")}
                            />
                            <p className="text-red-600">{errors.child?.firstName?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="child-Lastname">Nom</label>
                            <input type="text"
                                id="child-Lastname"
                                placeholder="Nom de l'enfant"
                                {...register("child.lastName")}
                            />
                            <p className="text-red-600">{errors.child?.lastName?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="child-Birthdate">Date et heure de Naissance</label>
                            <div className="flex justify-between items-center gap-2" >
                                <input type="date" id="child-Birthdate" placeholder="Date de Naissance" {...register("child.birthDate")} />
                                <p className="text-red-600">{errors.child?.birthDate?.message}</p>
                                <input type="time" id="child-Birthtime" placeholder="Heure de Naissance" {...register("child.birthTime")} />
                                <p className="text-red-600">{errors.child?.birthTime?.message}</p>
                            </div>
                        </div>

                        {/* PARENT 1 */}
                        <h2 className="border-gray-900 border-b mt-5">Informations sur le premier parent</h2>
                        <div className="form-field">
                            <label htmlFor="firstParent-gender">Civilité</label>
                            <select {...register("firstParent.gender")} id="firstParent-gender" >
                                <option value="">Sélectionner</option>
                                <option value="MR">Monsieur</option>
                                <option value="MME">Madame</option>
                                <option value="MLE">Mademoiselle</option>
                            </select>
                            <p className="text-red-600">{errors.firstParent?.gender?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstParent-Firstname">Prénom</label>
                            <input type="text"
                                id="firstParent-Firstname"
                                placeholder="Prénom du parent"
                                {...register("firstParent.firstName")}
                            />
                            <p className="text-red-600">{errors.firstParent?.firstName?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstParent-Lastname">Nom</label>
                            <input type="text"
                                id="firstParent-Lastname"
                                placeholder="Nom du parent"
                                {...register("firstParent.lastName")}
                            />
                            <p className="text-red-600">{errors.firstParent?.lastName?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstParent-email">Email</label>
                            <input type="email"
                                id="firstParent-email"
                                placeholder="Email du parent"
                                {...register("firstParent.email")}
                            />
                            <p className="text-red-600">{errors.firstParent?.email?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstParent-phone">Téléphone</label>
                            <input type="tel"
                                id="firstParent-phone"
                                placeholder="Téléphone du parent"
                                {...register("firstParent.phone")}
                            />
                            <p className="text-red-600">{errors.firstParent?.phone?.message}</p>
                        </div>

                        {/* PARENT 2 */}
                        <h2 className="border-gray-900 border-b mt-5">Informations sur le deuxième parent</h2>
                        <div className="form-field">
                            <label htmlFor="secondParent-gender">Civilité</label>
                            <select {...register("secondParent.gender")} id="secondParent-gender" >
                                <option value="">Sélectionner</option>
                                <option value="MR">Monsieur</option>
                                <option value="MME">Madame</option>
                                <option value="MLE">Mademoiselle</option>
                            </select>
                            <p className="text-red-600">{errors.secondParent?.gender?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="secondParent-Firstname">Prénom</label>
                            <input type="text"
                                id="secondParent-Firstname"
                                placeholder="Prénom du parent"
                                {...register("secondParent.firstName")}
                            />
                            <p className="text-red-600">{errors.secondParent?.firstName?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="secondParent-Lastname">Nom</label>
                            <input type="text"
                                id="secondParent-Lastname"
                                placeholder="Nom du parent"
                                {...register("secondParent.lastName")}
                            />
                            <p className="text-red-600">{errors.secondParent?.lastName?.message}</p>
                        </div>secondParent
                        <div className="form-field">
                            <label htmlFor="secondParent-email">Email</label>
                            <input type="email"
                                id="secondParent-email"
                                placeholder="Email du parent"
                                {...register("secondParent.email")}
                            />
                            <p className="text-red-600">{errors.secondParent?.email?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="secondParent-phone">Téléphone</label>
                            <input type="tel"
                                id="secondParent-phone"
                                placeholder="Téléphone du parent"
                                {...register("secondParent.phone")}
                            />
                            <p className="text-red-600">{errors.secondParent?.phone?.message}</p>
                        </div>

                        {/* Hopital */}
                        <h2 className="border-gray-900 border-b mt-5">Informations sur le lieu de Naissance</h2>
                        <div className="form-field">
                            <label htmlFor="company-name">Nom de l'etablissement</label>
                            <input type="text"
                                id="company-name"
                                placeholder="Nom de l'établissement"
                                {...register("company.name")}
                            />
                            <p className="text-red-600">{errors.company?.name?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="company-address">Adresse de l'établissement</label>
                            <input type="text"
                                id="company-address"
                                placeholder="Adresse de l'établissement"
                                {...register("company.address")}
                            />
                            <p className="text-red-600">{errors.company?.address?.message}</p>
                        </div>
                        <div className="form-field">
                            <label htmlFor="comment">Avez vous des informations complémentaires à nous transmettre ?</label>
                            <textarea
                                id="comment"
                                placeholder="Avez vous des informations complémentaires à nous transmettre ?"
                                {...register("comment")}
                            >
                            </textarea>
                            <p className="text-red-600">{errors.comment?.message}</p>
                        </div>

                        <button type="submit">Enregistrer</button>
                    </form>
                </>
            ) : null}

            {display === "SUCCESS" ? (
                <article className="bg-white text-center px-10 py-10 rounded-md">
                    <h1 className="text-3xl mb-6">Votre déclaration de naissance a bien été enregistrée !!</h1>
                    <Link to={"/private/declarations"}
                        className="border border-blue-600 text-blue-600 px-6 py-4 rounded-sm hover:bg-blue-600 hover:text-white">
                        Afficher les Déclarations
                    </Link>
                </article>
            ) : null}

        </article >
    )
}

export default DeclarationEdit