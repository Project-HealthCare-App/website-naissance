import type { Company } from "./Company"
import type { Profile } from "./Profile"

   export type Declaration = { 
    id: string | number,
    picture: string,
    comment: string,
    status: string,
    registered: string,
    child: Profile,
    firstParent: Profile,
    secondParent: Profile,
    company: Company
 }