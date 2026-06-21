import { policies } from "../assets/policy"
import TourPolicies from "../components/tour-details/Policies"
export const Policy=()=>{
    console.log(policies)
    return(
        <>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
            <TourPolicies policies={policies}/>
        </div>
        </>
    )
}