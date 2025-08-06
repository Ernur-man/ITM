import Subscribe from "../../components/Subscribe";
import FirstBlock from "./blocks/FirstBlock";
import SecondBlock from "./blocks/SecondBlock";
import { lazy } from "react";
import { Suspense } from "react";

const SubscribeLazy = lazy(() => import("../../components/Subscribe"));

export default function HomePage(){
    return(
        <>
            <FirstBlock/>
            <SecondBlock/>
            <Suspense fallback={<div>Loading...</div>}>
                <SubscribeLazy />   
            </Suspense>
        </>
    )
}