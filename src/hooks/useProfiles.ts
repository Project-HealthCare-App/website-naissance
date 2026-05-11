import { useContext, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { search, partialUpdate } from "@/services";

type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  civility: string;
};

function useProfiles() {
  const queryClient = useQueryClient();

  const {
    state: { token },
    updateTitle,
  } = useContext(GlobalApplicationContext);

  //  GET profils
  const { data: profiles = [], isLoading, error } = useQuery({
    queryKey: ["profiles"],
    queryFn: () => search({ path: "profiles", token }),
    retry: 2,
  });

  //  UPDATE profil (ex: rôle)
  const updateProfileMutation = useMutation({
    mutationFn: ({ path, data }: any) =>
      partialUpdate({ path, token, body: data }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
    },
  });

  const updateProfile = (id: number, data: any) => {
    updateProfileMutation.mutate({
      path: `profiles/${id}`,
      data,
    });
  };

  useEffect(() => {
    updateTitle({ title: "Profils" });
  }, []);

  return {
    profiles,
    isLoading,
    error,
    updateProfile,
  };
}

export { useProfiles };