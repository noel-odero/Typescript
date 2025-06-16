interface MyUser {
    name: string;
    id: string;
    email?: string;
    phone?: string;
}
// utility types
type MyUserOptionals = Partial<MyUser>
type RequiredMyUser = Required<MyUser>
type JustEmailAndName = Pick<MyUser, "email" | "name">;
type withoutID = Omit<MyUser, "id">




// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

export const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "Jack",
    id: "foo",
    email: "dont@email.com"
}, {
    email: "dont@gmail.com"
}))

const mapById = (users: MyUser[]): Record<string, MyUser> => {
    return users.reduce((a, v) => {
        return {
            ...a,
            [v.id]: v,
        }
    }, {})
} 

console.log(mapById([
    {
        id: "foo",
        name: "Mr. Foo"
    },
    {
        id: "baz",
        name: "Mrs. Baz"
    }
]))
