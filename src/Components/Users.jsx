import { Link } from "react-router-dom"

const Users = () => {

    const adminImg = "https://img1.wsimg.com/isteam/ip/ad9f9611-18da-4adc-8824-90b6c54786d4/492851_admin_256x256.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"
    const lostItemImg = "https://previews.123rf.com/images/argus456/argus4561605/argus456160536116/57445256-lost-items-3d-rendering-a-red-shiny-sticker.jpg"
    const foundItemImg = "https://cdn.w600.comps.canstockphoto.com/lost-and-found-magnifying-glass-search-stock-illustrations_csp76806170.jpg"
    return (
        <div class="container text-center mt-5 py-5">
            <div class="row">
                <div class="col">

                    <div class="card mx-5" style={
                        { width: "18rem" }
                    }>
                        <img src={adminImg} class="card-img-top shadow-lg" alt="..."
                            style={
                                { height: "40vh" }
                            } />
                        <div class="card-body">
                            <h5 class="card-title">CAMPUS ADMIN</h5>
                            <Link to="/adminForm" class="btn btn-outline-primary">Select</Link>
                        </div>
                    </div>

                </div>
                <div class="col">

                    <div class="card" style={
                        { width: "18rem" }
                    }>
                        <img src={lostItemImg} class="card-img-top shadow-lg" alt="..." style={
                            { height: "40vh" }
                        } />
                        <div class="card-body">
                            <h5 class="card-title">Lost Item</h5>
                            <a href="#" class="btn btn-outline-primary">Select</a>
                        </div>
                    </div>

                </div>
                <div class="col">

                    <div class="card mx-5" style={
                        { width: "18rem" }
                    }>
                        <img src={foundItemImg} class="card-img-top shadow-lg" alt="..." style={
                            { height: "40vh" }
                        } />
                        <div class="card-body">
                            <h5 class="card-title">Found Item</h5>
                            <a href="#" class="btn btn-outline-primary">Select</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Users;