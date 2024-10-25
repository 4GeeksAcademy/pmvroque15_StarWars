import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				
			<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>

					<ul className="dropdown-menu">
						{
							store.favs.length > 0 ? 
							(store.favs.map(
								(fav, index) => 
									
									{  
									console.log(fav, "faveeee")
									return (<li key={index}><a className="dropdown-item" href="#">{fav}</a></li>) 
									}
							)
						) : (<li>No Favorites </li>)  
						} 
						
					</ul>
					</div>
			</div>
		</nav>
	);
};
