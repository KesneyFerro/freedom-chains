"use client";

import { abiData } from "@/app/abis/abi";
import { abiData2 } from "@/app/abis/tokenAbi";
import { config } from "@/config";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { switchChain } from "wagmi/actions";
import { scrollSepolia, sepolia } from "wagmi/chains";

export default function AddComportamento({}) {
  const {
    data: hash,
    error,
    isPending,
    writeContract,
    isSuccess,
  } = useWriteContract();
  // const {
  //   data: hashToken,
  //   error: errorToken,
  //   isPending: isPendingToken,
  //   writeContract: writeContractToken,
  // } = useWriteContract();
  const [hashToken, setHashToken] = useState(null);

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
    // await switchChain(config, { chainId: sepolia.id });
    // await writeContractToken({
    //   address: "0x52C9fa84a27958f651BC54b0e0b574E8F5a9FA80",
    //   functionName: "mint",
    //   chainId: 11155111,
    //   abi: abiData2,
    //   args: [wallet, BigInt(1 * 10 ** 18)],
    // });
  };

  useEffect(() => {
    if (isSuccess) {
      const data = {
        walletId: "e4924f49-e241-45cd-9ed5-565768e9375c",
        contractAddress: "0x52C9fa84a27958f651BC54b0e0b574E8F5a9FA80",
        operations: [
          {
            functionSignature: "mint(address,uint256)",
            argumentsValues: [wallet, 1000000000000000000],
            messageValue: 0,
          },
        ],
      };

      const options = {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiMzRkNDBjYzMtZWJkMC00ZTdjLTljMjYtMDg4OTRhZGNmMDAxIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDkzMjEyNn0.JvQKzphDUdCnBN-w1JRFIsmjlPlhb558Pugh2chmZElCGMjZyPhipUh7S1LsaMyd7KALuQeMobwtoZjMq-QydtTfviBom8tet92TuN5v4rkNEaC7-s_3ggBd_-JmdXJNrp_82WQvpSohFDjoPnJCKpHr9PAklx-6muWPW32JN27K-E0A5Wik63TUk8b0jYEmiz59_shY-GzRTkg02GzHRZNQD2vZtG-xBRyJklOCRQmGZm6JmD4i2VCGVfAS0kDFaNjN8qOJOrplBJN_J7o96uD5W2822EcSOxTgQjvD6MktFrk_sdmQnN27vyvBXlegT5t73n5GkIoBrCKzFppYSvSTHQTgF_GQ6vhbcee_guTNR0eNnS-wfYOQxiSXrxOk3idZpSNZIiR2t31w3d4dA0_XKbayUkMTCzYM-OeY308dUP41sGoW9O-JJrkfmKXSgPdiD0rC06Zr0MJv-3Aw8O99o91SlBoT4riL4MI5rxYMSjzrtvrM42JxidJvHbDmFDSKd6n4l6IbTH2SjAJxSrK6pijgpcwLgmWRkpIwfsH5yBwu2uLiCGgJ6hBoRxZN9ngD_uMBByz-aKwB1ZeMlHjDuOwrpWcRHSFIIESSz5buCll-WUDemhNbwsyW-JkDipHv2ssYrBiycAWyA4gD5hbHSlUAXJdEOl1jkb9Jx9Y",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      fetch("https://protocol-sandbox.lumx.io/v2/transactions/custom", options)
        .then((response) => response.json())
        .then((response: any) => {
          console.log(response);
          setHashToken(response.transactionHash || "null");
        })
        .catch((err) => console.error(err));
    }
  }, [isSuccess, wallet]);
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
