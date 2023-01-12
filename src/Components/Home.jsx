import Users from "./Users";

const Home = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Lost and Found Management System</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Users />    
        </div>
    );
}

export default Home;