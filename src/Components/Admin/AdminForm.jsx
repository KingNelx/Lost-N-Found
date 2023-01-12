import { Link } from "react-router-dom";

const AdminForm = () => {
    return (
        <div className="container mt-5 col-md-5 border">
            <h2 className="text-center mt-3">Admin Login</h2>
            <form>
                <div class="mb-3 mt-5">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 ">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <Link to="/adminHome" class="btn btn-outline-primary mb-5">Submit</Link>
                <Link to="/adminHome" class="btn btn-outline-danger mb-5 mx-2">Back</Link>
            </form>
        </div>
    );
}

export default AdminForm;