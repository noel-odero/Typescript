// interfaces are another way to create the structure for your data

interface ICustomer {
    name: string;
    address: string;
}


const milano: ICustomer = {
    name: 'Milano Corporation',
    address: "Germany"
}

class GoldenChase implements ICustomer {
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

const GCBangalore = new GoldenChase('Golden Chase Arcae', 'string' )


// the main difference between interfaces and type aliases is that interfaces can be extended and implemented, while type aliases cannot.
// interfaces can be used to define the shape of an object, while type aliases can be used to define a type that can be a primitive, union, or intersection type.