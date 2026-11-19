import type { ReceiptData } from "./ShipmentReceipt";

export const mockReceipt: ReceiptData = {
  invoiceNumber: "INV-2026-00125",
  issueDate: "09/25/2026",
  status: "Paid",
  orderLocation: "New York Store",

  customer: {
    name: "John Smith",
    phone: "+1 212 555 0187",
    email: "john.smith@example.com",
    address: "125 Madison Avenue, New York, NY 10016",
    notes: "Please deliver during business hours.",
  },

  items: [
    {
      id: 1,
      name: "Wireless Headphones",
      quantity: 2,
      unitPrice: 75.5,
      total: 151.0,
    },
    {
      id: 2,
      name: "Smartphone Case",
      quantity: 1,
      unitPrice: 25.75,
      total: 25.75,
    },
    {
      id: 3,
      name: "USB-C Charging Cable",
      quantity: 3,
      unitPrice: 12.5,
      total: 37.5,
    },
    {
      id: 4,
      name: "Wireless Mouse",
      quantity: 1,
      unitPrice: 45.0,
      total: 45.0,
    },
  ],

  discount: 15.25,
  shipping: 10.0,
  subtotal: 259.25,
  taxTotal: 25.93,
  invoiceTotal: 279.93,
  amountPaid: 279.93,
  currency: "USD",
};
