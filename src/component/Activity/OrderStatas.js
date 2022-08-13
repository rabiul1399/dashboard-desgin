import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const OrderStatas = () => {
    const data = [
        { name: "Group A", value: 80 },
        { name: "Group B", value: 150 },
        { name: "Group C", value: 300 },
     
      ];
      const COLORS = ["#dc3545" ,"#e9ecef" ,  "#0088FE"];
      
    return (
        <PieChart width={220} height={300}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
    );
};

export default OrderStatas;