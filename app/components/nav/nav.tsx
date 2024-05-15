/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { PiBell, PiGear, PiList } from "react-icons/pi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Navbar() {
  return (
    <nav className="flex w-full gap-x-5 items-center justify-between py-7 pb-5">
      <Link href="/">
        <img src="/logo.png" className="max-h-[30px]" alt="logo" />
      </Link>

      <div className="flex gap-x-2 items-center">
        <Link href={"/detento/administrar?page=2"}>
          <AiOutlineShopping className="text-3xl text-black" />
        </Link>
        {/* <Link href={"/detento/administrar"}>
          <HiOutlineMenu className="text-3xl text-black" />
        </Link> */}
        <Dropdown>
          <DropdownTrigger>
            <Button className="py-2" variant="light">
              <HiOutlineMenu className="text-3xl text-black" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem href="/detento/administrar?page=0" key="new">
              Adicionar Detento
            </DropdownItem>
            <DropdownItem href="/detento/administrar?page=1" key="copy">
              Adicionar Comportamento
            </DropdownItem>
            <DropdownItem key="edit" href="/penitenciaria">
              Criar Penitenciaria
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
