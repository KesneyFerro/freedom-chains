"use client";

import { abiData } from "@/app/abis/abi";
import { config } from "@/config";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { FormEvent, SetStateAction, useState } from "react";
=======
import { useState } from "react";
>>>>>>> FreedomChains/main
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
<<<<<<< HEAD
      address: "0x6f152c6Bf0a8C692E66Fe7c1cf2C29b7d4eCE37a",
=======
      address: "0x13258E8be2e5b99A462f7F20b80035Bfcbe009f5",
>>>>>>> FreedomChains/main
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
<<<<<<< HEAD

=======
>>>>>>> FreedomChains/main
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
<<<<<<< HEAD
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleAddComportamento(e)}
=======
      onSubmit={(e) => handleAddComportamento(e)}
>>>>>>> FreedomChains/main
      className="flex flex-col gap-y-3 mt-5"
    >
      <Input
        isRequired
        label="Identificador do Detento"
        type="number"
        isDisabled={isPending}
        value={identificadorDetentoComportamento}
<<<<<<< HEAD
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setIdentificadorDetentoComportamento(e.target.value)
        }
=======
        onChange={(e) => setIdentificadorDetentoComportamento(e.target.value)}
>>>>>>> FreedomChains/main
      />
      <Input
        isRequired
        label="Comportamento"
        type="text"
        isDisabled={isPending}
        value={tipoComportamento}
<<<<<<< HEAD
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTipoComportamento(e.target.value)
        }
=======
        onChange={(e) => setTipoComportamento(e.target.value)}
>>>>>>> FreedomChains/main
      />
      <Textarea
        isRequired
        label="Comentário do Comportamento"
        type="text"
        isDisabled={isPending}
        value={dataComportamento}
<<<<<<< HEAD
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setDataComportamento(e.target.value)
        }
=======
        onChange={(e) => setDataComportamento(e.target.value)}
>>>>>>> FreedomChains/main
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
