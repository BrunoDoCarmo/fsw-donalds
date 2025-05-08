"use client"

import { OrderStatus, Prisma } from "@prisma/client";
import { CalendarDays, ScrollTextIcon, Timer } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/format-currency";
import { formatDate, formatHour } from "@/helpers/format-date";

import FieldContainer from "../../../components/fieldContainer";
import RouterBack from "../../../components/routerBack";
import OrderStatusFilter from "./orderStatusFilter";
interface OrderListProps {
    orders: Array<
        Prisma.OrderGetPayload<{
            include: {
                restaurant: {
                    select: {
                        name: true;
                        avatarImageUrl: true;
                    }
                },
                orderProducts: {
                    include: {
                        product: true;
                    }
                }
            }
        }>
    >;
}

const getStatusLabel = (status: OrderStatus) => {
    if (status === "FINISHED") return "Finalizado";
    if (status === "IN_PREPARATION") return "Em preparo";
    if (status === "PENDING") return "Pendente";
    if (status === "PAYMENT_CONFIRMED") return "Pagamento confirmado";
    if (status === "PAYMENT_FAILED") return "Pagamento falhou";
    return ""
}

const OrderList = ({orders}: OrderListProps) => {
    const [statusFilter, setStatusFilter] = useState<OrderStatus | "ALL">("ALL");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    
    const [tempStatus, setTempStatus] = useState<OrderStatus | "ALL">("ALL");
    const [tempStartDate, setTempStartDate] = useState<string>("");
    const [tempEndDate, setTempEndDate] = useState<string>("");

    const handleApplyFilters = () => {
        setStatusFilter(tempStatus);
        setStartDate(tempStartDate);
        setEndDate(tempEndDate);
    };

    const filteredOrders = orders.filter((order) => {
        const matchStatus = statusFilter === "ALL" || order.status === statusFilter;
        const orderDate = new Date(order.createdAt).toISOString().split("T")[0];     
        const matchStartDate = startDate ? orderDate >= startDate : true;
        const matchEndDate = endDate ? orderDate <= endDate : true;
      
        return matchStatus && matchStartDate && matchEndDate;
      });
    return ( 
        <div className="space-y-6 p-6">
            <div className="flex items-center">
                <RouterBack/>
                <div className="flex items-center gap-3">
                    <ScrollTextIcon />
                    <h2 className="text-lg font-semibold">Meus Pedidos</h2>
                </div>
            </div>
            <FieldContainer>
                <OrderStatusFilter
                    tempStatus={tempStatus}
                    tempStartDate={tempStartDate}
                    tempEndDate={tempEndDate}
                    onTempStatusChange={setTempStatus}
                    onTempStartDateChange={setTempStartDate}
                    onTempEndDateChange={setTempEndDate}
                    onApplyFilters={handleApplyFilters}
                />
            </FieldContainer>
            {filteredOrders.map((order) => (
                <Card key={order.id}>
                    <CardContent className="space-y-4 p-5">
                        <div className={`w-fit rounded-full px-2 py-1 text-xs font-semibold ${order.status === OrderStatus.FINISHED ? "bg-green-500 text-white": "bg-gray-200 text-gray-500"}`}>
                            {getStatusLabel(order.status)}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="relative h-5 w-5">
                                    <Image 
                                        src={order.restaurant.avatarImageUrl}
                                        alt={order.restaurant.name}
                                        className="rounded-lg"
                                        fill
                                    />
                                </div>
                                <p className="text-sm font-semibold">{order.restaurant.name}</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center justify-between w-[200px]">
                                    <CalendarDays />
                                    <p className="text-sm font-semibold">Criado em {formatDate(order.createdAt)}</p>
                                </div>
                                <div className="flex items-center justify-between w-[200px]">
                                    <Timer />
                                    <p className="text-sm font-semibold">{formatHour(order.createdAt)}</p>
                                </div>
                            </div>
                        </div>
                        <Separator className="border-gray-300 border-t"/>
                        <div className="space-y-2">
                            {order.orderProducts.map((orderProduct) => (
                                <div key={orderProduct.id} className="flex items-center gap-2">
                                    <div className="h-5 w-5 flex items-center justify-center rounded-full bg-gray-400 text-white text-xs font-semibold">
                                        {orderProduct.quantity}
                                    </div>
                                    <p className="text-sm">{orderProduct.product.name}</p>
                                </div> 
                            ))}
                        </div>
                        <Separator className="border-gray-300 border-t"/>
                        <p className="text-sm font-medium">Total: {formatCurrency(order.total)}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
     );
}
 
export default OrderList;