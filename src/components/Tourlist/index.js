import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class Tourlist extends Component {
  state = {
    tours: tourData
  };
  remoteTour = id => {
    const { tours } = this.state;

    const sortedTours = tours.filter(tour => tour.id !== id);
    console.log(id);
    console.log(tours);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} remoteTour={this.remoteTour} />
        ))}
      </section>
    );
  }
}
