import type { Declaration } from '@/types/Declaration'
import { INITIAL_STATE, UPDATE_DECLARATION_STATUS, UPDATE_DECLARATIONS } from '@/utils/data';
import React, { useReducer } from 'react'
import { ApplicationReducer } from './ApplicationReducer';

type StateData = {
    declarations: Declaration[];
}
type Props = {
    state: StateData;
    updateDeclaration: (declarations: Declaration[]) => void;
    updateRequest?: (declarations: Declaration[]) => void;

    updateDeclarationStatus: ({ id, status }: { id: string, status: string }) => void;
}

//Créer le contexte pour stocker les données de la déclaration et les rendre accessibles
//  à tous les composants de l'application
export const ApplicationContext = React.createContext<Props>({} as Props);


function ApplicationContextProvider({ children }: any) {
    //const [state, setState] = useState<StateData>({ declarations: [] });

    const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE);
    const updateDeclaration = (declarations: Declaration[]) => {
        dispatch({ type: UPDATE_DECLARATIONS, data: declarations });
    }
    const updateDeclarationStatus = ({
        id, status }: { id: string, status: string }) => {
        dispatch({ type: UPDATE_DECLARATION_STATUS, data: { id, status } });
    }
    return (
        <ApplicationContext.Provider value={{ state, updateDeclaration, updateDeclarationStatus }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider