import { abiDataNFT } from "@/app/abis/nftToken";
import { abiData2 } from "@/app/abis/tokenAbi";
import { config } from "@/config";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { sepolia } from "viem/chains";
import Confetti from "react-confetti";
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { switchChain } from "wagmi/actions";

export default function TokenShop() {
  const [tokens, setTokens] = useState(0);
  // const [transactionHash, setTransactionHash] = useState("");

  const { address } = useAccount();

  const { data: tokensBalance } = useBalance({
    query: {
      refetchInterval: 500,
    },
    address: address,
    token: "0x52C9fa84a27958f651BC54b0e0b574E8F5a9FA80",
    chainId: 11155111,
    // config: config,
  });

  useEffect(() => {
    if (tokensBalance) {
      console.log(tokensBalance);
      setTokens(parseFloat(tokensBalance?.formatted) || 0);
    }
  }, [tokensBalance, tokens]);

  const {
    data: hashToken,
    error,
    isPending,
    writeContract,
  } = useWriteContract();
  const {
    data: hashNFT,
    error: errorNFT,
    isPending: isPendingNFT,
    writeContract: writeContractNFT,
  } = useWriteContract();

  const gastarToken = async () => {
    if (tokens < 300) {
      return;
    }

    await switchChain(config, { chainId: sepolia.id });
    console.log("gastarToken");
    await writeContract({
      abi: abiData2,
      address: "0x52C9fa84a27958f651BC54b0e0b574E8F5a9FA80",
      functionName: "burn",
      chainId: 11155111,
      args: [BigInt(300 * 10 ** 18)],
    });
    if (error) {
      console.log(error);
      return;
    }
    console.log("hashToken", hashToken);
    await writeContractNFT({
      abi: abiDataNFT,
      address: "0x29e07AF57BCA15C2555e08230d1fdaFF94887357",
      functionName: "safeMint",
      chainId: 11155111,
      args: [address, tokensBalance?.value],
    });
    if (errorNFT) {
      console.log(errorNFT);
      return;
    }
    console.log(hashNFT);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex flex-col mt-5 justify-center items-center"
    >
      <div className="w-full max-w-[400px] flex justify-center flex-col items-center rounded-lg drop-shadow-lg bg-white p-3">
        <span className="uppercase font-light text-center text-[#7c1c8b]">
          O seu saldo é de:
        </span>
        <h3 className="mt-2 text-2xl text-center text-[#7c1c8b] font-bold">
          {tokens || "---"} Tokens
        </h3>
      </div>

      <section className="flex flex-col mt-5 w-full gap-y-5">
        <div className="px-5 py-5 flex items-center justify-between rounded-lg bg-gray-100">
          <div className="flex flex-col gap-y-1">
            <h3 className=" text-[#7c1c8b] font-bold text-lg">Dayoff</h3>
            <span className="text-gray-400">300 Tokens</span>
          </div>

          <button
            onClick={() => gastarToken()}
            disabled={isPending}
            className="bg-[#7c1c8b] transition-all disabled:bg-[#3d2541] disabled:text-white/50 hover:bg-[#51195a] text-white px-4 py-2 rounded-lg"
          >
            {isPending ? "Aguarde..." : "Comprar"}
          </button>
        </div>
      </section>
      {hashNFT && (
        <>
          <Confetti />
          <span className="mt-5">
            Transação enviada com sucesso:{" "}
            <a
              href={`https://sepolia.etherscan.io/tx/${hashNFT}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Ver transação.
            </a>{" "}
            Você recebeu 1 NFT como forma de comprovar a transação.
          </span>
        </>
      )}
    </motion.section>
  );
}
