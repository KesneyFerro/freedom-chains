"use client";

import { abiData } from "@/app/abis/abi";
import { config } from "@/config";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useWriteContract } from "wagmi";
import { switchChain } from "wagmi/actions";
import { scrollSepolia } from "wagmi/chains";

export default function AddComportamento({}) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [
    identificadorDetentoComportamento,
    setIdentificadorDetentoComportamento,
  ] = useState("");
  const [dataComportamento, setDataComportamento] = useState("");
  const [tipoComportamento, setTipoComportamento] = useState("");

  const handleAddComportamento = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await switchChain(config, { chainId: scrollSepolia.id });
    writeContract({
      address: "0x13258E8be2e5b99A462f7F20b80035Bfcbe009f5",
      functionName: "addBehaviorRecord",
      abi: abiData,
      chainId: 534351,
      args: [
        identificadorDetentoComportamento,
        tipoComportamento,
        dataComportamento,
      ],
    });
    setIdentificadorDetentoComportamento("");
    setTipoComportamento("");
    setDataComportamento("");
  };
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={(e) => handleAddComportamento(e)}
      className="flex flex-col gap-y-3 mt-5"
    >
      <Input
        isRequired
        label="Identificador do Detento"
        type="number"
        isDisabled={isPending}
        value={identificadorDetentoComportamento}
        onChange={(e) => setIdentificadorDetentoComportamento(e.target.value)}
      />
      <Input
        isRequired
        label="Comportamento"
        type="text"
        isDisabled={isPending}
        value={tipoComportamento}
        onChange={(e) => setTipoComportamento(e.target.value)}
      />
      <Textarea
        isRequired
        label="Comentário do Comportamento"
        type="text"
        isDisabled={isPending}
        value={dataComportamento}
        onChange={(e) => setDataComportamento(e.target.value)}
      />
      <Input
        isRequired
        label="Sua carteira"
        isDisabled={isPending}
        placeholder="Digite sua carteira para receber Tokens"
      />
      <Button
        isDisabled={isPending}
        type="submit"
        color={error ? "danger" : "secondary"}
        isLoading={isPending}
      >
        {error ? "Ocorreu um erro" : "Adicionar Comportamento"}
      </Button>
      {hash && (
        <span>
          Transação enviada com sucesso:{" "}
          <a
            href={`https://sepolia.scrollscan.com/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            Ver transação.
          </a>{" "}
          Você recebeu 1 token de reputação por essa ação.
        </span>
      )}
    </motion.form>
  );
}
