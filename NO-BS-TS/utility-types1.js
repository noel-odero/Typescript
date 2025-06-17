"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }
const merge = (user, overrides) => {
    return Object.assign(Object.assign({}, user), overrides);
};
exports.merge = merge;
console.log((0, exports.merge)({
    name: "Jack",
    id: "foo",
    email: "dont@email.com"
}, {
    email: "dont@gmail.com"
}));
const mapById = (users) => {
    return users.reduce((a, v) => {
        return Object.assign(Object.assign({}, a), { [v.id]: v });
    }, {});
};
console.log(mapById([
    {
        id: "foo",
        name: "Mr. Foo"
    },
    {
        id: "baz",
        name: "Mrs. Baz"
    }
]));
