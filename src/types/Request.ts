import type { Company } from "./Company"
import type { Profile } from "./Profile"
import type { Child } from "./Child"

   export type Request = { 
    id: string | number,
    picture?: string,
    comment?: string,
    status: string,
    registered: string,
    child: Child,
    Parent: Profile,
    company: Company
 }