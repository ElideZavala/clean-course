let userId!: string;
fetchUser();

userId.toUpperCase();

declare const globalCache: any;
function fetchUser() {
    userId = globalCache.get("userId");
}
