export const transformStringToUrl = (stringUrl: string): URL | null => {
    try {
        return new URL(stringUrl);
    } catch (error) {
        return null;
    }
};
