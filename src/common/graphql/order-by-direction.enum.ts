import {registerEnumType} from "@nestjs/graphql";

export enum orderByDirection{
    ASC=1,
    DSC=-1
}
registerEnumType(orderByDirection,{name:'orderByDirection',description: "sort oder type !"});