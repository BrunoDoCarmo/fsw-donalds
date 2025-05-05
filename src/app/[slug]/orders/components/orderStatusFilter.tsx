"use client";

import { OrderStatus } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface OrderFiltersProps {
  tempStatus: OrderStatus | "ALL";
  tempStartDate: string;
  tempEndDate: string;
  onTempStatusChange: (value: OrderStatus | "ALL") => void;
  onTempStartDateChange: (value: string) => void;
  onTempEndDateChange: (value: string) => void;
  onApplyFilters: () => void;
}

const OrderFilters = ({
  tempStatus,
  tempStartDate,
  tempEndDate,
  onTempStatusChange,
  onTempStartDateChange,
  onTempEndDateChange,
  onApplyFilters,
}: OrderFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-4 justify-between">
      <div className="flex gap-4 items-center">
        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Status:</label>
            <select
              value={tempStatus}
              onChange={(e) => onTempStatusChange(e.target.value as OrderStatus | "ALL")}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="ALL">Todos</option>
              <option value="PENDING">Pendente</option>
              <option value="IN_PREPARATION">Em preparo</option>
              <option value="PAYMENT_CONFIRMED">Pagamento confirmado</option>
              <option value="FINISHED">Finalizado</option>
              <option value="PAYMENT_FAILED">Pagamento falhou</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Início:</label>
              <Input
                type="date"
                value={tempStartDate}
                onChange={(e) => onTempStartDateChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm w-[250px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Fim:</label>
              <Input
                type="date"
                value={tempEndDate}
                onChange={(e) => onTempEndDateChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={onApplyFilters}
          className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700 transition"
        >
          Filtrar
        </Button>
      </div>
    </div>
  );
};

export default OrderFilters;
