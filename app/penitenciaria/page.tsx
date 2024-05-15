"use client";

import { config } from "@/config";
import { Input } from "@nextui-org/react";
import { FiTrash2 } from "react-icons/fi";
import { useReadContract, useWriteContract } from "wagmi";
import { switchChain } from "wagmi/actions";
import { abiData } from "../abis/abi";
import { useState } from "react";
import { scrollSepolia } from "wagmi/chains";

export default function Penitenciaria() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [identificadorWallet, setIdentificadorWallet] = useState("");

  const handleAddCarteira = async (e: any, ativado: boolean) => {
    e.preventDefault();
    await switchChain(config, { chainId: scrollSepolia.id });
    await writeContract({
      address: "0x6f152c6Bf0a8C692E66Fe7c1cf2C29b7d4eCE37a",
      functionName: "authorizeAgent",
      abi: abiData,
      chainId: 534351,
      args: [identificadorWallet, ativado],
    });
    setIdentificadorWallet("");
    if (error) {
      console.log(error);
      return;
    }
  };

  const {
    data: carteirasAutorizadas,
    error: errorCarteira,
    isPending: isPendingCarteiras,
  } = useReadContract({
    abi: abiData,
    address: "0x6f152c6Bf0a8C692E66Fe7c1cf2C29b7d4eCE37a",
    functionName: "getAuthorizedAddresses",
    chainId: 534351,
    args: [],
  });

  //   getAuthorizedAddresses;

  return (
    <main className="flex justify-center flex-col items-center">
      <h1 className="text-[#883096] text-center text-3xl font-semibold">
        Carteiras autorizadas
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-3 flex flex-col mt-5 w-full  gap-y-1">
        <h3 className="text-center py-2 ">Autorizar carteira</h3>
        <hr className="my-2 w-full bg-black/10 border-none h-[1px]" />
        <Input
          radius="sm"
          placeholder="Digite a sua carteira"
          isDisabled={isPending}
          value={identificadorWallet}
          onChange={(e) => setIdentificadorWallet(e.target.value)}
        />
        <button
          onClick={(e) => handleAddCarteira(e, true)}
          disabled={isPending}
          className="bg-[#b246c4] hover:bg-[#873596] transition-colors disabled:text-white/50 disabled:bg-[#603368] flex justify-center items-center text-white rounded-md p-2 mt-2"
        >
          Autorizar
        </button>
      </div>

      <div className="w-full flex flex-col bg-[#9333a2] gap-y-4 p-4 border-[#c95bdb] border-3 rounded-lg mt-5">
        {(carteirasAutorizadas as any[])?.map((carteira, index) => (
          <div
            key={index}
            className="w-full rounded-lg bg-white p-4 flex justify-between items-center"
          >
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-light">Carteira</span>
              <span className=" font-semibold text-[#9333a2]">{carteira}</span>
            </div>
            <button
              className="rounded-md bg-[#f8cbff] p-3"
              onClick={(e) => handleAddCarteira(e, false)}
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
