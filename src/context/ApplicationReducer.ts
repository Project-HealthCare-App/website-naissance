import {
  INITIAL_STATE,
  UPDATE_DECLARATION_STATUS,
  UPDATE_DECLARATIONS,
  UPDATE_REQUEST_STATUS,
  UPDATE_REQUESTS,
} from "@/utils";

function ApplicationReducer (state: any = INITIAL_STATE, action: any) 
{
        const { type, data } = action || {};
        switch (type)
         {
            //Declarations
                case UPDATE_DECLARATIONS:
                    state = {
                        ...state,
                        declarations: data
                    }
                    break;
                case UPDATE_DECLARATION_STATUS:
                    const {id: idToUpdate, status} = data;
                    const declarations = state.declarations;

                    const filterDeclarations = declarations.filter(
                                ({ id }: { id: string }) => id === idToUpdate,
                            );
                    const declarationToUpdate = filterDeclarations[0];
                    
                    const declarationsToKeep = declarations.filter(({id}: {id: string}) => id !== idToUpdate);

                    state = {
                        ...state,
                        declarations: [
                            ...declarationsToKeep, {
                                ...declarationToUpdate,
                                status : status,
                            },
                        ],
                    };
                break;    


                //Request
                case UPDATE_REQUESTS:
                    state = {
                        ...state,
                        requests: data
                    }
                    break;

                case UPDATE_REQUEST_STATUS: {
                    const { id: idToUpdate, status } = data;
                    const demandes = state.requests;

                    const filterRequests = demandes.filter(({id}: {id: string}) => id === idToUpdate);

                    const requestToUpdate = filterRequests[0];

                    const requestsToKeep = demandes.filter(
                                ({ id }: { id: string }) => id !== idToUpdate,
                                         );

                    state = {
                        ...state,
                        requests: [
                            ...requestsToKeep, {
                                ...requestToUpdate,
                                status : status,
                            },
                        ],
                };
                break;
            }

         }
                     return state;
}    

    export  {ApplicationReducer}