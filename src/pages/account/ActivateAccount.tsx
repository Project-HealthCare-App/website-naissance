import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    code: yup.string().required("Code requis"),
});

type ActivateType = {
    code: string;
};

function ActivateAccount() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ActivateType>({
        resolver: yupResolver(schema),
    });

    const mutation = useMutation({
        mutationFn: (data: ActivateType) =>
            create({
                url: "activate",
                body: data,
            }),

        onSuccess: () => {
            navigate("/connexion");
        },
    });

    const onSubmit = (data: ActivateType) => {
        mutation.mutate(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-11/12 md:w-1/3">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Activation du compte
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <div className="form-field">
                        <label>Code d'activation</label>
                        <input
                            type="text"
                            placeholder="Entrer le code"
                            {...register("code")}
                        />
                        <p className="text-red-600">
                            {errors.code?.message}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg"
                    >
                        Activer le compte
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ActivateAccount;


