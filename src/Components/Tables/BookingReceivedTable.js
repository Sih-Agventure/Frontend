import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
// import 'primeflex/primeflex.css';
import "./DataTableDemo.css";

const BookingReceivedTable = (props) => {
  console.log(props.props);
  const o = [
    {
      firstname: "Natka",
      lastname: "Wilona",
    },
    {
      firstname: "Yvonne",
      lastname: "Guildroy",
    },
    {
      firstname: "Tina",
      lastname: "Dorine",
    },
    {
      firstname: "Ursulina",
      lastname: "Phaidra",
    },
    {
      firstname: "Michaelina",
      lastname: "Leifeste",
    },
    {
      firstname: "Lanna",
      lastname: "Buckler",
    },
    {
      firstname: "Aurelie",
      lastname: "Chobot",
    },
    {
      firstname: "Randa",
      lastname: "Granoff",
    },
    {
      firstname: "Wileen",
      lastname: "Salvidor",
    },
    {
      firstname: "Yetty",
      lastname: "Bohlin",
    },
    {
      firstname: "Christy",
      lastname: "Velick",
    },
    {
      firstname: "Sibella",
      lastname: "Earlie",
    },
    {
      firstname: "Mahalia",
      lastname: "Haymes",
    },
    {
      firstname: "Eugine",
      lastname: "Marden",
    },
    {
      firstname: "Deedee",
      lastname: "Vary",
    },
    {
      firstname: "Paulita",
      lastname: "Gaspard",
    },
    {
      firstname: "Stacey",
      lastname: "Corilla",
    },
    {
      firstname: "Dorene",
      lastname: "Bohlin",
    },
    {
      firstname: "Kristan",
      lastname: "Wattenberg",
    },
    {
      firstname: "Hannis",
      lastname: "Gombach",
    },
    {
      firstname: "Basia",
      lastname: "Quinn",
    },
    {
      firstname: "Agathe",
      lastname: "Yate",
    },
    {
      firstname: "Zondra",
      lastname: "Millda",
    },
    {
      firstname: "Chrystel",
      lastname: "Japeth",
    },
  ];
  const x = props.props.map((e, i) => {
    e.firstName = o[i].firstname;
    e.lastName = o[i].lastname;

    return e;
  });
  console.log(x);
  const [products, setProducts] = useState(props.props);

  // setProducts(props.props)
  // useEffect(() => {
  //     productService.getProductsSmall().then(data => setProducts(data));
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`images/product/${rowData.image}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className="product-image"
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return <span className={`product-badge status-instock`}>instock</span>;
  };

  const header = (
    <div className="table-header">
      Products
      <Button icon="pi pi-refresh" />
    </div>
  );

  const footer = `In total there are ${products ? products.length : 0} Offers.`;

  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        <DataTable value={products} footer={footer} responsiveLayout="scroll">
          <Column field="buyer_id" header="User ID" />
          <Column field="firstName" header="First Name" />
          <Column field="lastName" header="Last Name" />
          <Column field="start_date" header="Start Date" />
          <Column field="end_date" header="End Date" />
          <Column field="end_date" header="End Date" />
          <Column
            field="status"
            header="Status"
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "10rem" }}
            body={statusBodyTemplate}
          />
          {/* <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column> */}
        </DataTable>
      </div>
    </div>
  );
};
export default BookingReceivedTable;
