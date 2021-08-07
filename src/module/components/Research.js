import React, {Component} from 'react';

class Research extends Component {
    constructor() {
    super(props);
		this.state = {
			details: details,
    }
}

    render() {
        const detailsList = details.map((info) => {
			return (
				<div className="card" key={info.id} id="cards">
					<img src={info.img} className="card-img-top" alt="profile" />
					<div className="card-body" id="card-text">
						<div className="card-title">{info.name}</div>
						Email: {info.mail}
						<br />
						Department: {info.dept}
						<button
							type="button"
							id="button"
							See Profile>
						</button>
					</div>
				</div>
			);
		});
        return(
            <div className="container-fluid">
            <div id="searchBar">
                <input
                    className="inputName"
                    type="text"
                    // onChange={this.searchHandler}
                    placeholder="  Search"
                />
            </div>
            {detailsList}
        </div>
        )
    }
}

export default Research;