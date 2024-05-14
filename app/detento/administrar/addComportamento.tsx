"use client";

import { abiData } from "@/app/abis/abi";
import { abiData2 } from "@/app/abis/tokenAbi";
import { config } from "@/config";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FormEvent, SetStateAction, useState } from "react";
import { useWriteContract } from "wagmi";
import { switchChain } from "wagmi/actions";
import { scrollSepolia, sepolia } from "wagmi/chains";

export default function AddComportamento({}) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const {
    data: hashToken,
    error: errorToken,
    isPending: isPendingToken,
    writeContract: writeContractToken,
  } = useWriteContract();

  const [
    identificadorDetentoComportamento,
    setIdentificadorDetentoComportamento,
  ] = useState("");
  const [dataComportamento, setDataComportamento] = useState("");
  const [tipoComportamento, setTipoComportamento] = useState("");
  const [wallet, setWallet] = useState("");

  const handleAddComportamento = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await switchChain(config, { chainId: scrollSepolia.id });
    await writeContract({
      address: "0x6f152c6Bf0a8C692E66Fe7c1cf2C29b7d4eCE37a",
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

    if (error) {
      console.log(error);
      return;
    }
    await switchChain(config, { chainId: sepolia.id });
    await writeContractToken({
      address: "0x52C9fa84a27958f651BC54b0e0b574E8F5a9FA80",
      functionName: "mint",
      chainId: 11155111,
      abi: abiData2,
      args: [wallet, BigInt(1 * 10 ** 18)],
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleAddComportamento(e)}
      className="flex flex-col gap-y-3 mt-5"
    >
      <Input
        isRequired
        label="Identificador do Detento"
        type="number"
        isDisabled={isPending}
        value={identificadorDetentoComportamento}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setIdentificadorDetentoComportamento(e.target.value)
        }
      />
      <Input
        isRequired
        label="Comportamento"
        type="text"
        isDisabled={isPending}
        value={tipoComportamento}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTipoComportamento(e.target.value)
        }
      />
      <Textarea
        isRequired
        label="Comentário do Comportamento"
        type="text"
        isDisabled={isPending}
        value={dataComportamento}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setDataComportamento(e.target.value)
        }
      />
      <Input
        isRequired
        label="Sua carteira"
        isDisabled={isPending}
        value={wallet}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setWallet(e.target.value)
        }
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
      {hashToken && (
        <span>
          Transação enviada com sucesso:{" "}
          <a
            href={`https://sepolia.etherscan.io/tx/${hashToken}`}
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
