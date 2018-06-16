export const TEST_ACTION = 'TEST_ACTION';

export const testAction = (params) => {
    return {
        type: TEST_ACTION,
        payload: params
    };
};
