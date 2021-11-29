import { Link } from 'react-router-dom';

const Users = (props) => {

    const {name, address, username}=props.user;
    const {street, city}=address;
    return (
            <Link to={"/profile="+username} style={{textDecoration: 'none'}}>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{name}</h5>
                        <button type="button" className="btn btn-primary" data-bs-toggle="button" autocomplete="off">Add friend</button>
                        </div>
                        <p className="mb-1">{street}, {city}</p>
                    </div>
                </div>
            </Link>
    );
};

export default Users;