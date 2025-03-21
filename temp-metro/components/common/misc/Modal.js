"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Loading from "./Loading";

export default function PaymentModal({
  isOpen,
  onClose,
  step,
  paymentMethod,
  price,
  onConfirm,
  loading,
}) {
  const steps = [
    { name: "Método de Pagamento" },
    { name: "Checkout" },
    { name: "Recibo" },
  ];
  step = 0;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
      <div className="bg-white rounded-2xl shadow-lg w-[900px] p-6">
        <section className="flex justify-between items-center pb-4">
          <img
            src="/images/logoazul2.png"
            alt="logo"
            className="w-20 h-6 mt-4 ml-4"
          />
          {/* <h2 className="text-lg font-semibold text-gray-800">Fatura #12997</h2> */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </section>

        <section className="flex items-center pt-3 pb-3 justify-center space-x-0">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center">
                <div
                  className={`w-[18px] h-[18px] mt-0 flex items-center justify-center border-3 rounded-full ${
                    index <= step
                      ? "bg-[#06378E] shadow-lg borer-e-white"
                      : "bg-white border-[#06378E]"
                  }`}
                >
                  {index < step && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-28 h-0.5 ${
                      index < step ? "bg-[#06378E]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
              <div className="relative">
                <span className="absolute -left-6 text-center mr-0 text-xs text-azul-primeiro mt-2 block w-max min-w-[60px]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </section>

        <div className="pt-4">
        <section className="p-0 my-4  mx-10 font-roboto border border-black rounded-lg">
          <div className="bg-slate-100 py-4 px-12 rounded-t-lg border-b-2">
            <p className="text-lg">
              <span className="font-semibold text-azul-primeiro">Factura</span>
              <span className="text-azul-primeiro"> #12997</span>
            </p>
            <p className="text-[12px] text-[#2C2C2C] pb-4 pt-4">
              Leia as instruções abaixo para compreender melhor o procedimento
              de pagamento e ter uma melhor experiência
            </p>
            <hr className="border-t-2 pb-2" />
            <p className="font-bold text-lg text-[#2C2C2C]">
              Detalhes do pedido
            </p>
            <p className="flex justify-between items-center pb-4 pt-2">
              <span className="text-[#616161]">Subtotal</span>
              <span className="text-end">{price}.00Mt</span>
            </p>

            <p className="flex justify-between pb-2 items-center">
              <span className="text-[#616161]">VAT (17%)</span>
              <span className="text-end">00.00Mt</span>
            </p>
            <hr className=" border-t-2 border-dashed pb-4" />
            <p className="flex text-azul-primeiro font-bold text-lg justify-between pb-2 items-center">
              <span className="">Total</span>
              <span className="text-end">{price}.00Mt</span>
            </p>
          </div>
          <div className="py-4 px-12 rounded-lg bg-white">
            <p className="font-bold text-lg text-[#2C2C2C] pb-2">
              Método de Pagamento
            </p>
            <p className="text-md text-[#616161]">{paymentMethod}</p>
          </div>
        </section>

        </div>

        
        <div className="flex justify-end space-x-4 mt-6 mx-10">
          <button
            onClick={onClose}
            className="text-[#06378E] cursor-pointer border border-[#06378E] py-[8px] hover:text-blue-300 px-6 rounded-xl"
          >
            Cancelar
          </button>
          {loading ? (
            <Loading color="#3498db" size={70} />
          ) : (
            <button
              onClick={onConfirm}
              className="bg-[#06378E] cursor-pointer text-white font-bold py-[8px] hover:bg-blue-300 px-6 rounded-xl"
            >
              Continuar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}