import type { Child } from "./Child"
import type { Company } from "./Company"
import type { Profile } from "./Profile"

   export type Declaration = { 
    id?: string | number,
    picture?: string,
    comment?: string,
    status: string,
    registered: string,
    company: Company,
    child: Child,
    firstParent: Profile,
    secondParent: Profile
     }