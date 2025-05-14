interface User {
    id: number;
    name: string;
    username: string
    email: string
    phone: number
}

const Page = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await data.json()
return (
 <div>
    {users.map((user) => (
    <li key={user.id}>
        <b>Name:</b>
        {user.name} <br/>
        <b>Email:</b> 
        {user.email} <br/>
        <b>phone:</b> 
        {user.phone}

    
        </li>
    ))};
</div>
 );
};

export default Page;