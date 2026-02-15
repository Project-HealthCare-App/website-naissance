import type { Company } from "./Company"
import type { Profile } from "./Profile"

   export type Request = { 
    id: string | number,
    picture: string,
    comment: string,
    status: string,
    registered: string,
    child: Profile,
    Parent: Profile,
    company: Company
 }