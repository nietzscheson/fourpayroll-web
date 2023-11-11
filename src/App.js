import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users";
import authProvider from "./authProvider";
import { UserPoolId, ClientId } from "./config";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider({ UserPoolId, ClientId })}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
