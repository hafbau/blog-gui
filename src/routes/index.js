import UserLayout from "common/containers/UserLayout";
import AdminLayout from "common/containers/AdminLayout";

const indexRoutes = [
    { path: "/admin", component: AdminLayout },
    { path: "/", component: UserLayout },
];

export default indexRoutes;
