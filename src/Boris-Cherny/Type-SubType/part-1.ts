type ExistingUser = {
    id: number;
    name: string;
};

type NewUser = {
    name: string;
};

function deleteUser(user: { id?: number; name: string }) {
    delete user.id;
}

let existingUser: ExistingUser = {
    id: 123456,
    name: "Elide",
};

deleteUser(existingUser); // OK - ExistingUser has an `id` property

type LegacyUser = {
    id?: number | string;
    name: string;
};

let legacyUser: LegacyUser = {
    id: "7018",
    name: "Sofia",
};

// deleteUser(legacyUser);
