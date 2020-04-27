export const Types = {
    LOAD_ML: '@marketLists/LOAD_REQUEST',
    LOAD_SUCCESS: '@marketLists/LOAD_SUCCESS',
    LOAD_ERROR: '@marketLists/LOAD_ERROR',
};

export const Creators = {
    loadMarketLists: () => ({
        type: Types.LOAD_ML,
    }),
    loadMarketListsSuccess: (marketLists) => ({
        type: Types.LOAD_SUCCESS,
        marketLists,
    }),
    loadMarketListsError: () => ({
        type: Types.LOAD_ERROR,
    }),

}