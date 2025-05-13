import Product from "../component/Product";
const Page = () => {
  console.log("Clurix Tech");
  return (
    <div>
      <Product />
      <h3>Users</h3>
      <ol>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
      </ol>
    </div>
  );
};

export default Page;