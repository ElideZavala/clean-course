// type CompanyID = string;
// type OrderID = string;
// type UserID = string;
// type ID = CompanyID | OrderID | UserID;

// function queryForUser(id: UserID): ID {
//     return id as ID;
// }

// let id: CompanyID = "b4843361";
// queryForUser(id);

// ==================================================
// type brand
type CompanyID = string & { readonly brand: unique symbol }; // <-- esto es un "brand" type
type OrderID = string & { readonly brand: unique symbol }; // <-- esto es un "brand" type
type UserID = string & { readonly brand: unique symbol }; // <-- esto es un "brand" type
type ID = CompanyID | OrderID | UserID;

function CompanyID(id: string) {
    return id as CompanyID;
}

function OrderID(id: string) {
    return id as OrderID;
}

function UserID(id: string) {
    return id as UserID;
}

function queryForUser(id: UserID) {
    return id as ID;
}
let companyId = CompanyID("8a6076cf");
let orderId = OrderID("9994acc1");
let userId2 = UserID("d21b1dbf");

queryForUser(userId2); // Si lo permite por que es un UserID
queryForUser(companyId); // No lo permite por que es un CompanyID
