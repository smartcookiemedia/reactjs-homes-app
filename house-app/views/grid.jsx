var React = require('react');
import data from './data.json';


class Grid extends React.Component {

  constructor(props) {
		super(props)
		this.houses = data.homes;
		
	}


  render() {
    return (
		<div className="container grid">
			<div className="row">		            
				{this.houses.map(function(house, index){
				return <div className="col-xs-12 col-sm-4">
							<div className="img-container"><img src={'img/' + house.renderings} className="img-responsive"/></div>
								<div className="details">
									<div className="leftpanel">
										<h3>{house.marketingName}</h3>
										<h5>{house.sqFt} Sq. Ft.</h5>
									</div>
									<div className="rightPanel text-right">
										<h5>from ${house.sqFt}</h5>
										<h5 className="bed">{house.beds} <img src="img/icon-bed.jpg"/></h5>
										<h5 className="bath">{house.baths} <img src="img/icon-bath.jpg"/></h5>
								</div>
							</div>
						</div>;
				})}

			</div>
		</div>
    );
  }
}

module.exports = Grid;