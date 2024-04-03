// BarChartComponent.js

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartComponent = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Overview</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontSize: '14px', color: '#777' }}>Monthly Earning</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ width: '12px', height: '100px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '80px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '50px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '70px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '40px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '60px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '90px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '120px', backgroundColor: '#8a2be2' }}></div>
            <div style={{ width: '12px', height: '70px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '100px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '80px', backgroundColor: '#ccc' }}></div>
            <div style={{ width: '12px', height: '110px', backgroundColor: '#ccc' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
            <p style={{ fontSize: '12px', color: '#777' }}>Jan</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Feb</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Mar</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Apr</p>
            <p style={{ fontSize: '12px', color: '#777' }}>May</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Jun</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Jul</p>
            <p style={{ fontSize: '12px', color: '#fff', backgroundColor: '#8a2be2', padding: '2px 4px', borderRadius: '4px' }}>Aug</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Sep</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Oct</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Nov</p>
            <p style={{ fontSize: '12px', color: '#777' }}>Dec</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontSize: '14px', color: '#777' }}>Quarterly</p>
          <select style={{ width: '100px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option value="Q1">Q1</option>
            <option value="Q2">Q2</option>
            <option value="Q3">Q3</option>
            <option value="Q4">Q4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
