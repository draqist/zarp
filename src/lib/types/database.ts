export type UserRole = "customer" | "vendor" | "driver" | "admin";
export type OrderStatus =
  | "pending"
  | "accepted"
  | "in_transit"
  | "delivered"
  | "cancelled";

export interface Profile {
  id: string; // auth.users id (uuid)
  full_name: string;
  phone_number?: string | null;
  role: UserRole;
  created_at: string; // ISO
}

export interface VendorProfile {
  id: string; // FK -> profiles.id (vendor)
  store_name: string;
  location?: string | null;
  contact_email?: string | null;
  contact_phone?: string | null;
  created_at: string;
}

export interface DriverProfile {
  id: string; // FK -> profiles.id (driver)
  vehicle_type: string; // 'bike' | 'car' | ...
  license_plate: string;
  preferred_routes?: string[] | null;
  created_at: string;
}

export interface Order {
  id: string;
  customer_id?: string | null;
  vendor_id?: string | null;
  driver_id?: string | null;
  pickup_address: string;
  delivery_address: string;
  package_details?: string | null;
  status: OrderStatus;
  created_at: string;
}

export interface OrderStatusUpdate {
  id: string;
  order_id: string;
  status: OrderStatus;
  updated_by?: string | null;
  note?: string | null;
  created_at: string;
}

export interface Payment {
  id: string;
  order_id: string;
  amount: string; // NUMERIC(10,2) -> string in JS
  status: string; // 'pending' | 'paid' | 'failed' (customize)
  payment_method?: string | null;
  created_at: string;
}

export interface Route {
  id: string;
  driver_id: string;
  origin: string;
  destination: string;
  frequency?: string | null; // 'daily' ...
  created_at: string;
}
