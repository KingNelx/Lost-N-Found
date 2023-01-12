import { Link } from "react-router-dom"

const LostItems = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">LOST ITEMS</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/adminHome" class="btn btn-outline-success" type="submit">Back</Link>
                    </form>
                </div>
            </nav>

            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col">
                        <div class="card" style={
                            { width: "18rem" }
                        }>
                            <img src="https://images.samsung.com/is/image/samsung/p6pim/ph/2208/gallery/ph-galaxy-z-fold4-f936-sm-f936bzadphl-thumb-533084651?$264_264_PNG$"
                                class="card-img-top" alt="..." style={
                                    { height: "30vh" }
                                } />
                            <div class="card-body">
                                <h5 class="card-title">Samsung Galaxy A04</h5>
                                <p class="card-text">Owned By: <b>Jethro Roman Buendia</b></p>
                                <p class="card-text">Lost: <b>Near Calatagan</b></p>
                                <p class="card-text">Contact #: <b>09123456789</b></p>
                                <a href="#" class="btn btn-primary">VIEW</a>
                                <a href="#" class="btn btn-outline-primary mx-2">UPDATE</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-3" style={
                            { width: "18rem" }
                        }>
                            <img src="https://images.samsung.com/is/image/samsung/nz/galaxy-note20/gallery/nz-galaxy-z-fold2-f916-sm-f916bznaxnz-frontmysticbronze-thumb-273584511?$264_264_PNG$"
                                class="card-img-top" alt="..." style={
                                    { height: "30vh" }
                                } />
                            <div class="card-body">
                                <h5 class="card-title">Samsung Galaxy S21 Ultra</h5>
                                <p class="card-text">Owned By: <b>Jethro Roman Buendia</b></p>
                                <p class="card-text">Lost: <b>Near Calatagan</b></p>
                                <p class="card-text">Contact #: <b>09123456789</b></p>
                                <a href="#" class="btn btn-primary">VIEW</a>
                                <a href="#" class="btn btn-outline-primary mx-2">UPDATE</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-4" style={
                            { width: "18rem" }
                        }>
                            <img src="https://images.samsung.com/is/image/samsung/p6pim/ph/2202/gallery/ph-galaxy-s22-ultra-s908-sm-s908edrdphl-thumb-530760382?$264_264_PNG$"
                                class="card-img-top" alt="..." style={
                                    { height: "30vh" }
                                } />
                            <div class="card-body">
                                <h5 class="card-title">Samsung Galaxy A13</h5>
                                <p class="card-text">Owned By: <b>Jethro Roman Buendia</b></p>
                                <p class="card-text">Lost: <b>Near Calatagan</b></p>
                                <p class="card-text">Contact #: <b>09123456789</b></p>
                                <a href="#" class="btn btn-primary">VIEW</a>
                                <a href="#" class="btn btn-outline-primary mx-2">UPDATE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LostItems;