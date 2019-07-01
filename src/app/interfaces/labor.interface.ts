export interface ILabor {
    id: string;
    createdAt: string;
    type: string;
    organizationAddress: string;
    address: string;
    position: string;
    occupation: string;
    startDate: string;
    income: string;
    workPhone: string;
    site: string;
}

export interface IPreviousLabor {
    id?: string;
    workPhone: string;
    position: string;
    phoneType?: string;
    startDate: string;
}
