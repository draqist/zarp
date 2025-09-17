// schemas/index.ts
import { z } from "zod";

export const roleEnum = z.enum(["customer", "vendor", "admin"]);
export const orderStatusEnum = z.enum([
  "pending",
  "in_transit",
  "delivered",
  "cancelled",
]);
export const deliveryStatusEnum = z.enum([
  "assigned",
  "picked_up",
  "delivered",
]);

export const createUserSchema = z.object({
  full_name: z.string().min(4, { message: "Full name is too short" }),
  phone_number: z.string().min(7, { message: "Invalid phone number" }),
  email: z.email({ message: "Invalid email address" }),
  role: roleEnum.default("customer"),
});

export const updateUserSchema = createUserSchema.partial();

export const createVendorSchema = z.object({
  user_id: z.uuid(),
  business_name: z.string().min(2, { message: "Business name is too short" }),
  location: z.string().min(2, { message: "Location is too short" }),
});

export const updateVendorSchema = createVendorSchema.partial();

export const createOrderSchema = z.object({
  customer_id: z.uuid(),
  vendor_id: z.uuid(),
  pickup_address: z.string().min(5),
  dropoff_address: z.string().min(5),
  status: orderStatusEnum.default("pending"),
});

export const updateOrderSchema = createOrderSchema.partial();

export const createDeliverySchema = z.object({
  order_id: z.uuid(),
  driver_id: z.uuid(),
  status: deliveryStatusEnum.default("assigned"),
});

export const updateDeliverySchema = createDeliverySchema.partial();

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.email({ message: "Invalid email address" }),
  phone: z.string().min(7, { message: "Invalid phone number" }).optional(),
  message: z.string().min(10, { message: "Message is too short" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
