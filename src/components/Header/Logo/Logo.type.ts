import { IStoreConfigData } from "@/hooks/storeConfig/storeConfig.type";
import { ApolloError } from "@apollo/client";

export interface ILogo {
    classes?: string
}
export interface ILogoContainer extends ILogo {
    data: IStoreConfigData,
    error?: ApolloError
}