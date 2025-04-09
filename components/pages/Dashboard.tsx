// src/components/Dashboard.jsx
'use client';

import React, { useState } from 'react';
import WhatsLeads from '../DashboardComponents/WhatsLeads';
import DashSettings from '../DashboardComponents/DashSettings';
import Products from '../DashboardComponents/Products';

// Componentes de cada "página"
const VisaoGeral = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">Visão geral</h2>
    <p className="text-gray-600">
      Aqui você verá um resumo dos seus produtos, vendas e pedidos.
    </p>
  </>
);

const Produtos = () => (
  <>
    <Products />
  </>
);

const Pedidos = () => (
  <>
    <h2 className="text-2xl font-bold mb-4">Pedidos</h2>
    <p className="text-gray-600">Aqui estão os pedidos realizados.</p>
  </>
);

const Leads = () => (
  <>
    <WhatsLeads />
  </>
);

const Configuracoes = () => (
  <>
    <DashSettings />
  </>
);

type SidebarProps = {
  onSelect: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => (
  <div className="w-64 h-full bg-gray-800 text-white p-4">
    <h2 className="text-xl font-bold mb-6">Admin</h2>
    <ul className="space-y-4">
      {['Dashboard', 'Produtos', 'Pedidos', 'Leads', 'Configurações'].map(
        (item) => (
          <li key={item}>
            <button
              onClick={() => onSelect(item)}
              className="hover:text-yellow-300 w-full text-left"
            >
              {item}
            </button>
          </li>
        )
      )}
    </ul>
  </div>
);

const Topbar = () => (
  <div className="w-full h-16 bg-white shadow px-6 flex items-center justify-between">
    <h1 className="text-xl font-semibold">Painel Administrativo</h1>
    <div className="text-gray-600">Bem-vindo, admin!</div>
  </div>
);

// Dashboard principal
const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState('Dashboard');

  const renderContent = () => {
    switch (selectedPage) {
      case 'Dashboard':
        return <VisaoGeral />;
      case 'Produtos':
        return <Produtos />;
      case 'Pedidos':
        return <Pedidos />;
      case 'Leads':
        return <Leads />;
      case 'Configurações':
        return <Configuracoes />;
      default:
        return <VisaoGeral />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setSelectedPage} />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Topbar />
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
