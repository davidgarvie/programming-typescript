export {}

let user: {
    readonly firstName: string
} = {
    firstName: 'Ron'
}

// This is a compilation error because firstName is a read only property
// user.firstName = "Leslie"
