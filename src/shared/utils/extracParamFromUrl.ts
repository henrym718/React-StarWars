export const extractIdFromUrl = (url: URL | null, position: number): string | null => {
    try {
        if (url === null) {
            throw new Error("Url no valida");
        }
        const pathnameParts = url.pathname.split("/").filter((parts) => parts !== "");
        const param = pathnameParts[pathnameParts.length - position];
        return param || null;
    } catch (error) {
        return null;
    }
};
