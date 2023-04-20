/// <reference types="jest" />
export {};
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeWithinRange(floor: number, ceiling: number): CustomMatcherResult;
        }
    }
}
