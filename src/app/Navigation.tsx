'use client'
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "./Button";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

export default function Navigation() {
    return (
        <nav className="text-body-dark-emphasized flex items-center justify-between text-[18px]">
            <section className="flex items-center gap-5">
                <Image src="/Logomarca.svg" alt="Logomarca" width={140} height={80} />
                <ul className="sm:flex gap-2 hidden">
                    <li>Início</li>
                    <li>Planos</li>
                    <li>Sobre</li>
                </ul>
            </section>
            
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button>
                        <MenuIcon className="sm:hidden" fontSize="large" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <div className="origin-top-right absolute right-0 mt-2 w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <Menu.Items className="py-1">
                            <div className="p-4 rounded bg-gray flex flex-col items-start gap-3">
                                <Menu.Item>
                                    <button>
                                        Início
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button>
                                        Planos
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button>
                                        Sobre
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </div>
                </Transition>
            </Menu>

            <Button className="hidden sm:block" text="Entrar" />
        </nav>
    )
}