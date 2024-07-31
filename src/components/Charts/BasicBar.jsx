
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FaChartBar, FaTable } from 'react-icons/fa';
import DataTable from "../DataTable/DataTable";


const BasicBar = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Position',
        accessor: 'position',
      },
      {
        Header: 'Office',
        accessor: 'office',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Start date',
        accessor: 'startdate',
      },
      {
        Header: 'Salary',
        accessor: 'salary',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { name: 'John', position: 'Regional Director', office: '	San Francisco', age: 28, startdate: '2008/10/16', salary: '	$470,600' },
      { name: 'Alice', position: '	System Architect', office: '	Tokyo', age: 38, startdate: '2008/1/11', salary: '	$470,600' },
      { name: 'Bob', position: 'Accountant', office: '	New York', age: 29, startdate: '2008/10/16', salary: '	$450,600' },
      { name: 'John1', position: 'Junior Technical Author', office: '	Edinburgh', age: 60, startdate: '2008/10/16', salary: '	$890,600' },
      { name: 'Alice1', position: 'Senior Javascript Developer', office: '	Tokyo', age: 45, startdate: '2008/9/16', salary: '	$470,600' },
      { name: 'Bob1', position: 'Accountant', office: '	Tokyo', age: 28, startdate: '2008/10/16', salary: '	$470,600' },
      { name: 'John2', position: 'Integration Specialist', office: '	New York', age: 27, startdate: '2008/12/16', salary: '	$470,600' },
      { name: 'Alice2', position: 'Sales Assistant', office: '	Edinburgh', age: 31, startdate: '2008/10/16', salary: '	$470,600' },
      { name: 'Bob2', position: 'Integration Specialist', office: '	Tokyo', age: 45, startdate: '2008/8/16', salary: '	$560,600' },
      { name: 'John3', position: 'Software Engineer', office: '	San Francisco', age: 67, startdate: '2008/10/16', salary: '	$470,600' },
      { name: 'Alice3', position: 'Javascript Developer', office: '	Edinburgh', age: 55, startdate: '2008/5/16', salary: '	$340,600' },
      { name: 'Bob3', position: 'Software Engineer', office: '	San Francisco', age: 28, startdate: '2008/10/16', salary: '	$470,600' },

    ],
    []
  );

  const [barChartOptions, setBarChartOptions] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  const [areaChartOptions, setAreaChartOptions] = useState({
    options: {
      chart: {
        height: 280,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan"
        ]
      }
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ]
  });


  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-lg-12">
          <h1>Dashboard</h1>
          <p className="text-muted">Dashboard</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card text-bg-primary mb-3" >
            <div className="card-header">Primary card</div>
            <div className="card-body d-flex justify-content-between">
              <span className="card-text text-decoration-underline">View Details</span>
              <span className="ms-auto">→</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card text-bg-warning text-light mb-3">
            <div className="card-header">Warning card</div>
            <div className="card-body d-flex justify-content-between">
              <span className="card-text text-decoration-underline">View Details</span>
              <span className="ms-auto">→</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3  col-md-6 col-sm-12">
          <div className="card text-bg-success mb-3" >
            <div className="card-header">Success card </div>
            <div className="card-body d-flex justify-content-between">
              <span className="card-text text-decoration-underline">View Details</span>
              <span className="ms-auto">→</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-12">
          <div className="card text-bg-danger mb-3" >
            <div className="card-header">Danger card</div>
            <div className="card-body d-flex justify-content-between">
              <span className="card-text text-decoration-underline">View Details</span>
              <span className="ms-auto">→</span>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <h5 className="card-header"><FaChartBar />  Area Chart Example</h5>
            <div className="card-body">
              <div className="mixed-chart">
                <Chart
                  options={areaChartOptions.options}
                  series={areaChartOptions.series}
                  type="area"
                  height={280}
                />
              </div>
            </div>
          </div>

        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <h5 className="card-header"><FaChartBar />  Bar Chart Example</h5>
            <div className="card-body">
              <div className="mixed-chart">
                <Chart
                  options={barChartOptions.options}
                  series={barChartOptions.series}
                  type="bar"
                  width="500"
                  height={280}
                />
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="card">
            <h5 className="card-header"><FaTable />  DataTable Example</h5>
            <div className="card-body">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-3 d-flex justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="text-muted">Copyright © Your Website 2023</div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end">
          <div className="text-primary text-decoration-underline">Privacy Policy · Terms & Conditions</div>
        </div>
      </div>


    </div>
  );
};

export default BasicBar;

