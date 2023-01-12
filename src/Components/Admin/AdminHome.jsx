import { Link } from "react-router-dom"

const AdminHome = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">ADMIN DASHBOARD</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col">
                        
                    </div>
                    <div class="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src="https://previews.123rf.com/images/argus456/argus4561605/argus456160536116/57445256-lost-items-3d-rendering-a-red-shiny-sticker.jpg" 
                            class="card-img-top" alt="..." style={
                                { height: "40vh" }
                            }/>
                            <div class="card-body">
                                <h5 class="card-title">Lost ITEMS</h5>
                                <p class="card-text">Items that has been lost by someone.</p>
                                <Link to="/lostItems" class="btn btn-primary">VIEW</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src="https://cdn.w600.comps.canstockphoto.com/lost-and-found-magnifying-glass-search-stock-illustrations_csp76806170.jpg"
                             class="card-img-top" alt="..." style={
                                { height: "40vh" }
                            } />
                            <div class="card-body">
                                <h5 class="card-title">Found ITEMS</h5>
                                <p class="card-text">Found Items that owned by someone.</p>
                                <Link to="/foundItems" class="btn btn-primary">VIEW</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;