type FriendList = {
    count: number;
    friends: {
        firstName: string;
        lastName: string;
    }[];
};

// type FriendList = APIResponse['user']['friendList']

export type APIResponse = {
    user: {
        userId: string;
        friendList: FriendList;
    };
};

type Friend = FriendList["friends"][number];

export const resposeApi: APIResponse = {
    user: {
        userId: "123",
        friendList: {
            count: 5,
            friends: [
                {
                    firstName: "John",
                    lastName: "Doe",
                },
            ],
        },
    },
};

// como usar con APIResponse
function getAPIResponse(): Promise<APIResponse> {
    return fetch("/api").then((res) => res.json());
}

function renderFriendList(friendList: FriendList) {
    // ...
    return friendList;
}

// Usando el operador de indexación
// let response = await getAPIResponse()
// renderFriendList(response.user.friendList)
