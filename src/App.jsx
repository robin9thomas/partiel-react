import './App.css';
import DataTable from './Component/DataTable/DataTable.jsx';
import { useState, useEffect } from "react";

function App() {
  const UserColumn = [
    "firstName",
    "lastName",
    "jobTitle",
    "email",
  ];

  const ProductColumn = [
    "name",
    "price",
  ];

  const fetchData = async (path, page) => {
    try {
      const response = await fetch(`http://localhost:3000/${path}/${page}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) throw new Error("Erreur lors du chargement des données");

      const jsonResponse = await response.json();
      return jsonResponse.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <>
      <h2>Table Utilisateurs</h2>
      <DataTable columns={UserColumn} fetchData={() => fetchData("user", 1)} />

      <h2>Table Produits</h2>
      <DataTable columns={ProductColumn} fetchData={() => fetchData("product", 1)} />
    </>
  );
}

export default App;
