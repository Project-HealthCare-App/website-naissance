import type { Profile } from "@/types/Profile"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"

function DeclarationEdit() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Profile>()
    const onSubmit: SubmitHandler<Profile> = (data) => console.log(data);

    return (
        <article className="border border-gray-200 bg-white shadow-md rounded-md p-4 w-1/2 mx-auto" >
            <h1 className="text-xl font-bold mb-4">Déclaration de naissance</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="border-gray-900 border-b">Informations sur l'enfant</h2>
                <div className="form-field">
                    <label htmlFor="child-Firstname">Prénom</label>
                    <input type="text"
                        id="child-Firstname"
                        placeholder="Prénom de l'enfant"
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName &&
                        <p className="text-red-600">Le prénom est requis</p>
                    }
                </div>
                <div className="form-field">
                    <label htmlFor="child-Lastname">Nom</label>
                    <input type="text"
                        id="child-Lastname"
                        placeholder="Nom de l'enfant"
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName &&
                        <p className="text-red-600">Le nom est requis</p>
                    }
                </div>
                <div className="form-field">
                    <label htmlFor="child-Birthdate">Date et heure de Naissance</label>
                    <div className="flex justify-between items-center gap-2" >
                        <input type="date" id="child-Birthdate" placeholder="Date de Naissance" {...register("birthDate", { required: true })} />
                        {errors.birthDate &&
                            <p className="text-red-600">La date de naissance est requise</p>
                        }
                        <input type="time" id="child-Birthtime" placeholder="Heure de Naissance" {...register("birthTime", { required: true })} />
                        {errors.birthTime &&
                            <p className="text-red-600">L'heure de naissance est requise</p>
                        }
                    </div>
                </div>
                <button type="submit">Enregistrer</button>


            </form>
        </article>
    )
}

export default DeclarationEdit