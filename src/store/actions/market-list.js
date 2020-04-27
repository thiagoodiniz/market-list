export const Types = {
    LOAD_ML: '@marketLists/LOAD_REQUEST',
    LOAD_SUCCESS: '@marketLists/LOAD_SUCCESS',
    LOAD_ERROR: '@marketLists/LOAD_ERROR',

    CREATE_ML: '@marketLists/CREATE_REQUEST',
    CREATE_SUCCESS: '@marketLists/CREATE_SUCCESS',
    CREATE_ERROR: '@marketLists/CREATE_ERRORS',
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

    createMarketList: (marketList) => ({
        type: Types.CREATE_ML,
        marketList,
    }),

    createSuccess: () => ({
        type: Types.CREATE_SUCCESS
    }),

    createError: () => ({
        type: Types.CREATE_ERROR
    }),
}