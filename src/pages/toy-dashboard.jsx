import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { utilService } from '../services/util.service.js';
import { loadToysStats } from '../store/toy.action.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export class _Stats extends React.Component {
  componentDidMount() {
    this.props.loadToysStats();
  }

  render() {
    const { toys } = this.props;
    if (!toys) return <span></span>;
    const toysYearly = utilService.toysPerYear(toys);
    const years = [];
    const countArr = [];
    for (var key in toysYearly) {
      years.push(key);
      countArr.push(toysYearly[key]);
    }
    const pricesPerLabel = utilService.pricesPerToyLabels(toys);
    const dataLabels = {
      labels: [
        'On wheels',
        'Box game',
        'Art',
        'Baby',
        'Doll',
        'Puzzle',
        'Outdoor',
      ],
      datasets: [
        {
          label: 'price per label',
          data: pricesPerLabel,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const dataYear = {
      labels: years,
      datasets: [
        {
          label: 'price per year',
          data: countArr,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return (
      <section className='stats'>
        <div className='stats-container'>
            <h1>AVG Price per type</h1>
          <div className='toy-price-stats'>
            <Pie data={dataLabels} />
          </div>
        </div>
        <div className='stats-container'>
            <h1>Toys per Year</h1>
          <div className='toy-price-stats'>
            <Pie data={dataYear} />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ toyModule }) {
  return {
    toys: toyModule.toys,
  };
}
const mapDispatchToProps = {
  loadToysStats,
};

export const Stats = connect(mapStateToProps, mapDispatchToProps)(_Stats);
