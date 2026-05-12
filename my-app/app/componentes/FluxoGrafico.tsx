"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { hora: "00:00", entrada: 20, saida: 40 },
  { hora: "04:00", entrada: 55, saida: 25 },
  { hora: "08:00", entrada: 75, saida: 20 },
  { hora: "12:00", entrada: 45, saida: 30 },
  { hora: "16:00", entrada: 65, saida: 15 },
  { hora: "20:00", entrada: 95, saida: 0 },
  { hora: "23:59", entrada: 35, saida: 45 },
  { hora: "00:00", entrada: 15, saida: 40 },
];

export default function FluxoGrafico() {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      {/* Header do Card */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-slate-800">
          Fluxo de Movimentação (24h)
        </h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D95D39]"></span>
            <span className="text-sm text-gray-500">Entrada</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F2D7D0]"></span>
            <span className="text-sm text-gray-500">Saída</span>
          </div>
        </div>
      </div>

      {/* Container do Gráfico */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            barGap={0}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="hora" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            
            {/* Barras Empilhadas (Stacked) */}
            <Bar 
              dataKey="entrada" 
              stackId="a" 
              fill="#D95D39" 
              radius={[0, 0, 0, 0]} 
              barSize={45}
            />
            <Bar 
              dataKey="saida" 
              stackId="a" 
              fill="#F2D7D0" 
              radius={[4, 4, 0, 0]} 
              barSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}