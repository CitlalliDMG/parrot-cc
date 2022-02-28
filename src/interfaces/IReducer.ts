export default interface IReducer {
    type: string;
    payload: {[key: string]: any};
}