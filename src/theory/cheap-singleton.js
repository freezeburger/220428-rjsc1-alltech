

const CheapSingleton = Object.seal( {
    version:'1.1.1',
    date:Date.now()
});

export class CheapSingletonClass {
    constructor() {
       return CheapSingleton
    }
}